import DatePicker from "react-datepicker";

function set() {
  return (
    <div className="container">
      <div className="field is-horizontal is-narrow is-grouped">
        <div className="control">
          <input
            className="input is-secondary is-expanded"
            type="text"
            placeholder="Reps"
          />
        </div>
        <div className="control">
          <input
            className="input is-secondary"
            type="text"
            placeholder="Weight"
          />
        </div>
      </div>
    </div>
  );
}

function exercise() {
  return (
    <div className="container">
      <div className="control">
        <input
          className="input is-secondary"
          type="text"
          placeholder="Exercise"
        />
      </div>
      <button className="button is-primary is-fullwidth mt-5">Add Set</button>
    </div>
  );
}
export default function NewWorkoutRoute() {
  return (
    <div className="container m-3">
      <div className="notification is-secondary">
        <h1 className="title">New Workout</h1>
      </div>

      <form>
        <div>
          <label>
            <DatePicker
              className="title is-4 input is-secondary"
              selected={new Date()}
              onChange={(date) => console.log(date)}
            />
          </label>
        </div>
      </form>
      <div className="mt-3">{exercise()}</div>

      <button className="button is-dark is-fullwidth mt-5">Add Exercise</button>
    </div>
  );
}
