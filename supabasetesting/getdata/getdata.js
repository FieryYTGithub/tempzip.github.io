import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jrrmnluhzleryemrjhrl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('definetly a real table')
  .select()

document.getElementById("data").innerHTML = data
document.getElementById("error").innerHTML = error