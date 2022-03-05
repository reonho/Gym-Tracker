import { useLoaderData, Link, useParams, redirect, useFetcher } from "remix";
import { postExercisetoWorkout } from "~/service/workouts.js";
import { startCase } from "lodash";
import { getExercises } from "~/service/exercises";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState } from "react";

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
  const [selected, setSelected] = useState();
  const exercises = useLoaderData();
  const fetcher = useFetcher();
  return (
    <div>
      <Typeahead
        labelKey="name"
        id="exerciseSelect"
        onChange={(selected) => {
          selected.length > 0 ? setSelected(selected[0].id) : setSelected(null);
        }}
        options={exercises.map((exercise) => ({
          ...exercise,
          name: `${startCase(exercise.name)} ${
            exercise?.variant ? `(${startCase(exercise.variant)})` : ""
          }`,
        }))}
      />

      <div className="level is-mobile mt-3">
        <div className="level-left">
          <div className="level-item">
            <button
              onClick={() => {
                fetcher.submit({ exercise: selected }, { method: "POST" });
              }}
              className="button is-small is-dark "
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
