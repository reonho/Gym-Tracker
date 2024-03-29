import supabase from "~/supabase.js";

export async function getLocations(user) {
  const { data, error } = await supabase
    .from("location")
    .select("*")
    .eq("user_id", user);

  return data;
}

export async function getWorkoutsPerLocation(user) {
  const { data, error } = await supabase
    .from("workouts_per_location")
    .select("*")
    .eq("user_id", user);

  return data;
}

export async function deleteLocation(locationId) {
  const { data, error } = await supabase
    .from("location")
    .delete()
    .match({ id: locationId });

  return data;
}
export async function renameLocation(locationId, locationName) {
  const { data, error } = await supabase
    .from("location")
    .update({ name: locationName })
    .match({ id: locationId });
  return data;
}

export async function addLocation(locationName, userId) {
  const { data, error } = await supabase
    .from("location")
    .insert({ name: locationName, user_id: userId });
  return data;
}
