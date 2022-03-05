import { Outlet, Form, useSubmit, useLoaderData, redirect } from "remix";
import { padStart, startCase } from "lodash";
import { createWorkout } from "~/service/workouts.js";
import { useState } from "react";
import { getLocations } from "~/service/location.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import dayjs from "dayjs";

export let action = async ({ request }) => {
  const form = await request.formData();
  const userId = form.get("userId");
  const name =
    form.get("name") === ""
      ? `${dayjs().format("dddd")} workout`
      : form.get("name");
  const datetime = new Date(`${form.get("datetime")}:00`);
  let location = form.get("location");
  location = location?.toLowerCase()?.replaceAll(" ", "_") ?? null;
  const workoutObjectId = await createWorkout({
    name,
    datetime,
    location,
    userId,
  });

  return redirect(`/workout/${workoutObjectId}/currentExercises`);
};

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};

export default function CreateWorkoutRoute() {
  const locations = useLoaderData();
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
      <div className="container">
        <div className="m-5">
          <h4 className="title is-3">New Workout</h4>
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
                <label className="label">Name/Desc</label>
              </div>
              <div className="field-body">
                <p className="control">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder={`${dayjs().format("dddd")} workout`}
                  />
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
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Location</label>
              </div>
              <div className="field-body ">
                <p className="control">
                  <input
                    type="text"
                    autocomplete="off"
                    className="input select "
                    list="locations"
                    name="location"
                  />
                  <datalist id="locations" className="">
                    {locations.map((item) => (
                      <option key={item} value={startCase(item.name)} />
                    ))}
                  </datalist>
                </p>
              </div>
            </div>
            <hr />
            <button className="button is-dark " type="submit">
              Create New
            </button>
          </Form>
        </div>
        <Outlet />
      </div>
    </UserAuthorisedComponent>
  );
}
