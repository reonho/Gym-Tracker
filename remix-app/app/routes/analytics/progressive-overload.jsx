import { getExercises } from "~/service/exercises";
import { getWorkoutsForUser } from "~/service/workouts";
import { useLoaderData } from "remix";
import { startCase, groupBy } from "lodash";
import { useState } from "react";
import ProgressiveOverload from "../../components/ProgressiveOverload";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exerciseList = await getExercises();
  const workouts = await getWorkoutsForUser(user);
  workouts.reverse();
  const exerciseProgress = {};

  const getSetVolume = (set) =>
    set.weight && set.repetitions ? set.weight * set.repetitions : 0;

  workouts.forEach((workout) => {
    workout.exercises.forEach((exercise) => {
      let bestSet = {
        [workout.datetime.start]: exercise.sets.reduce(
          (setA, setB) =>
            getSetVolume(setA) > getSetVolume(setB) ? setA : setB,
          { weight: null, repetitions: null }
        ),
      };
      if (exerciseProgress[exercise.name]) {
        exerciseProgress[exercise.name].push(bestSet);
      } else {
        exerciseProgress[exercise.name] = [bestSet];
      }
    });
  });

  return [exerciseProgress, exerciseList];
};

export default function ProgressRoute() {
  const [exerciseProgress, exerciseList] = useLoaderData();

  const [singleExerciseChart, setSingleExerciseChart] = useState(
    exerciseProgress[exerciseList[0].name]
  );

  return (
    <>
      <div className="level is-mobile">
        <div className="title is-4 ">Strength</div>
        <div className="select">
          <select
            onChange={(e) => {
              setSingleExerciseChart(exerciseProgress[e.target.value]);
            }}
          >
            {exerciseList.map((e) => (
              <option key={e.id} value={e.name}>
                {startCase(e.name + " " + (e.variant ?? ""))}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container">
        <ProgressiveOverload progressiveOverload={singleExerciseChart} />
      </div>
    </>
  );
}
