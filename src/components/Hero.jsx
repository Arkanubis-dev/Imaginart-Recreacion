'use client';

import React, { useState } from 'react';
import { Palette, Sparkles, MessageCircle, Calendar, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Hero() {
  const [activeClip, setActiveClip] = useState(0);

  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const whatsAppMsg = encodeURIComponent('Hola Imagin-ART-recreación, vi su página web y quiero cotizar un evento recreativo en Bogotá.');

  // Escenas visuales auténticas
  const visualClips = [
    {
      title: 'Pintucaritas Artístico & Globoflexia',
      subtitle: 'Maquillaje profesional hipoalergénico con escarcha y figuras creativas',
      badge: 'FIESTAS INFANTILES',
      bgGradient: 'from-amber-400 via-rose-400 to-indigo-500',
      tag: 'Salitre & Cedritos'
    },
    {
      title: 'Día del Niño en Conjuntos Residenciales',
      subtitle: 'Inflables temáticos gigantes, estaciones de feria kermesse y orden logístico',
      badge: 'CONJUNTOS RESIDENCIALES',
      bgGradient: 'from-blue-500 via-teal-400 to-emerald-400',
      tag: 'Chía & Suba'
    },
    {
      title: 'Mega Miniteca Neón & Glow Party',
      subtitle: 'Estructura de luces robóticas, DJ profesional, pintura glow y hora loca',
      badge: 'MINITECA GLOW',
      bgGradient: 'from-purple-600 via-pink-500 to-amber-400',
      tag: 'Colina & Usaquén'
    }
  ];

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-indigo-50/70 via-white to-amber-50/30">
      
      {/* Background Soft Creative Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Comercial (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Ubicación y Cobertura */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-6">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-slate-700">
                Bogotá D.C. y Sabana (Chía, Cajicá, Cota, Soacha)
              </span>
              <span className="text-xs bg-indigo-100 text-indigo-700 font-black px-2 py-0.5 rounded-full">
                Imagin-ART
              </span>
            </div>

            {/* H1 Claro y Contundente */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Recreación Infantil y Eventos para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500">
                Conjuntos y Empresas en Bogotá
              </span>
            </h1>

            {/* Subtítulo Corto de Propuesta de Valor */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              En <strong className="text-slate-900 font-bold">Imagin-ART-recreación</strong> combinamos dinámicas recreativas y arte lúdico: puntualidad británica, energía inagotable, recreadores uniformados con ARL y seguridad certificada. 
              <span className="text-indigo-600 font-semibold block mt-1">¡Cero estrés para los papás y diversión inolvidable para los niños!</span>
            </p>

            {/* Dos Botones Principales */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* Botón Principal: Cotizar por WhatsApp */}
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${whatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-600/25 transition transform hover:-translate-y-1 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Cotizar por WhatsApp (300 125 0524)</span>
              </a>

              {/* Botón Secundario: Ver Paquetes */}
              <a
                href="#paquetes"
                className="w-full sm:w-auto px-7 py-4 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span>Ver Paquetes & Tarifas</span>
              </a>
            </div>

            {/* Sello de Confianza Rápido */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Respuesta inmediata en menos de 15 minutos • Sin cobros ocultos</span>
            </div>

          </div>

          {/* Columna Derecha: Visual de Impacto (Luminoso & Colorido) (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl group">
              
              {/* Escena dinámica */}
              <div className={`relative h-80 sm:h-96 w-full bg-gradient-to-br ${visualClips[activeClip].bgGradient} flex flex-col justify-between p-6 transition-all duration-700`}>
                
                {/* Patrón de brillo */}
                <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]"></div>

                {/* Top Badge & Live Indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full bg-white text-slate-900 shadow-md">
                    {visualClips[activeClip].badge}
                  </span>
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-emerald-700 font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Evento Real</span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/25 border border-white/40 backdrop-blur-md mx-auto flex items-center justify-center text-white mb-3 shadow-lg">
                    <Sparkles className="w-8 h-8 text-amber-200 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-black text-white drop-shadow-md">
                    {visualClips[activeClip].title}
                  </h3>
                  <p className="text-xs text-white/95 mt-1 max-w-xs mx-auto drop-shadow font-medium">
                    {visualClips[activeClip].subtitle}
                  </p>
                </div>

                {/* Bottom Controls / Clip Selectors */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/20 text-xs text-white">
                  <div className="flex gap-1.5">
                    {visualClips.map((clip, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveClip(idx)}
                        className={`h-2 rounded-full transition-all ${
                          activeClip === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        title={clip.title}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-white bg-black/20 px-2 py-0.5 rounded-full">
                    📍 {visualClips[activeClip].tag}
                  </span>
                </div>

              </div>

              {/* Pie de autenticidad */}
              <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                <span className="text-[11px] font-medium">
                  ✓ Dinámicas artísticas y recreación 100% familiar en Bogotá.
                </span>
                <a href="#galeria" className="text-indigo-600 font-bold hover:underline text-[11px]">
                  Ver galería
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
