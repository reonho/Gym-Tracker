import { useLoaderData, useSearchParams, Link } from "remix";
import { getWorkoutsForUser } from "~/service/workouts.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { startCase } from "lodash";

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
      <div className=" m-5 container">
        <div className="title is-3 mb-3">Workouts</div>
        {workouts.length === 0 && "No workouts yet"}
        {workouts.map((workout) => (
          <Link className="box" to={`/workout/${workout.id}/currentExercises`}>
            <div className="level is-mobile">
              <div>
                <p className="title mb-2 is-5">
                  {new Date(workout.datetime_start).toDateString()}
                </p>
                <div className="title mb-2 is-6">
                  {new Date(workout.datetime_start).toLocaleTimeString()}
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
    </UserAuthorisedComponent>
  );
}
