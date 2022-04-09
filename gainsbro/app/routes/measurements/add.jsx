import { useSubmit, useLoaderData, redirect, useSearchParams } from "remix";
import { startCase } from "lodash";
import { useState } from "react";
import { getLocations, addLocation } from "~/service/location.js";
import { getMeasurementTypes } from "~/service/measurements.js";

import UserAuthorisedComponent from "../../components/UserAuthorisedComponent";
import { Typeahead } from "react-bootstrap-typeahead";
import { getCurrentDateTime } from "~/utils/utils";
export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const metrics = await getMeasurementTypes();
  return metrics;
};

export let action = async ({ request }) => {
  return redirect("/measurements/add");
};

export default function AddMeasurementRoute() {
  const metric = useLoaderData();
  const [selectedMetric, setSelectedMetric] = useState();
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState(getCurrentDateTime());
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  return (
    <UserAuthorisedComponent setUser={setUser}>
      <div className="container">
        <div className="m-5">
          <form
            method="POST"
            onSubmit={async (event) => {
              setIsSubmitting(true);
              event.preventDefault();
              submit(
                {
                  date: date,
                  value: value,
                  metric: selectedMetric,
                  user: searchParams.getAll("user"),
                },
                { method: "POST" }
              );
            }}
          >
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Metric</label>
              </div>

              <div className="field-body">
                <div className="control">
                  <Typeahead
                    id="metric"
                    onChange={setSelectedMetric}
                    options={metric.map((m) => startCase(m["measurement"]))}
                    placeholder="Choose Measurement"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Value</label>
              </div>
              <div className="field-body">
                <p className="control">
                  <input
                    className="input"
                    name="metricValue"
                    type="number"
                    step="any"
                    onChange={setValue}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </p>
              </div>
            </div>

            <hr className="dropdown-divider" />
            <button
              disabled={isSubmitting | !(value && selectedMetric && date)}
              className="button is-light is-info ml-1"
              type="submit"
            >
              Log Measurement
            </button>
          </form>
        </div>
      </div>
    </UserAuthorisedComponent>
  );
}
