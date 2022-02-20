// import { getExercises } from "~/exercises.js";
import { Link, useLoaderData, Outlet } from "remix";

export let loader = () => {
  return [{'name': 'bench press'}]
  // return getExercises();
};

export default function Workouts() {
  let exercises = useLoaderData();
  return (
    <div className="container m-3">
      <div className="notification is-secondary">
        {/* <h3 className="title is-3">Workouts</h3> */}
      </div>

      <Outlet/>
      {/* <a href="/workouts/new">
        <button className="button is-dark is-fullwidth">New Workout</button>
      </a> */}
    </div>
  );
}
