import {
  Outlet,
  useLoaderData,
  Link,
  useParams,
  useFetcher,
  useNavigate,
} from "remix";
import { startCase } from "lodash";
import { updateSet, addSet, deleteSet } from "~/sets.js";
import { getWorkout, deleteExerciseFromWorkout } from "~/workouts.js";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import SetInput from "~/components/SetInput";
export let loader = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};

export let action = async ({ request }) => {
  const form = await request.formData();
  switch (request.method) {
    case "PUT":
      await updateSet(form);
      break;
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
  const workout = useLoaderData();
  const exercises = workout.exercises;
  const { workoutId } = useParams();
  const fetcher = useFetcher();

  const renderExerciseForm = (exercise) => {
    const exerciseSetForm = {
      workout_id: workoutId,
      exercise_name: exercise.name,
    };

    const submitSetForm = (weight, repetitions, completed, index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name: exercise.name,
          repetitions: repetitions,
          weight: weight,
          index: index,
          completed: completed,
        },
        { method: "PUT" }
      );

    const deleteSetForm = (index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name: exercise.name,
          type: "set",
          index: index,
        },
        { method: "DELETE" }
      );

    return (
      <>
        <div className="box mb-3">
          <div className="title is-5 mb-0">{startCase(exercise.name)}</div>
          <hr className="mb-4 mt-3" />

          {exercise.sets.map((set) => (
            <SetInput
              key={set.id}
              index={set.id}
              weight={set.weight}
              completed={set.completed}
              repetitions={set.repetitions}
              deleteFunc={() => deleteSetForm(set.id)}
              submitFunc={submitSetForm}
            />
          ))}
          <div className="level is-mobile mt-5">
            <div style={{ width: "85%" }}>
              <button
                onClick={() =>
                  fetcher.submit(exerciseSetForm, { method: "POST" })
                }
                className="button is-fullwidth is-black tile"
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
              className="button is-light  ml-2"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {exercises.map((exercise, exIndex) => (
        <div key={exIndex}>{renderExerciseForm(exercise)}</div>
      ))}
      <Outlet />
      <Link to={`/workout/${workoutId}/addExercise`}>
        <button className="mt-5 button is-black is-fullwidth">
          + Exercise
        </button>
      </Link>
    </>
  );
}
