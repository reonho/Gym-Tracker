import prisma from "~/prisma.js";
export async function createWorkout(workout) {
  await prisma.$connect();
  const workoutObject = await prisma.workouts.create({
    data: {
      name: workout.name,
      datetime: { start: workout.datetime, end: undefined },
      location: workout.location,
      userId: workout.userId,
    },
  });
  prisma.$disconnect();
  return workoutObject;
}

export async function getWorkout(id) {
  await prisma.$connect();
  const workoutObject = await prisma.workouts.findUnique({
    where: {
      id: id,
    },
  });
  prisma.$disconnect();
  return workoutObject;
}

export async function finishWorkout(id, datetime) {
  await prisma.$connect();
  const workoutObject = await prisma.workouts.update({
    where: {
      id: id,
    },
    data: {
      datetime: datetime,
    },
  });
  prisma.$disconnect();
  return workoutObject;
}

export async function getWorkoutsForUser(userId) {
  await prisma.$connect();

  const workouts = await prisma.workouts.findMany({
    where: {
      userId: userId,
    },
  });

  prisma.$disconnect();

  return workouts.sort(
    (a, b) => new Date(b.datetime.start) - new Date(a.datetime.start)
  );
}

export async function postExercisetoWorkout({ workout_id, exercise_name }) {
  await prisma.$connect();
  const workoutObject = await prisma.workouts.findUnique({
    where: {
      id: workout_id,
    },
  });

  if (
    workoutObject.exercises.some((exercise) => exercise.name === exercise_name)
  ) {
    prisma.$disconnect();
    return;
  }

  const addExercise = await prisma.workouts.update({
    where: {
      id: workout_id,
    },
    data: {
      exercises: {
        push: {
          name: exercise_name,
          sets: [
            {
              weight: null,
              repetitions: null,
              completed: false,
              id: `${workout_id}_${exercise_name}_${Date.now()}`,
            },
          ],
        },
      },
    },
  });

  prisma.$disconnect();
  return;
}

export async function deleteExerciseFromWorkout(form) {
  await prisma.$connect();
  let workoutObject = await prisma.workouts.findUnique({
    where: {
      id: form.get("workout_id"),
    },
  });

  let newExercises = workoutObject.exercises.filter(
    (exercise) => exercise.name !== form.get("exercise_name")
  );

  const deleteExercise = await prisma.workouts.update({
    where: {
      id: form.get("workout_id"),
    },
    data: {
      exercises: newExercises,
    },
  });

  prisma.$disconnect();
  return;
}
