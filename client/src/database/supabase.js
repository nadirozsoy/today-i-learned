import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qlrcadttdhyrwmmymkea.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscmNhZHR0ZGh5cndtbXlta2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzOTIwNTAsImV4cCI6MTk5MTk2ODA1MH0.-G0x4MvTkRdRRGoYdGA_W227ipZsmczV5qEPWJNh5_g'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
