import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gkvpqesgyscdtmlpctql.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log(process.env.SUPABASE_KEY);
