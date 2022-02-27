import { useLoaderData, useSearchParams, Link } from "remix";
import { getWorkoutsForUser } from "~/workouts.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { startCase } from "lodash";

export let loader = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");

  const workouts = await getWorkoutsForUser(user);

  return workouts;
};

export default function StartNewWorkoutRoute() {
  const workouts = useLoaderData();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user");
  return (
    <UserAuthorisedComponent idPredicate={(id) => id === userId}>
      <div className="container m-5">
        {workouts.map((workout) => (
          <Link className="box" to={`/workout/${workout.id}/currentExercises`}>
            <div className="level is-mobile">
              <div>
                <p className="title mb-2 is-5">
                  {new Date(workout.datetime.start).toDateString()}
                </p>
                <div className="title mb-2 is-6">
                  {new Date(workout.datetime.start).toLocaleTimeString()}
                  {" - "}
                  {workout.name}
                </div>
                {startCase(workout.location)}
              </div>
              {workout.datetime.end ? (
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
