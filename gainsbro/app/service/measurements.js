import supabase from "~/supabase";

export async function getMeasurementTypes() {
  const { data, error } = await supabase.from("measurements").select("*");

  return data;
}
