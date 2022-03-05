import { useLoaderData, Outlet, useFetcher, redirect } from "remix";
import {
  finishWorkout,
  getWorkout,
  deleteWorkout,
} from "~/service/workouts.js";
import { startCase } from "lodash";
import UserAuthorisedComponent from "../../components/UserAuthorisedComponent";
import { useState } from "react";
import Stopwatch from "../../components/Stopwatch";
import dayjs from "dayjs";

const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export let loader = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};

export let action = async ({ request, params }) => {
  if (request.method == "POST") {
    const form = await request.formData();
    const workout = await finishWorkout(
      form.get("workout_id"),
      form.get("end")
    );
    return workout;
  }
  if (request.method == "DELETE") {
    const form = await request.formData();
    const workout = await deleteWorkout(form.get("workout_id"));
    return redirect("/");
  }
};

function toTime(seconds) {
  var date = new Date(null);
  date.setMilliseconds(seconds);
  return date.toISOString().split("T")[1].split(".")[0];
}

function workoutMetaData(workout) {
  return (
    <div className="hero is-light mt-3">
      <div className="hero-body ">
        <div className="title is-4 mb-3">{workout?.name}</div>

        <div className="icon-text m-1">
          <span className="icon">
            <i className="gg-pin"></i>
          </span>
          <span>{startCase(workout?.location_name)}</span>
        </div>

        <div className="icon-text m-1">
          <span className="icon">
            <i className="gg-alarm"></i>
          </span>

          <span id="start">
            {`${dayjs
              .utc(workout?.datetime_start)
              .local()
              .format("dddd, DD MMM YY, HH:mm")}
           `}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StartNewWorkoutRoute() {
  const workout = useLoaderData()[0];
  const fetcher = useFetcher();
  const [userId, setUserId] = useState();
  return (
    <UserAuthorisedComponent
      setUserId={setUserId}
      idPredicate={(id) => id === workout.user_id}
    >
      <>
        {workoutMetaData(workout)}
        <div className="p-5 container">
          <div
            className="message-body notification mb-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              verticalAlign: "middle",
            }}
          >
            {workout?.datetime_end ? (
              <>
                <div>
                  <div className="title is-6">Workout Completed. </div>
                  {toTime(
                    dayjs(workout?.datetime_end) -
                      dayjs(workout?.datetime_start)
                  )}
                </div>
              </>
            ) : (
              <div>
                <div>
                  <div className="title is-6 mb-0">Time Elapsed:</div>
                  <div
                    className="is-family-secondary has-text-weight-medium"
                    id="time"
                  >
                    <Stopwatch
                      running={true}
                      initialTime={dayjs() - dayjs.utc(workout.datetime_start)}
                    />
                  </div>
                </div>
                <div></div>
              </div>
            )}

            <div className="buttons">
              {!workout.datetime_end && (
                <button
                  className="button is-light is-success is-small"
                  onClick={() =>
                    fetcher.submit(
                      {
                        workout_id: workout.id,
                        end: dayjs().utc(),
                      },
                      { method: "POST" }
                    )
                  }
                >
                  Finish
                </button>
              )}
              <button
                className="button is-light is-danger is-small"
                onClick={() =>
                  fetcher.submit(
                    {
                      workout_id: workout.id,
                    },
                    { method: "DELETE" }
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </>
    </UserAuthorisedComponent>
  );
}
