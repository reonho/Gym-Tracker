import { useLoaderData } from "remix";
import { getLifetimeStatistics, getSetsForUser } from "~/service/sets";
import lodash, {
  startCase,
  reduce,
  pick,
  omit,
  lowerCase,
  sortBy,
} from "lodash";
import dayjs from "dayjs";
import { getWorkoutsForUser } from "~/service/workouts";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts
    .map((w) => dayjs(w.datetime_end).diff(w.datetime_start, "minute"))
    .reduce((a, b) => a + b);
  return [
    stats,
    totalTimeSpent,
    Math.round(totalTimeSpent / workouts.length),
    workouts.length,
  ];
};

export default function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent, numWorkouts] =
    useLoaderData();
  const abbv = {
    AW: "Average Weight",
    AR: "Average Repetitions",
    Reps: "Total Repetitions",
    Vol: "Total Volume",
    Num: "Total Number of Sets",
  };

  const formatNumber = (num, digits = 2) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  };

  let workoutsTable = sortBy(stats, (s) => lowerCase(s.name)).map((w) => ({
    Exercise: `${startCase(w.name)} ${
      w?.variant ? `(${startCase(w.variant)})` : ""
    }`,
    Reps: Math.round(w.total_reps),
    Vol: Math.round(w.sum_volume),
    Num: w.num_sets,
  }));
  const columnNames = [...Object.keys(Object.entries(workoutsTable)[0][1])];
  const rows = Object.entries(workoutsTable).map(([k, v], index) => [
    ...Object.values(v),
  ]);

  return (
    <div>
      <div className="title is-4 m-2">Statistics</div>
      <hr className="mt-2 mb-3" />
      <div className="m-2">Total lifetime metrics:</div>
      <div
        className="notification"
        style={{ flexDirection: "column", display: "flex" }}
      >
        <p>
          <b>Total Workouts: </b>
          <i>{numWorkouts}</i>
        </p>
        <p>
          <b>Total Time: </b>
          <i>{totalTimeSpent} min</i>
        </p>
        <p>
          <b>Average Time: </b>
          <i>{averageTimeSpent} min</i>
        </p>

        {columnNames
          .filter((c) => c !== "Exercise")
          .map((name) => (
            <p key={name}>
              <b>
                {abbv[name]} ({name}):{" "}
              </b>
              <i>
                {name === "Vol"
                  ? formatNumber(
                      reduce(
                        Object.values(workoutsTable),
                        (a, b) => a + b[name],
                        0
                      )
                    )
                  : reduce(
                      Object.values(workoutsTable),
                      (a, b) => a + b[name],
                      0
                    )}
              </i>
            </p>
          ))}
      </div>

      <div className="m-2">Total lifetime metrics by exercise: </div>
      <div className="container">
        <table
          style={{ overflow: "scroll", fontSize: "1rem" }}
          className="table is-striped is-narrow is-hoverable is-fullwidth"
        >
          <thead>
            <tr>
              {columnNames.map((e, index) => (
                <th key={index}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((ele, eleIndex) =>
                  eleIndex >= 1 ? (
                    <td key={eleIndex}>{formatNumber(ele)}</td>
                  ) : (
                    <th key={eleIndex}>{ele}</th>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
