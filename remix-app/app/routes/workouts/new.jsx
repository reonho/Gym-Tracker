import DatePicker from "react-datepicker";
import { Outlet, Link, useParams } from "remix";

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

export default function NewWorkoutRoute() {
  return (
    <div className="container m-3">
      <div className="">
        <div className="notification is-secondary">
          {/* <h1 className="title">New Workout</h1> */}
        </div>


        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Date</label>
          </div>
          <DatePicker
            className="input is-secondary"
            selected={new Date()}
            onChange={(date) => console.log(date)}
          />
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <p class="control">
              <input className="input" />
            </p>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Location</label>
          </div>
          <div class="field-body">
            <p class="control">
              <input className="input" />
            </p>
          </div>
        </div>

        <hr />

        <Outlet />
        <div className="tile is-child ">
          <Link to="/workouts/new/addExercise">
            <button className="button is-dark is-fullwidth ">Create New</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
