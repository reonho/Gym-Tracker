import { useState } from "react";
import {
  Link,
  redirect,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from "remix";
import {
  getMeasurementFromId,
  editMeasurement,
  deleteMeasurement,
} from "~/service/measurements.js";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  const id = url.searchParams.get("id");
  const user = url.searchParams.get("user");
  const measurement = getMeasurementFromId(id, user);

  return measurement;
};
export let action = async ({ request }) => {
  const form = await request.formData();
  const oldMeasurement = JSON.parse(form.get("oldMeasurement"));
  const measurementId = oldMeasurement.measurement;
  const user = oldMeasurement.user_id;

  if (request.method === "DELETE") {
    await deleteMeasurement(oldMeasurement);
  } else {
    const newMeasurement = {
      ...oldMeasurement,
      value: form.get("measurementValue"),
      date: form.get("date"),
    };
    await editMeasurement(oldMeasurement, newMeasurement);
  }
  return redirect(
    `/measurements/history?user=${user}&measurement_id=${measurementId}`
  );
};
export default function EditMeasurementRoute() {
  const measurement = useLoaderData();
  const [searchParams] = useSearchParams();
  const [measurementValue, setMeasurementValue] = useState(
    measurement[0].value
  );
  const [date, setDate] = useState(measurement[0].date);
  const fetcher = useFetcher();
  return (
    <div className="p-5">
      <div className="message">
        <h4 className="message-header ">
          Edit Record
          <Link
            to={`/measurements/history?user=${searchParams.getAll(
              "user"
            )}&measurement_id=${searchParams.getAll("measurement_id")}`}
          >
            <button class="delete" aria-label="delete"></button>
          </Link>
        </h4>
        <div className="message-body">
          <div>
            <b>Value</b>
            <input
              className="input mb-2"
              type="number"
              name="measurementValue"
              value={measurementValue}
              onChange={(e) => setMeasurementValue(e.target.value)}
            />
            <b>Date</b>
            <input
              type="datetime-local"
              className="input mb-5"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              className="button mr-1 is-light is-success"
              onClick={() => {
                fetcher.submit(
                  {
                    oldMeasurement: JSON.stringify(measurement[0]),
                    measurementValue: measurementValue,
                    date: date,
                  },
                  { method: "POST" }
                );
              }}
            >
              Submit
            </button>
            <button
              className="button mr-1 is-light is-danger"
              onClick={() => {
                fetcher.submit(
                  { oldMeasurement: JSON.stringify(measurement[0]) },
                  {
                    method: "DELETE",
                  }
                );
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
