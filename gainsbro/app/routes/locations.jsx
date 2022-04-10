import { useLoaderData, Link, useSearchParams } from "remix";
import { startCase, groupBy, mapValues } from "lodash";
import { useState } from "react";
import { getLocations, addLocation } from "~/service/location.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import LocationPie from "../components/LocationPie";
import { getWorkoutsForUser } from "../service/workouts";
import dayjs from "dayjs";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");

  const lastMonthStart = dayjs()
    .month(dayjs().month())
    .startOf("month")
    .startOf("day");
  const lastMonthEnd = dayjs()
    .month(dayjs().month())
    .endOf("month")
    .endOf("day");
  const locations = await getLocations(user);
  const workoutsForUser = await getWorkoutsForUser(
    user,
    lastMonthStart,
    lastMonthEnd
  );

  return [
    locations,
    mapValues(groupBy(workoutsForUser, "location_name"), (e) => e.length),
  ];
};

export let action = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};

export default function ManageLocationsRoute() {
  const [locations, workoutsForUser] = useLoaderData();
  const [user, setUser] = useState();
  const [searchParams] = useSearchParams();

  return (
    <UserAuthorisedComponent setUser={setUser}>
      <div className="container">
        <div className="m-5">
          <h4 className="title is-3">Saved Locations</h4>
          <div className="m-5 p-3">
            <h4 className="title is-5">
              Locations Breakdown in {dayjs().format("MMMM")}
            </h4>
            <LocationPie locations={workoutsForUser} />
          </div>

          {locations.map((e) => (
            <Link
              key={e.id}
              to={`./${e.id}/?user=${searchParams.get("user")}`}
              className="box"
            >
              <div>
                <div className="title is-6">{startCase(e.name)}</div>
              </div>
            </Link>
          ))}
          <div className="mt-5">
            <b>Add Location</b>
            <hr class="dropdown-divider" />
            <form method="post" className="level is-mobile">
              <input className="input is-info" name="locationName"></input>
              <input
                className="input is-info"
                name="userId"
                type="hidden"
                value={searchParams.get("user")}
              ></input>
              <button className="button is-light is-info ml-1" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </UserAuthorisedComponent>
  );
}
