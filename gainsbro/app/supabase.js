import { createClient } from "@supabase/supabase-js";

let supabase;

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
if (process.env.NODE_ENV === "production") {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  if (!global.supabase) {
    global.supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  supabase = global.supabase;
}

export default supabase;
