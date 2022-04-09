import { Form, useLoaderData, useSearchParams, useSubmit } from "remix";
import { getSetsForUser } from "~/service/sets";
import lodash, { startCase } from "lodash";
import dayjs from "dayjs";
import { getDateOfISOWeek } from "~/utils/utils";
var weekOfYear = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
dayjs.extend(weekOfYear);
dayjs.extend(utc);

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  let workouts = await getSetsForUser(
    user,
    weekStartingOnDay.toDateString(),
    new Date(
      weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)
    ).toDateString()
  );
  return workouts;
};

export default function WeeklyScheduleRoute() {
  let workoutData = useLoaderData();
  const [searchParams] = useSearchParams();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = dayjs(getDateOfISOWeek(week, year));
  const submit = useSubmit();

  const workouts = lodash(workoutData)
    .groupBy((w) => dayjs.utc(w.datetime_start).local().format("dddd"))
    .mapValues((v) =>
      lodash(v)
        .groupBy((set) => set.muscle_group)
        .mapValues((e) => e.length)
        .value()
    )
    .value();

  return (
    <div>
      <div className="title is-4 mb-2">Schedule</div>
      <hr className="mt-2 mb-3" />
      <div className="container">
        <b>{weekStartingOnDay.format("DD/MM/YYYY")}</b> -{" "}
        <b>{weekStartingOnDay.add(6, "day").format("DD/MM/YYYY")}</b>{" "}
      </div>
      <div className="mt-2 mb-2">
        <Form method="get">
          <div className="field-body">
            <p className="control">
              <input
                type="week"
                className="input"
                name="week"
                value={yearWeek}
                onChange={(e) => {
                  submit({
                    week: e.target.value,
                    user: searchParams.getAll("user"),
                  });
                }}
              />
            </p>
          </div>
        </Form>
      </div>

      <br />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {[...Array(7).keys()].map((item, index) => (
          <div key={item} style={{ width: "50%" }}>
            {workouts?.[weekdays[item]] ? (
              <article
                key={index}
                className={`message is-small is-secondary m-3 `}
              >
                <div className="message-header">{`${
                  weekdays[item]
                } - ${weekStartingOnDay
                  .add(index, "day")
                  .format("DD/MM/YYYY")}`}</div>
                <div className="message-body">
                  {Object.entries(workouts?.[weekdays[item]]).map(
                    ([k, v], index) => {
                      return (
                        <div key={index}>
                          <b>
                            {startCase(k)} - {v}
                          </b>
                        </div>
                      );
                    }
                  )}
                </div>
              </article>
            ) : (
              <div className="message is-small is-light m-3">
                <div className="message-header">{`${
                  weekdays[item]
                } - ${weekStartingOnDay
                  .add(index, "day")
                  .format("DD/MM/YYYY")}`}</div>
                <div className="message-body">
                  <b>Rest Day 💪</b>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
