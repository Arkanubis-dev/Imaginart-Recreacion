import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      client_name,
      client_phone,
      client_email,
      event_type,
      city,
      event_date,
      guest_count,
      addons,
      estimated_total,
      notes,
      habeas_data_accepted,
      terms_accepted
    } = body;

    // Validación mínima obligatoria
    if (!client_name || !client_phone) {
      return NextResponse.json(
        { error: 'El nombre y teléfono son obligatorios.' },
        { status: 400 }
      );
    }

    if (!habeas_data_accepted) {
      return NextResponse.json(
        { error: 'Es obligatorio aceptar la Política de Tratamiento de Datos Personales (Ley 1581).' },
        { status: 400 }
      );
    }

    const leadPayload = {
      client_name,
      client_phone,
      client_email: client_email || null,
      event_type: event_type || 'Fiesta Infantil',
      city: city || 'Bogotá D.C.',
      event_date: event_date || null,
      guest_count: guest_count || null,
      addons: Array.isArray(addons) ? addons : [],
      estimated_total: Number(estimated_total) || 0,
      notes: notes || '',
      habeas_data_accepted: true,
      terms_accepted: true,
      accepted_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      ip_or_agent: request.headers.get('user-agent') || 'web'
    };

    if (supabaseUrl && serviceKey) {
      const supabaseAdmin = createClient(supabaseUrl, serviceKey);
      const { data, error } = await supabaseAdmin.from('leads_recreacion').insert([leadPayload]);

      if (error) {
        console.warn('Advertencia al insertar en Supabase desde API route:', error.message);
        return NextResponse.json({
          success: true,
          saved_in_db: false,
          warning: error.message,
          data: leadPayload
        });
      }

      return NextResponse.json({
        success: true,
        saved_in_db: true,
        data
      });
    }

    return NextResponse.json({
      success: true,
      saved_in_db: false,
      message: 'Supabase no configurado, cotización procesada en memoria.',
      data: leadPayload
    });

  } catch (err) {
    console.error('Error en API route de cotización:', err);
    return NextResponse.json(
      { error: 'Error interno al procesar cotización', details: err.message },
      { status: 500 }
    );
  }
}
