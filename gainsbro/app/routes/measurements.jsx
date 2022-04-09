import {
  useSubmit,
  useLoaderData,
  Link,
  useSearchParams,
  Outlet,
  useNavigate,
  useLocation,
} from "remix";
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

export default function MeasurementRoute() {
  const location = useLocation();
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  return (
    <UserAuthorisedComponent setUser={setUser} setUserId={setUserId}>
      <div className="container">
        <div className="m-2 mt-5">
          <h4 className="title is-3">Body Measurements</h4>
          <div className="tabs">
            <ul>
              <li
                className={
                  location.pathname === "/measurements/history"
                    ? "is-active"
                    : null
                }
              >
                <Link to={`/measurements/history?user=${userId}`}>
                  Measurement History
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/measurements/add" ? "is-active" : null
                }
              >
                <Link to={`/measurements/add?user=${userId}`}>
                  Add Measurements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </UserAuthorisedComponent>
  );
}
