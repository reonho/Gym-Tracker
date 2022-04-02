import { useSubmit, useLoaderData, Link, useSearchParams } from "remix";
import { startCase } from "lodash";
import { useState } from "react";
import { getLocations, addLocation } from "~/service/location.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);

  return locations;
};

export let action = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
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
          <h4 className="title is-3">Saved Locations</h4>
          {locations.map((e) => (
            <Link
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
