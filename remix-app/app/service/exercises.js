import supabase from "~/supabase.js";

export async function getExercises(muscle_group) {
  if (muscle_group) {
    const { data, error } = await supabase
      .from("exercise")
      .select("*")
      .eq("muscle_group", muscle_group);
    return data;
  } else {
    const { data, error } = await supabase.from("exercise").select("*");
    return data;
  }
}

export async function getMuscleGroups() {
  const { data, error } = await supabase
    .from("distinct_muscle_groups")
    .select("*")
    .order("name");
  return data;
}

export async function getExercisesForUser(userId) {
  const { data, error } = await supabase
    .from("exercises_for_user")
    .select("*")
    .eq("user_id", userId);
  return data;
}

export async function getSummaryStatsForExercise(userId) {
  const { data, error } = await supabase
    .from("last_workout_with_exercise")
    .select("*")
    .eq("user_id", userId);
  return data;
}
