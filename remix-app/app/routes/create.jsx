import { Outlet, Form, useSubmit, useLoaderData, redirect } from "remix";
import { padStart, startCase } from "lodash";
import { createWorkout } from "~/workouts.js";
import { useState } from "react";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";

export let action = async ({ request }) => {
  const form = await request.formData();
  const userId = form.get("userId");
  const name = form.get("name");
  const datetime = new Date(`${form.get("datetime")}:00`);
  const location = form.get("location");
  const workoutObject = await createWorkout({
    name,
    datetime,
    location,
    userId,
  });
  return redirect(`/workout/${workoutObject.id}/currentExercises`);
};

export let loader = () => {
  const locations = ["anytime_orchard", "anytime_bukit_batok", "madeira_gym"];
  return { locations };
};

export default function CreateWorkoutRoute() {
  const { locations } = useLoaderData();
  const [user, setUser] = useState();

  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = padStart(date.getMonth() + 1, 2, 0);
    var day = padStart(date.getDate(), 2, 0);
    var hr = padStart(date.getHours(), 2, 0);
    var min = padStart(date.getMinutes(), 2, 0);
    return `${year}-${month}-${day}T${hr}:${min}`;
  };
  const submit = useSubmit();
  return (
    <UserAuthorisedComponent setUser={setUser}>
      <div className="container m-3">
        <div>
          <h4 className="title is-4">Log Workout</h4>
          <Form
            method="POST"
            onSubmit={async (event) => {
              event.preventDefault();
              const uid = user.uid;
              const userId = document.createElement("input");
              userId.setAttribute("type", "hidden");
              userId.setAttribute("name", "userId");
              userId.setAttribute("value", uid);
              event.target.append(userId);
              submit(event.target);
            }}
          >
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Name/Description</label>
              </div>
              <div className="field-body">
                <p className="control">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Name for this workout"
                  />
                </p>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Location</label>
              </div>
              <div className="field-body ">
                <p className="control select">
                  <select name="location">
                    {locations.map((item) => (
                      <option key={item} value={item}>
                        {startCase(item)}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Date</label>
              </div>
              <div className="field-body">
                <p className="control">
                  <input
                    type="datetime-local"
                    className="input"
                    name="datetime"
                    defaultValue={getCurrentDateTime()}
                  />
                </p>
              </div>
            </div>
            <hr />
            <button className="button is-dark is-fullwidth" type="submit">
              Create New
            </button>
          </Form>
        </div>
        <Outlet />
      </div>
    </UserAuthorisedComponent>
  );
}
