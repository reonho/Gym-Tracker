import { getSetsForUser } from "~/service/sets.js";
import { Form, useLoaderData, useSearchParams, useSubmit } from "remix";
import dayjs from "dayjs";
import lodash from "lodash";
import WeeklyTrainingSets from "~/components/WeeklyTrainingSets";

var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export let action = async ({ request }) => {};

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let week = url.searchParams.get("week");
  const weekStartingOnDay = dayjs().week(week).startOf("week").startOf("day");

  const userWorkouts = await getSetsForUser(
    user,
    weekStartingOnDay,
    weekStartingOnDay.add(1, "week")
  );

  return lodash(userWorkouts)
    .groupBy((set) => set.muscle_group)
    .mapValues((e) => e.length);
};

export default function ThisWeekRoute() {
  const weeklySets = useLoaderData();
  const [searchParams] = useSearchParams();
  const week = searchParams.get("week");
  const weekStartingOnDay = dayjs().week(week).startOf("week").startOf("day");
  const currentWeek = dayjs().week();
  const submit = useSubmit();

  const renderTrainedThisWeek = () => {
    return (
      <div>
        <div className="title is-4 mb-2">Trained this Week</div>
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
            Week {week} of {weekStartingOnDay.format("YYYY")}
          </i>
          <br />
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
        </div>
        {Object.keys(weeklySets).length === 0 && "Nothing trained this week"}
        <WeeklyTrainingSets weeklySets={weeklySets} />
      </div>
    );
  };

  return <>{renderTrainedThisWeek()}</>;
}
