import supabase from "~/supabase.js";
export async function createWorkout(workout) {
  let checkLocation = await supabase
    .from("location")
    .select("id")
    .match({ name: workout.location, user_id: workout.userId });

  let locationId;
  if (checkLocation.data.length === 0) {
    checkLocation = await supabase
      .from("location")
      .insert({ name: workout.location, user_id: workout.userId });
  }
  locationId = checkLocation.data?.[0].id;

  const { data, error } = await supabase.from("workout").insert([
    {
      name: workout.name,
      datetime_start: workout.datetime,
      datetime_end: undefined,
      location: locationId,
      user_id: workout.userId,
    },
  ]);

  return data[0].id;
}

export async function deleteWorkout(workout_id) {
  const workout = await supabase
    .from("setsforworkout")
    .select("*")
    .eq("workout_id", workout_id);

  const associated_workout_exercises =
    "(" + workout.data.map((e) => e.workout_exercise_id).toString() + ")";

  const _deleteSets = await supabase
    .from("set")
    .delete()
    .filter("workout_exercise", "in", associated_workout_exercises);

  const _deleteWorkoutExercise = await supabase
    .from("workout_exercise")
    .delete()
    .match({ workout: workout_id });

  const _deleteWorkout = await supabase
    .from("workout")
    .delete()
    .match({ id: workout_id });

  return _deleteWorkout.data;
}

export async function getWorkout(id) {
  let { data: workout, error } = await supabase
    .from("workouts_with_location")
    .select("*")
    .eq("id", id);
  return workout;
}

export async function getExercisesForWorkout(id) {
  let { data, error } = await supabase
    .from("setsforworkout")
    .select("*")
    .eq("workout_id", id)
    .order("set_id");

  return data;
}

export async function finishWorkout(id, datetime) {
  const { data, error } = await supabase
    .from("workout")
    .update({ datetime_end: datetime })
    .match({ id: id });
  return data;
}

export async function getWorkoutsForUser(userId) {
  const { data, error } = await supabase
    .from("workouts_with_location")
    .select("*")
    .eq("user_id", userId);
  const workouts = data;

  return workouts.sort(
    (a, b) => new Date(b.datetime_start) - new Date(a.datetime_start)
  );
}

export async function postExercisetoWorkout({ workout_id, exercise_id }) {
  const workoutExercise = await supabase
    .from("workout_exercise")
    .select("*, exercise!inner(*)")
    .eq("exercise", exercise_id)
    .eq("workout", workout_id);

  if (workoutExercise?.data) {
    return;
  }

  const addExercise = await supabase
    .from("workout_exercise")
    .insert([{ exercise: exercise_id, workout: workout_id }]);

  const addSet = await supabase.from("set").insert([
    {
      workout_exercise: addExercise?.data?.[0]?.id,
      weight: null,
      repetitions: null,
      completed: false,
    },
  ]);

  return addSet?.data?.[0];
}

export async function deleteExerciseFromWorkout(form) {
  const deleteSets = await supabase
    .from("set")
    .delete()
    .match({ workout_exercise: form.get("workout_exercise_id") });

  const deleteWorkoutExercise = await supabase
    .from("workout_exercise")
    .delete()
    .match({ id: form.get("workout_exercise_id") });
  return;
}
