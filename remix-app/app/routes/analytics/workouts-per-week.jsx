import { useLoaderData } from "remix";
import { getWorkoutsForUser } from "~/service/workouts";
import lodash, { transform, pick } from "lodash";
import dayjs from "dayjs";
import WorkoutPerWeek from "../../components/WorkoutsPerWeek";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);

  workouts = lodash(workouts)
    .groupBy((w) => dayjs(w.datetime_start).week())
    .mapValues((e) => e.length)
    .value();

  let weeksToShow = Object.keys(workouts).map((e) => parseInt(e));
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);

  return transform(
    pick(workouts, weeksToShow),
    (res, val, key) =>
      (res[
        `${dayjs(dayjs().week(key).startOf("week").startOf("day")).format(
          "DD/M/YY"
        )} - ${dayjs(dayjs().week(key).endOf("week").startOf("day")).format(
          "DD/M/YY"
        )}`
      ] = val)
  );
};

export default function PersonalBestRoute() {
  const workouts = useLoaderData();

  return (
    <>
      <div className="">
        <div className="title is-4 mb-2">Workouts per Week</div>
        <hr className="mt-2 mb-3" />
        <WorkoutPerWeek workoutsPerWeek={workouts} />
      </div>
    </>
  );
}
