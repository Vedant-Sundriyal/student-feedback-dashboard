import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbynkkdzyoigiihnbucp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieW5ra2R6eW9pZ2lpaG5idWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTMzMzAsImV4cCI6MjA2MzQyOTMzMH0.jvEM3S0qF49GdMKWoO8ZXId3U45IrxoSKVgviW-xE8o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
