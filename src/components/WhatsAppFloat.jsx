'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function WhatsAppFloat() {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const greeting = encodeURIComponent('¡Hola Imagin-ART-recreación! Quisiera cotizar un evento recreativo.');

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>¡Cotiza con Imagin-ART en minutos!</span>
      </div>

      {/* Floating button */}
      <a
        href={`https://wa.me/${cleanWhatsAppNumber}?text=${greeting}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp para cotizar evento con Imagin-ART-recreación"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 transition transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </aside>
  );
}
