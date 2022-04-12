import { Outlet, Form, useSubmit, useLoaderData, redirect } from "remix";
import { startCase } from "lodash";
import { createWorkout } from "~/service/workouts.js";
import { useState } from "react";
import { getLocations } from "~/service/location.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { getCurrentDateTime } from "~/utils/utils";
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export let action = async ({ request }) => {
  const form = await request.formData();
  let userId = form.get("userId");
  let name = form.get("name");
  let datetime = form.get("datetime");
  let location = form.get("location");
  location = location?.toLowerCase()?.replace(/ /g, "_") ?? null;
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
  const [hasLocation, setHasLocation] = useState();

  const submit = useSubmit();
  return (
    <UserAuthorisedComponent setUser={setUser}>
      <motion.div
        initial={{ opacity: 0.2, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full md:col-span-3 sm:overflow-auto relative z-0"
      >
        <div className="container">
          <div className="m-2">
            <h4 className="title is-3 mt-5">Create New Workout</h4>
            <Form
              method="POST"
              onSubmit={async (event) => {
                event.preventDefault();
                const uid = user.uid;
                const userId = document.createElement("input");
                userId.setAttribute("type", "hidden");
                userId.setAttribute("name", "userId");
                userId.setAttribute("value", uid);

                const datetime = document.createElement("input");
                datetime.setAttribute("type", "hidden");
                datetime.setAttribute("name", "datetime");
                datetime.setAttribute(
                  "value",
                  dayjs(`${event.target.datetimeLocal.value}:00`).utc()
                );

                const name = document.createElement("input");
                name.setAttribute("type", "hidden");
                name.setAttribute("name", "name");
                name.setAttribute(
                  "value",
                  event.target.namePlaceholder.value === ""
                    ? `${dayjs(getCurrentDateTime()).format("dddd")} workout`
                    : event.target.namePlaceholder.value
                );

                event.target.append(userId);
                event.target.append(datetime);
                event.target.append(name);

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
                      name="namePlaceholder"
                      type="text"
                      placeholder={`${dayjs(getCurrentDateTime()).format(
                        "dddd"
                      )} workout`}
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
                      name="datetimeLocal"
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
                      onChange={(e) => {
                        !e.target.value
                          ? setHasLocation(false)
                          : setHasLocation(true);
                      }}
                      type="text"
                      autoComplete="off"
                      className={`input select `}
                      list="locations"
                      name="location"
                    />
                    <datalist id="locations" className="">
                      {locations.map((item) => (
                        <option key={item.name} value={startCase(item.name)} />
                      ))}
                    </datalist>
                  </p>
                </div>
              </div>
              <hr />
              <button
                className="button is-dark "
                type="submit"
                disabled={!hasLocation}
              >
                Create New
              </button>
            </Form>
          </div>
          <Outlet />
        </div>
      </motion.div>
    </UserAuthorisedComponent>
  );
}
