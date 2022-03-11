import dayjs from "dayjs";
import supabase from "~/supabase";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export async function deleteSet(formSet) {
  await supabase
    .from("set")
    .delete()
    .match({ id: formSet.get("index") });
}

export async function addSet(formSet) {
  const add = await supabase.from("set").insert([
    {
      workout_exercise: formSet.get("workout_exercise_id"),
      weight: null,
      repetitions: null,
      completed: false,
    },
  ]);

  return add?.data?.[0];
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
  const { data } = await supabase
    .from("set")
    .update(submissionSet)
    .match({ id: formSet.get("index") });
  return data;
}
//default filters for latest week
export async function getSetsForUser(userId, filter_start, filter_end) {
  const filter_date_start = filter_start
    ? dayjs(filter_start)
    : dayjs(dayjs().week(dayjs().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? dayjs(filter_end) : dayjs();

  const { data, error } = await supabase
    .from("setsforworkout")
    .select("*")
    .eq("user_id", userId)
    .gte("datetime_start", filter_date_start)
    .lte("datetime_start", filter_date_end);

  return data;
}

export async function getBestSetPerWorkoutExercise(userId, exerciseId) {
  if (exerciseId) {
    const { data } = await supabase
      .from("max_volume_for_workout_exercise")
      .select("*")
      .eq("user_id", userId)
      .eq("exercise_id", exerciseId);
    return data;
  } else {
    const { data } = await supabase
      .from("max_volume_for_workout_exercise")
      .select("*")
      .eq("user_id", userId);
    return data;
  }
}
