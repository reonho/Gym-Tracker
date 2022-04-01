import { Form, useLoaderData, useSearchParams, useSubmit } from "remix";
import { getSetsForUser } from "~/service/sets";
import lodash, { startCase } from "lodash";
import dayjs from "dayjs";
var weekOfYear = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
dayjs.extend(weekOfYear);
dayjs.extend(utc);

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let week = url.searchParams.get("week");
  let user = url.searchParams.get("user");
  const weekStartingOnDay = dayjs().week(week).startOf("week").startOf("day");
  let workouts = await getSetsForUser(
    user,
    weekStartingOnDay,
    weekStartingOnDay.add(1, "week")
  );
  return workouts;
};

export default function WeeklyScheduleRoute() {
  let workoutData = useLoaderData();
  const [searchParams] = useSearchParams();
  const week = searchParams.get("week");
  const weekStartingOnDay = dayjs().week(week).startOf("week").startOf("day");
  const submit = useSubmit();
  const currentWeek = dayjs().week();

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
        <b>
          {weekStartingOnDay
            .add(1, "week")
            .subtract(1, "day")
            .format("DD/MM/YYYY")}
        </b>{" "}
        -{" "}
        <i>
          Week {dayjs().week()} of {weekStartingOnDay.format("YYYY")}
        </i>
      </div>
      <div className="select mt-2 mb-2">
        <Form method="get">
          <select
            className="input"
            value={week}
            onChange={(e) => {
              submit({
                week: e.target.value,
                user: searchParams.getAll("user"),
              });
            }}
          >
            {Array(parseInt(currentWeek))
              .fill(0)
              .map((item, index) => {
                return (
                  <option value={index + 1} key={index + 1}>
                    Week {index + 1}
                  </option>
                );
              })}
          </select>
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
