'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function WhatsAppFloat() {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const greeting = encodeURIComponent('¡Hola Imagin-ART! Quisiera cotizar un evento infantil en Bogotá.');

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip discreto y elegante */}
      <div className="hidden sm:block mr-3 bg-white text-[#242429] text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-soft-lg border border-[#EAE0D0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>¡Cotiza tu evento en minutos por WhatsApp!</span>
      </div>

      {/* Botón flotante */}
      <a
        href={`https://wa.me/${cleanWhatsAppNumber}?text=${greeting}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp para cotizar evento con Imagin-ART"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#2A9D8F] hover:bg-[#1F7E73] text-white rounded-full flex items-center justify-center shadow-soft-lg transition-transform duration-200 transform hover:scale-105 active:scale-95 border-2 border-white"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
