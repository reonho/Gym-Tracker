import { useLoaderData, Link, useParams, redirect } from "remix";
import { postExercisetoWorkout } from "~/workouts.js";
import { startCase } from "lodash";
import { getExercises } from "~/exercises";

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
    exercise_name: exercise,
  });
  return redirect("./currentExercises");
};

export default function AddExerciseRoute() {
  const { workoutId, user } = useParams();
  const exercises = useLoaderData();
  return (
    <div>
      <form method="post">
        <div className="select is-fullwidth">
          <select htmlFor="exercise" name="exercise">
            {exercises.map((exercise) => {
              return (
                <option key={exercise} value={exercise.name}>
                  {`${startCase(exercise.name)} ${
                    exercise?.variant ? `(${startCase(exercise.variant)})` : ""
                  }`}
                </option>
              );
            })}
          </select>

          <div className="level is-mobile mt-3">
            <div className="level-left">
              <div className="level-item">
                <button type="submit" className="button is-dark ">
                  Add
                </button>
              </div>
              <div className="level-item">
                <Link to={`/${user}/new/${workoutId}/currentExercises`}>
                  <button className="button  is-light">Cancel</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
