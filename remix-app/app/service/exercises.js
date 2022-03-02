import prisma from "~/prisma.js";
export async function getExercises(muscle_group) {
  await prisma.$connect();
  let exercises;
  if (muscle_group) {
    exercises = await prisma.exercises.findMany({
      where: {
        muscle_group: muscle_group,
      },
    });
  } else {
    exercises = await prisma.exercises.findMany();
  }

  prisma.$disconnect();
  return exercises;
}

export async function getMuscleGroups() {
  await prisma.$connect();
  const exercises = await prisma.exercises.findMany({
    distinct: ["muscle_group"],
    select: {
      muscle_group: true,
    },
  });
  prisma.$disconnect();
  return exercises;
}

