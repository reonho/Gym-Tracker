import { useLoaderData, Outlet, useFetcher } from "remix";
import { finishWorkout, getWorkout } from "~/workouts.js";
import { startCase } from "lodash";
import UserAuthorisedComponent from "../../components/UserAuthorisedComponent";
import { useState } from "react";

export let loader = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};

export let action = async ({ request, params }) => {
  const form = await request.formData();
  const workout = await finishWorkout(form.get("workout_id"), {
    start: form.get("start"),
    end: form.get("end"),
  });
  return workout;
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
          <span>{startCase(workout?.location)}</span>
        </div>

        <div className="icon-text m-1">
          <span className="icon">
            <i className="gg-alarm"></i>
          </span>

          <span id="start">
            {`${new Date(workout?.datetime.start).toLocaleString()}
           `}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StartNewWorkoutRoute() {
  const workout = useLoaderData();
  const fetcher = useFetcher();
  const [userId, setUserId] = useState();

  return (
    <UserAuthorisedComponent
      setUserId={setUserId}
      idPredicate={(id) => id === workout.userId}
    >
      {workoutMetaData(workout)}
      <div className="container m-5">
        <div className="notification m-">
          {workout?.datetime.end ? (
            <>
              <div className="title is-6">Workout Completed. </div>
              {toTime(
                new Date(workout?.datetime.end) -
                  new Date(workout?.datetime.start)
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                verticalAlign: "middle",
              }}
            >
              <div>
                <div className="title is-6 mb-0">Time Elapsed:</div>
                <div
                  className="is-family-secondary has-text-weight-medium"
                  id="time"
                ></div>
              </div>
              <div>
                <button
                  className="button is-dark"
                  onClick={() =>
                    fetcher.submit(
                      {
                        workout_id: workout.id,
                        start: workout.datetime.start,
                        end: new Date(),
                      },
                      { method: "POST" }
                    )
                  }
                >
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setInterval(function () {
              let difference = Date.now() - new Date(document.getElementById("start").innerText);
              const daysDifference = Math.floor(difference/1000/60/60/24);
              difference -= daysDifference*1000*60*60*24
              const hoursDifference = Math.floor(difference/1000/60/60);
              difference -= hoursDifference*1000*60*60
              const minutesDifference = Math.floor(difference/1000/60);
              difference -= minutesDifference*1000*60
              const secondsDifference = Math.floor(difference/1000);
              document.getElementById("time").innerText = 
              (daysDifference > 0 ? daysDifference + ' day(s) ' : '') + 
              (hoursDifference > 0 ? (hoursDifference+ ':') :  '') + 
              (minutesDifference.toString().length < 2 ? '0' : '' ) + minutesDifference+ ':' +
              (secondsDifference.toString().length < 2 ? '0' : '' ) + secondsDifference 
            }, 1000); 
            `,
        }}
      ></script>
    </UserAuthorisedComponent>
  );
}
