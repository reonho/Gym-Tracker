import { startCase } from "lodash";
import { useEffect } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
  useSubmit,
} from "remix";
import MeasurementProgress from "~/components/MeasurementProgress";
import {
  getMeasurementTypes,
  getMeasurementHistory,
} from "~/service/measurements";

export let loader = async ({ request }) => {
  const metrics = await getMeasurementTypes();
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let measurementId = url.searchParams.get("measurement_id");

  const history = await getMeasurementHistory(measurementId, user);
  return [metrics, history];
};

export default function MeasurementHistoryRoute() {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const [metrics, history] = useLoaderData();
  const userId = searchParams.getAll("user");
  const metricName = startCase(
    metrics.filter(
      (e) => e.id === parseInt(searchParams.get("measurement_id"))
    )?.[0]?.measurement
  );

  return (
    <div className="container">
      <div className="m-3">
        <Form method="get">
          <select
            className="input"
            name="measurement_id"
            defaultValue={searchParams.get("measurement_id") ?? 1}
            onChange={(e) => {
              submit({
                measurement_id: e.target.value,
                user: searchParams.getAll("user"),
              });
            }}
          >
            {metrics.map((e) => (
              <option key={e.id} value={e.id}>
                {startCase(e["measurement"])}
              </option>
            ))}
          </select>
        </Form>
        {history.length === 0 ? (
          <div className="m-3">No Measurements</div>
        ) : (
          <MeasurementProgress history={history} name={metricName} />
        )}
      </div>
    </div>
  );
}
