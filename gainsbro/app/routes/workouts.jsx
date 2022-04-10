import { useLoaderData, useSearchParams, Link } from "remix";
import { getWorkoutsForUser } from "~/service/workouts.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { startCase } from "lodash";
import dayjs from "dayjs";
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export let loader = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};

export default function ViewWorkoutRoute() {
  const workouts = useLoaderData();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user");
  return (
    <UserAuthorisedComponent idPredicate={(id) => id === userId}>
      <div className="container">
        <div className="m-2">
          <div className="title is-3 mt-5">Workouts</div>
          {workouts.length === 0 && "No workouts yet"}
          {workouts.map((workout) => (
            <Link
              key={"workout.id"}
              className="box"
              to={`/workout/${workout.id}/currentExercises`}
            >
              <div className="level is-mobile">
                <div>
                  <p className="title mb-2 is-5">
                    {dayjs
                      .utc(workout.datetime_start)
                      .local()
                      .format("dddd, MMM D YY")}
                  </p>
                  <div className="title mb-2 is-6">
                    {dayjs.utc(workout.datetime_start).local().format("h:mm A")}
                    {" - "}
                    {workout.name}
                  </div>
                  {startCase(workout.location_name)}
                </div>
                {workout.datetime_end ? (
                  <BsCheckCircleFill size={40} className="m-4 p-1" />
                ) : (
                  <BsClockHistory size={40} className="m-4 p-1" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </UserAuthorisedComponent>
  );
}
