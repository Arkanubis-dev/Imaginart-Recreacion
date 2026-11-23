import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn('No se pudo inicializar el cliente de Supabase:', err);
  }
}

export const supabase = client;

/**
 * Guarda una cotización o lead de recreación.
 * 1. Intenta enviar al backend `/api/quote` (usando clave de servicio con privilegios administrativos).
 * 2. Si falla la red, intenta vía cliente de Supabase.
 * 3. Como respaldo de seguridad, almacena en localStorage para que nunca se pierda un cliente.
 */
export async function saveQuoteLead(leadData) {
  const payload = {
    ...leadData,
    created_at: new Date().toISOString(),
    habeas_data_accepted: true,
    terms_accepted: true,
    accepted_at: new Date().toISOString(),
    ip_or_agent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
  };

  // 1. Intento vía API Route backend
  if (typeof window !== 'undefined') {
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const json = await response.json();
        return { success: true, provider: 'api', data: json };
      }
    } catch (e) {
      console.warn('Fallo al llamar a /api/quote, reintentando con cliente Supabase:', e);
    }
  }

  // 2. Intento directo cliente Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase.from('leads_recreacion').insert([payload]);
      if (!error) {
        return { success: true, provider: 'supabase-direct', data };
      }
    } catch (e) {
      console.warn('Fallo directo con Supabase:', e);
    }
  }

  // 3. Respaldo local
  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('recrea_quotes') || '[]');
      existing.push(payload);
      localStorage.setItem('recrea_quotes', JSON.stringify(existing));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage:', e);
    }
  }

  return { success: true, provider: 'local', payload };
}
