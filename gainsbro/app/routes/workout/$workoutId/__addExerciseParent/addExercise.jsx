import { useLoaderData, Link, useParams, redirect, useFetcher } from "remix";
import { postExercisetoWorkout } from "~/service/workouts.js";
import { startCase, groupBy, mapValues } from "lodash";
import { getExercises } from "~/service/exercises";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let muscle_group = url.searchParams.get("muscle_group");
  const exercises = await getExercises(muscle_group);

  return exercises;
};

export let action = async ({ params, request }) => {
  const { workoutId, user } = params;

  const form = await request.formData();
  let exercise = form.get("exercise");

  await postExercisetoWorkout({
    workout_id: workoutId,
    exercise_id: exercise,
  });
  return redirect(`/workout/${workoutId}/currentExercises`);
};

export default function AddExerciseRoute() {
  const { workoutId } = useParams();
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const exercises = useLoaderData();
  const fetcher = useFetcher();
  const exNameToIdMap = mapValues(
    groupBy(
      exercises,
      (exercise) =>
        `${startCase(exercise.name)} ${
          exercise?.variant ? `(${startCase(exercise.variant)})` : ""
        }`
    ),
    (e) => e[0].id
  );

  return (
    <div>
      <Typeahead
        id="exercise_options"
        onChange={setSelected}
        options={exercises.map(
          (exercise) =>
            `${startCase(exercise.name)} ${
              exercise?.variant ? `(${startCase(exercise.variant)})` : ""
            }`
        )}
        placeholder="Choose Exercise"
        selected={selected}
      />
      <div className="level is-mobile mt-3">
        <div className="level-left">
          <div className="level-item">
            <button
              onClick={() => {
                setDisabled(true);
                fetcher.submit(
                  { exercise: exNameToIdMap[selected] },
                  { method: "POST" }
                );
              }}
              className="button is-small is-dark "
              disabled={!selected || disabled}
            >
              Add
            </button>
          </div>
          <div className="level-item">
            <Link to={`/workout/${workoutId}/currentExercises`}>
              <button className="button is-small is-light">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
