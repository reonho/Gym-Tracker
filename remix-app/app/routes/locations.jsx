import {
  Outlet,
  Form,
  useSubmit,
  useLoaderData,
  redirect,
  Link,
  useSearchParams,
} from "remix";
import { startCase, groupBy, mapValues } from "lodash";
import { createWorkout } from "~/service/workouts.js";
import { useState } from "react";
import { getLocations, getWorkoutsPerLocation } from "~/service/location.js";
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
  location = location?.toLowerCase()?.replace(" ", "_") ?? null;
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

export default function ManageLocationsRoute() {
  const locations = useLoaderData();
  const [user, setUser] = useState();
  const [searchParams] = useSearchParams();

  const submit = useSubmit();
  return (
    <UserAuthorisedComponent setUser={setUser}>
      <div className="container">
        <div className="m-5">
          <h4 className="title is-4">Manage Saved Locations</h4>
          {locations.map((e) => (
            <Link
              to={`./${e.id}/?user=${searchParams.get("user")}`}
              className="box"
            >
              <div>
                <div className="title is-6 mb-1">{startCase(e.name)}</div>
              </div>
            </Link>
          ))}
          <div className="mt-4">
            {locations.length === 0 && "No locations yet"}
          </div>
        </div>
        <Outlet />
      </div>
    </UserAuthorisedComponent>
  );
}
