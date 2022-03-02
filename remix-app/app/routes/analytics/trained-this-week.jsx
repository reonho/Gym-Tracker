import { getSetsForUser } from "~/service/sets.js";
import { getExercises } from "~/service/exercises";
import { useLoaderData, useActionData, Link } from "remix";
import dayjs from "dayjs";
import { groupBy, startCase } from "lodash";
import WeeklyTrainingSets from "~/components/WeeklyTrainingSets";

var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

const weekStartingOnDay = dayjs()
  .week(dayjs().week())
  .startOf("week")
  .startOf("day");

export let action = async ({ request }) => {};

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const [userWorkouts, userExercises] = await getSetsForUser(
    user,
    weekStartingOnDay
  );
  const exerciseList = await getExercises();
  const exerciseToMuscleGroup = {};

  exerciseList.forEach((e) => {
    exerciseToMuscleGroup[e.name] ??
      (exerciseToMuscleGroup[e.name] = e.muscle_group);
  });

  const dictWeekNum = {};
  const dictWeekSets = {};

  // separate workouts into weekly bins
  userWorkouts.forEach((workout) => {
    const workoutWeek = dayjs(workout.datetime.start).week();
    if (dictWeekNum[workoutWeek] !== undefined) {
      dictWeekNum[workoutWeek].push(workout.exercises);
    } else {
      dictWeekNum[workoutWeek] = [workout.exercises];
    }
  });

  // for each week, compute stat
  Object.entries(dictWeekNum).forEach(([weekNum, weekWorkouts]) => {
    const numSetsByExercise = {};
    const setsByMuscleGroup = groupBy(
      weekWorkouts.flat(),
      (exercise) => exerciseToMuscleGroup[exercise.name]
    );
    Object.entries(setsByMuscleGroup).map(([muscleGroup, exerciseSessions]) => {
      numSetsByExercise[muscleGroup] = exerciseSessions
        .map((session) => session.sets.length)
        .reduce((a, b) => a + b);
    });
    dictWeekSets[weekNum] = numSetsByExercise;
  });

  return [dictWeekSets, exerciseList];
};

export default function AnalyticsRoute() {
  const [weeklySets, exerciseList] = useLoaderData();
  const actionData = useActionData();
  const renderTrainedThisWeek = () => {
    return (
      <div>
        <div className="title is-4 mb-2">Trained this Week</div>
        <hr className="mt-2 mb-3" />
        <div className="container">
          <b>{weekStartingOnDay.format("DD/MM/YYYY")}</b> -{" "}
          <b>{weekStartingOnDay.add(1, "week").format("DD/MM/YYYY")}</b> <br />
          <i>
            Week {dayjs().week()} of {weekStartingOnDay.format("YYYY")}
          </i>
        </div>
        <WeeklyTrainingSets weeklySets={weeklySets[dayjs().week()]} />
        {Object.keys(weeklySets).length === 0 && "No workouts yet this week"}
      </div>
    );
  };

  return <>{renderTrainedThisWeek()}</>;
}
