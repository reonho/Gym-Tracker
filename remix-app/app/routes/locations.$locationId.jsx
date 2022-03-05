import { useParams, useLoaderData, useFetcher, redirect } from "remix";
import { startCase, groupBy, mapValues } from "lodash";
import {
  getWorkoutsPerLocation,
  deleteLocation,
  renameLocation,
} from "~/service/location";
import { useState } from "react";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const workoutsAtLocation = await getWorkoutsPerLocation(user);

  const getNameFromId = mapValues(
    groupBy(workoutsAtLocation, (e) => e.id),
    (e) => e[0]?.name
  );
  const workoutsPerLocation = mapValues(
    groupBy(workoutsAtLocation, (e) => e.id),
    (e) => e[0]?.count ?? 0
  );
  return [workoutsPerLocation, getNameFromId];
};

export let action = async ({ request }) => {
  const form = await request.formData();
  if (request.method === "PUT") {
    const locationId = form.get("locationId");
    const locationName = form.get("locationName");

    await renameLocation(
      locationId,
      locationName.replaceAll(" ", "_").toLowerCase()
    );
  } else if (request.method === "DELETE") {
    // DELETE
    const deleted = await deleteLocation(form.get("locationId"));
    if (deleted !== null) {
      return redirect("/");
    }
  }
  return "Success";
};

export default function LocationRoute() {
  const { locationId } = useParams();
  const [workoutsPerLocation, getNameFromId] = useLoaderData();
  const fetcher = useFetcher();
  const [showInput, setShowInput] = useState(false);
  const [renameInput, setRenameInput] = useState(
    startCase(getNameFromId["" + locationId] ?? null)
  );

  return (
    <>
      <div className="m-3 container box">
        <div className="title is-5 mb-1">
          {startCase(getNameFromId["" + locationId])}
        </div>
        <i>{getNameFromId[locationId]}</i>
        <div className="mt-2">
          Number of workouts: {workoutsPerLocation["" + locationId] ?? 0}
        </div>
        <hr className="mt-2" />
        {showInput && (
          <div className="level-item">
            <input
              className="input is-small is-info"
              value={renameInput}
              onChange={(e) => setRenameInput(e.target.value)}
            ></input>
            <div
              className="button is-small is-light is-info ml-1"
              onClick={() => {
                fetcher.submit(
                  { locationId: locationId, locationName: renameInput },
                  { method: "PUT" }
                );
                setShowInput(false);
              }}
            >
              Submit
            </div>
          </div>
        )}
        {!showInput && (
          <div className="buttons level-right">
            <div
              className="button is-small is-light is-info"
              onClick={() => setShowInput((prev) => !prev)}
            >
              Rename
            </div>

            {!workoutsPerLocation["" + locationId] && (
              <div
                className="button is-small is-light is-danger"
                onClick={() =>
                  fetcher.submit(
                    { locationId: locationId },
                    { method: "DELETE" }
                  )
                }
              >
                Delete
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
