import prisma from "~/prisma.js";
import { mergeWith } from "lodash";
import dayjs from "dayjs";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export async function deleteSet(formSet) {
  await prisma.$connect();
  const workoutObject = await prisma.workouts.findUnique({
    where: {
      id: formSet.get("workout_id"),
    },
  });

  const newExercises = workoutObject.exercises.map((exercise) =>
    exercise.name === formSet.get("exercise_name")
      ? {
          name: exercise.name,
          sets: exercise.sets.filter((item, index) => {
            return item.id !== formSet.get("index");
          }),
        }
      : exercise
  );

  const updateWorkout = await prisma.workouts.update({
    where: {
      id: formSet.get("workout_id"),
    },
    data: {
      exercises: newExercises,
    },
  });

  prisma.$disconnect();
}
export async function addSet(formSet) {
  const submissionSet = {
    weight: null,
    repetitions: null,
    completed: false,
    id: `${formSet.get("workout_id")}_${formSet.get(
      "exercise_name"
    )}_${Date.now()}`,
  };
  await prisma.$connect();
  const workoutObject = await prisma.workouts.findUnique({
    where: {
      id: formSet.get("workout_id"),
    },
  });

  const newExercises = workoutObject.exercises.map((exercise) =>
    exercise.name === formSet.get("exercise_name")
      ? { name: exercise.name, sets: [...exercise.sets, submissionSet] }
      : exercise
  );

  const updateWorkout = await prisma.workouts.update({
    where: {
      id: formSet.get("workout_id"),
    },
    data: {
      exercises: newExercises,
    },
  });

  prisma.$disconnect();
}
export async function updateSet(formSet) {
  let submissionSet = {
    weight: null,
    repetitions: null,
    completed: false,
  };

  const weightForSet = formSet.get("weight");
  const repsForSet = formSet.get("repetitions");
  const completedForSet = formSet.get("completed");

  if (weightForSet !== null) {
    submissionSet.weight = parseFloat(weightForSet);
  }
  if (repsForSet !== null) {
    submissionSet.repetitions = parseFloat(repsForSet);
  }
  if (completedForSet !== null) {
    submissionSet.completed = completedForSet === "true";
  }

  await prisma.$connect();
  const workoutObject = await prisma.workouts.findUnique({
    where: {
      id: formSet.get("workout_id"),
    },
  });

  const transformExerciseWithNewSet = (oldExercise, submissionSet, index) => {
    const oldSet = oldExercise.sets.filter((set) => set.id === index)[0];
    const newSet = mergeWith({}, oldSet, submissionSet, (a, b) =>
      b === null ? a : undefined
    );
    const newExerciseSets = oldExercise.sets.map((set) =>
      set.id === index ? newSet : set
    );
    return { ...oldExercise, sets: newExerciseSets };
  };

  const newExercises = workoutObject.exercises.map((exercise) =>
    exercise.name === formSet.get("exercise_name")
      ? transformExerciseWithNewSet(
          exercise,
          submissionSet,
          formSet.get("index")
        )
      : exercise
  );

  const updateWorkout = await prisma.workouts.update({
    where: {
      id: formSet.get("workout_id"),
    },
    data: {
      exercises: newExercises,
    },
  });

  prisma.$disconnect();
  // return updateWorkout;
}

//default filters for latest week
export async function getSetsForUser(userId, filter_start, filter_end) {
  let workoutObject = await prisma.workouts.findMany({
    where: {
      userId: userId,
    },
  });
  const filter_date_start = filter_start
    ? new Date(filter_start)
    : new Date(dayjs().week(dayjs().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? new Date(filter_end) : null;

  const isBetweenFilterDates = (date, start, end) => {
    const test = new Date(date);
    if (start && end) {
      return test > start && test < end;
    } else if (start) {
      return test > start;
    }
    return false;
  };

  workoutObject = workoutObject.filter((workout) =>
    isBetweenFilterDates(
      workout.datetime.start,
      filter_date_start,
      filter_date_end
    )
  );
  const sets = workoutObject.map((workout) => workout.exercises).flat();
  return [workoutObject, sets];
}
