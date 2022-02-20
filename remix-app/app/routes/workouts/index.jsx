import { getExercises } from "~/exercises.js";
import { Link, useLoaderData } from "remix";

export let loader = () => {
  return getExercises();
};

export default function Workouts() {
  let exercises = useLoaderData();
  console.log(exercises);
  return (
    <div className="container m-3">
      <div className="notification is-secondary">
        <h3 className="title is-3">Workouts</h3>
      </div>

      <a href="/workouts/new">
        <button className="button is-dark is-fullwidth">New Workout</button>
      </a>
    </div>
  );
}
