import { Outlet, useLoaderData, Link, useParams, useFetcher } from "remix";
import lodash, { startCase, groupBy, maxBy } from "lodash";
import {
  updateSet,
  addSet,
  deleteSet,
  getBestSetPerWorkoutExercise,
} from "~/service/sets.js";
import {
  deleteExerciseFromWorkout,
  getExercisesForWorkout,
} from "~/service/workouts.js";
import { MdOutlineMenu } from "react-icons/md";
import SetInput from "~/components/SetInput";

export let loader = async ({ params }) => {
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = setsForWorkout?.[0]?.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = lodash(sets)
      .groupBy((s) => s.exercise_id)
      .mapValues((e) => maxBy(e, (s) => s.weight))
      .value();
  }

  const exerciseSets = groupBy(
    setsForWorkout,
    (set) =>
      `${startCase(set.exercise_name)} ${
        set.variant ? `(${startCase(set.variant)})` : ""
      }`
  );

  return { exerciseSets, bestSetByExercise };
};

export let action = async ({ request }) => {
  const form = await request.formData();
  switch (request.method) {
    case "PUT":
      if (form.get("type") === "set") {
        await updateSet(form);
        break;
      }
    case "POST":
      await addSet(form);
      break;
    case "DELETE":
      if (form.get("type") === "exercise") {
        await deleteExerciseFromWorkout(form);
        break;
      }
      if (form.get("type") === "set") {
        await deleteSet(form);
        break;
      }
  }
  return form;
};

export default function CurrentExercisesRoute() {
  const { exerciseSets, bestSetByExercise } = useLoaderData();
  const { workoutId } = useParams();
  const fetcher = useFetcher();

  const renderExerciseForm = (exercise_name, sets) => {
    const exerciseId = sets[0].exercise_id;
    const exerciseSetForm = {
      workout_id: workoutId,
      exercise_name: exercise_name,
      workout_exercise_id: sets[0].workout_exercise_id,
    };

    const submitSetForm = (weight, repetitions, completed, index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          repetitions: repetitions,
          weight: weight,
          index: index,
          completed: completed,
          type: "set",
        },
        { method: "PUT" }
      );

    const deleteSetForm = (index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name: exercise_name,
          type: "set",
          index: index,
        },
        { method: "DELETE" }
      );
    const previousBestSet = bestSetByExercise[exerciseId];
    return (
      <>
        <div className="box mb-3">
          <div className="title is-5 mb-1">{exercise_name} </div>

          {previousBestSet && (
            <p>
              <i> PB:</i> {previousBestSet.weight} x{" "}
              {previousBestSet.repetitions} | {previousBestSet.max_volume}
            </p>
          )}
          <hr className="mb-4 mt-3" />

          {sets.map((set) => (
            <SetInput
              key={set.set_id}
              index={set.set_id}
              weight={set.weight}
              completed={set.completed}
              repetitions={set.repetitions}
              deleteFunc={() => deleteSetForm(set.set_id)}
              submitFunc={submitSetForm}
            />
          ))}
          <buttons className="level is-mobile mt-5">
            <div style={{ width: "85%" }}>
              <button
                onClick={() =>
                  fetcher.submit(exerciseSetForm, { method: "POST" })
                }
                className="button is-fullwidth is-black is-small tile"
              >
                + Set
              </button>
            </div>

            <button
              onClick={() =>
                fetcher.submit(
                  { ...exerciseSetForm, type: "exercise" },
                  { method: "DELETE" }
                )
              }
              className="button is-light is-danger is-small ml-1"
            >
              Delete
            </button>
          </buttons>
        </div>
      </>
    );
  };

  return (
    <>
      {Object.entries(exerciseSets).map(([exercise_name, sets], exIndex) => (
        <div key={exIndex}>{renderExerciseForm(exercise_name, sets)}</div>
      ))}
      <Outlet />
      <Link to={`/workout/${workoutId}/addExercise`}>
        <button className="mt-5 button is-black is-fullwidth is-small">
          + Exercise
        </button>
      </Link>
    </>
  );
}
