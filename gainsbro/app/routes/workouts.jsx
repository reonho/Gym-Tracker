import { useLoaderData, useSearchParams, Link } from "remix";
import { getWorkoutsForUser } from "~/service/workouts.js";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { startCase } from "lodash";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { getGradientFromWorkout, toTime } from "~/utils/utils";
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
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container">
          <div className="m-2">
            <div className="title is-3 mt-5 mb-3">Workouts</div>
            <div className="title is-5">{`${workouts.length} workouts`}</div>

            {workouts.map((workout) => (
              <Link
                key={workout.id}
                className="box"
                style={{
                  background: getGradientFromWorkout(
                    workout.id,
                    workout.datetime_start.replace(/\D+/g, "")
                  ),
                }}
                to={`/workout/${workout.id}/currentExercises`}
              >
                <div className="level is-mobile">
                  <div style={{ mixBlendMode: "hard-light" }}>
                    <p className="title mb-2 is-5">
                      {dayjs
                        .utc(workout.datetime_start)
                        .local()
                        .format("dddd, MMM D YY")}
                    </p>
                    <div className="title mb-2 is-6">
                      {dayjs
                        .utc(workout.datetime_start)
                        .local()
                        .format("h:mm A")}
                      {" - "}
                      {workout.name}
                    </div>
                    <div>{workout.duration}</div>
                    <div>
                      {workout.datetime_end
                        ? toTime(
                            dayjs(
                              dayjs.utc(workout.datetime_end) -
                                dayjs.utc(workout.datetime_start)
                            )
                          )
                        : "In Progress..."}
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
      </motion.div>
    </UserAuthorisedComponent>
  );
}
