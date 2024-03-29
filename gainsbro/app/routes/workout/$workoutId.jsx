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
import { MdOutlineMenu } from "react-icons/md";
import { getGradientFromWorkout, toTime } from "~/utils/utils";

const utc = require("dayjs/plugin/utc");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(utc);
dayjs.extend(relativeTime);

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

function workoutMetaData(workout) {
  return (
    <div className="container mt-5">
      <div
        className="box m-3 soraFont"
        style={{
          borderRadius: "1rem",
          background: getGradientFromWorkout(
            workout.id,
            workout.datetime_start.replace(/\D+/g, "")
          ),
        }}
      >
        <div
          className=" mb-3 title soraFont"
          style={{
            mixBlendMode: "hard-light",
          }}
        >
          {workout?.name}
        </div>
        <div style={{ mixBlendMode: "hard-light" }}>
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
    </div>
  );
}

export default function StartNewWorkoutRoute() {
  const workout = useLoaderData()[0];
  const fetcher = useFetcher();
  const [userId, setUserId] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [showChangeTime, setShowChangeTime] = useState(false);
  const [customDate, setCustomDate] = useState(null);
  return (
    <UserAuthorisedComponent
      setUserId={setUserId}
      idPredicate={(id) => id === workout.user_id}
    >
      <>
        {workoutMetaData(workout)}
        <div className="p-5 container">
          <div
            className="message-body notification mb-3 is-white"
            style={{
              display: "flex",
              justifyContent: "space-between",
              verticalAlign: "middle",
            }}
          >
            {workout?.datetime_end ? (
              <>
                <div>
                  <div className="title is-6 mb-1 has-text-success">
                    Workout Completed.{" "}
                    {toTime(
                      dayjs.utc(workout.datetime_end) -
                        dayjs.utc(workout.datetime_start)
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div>
                  <div className="title is-6 mb-0 has-text-dark">
                    Time Elapsed:
                    <div
                      className="is-family-secondary has-text-weight-medium"
                      id="time"
                    >
                      <Stopwatch
                        running={true}
                        initialTime={dayjs.utc(workout.datetime_start)}
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            )}

            <div className="buttons">
              {!workout.datetime_end && (
                <button
                  className="button is-success is-small"
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
              {showMenu && (
                <div
                  className="box p-2"
                  style={{
                    position: "absolute",
                    top: "80%",
                    right: "3%",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <button
                      className="button is-light is-danger is-small is-fullwidth"
                      onClick={() =>
                        fetcher.submit(
                          {
                            workout_id: workout.id,
                          },
                          { method: "DELETE" }
                        )
                      }
                    >
                      Delete Workout
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => setShowChangeTime((e) => !e)}
                      className="button is-small is-light is-fullwidth"
                    >
                      Set Finish Time
                    </button>
                  </div>

                  {showChangeTime && (
                    <div className="level is-mobile">
                      <input
                        className="input is-small"
                        type="datetime-local"
                        onSelect={(e) => {
                          setCustomDate(e.target.value);
                        }}
                      ></input>
                      <button
                        disabled={!customDate}
                        className="button is-small is-light is-success m-0 ml-1"
                        onClick={() => {
                          fetcher.submit(
                            {
                              workout_id: workout.id,
                              end: dayjs(customDate).utc(),
                            },
                            { method: "POST" }
                          );
                          setShowMenu(false);
                        }}
                      >
                        Finish
                      </button>
                    </div>
                  )}
                </div>
              )}
              <button
                className=" button is-light is-small  mb-2"
                onClick={() => setShowMenu((e) => !e)}
              >
                <MdOutlineMenu />
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </>
    </UserAuthorisedComponent>
  );
}
