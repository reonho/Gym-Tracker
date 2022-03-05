import { getSetsForUser } from "~/service/sets.js";
import { getExercises } from "~/service/exercises";
import { useLoaderData, useActionData, Link } from "remix";
import dayjs from "dayjs";
import lodash from "lodash";
import WeeklyTrainingSets from "~/components/WeeklyTrainingSets";

var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

const weekStartingOnDay = dayjs()
  .week(dayjs().week())
  .startOf("week")
  .startOf("day");

export let action = async ({ request }) => {};

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay);
  const exerciseList = await getExercises();

  return lodash(userWorkouts)
    .groupBy((set) => set.muscle_group)
    .mapValues((e) => e.length);
};

export default function AnalyticsRoute() {
  const weeklySets = useLoaderData();

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
          <br />
          <i>
            Week {dayjs().week()} of {weekStartingOnDay.format("YYYY")}
          </i>
        </div>
        <WeeklyTrainingSets weeklySets={weeklySets} />
        {Object.keys(weeklySets).length === 0 &&
          "Nothing trained yet this week"}
      </div>
    );
  };

  return <>{renderTrainedThisWeek()}</>;
}
