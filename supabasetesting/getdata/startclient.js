import { createClient } from '/node_modules/@supabase/supabase-js'
const supabaseUrl = 'https://jrrmnluhzleryemrjhrl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impycm1ubHVoemxlcnllbXJqaHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MDk5MDUsImV4cCI6MjA1MjM4NTkwNX0.ta97f8ZoddPTefGQJT6d54atM3KNQ_3M2PhKEojnY3w'
const supabase = createClient('https://jrrmnluhzleryemrjhrl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impycm1ubHVoemxlcnllbXJqaHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MDk5MDUsImV4cCI6MjA1MjM4NTkwNX0.ta97f8ZoddPTefGQJT6d54atM3KNQ_3M2PhKEojnY3w')
export default supabase