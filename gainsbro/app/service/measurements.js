import supabase from "~/supabase";

export async function getMeasurementTypes() {
  const { data, error } = await supabase.from("measurements").select("*");

  return data;
}

export async function addMeasurement(measurement_id, value, user, date) {
  const { data, error } = await supabase.from("user_measurement").insert({
    measurement: measurement_id,
    value: value,
    user_id: user,
    date: date,
  });
  return data;
}

export async function getMeasurementHistory(measurement_id, user) {
  const { data, error } = await supabase
    .from("user_measurement")
    .select("*")
    .eq("user_id", user)
    .eq("measurement", measurement_id);
  return data;
}

export async function getMeasurementFromId(id, user) {
  const { data, error } = await supabase
    .from("user_measurement")
    .select("*")
    .eq("user_id", user)
    .eq("id", id);

  return data;
}

export async function editMeasurement(oldMeasurement, newMeasurement) {
  const { data, error } = await supabase
    .from("user_measurement")
    .update(newMeasurement)
    .match(oldMeasurement);

  return data;
}

export async function deleteMeasurement(oldMeasurement) {
  const { data, error } = await supabase
    .from("user_measurement")
    .delete()
    .match(oldMeasurement);

  return data;
}
