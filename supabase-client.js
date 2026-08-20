/* =====================================================================
   LAKOU SCES INFIRMIÈRES — client Supabase (singleton)
   Doit être chargé APRÈS le script CDN @supabase/supabase-js
   et AVANT tout script qui utilise window.supabaseClient.
   Pattern IIFE : évite les erreurs "Multiple GoTrueClient instances".
===================================================================== */
(function () {
  if (window.supabaseClient) return; // déjà initialisé — ne rien refaire

  const SUPABASE_URL = 'https://zrdqpvasejhmwqcegvna.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_IpevEwExPWBBYAOUVMvVFg_CJaogOI7';

  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.error('supabase-client.js : le SDK Supabase (CDN) doit être chargé AVANT ce fichier.');
    return;
  }

  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
})();
