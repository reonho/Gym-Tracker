import { useSubmit, useLoaderData, redirect, useSearchParams } from "remix";
import { startCase } from "lodash";
import { useState } from "react";
import { getMeasurementTypes, addMeasurement } from "~/service/measurements.js";

import UserAuthorisedComponent from "../../components/UserAuthorisedComponent";
import { Typeahead } from "react-bootstrap-typeahead";
import { getCurrentDateTime } from "~/utils/utils";
export let loader = async ({ request }) => {
  const metrics = await getMeasurementTypes();
  return metrics;
};

export let action = async ({ request }) => {
  const form = await request.formData();
  await addMeasurement(
    form.get("metric"),
    form.get("value"),
    form.get("user"),
    form.get("date")
  );
  return redirect(
    `measurements/history?user=${form.get("user")}&measurement_id=${form.get(
      "metric"
    )}`
  );
};

export default function AddMeasurementRoute() {
  const metrics = useLoaderData().map((m) => ({
    ...m,
    measurement_label: startCase(m.measurement),
  }));
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
                  metric: selectedMetric?.[0]?.id,
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
                    labelKey={"measurement_label"}
                    onChange={(m) => setSelectedMetric(m)}
                    options={metrics}
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
                    onChange={(e) => setValue(e.target.value)}
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
