import { getSetsForUser } from "~/service/sets.js";
import { Form, useLoaderData, useSearchParams, useSubmit } from "remix";
import dayjs from "dayjs";
import lodash from "lodash";
import WeeklyTrainingSets from "~/components/WeeklyTrainingSets";
import { getDateOfISOWeek } from "~/utils/utils.js";

var weekOfYear = require("dayjs/plugin/weekOfYear");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);

export let action = async ({ request }) => {};

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const userWorkouts = await getSetsForUser(
    user,
    weekStartingOnDay.toDateString(),
    new Date(
      weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)
    ).toDateString()
  );

  return lodash(userWorkouts)
    .groupBy((set) => set.muscle_group)
    .mapValues((e) => e.length);
};

export default function ThisWeekRoute() {
  const weeklySets = useLoaderData();
  const [searchParams] = useSearchParams();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const submit = useSubmit();
  const renderTrainedThisWeek = () => {
    return (
      <div>
        <div className="title is-4 mb-2">Trained this Week</div>
        <hr className="mt-2 mb-3" />
        <div className="container">
          <b>{weekStartingOnDay.toDateString()}</b> -{" "}
          <b>
            {new Date(
              weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 6)
            ).toDateString()}
          </b>{" "}
          <br />
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
        </div>
        {Object.keys(weeklySets).length === 0 && "Nothing trained this week"}
        <WeeklyTrainingSets weeklySets={weeklySets} />
      </div>
    );
  };

  return <>{renderTrainedThisWeek()}</>;
}
