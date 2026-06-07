const SUPABASE_URL = "https://wtrzqtlxtvbvkkyzkeea.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cnpxdGx4dHZidmtreXprZWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MTI5MTQsImV4cCI6MjA5NjM4ODkxNH0.YltjNexrvyq2SrFPPOhoI6SA9YCOOr0m6bWAVi-MExY";

// مصفوفة فحص لضمان الوصول للدالة الصحيحة مهما اختلف نوع الـ CDN
if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else if (typeof window.supabaseClient !== 'undefined') {
    window.supabase = window.supabaseClient.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("تعذر العثور على دالة تهيئة مكتبة Supabase! تأكد من ترتيب السكربتات.");
}
