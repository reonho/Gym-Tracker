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

  const twoMonthsAgo = dayjs().add(-60, "day").startOf("day");
  const today = dayjs().endOf("day");
  console.log(twoMonthsAgo, today);
  const locations = await getLocations(user);
  const workoutsForUser = await getWorkoutsForUser(user, twoMonthsAgo, today);

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
    <UserAuthorisedComponent
      setUser={setUser}
      idPredicate={(id) => id === searchParams.get("user")}
    >
      <div className="container">
        <div className="m-5">
          <h4 className="title is-3">Locations</h4>
          {workoutsForUser && (
            <>
              <h4 className="title is-5">Breakdown last 60 days</h4>
              <div className="container" style={{ maxWidth: "50%" }}>
                <LocationPie locations={workoutsForUser} />
              </div>
            </>
          )}

          <div className="title is-5">Add Location</div>
          <form method="post" className="level is-mobile">
            <input className="input is-info" name="locationName"></input>
            <input
              className="input is-info"
              name="userId"
              type="hidden"
              value={searchParams.get("user")}
            ></input>
            <button className="button is-light is-info ml-1" type="submit">
              Add
            </button>
          </form>

          <div className="title is-5 ">Saved Locations</div>
          {locations.map((e) => (
            <Link
              key={e.id}
              to={`./${e.id}/?user=${searchParams.get("user")}`}
              className="box mb-3"
            >
              <div>
                <div className="title is-6">{startCase(e.name)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </UserAuthorisedComponent>
  );
}
