import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL_SUPABASE!;
const supabaseKey = process.env.EXPO_PUBLIC_API_KEY_SUPABASE!;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
