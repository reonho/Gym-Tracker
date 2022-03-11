import { useLoaderData } from "remix";
import { getSetsForUser } from "~/service/sets";
import lodash, { startCase, reduce, pick, omit } from "lodash";
import dayjs from "dayjs";
import { getWorkoutsForUser } from "~/service/workouts";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let sets = await getSetsForUser(user);
  let workouts = await getWorkoutsForUser(user);

  const computeStats = (sets) => {
    const stat = reduce(
      sets,
      (a, b) => ({
        weight: a.weight + b.weight,
        reps: a.reps + b.repetitions,
        sets: a.sets + 1,
      }),
      { weight: 0, reps: 0, sets: 0 }
    );
    stat.volume = stat.weight * stat.reps;

    return stat;
  };
  const groupedSets = lodash(sets)
    .groupBy(
      (s) =>
        `${startCase(s.exercise_name)}${
          s?.variant ? ` (${startCase(s.variant)})` : ""
        }`
    )
    .mapValues(computeStats);

  const totalTimeSpent = workouts
    .map((w) => dayjs(w.datetime_end).diff(w.datetime_start, "minute"))
    .reduce((a, b) => a + b);
  return [groupedSets, totalTimeSpent];
};
export default function StatisticsRoute() {
  const [workouts, totalTimeSpent] = useLoaderData();
  const columnNames = [
    "exercise",
    ...Object.keys(Object.entries(workouts)[0][1]),
  ];
  const rows = Object.entries(workouts).map(([k, v], index) => [
    k,
    ...Object.values(v),
  ]);

  return (
    <div className="container">
      <div className="title is-4 m-2">Statistics</div>
      <hr className="mt-2 mb-3" />
      <div className="m-2">Total lifetime metrics</div>
      <div
        className="notification"
        style={{ flexDirection: "column", display: "flex" }}
      >
        <p>
          <b>Total Time Spent</b> : <i>{totalTimeSpent} min</i>
        </p>

        {columnNames
          .filter((c) => c !== "exercise")
          .map((name) => (
            <p key={name}>
              <b>Total {startCase(name)}</b> :{" "}
              <i>{reduce(Object.values(workouts), (a, b) => a + b[name], 0)}</i>
            </p>
          ))}
      </div>

      <div className="m-2">Total lifetime metrics by exercise </div>
      <table className="table is-striped">
        <thead>
          <tr>
            {columnNames.map((e, index) => (
              <th key={index}>{startCase(e)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((ele, eleIndex) =>
                eleIndex >= 1 ? (
                  <td key={eleIndex}>{ele}</td>
                ) : (
                  <th key={eleIndex}>{ele}</th>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
