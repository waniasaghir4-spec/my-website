import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://hzgruygiifkzfjafqaov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3J1eWdpaWZremZqYWZxYW92Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc2NTM0NSwiZXhwIjoyMDk3MzQxMzQ1fQ._gvW3XHCs4Imgb0DCN9xg1mqlGlyrdp5D6mUGk0v6Y8"
)