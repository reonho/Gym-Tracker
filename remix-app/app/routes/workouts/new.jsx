import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function NewWorkoutRoute() {
  return (
    <div className="container m-3">
      <div className="notification is-secondary">
        <h1 className="title">New Workout</h1>
      </div>

      <form method="post">
        <DatePicker
          selected={new Date()}
          onChange={(date) => console.log(date)}
        />
        <div>
          <label>
            Date: <input type="text" name="name" />
          </label>
        </div>
      </form>
    </div>
  );
}
