// استبدل هذه القيم ببيانات مشروعك من Supabase -> Settings -> API
const SUPABASE_URL = "https://wtrzqtlxtvbvkkyzkeea.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cnpxdGx4dHZidmtreXprZWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MTI5MTQsImV4cCI6MjA5NjM4ODkxNH0.YltjNexrvyq2SrFPPOhoI6SA9YCOOr0m6bWAVi-MExY";

// تهيئة العميل الخاص بـ Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
