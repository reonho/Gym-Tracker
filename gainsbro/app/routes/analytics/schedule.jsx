import { useLoaderData } from "remix";
import { getSetsForUser } from "~/service/sets";
import lodash, { startCase } from "lodash";
import dayjs from "dayjs";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

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
  let user = url.searchParams.get("user");
  let workouts = await getSetsForUser(user);

  workouts = lodash(workouts)
    .groupBy((w) => dayjs(w.datetime_start).day())
    .mapValues((v) =>
      lodash(v)
        .groupBy((set) => set.muscle_group)
        .mapValues((e) => e.length)
    );

  return workouts;
};

const weekStartingOnDay = dayjs()
  .week(dayjs().week())
  .startOf("week")
  .startOf("day");

export default function WeeklyScheduleRoute() {
  const workouts = useLoaderData();

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
        <br />
        <i>
          Week {dayjs().week()} of {weekStartingOnDay.format("YYYY")}
        </i>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {[...Array(7).keys()].map((item, index) => (
          <div key={index} style={{ width: "50%" }}>
            <article
              className={`message is-small ${
                workouts?.[String(item)] ? "is-secondary" : "is-light"
              } m-3 `}
            >
              <div className="message-header">{`${
                weekdays[item]
              } - ${weekStartingOnDay
                .add(index, "day")
                .format("DD/MM/YYYY")}`}</div>
              <div className="message-body">
                {Object.entries(workouts?.[String(item)] ?? { REST: null }).map(
                  ([k, v], index) => {
                    return k !== "REST" ? (
                      <div key={index}>
                        <b>
                          {startCase(k)} - {v}
                        </b>
                      </div>
                    ) : (
                      <b>Rest Day 💪</b>
                    );
                  }
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
