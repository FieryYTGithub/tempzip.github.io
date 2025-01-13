import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrrmnluhzleryemrjhrl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)