import { Outlet, useLoaderData, Link, useParams, useFetcher } from "remix";
import lodash, { startCase, groupBy, maxBy } from "lodash";
import { useState } from "react";
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
import { motion } from "framer-motion";

export let loader = async ({ params }) => {
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = setsForWorkout?.[0]?.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = lodash(sets)
      .groupBy((s) => s.exercise_id)
      .mapValues((e) => maxBy(e, (s) => s.weight * s.repetitions))
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
      return await addSet(form);
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
  const [showDelete, setShowDelete] = useState();
  const { workoutId } = useParams();
  const fetcher = useFetcher();

  const renderExerciseForm = (exercise_name, sets) => {
    const exerciseId = sets[0]?.exercise_id;
    if (exerciseId == null) {
      return;
    }
    const exerciseSetForm = {
      workout_id: workoutId,
      exercise_name: exercise_name,
      workout_exercise_id: sets[0].workout_exercise_id,
    };

    const submitSetForm = (weight, repetitions, completed, index) =>
      fetcher.submit(
        {
          exercise_name: exercise_name,
          workout_id: workoutId,
          repetitions: repetitions,
          weight: weight,
          index: index,
          completed: completed,
          type: "set",
        },
        { method: "PUT" }
      );

    const deleteFunc = (index) => {
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name: exercise_name,
          type: "set",
          index: index,
        },
        { method: "DELETE" }
      );
    };

    const submitFunc = () => {
      fetcher.submit(exerciseSetForm, { method: "POST" });
    };

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
          <hr className="mb-2 mt-2" />

          {sets.map((set) => (
            <SetInput
              key={set.set_id}
              index={set.set_id}
              weight={set.weight}
              completed={set.completed}
              repetitions={set.repetitions}
              deleteFunc={() => deleteFunc(set.set_id)}
              submitFunc={submitSetForm}
            />
          ))}
          {fetcher.submission &&
          fetcher.submission.formData.get("exercise_name") === exercise_name &&
          fetcher.submission.method === "POST" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SetInput
                weight={fetcher.submission.formData.get("weight")}
                repetitions={fetcher.submission.formData.get("repetitions")}
                index={fetcher.submission.formData.get("index")}
                deleteFunc={() =>
                  deleteFunc(fetcher.submission.formData.get("index"))
                }
                submitFunc={submitSetForm}
              ></SetInput>
            </motion.div>
          ) : null}

          <buttons className="level is-mobile mt-5">
            <div style={{ width: "85%" }}>
              <button
                disabled={
                  fetcher.submission &&
                  fetcher.submission.formData.get("exercise_name") ===
                    exercise_name &&
                  fetcher.submission.method === "POST"
                }
                onClick={() => {
                  submitFunc();
                }}
                className="button is-fullwidth is-black is-small tile"
              >
                + Set
              </button>
            </div>

            <div
              className={`${
                showDelete?.[exerciseId] ?? false ? "is-active" : ""
              } dropdown is-right`}
            >
              <div className="dropdown-trigger">
                <button
                  className="button is-light is-small ml-1"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu6"
                  onClick={() =>
                    setShowDelete((e) => ({
                      ...e,
                      [exerciseId]: !(e?.[exerciseId] ?? false),
                    }))
                  }
                >
                  <MdOutlineMenu />
                </button>
              </div>
              <div
                className="dropdown-menu p-0 m-0"
                id="dropdown-menu6"
                role="menu"
              >
                <div className="dropdown-content p-0 mt-1">
                  <div className="dropdown-item p-2 m-0">
                    <button
                      className="button is-light is-danger is-small is-fullwidth m-0 p-0"
                      onClick={() =>
                        fetcher.submit(
                          { ...exerciseSetForm, type: "exercise" },
                          { method: "DELETE" }
                        )
                      }
                    >
                      Delete Exercise
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
