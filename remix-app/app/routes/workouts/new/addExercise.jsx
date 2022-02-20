import { useLoaderData, Link } from "remix";
import { startCase } from "lodash";

export let loader = () => {
  return [
    "bench_press",
    "bicep_extension",
    "bent_over_row",
    "tricep_extension",
  ].map((item) => startCase(item.replace("_", " ")));
};

export default function AddExercise() {
  const exercises = useLoaderData();
  return (
    <div className="tile is-child">
      <div className="continer mb-2">
        <div className="select is-dark is-fullwidth is-multiple">
          <select multiple htmlFor="exercise">
            {exercises.map((item) => {
              return <option>{item}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="tile is-child buttons">
        <Link to="/workouts/new">
          <button className="button is-dark">Add</button>
          <button className="button is-light">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
