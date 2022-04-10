import dayjs from "dayjs";
import { startCase } from "lodash";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useLocation,
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
  return [metrics, history.sort((a, b) => -dayjs(a.date) + dayjs(b.date))];
};

export default function MeasurementHistoryRoute() {
  const submit = useSubmit();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [metrics, history] = useLoaderData();
  const userId = searchParams.getAll("user");
  const measurementId = searchParams.getAll("measurement_id");
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
          location.pathname !== "/measurements/history/edit" && (
            <MeasurementProgress history={history} name={metricName} />
          )
        )}
        <Outlet />
        {location.pathname !== "/measurements/history/edit" && (
          <div className="container">
            {history.map((h) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  verticalAlign: "middle",
                }}
                className="p-3 m-1 box"
                key={h.id}
              >
                <div>
                  <span class="tag is-medium is-light mr-3">
                    {dayjs(h.date).format("DD/MM/YYYY")}
                  </span>
                  <span class="tag is-light is-medium">{h.value}</span>
                </div>
                <Link
                  to={`/measurements/history/edit?user=${userId}&measurement_id=${measurementId}&id=${h.id}`}
                >
                  <button className="button is-light is-info is-small">
                    Edit
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
