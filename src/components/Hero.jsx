'use client';

import React from 'react';
import { MessageCircle, Calendar, Sparkles, Star, Theater, Wand2, PartyPopper } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Hero() {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const whatsAppMsg = encodeURIComponent('Hola Imagin-ART-recreación, vi su página web y quiero cotizar un evento recreativo en Bogotá.');

  return (
    <section id="inicio" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-purple-50/80 via-white to-amber-50/40">
      
      {/* Decorative festive bubbles background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-fuchsia-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Teatral (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tag Badge estilo La Teatrina */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 shadow-sm mb-6">
              <Theater className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-black text-purple-900 font-sans tracking-wide">
                Recreación & Teatro Infantil en Bogotá y Alrededores
              </span>
              <span className="text-xs bg-purple-700 text-white font-black px-2.5 py-0.5 rounded-full">
                Imagin-ART
              </span>
            </div>

            {/* H1 Principal Teatral y Cálido */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Recreación y Shows para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-amber-500">
                Fiestas Infantiles Mágicas
              </span>{' '}
              e Inolvidables
            </h1>

            {/* Subtítulo Corto de Propuesta de Valor */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              En <strong className="text-purple-900 font-extrabold">Imagin-ART-recreación</strong> convertimos tu fiesta en un verdadero espectáculo: 
              obras de teatro interactivas, la famosa <strong className="text-sky-600 font-bold">Fábrica de Burbujas Gigantes</strong>, títeres de gran formato, circo y magia cómica. 
              <span className="block mt-2 font-semibold text-slate-800">
                ¡Actores profesionales con ARL, puntualidad y diversión que cautiva a niños y grandes!
              </span>
            </p>

            {/* Botones de Conversión */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${whatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2.5 font-display"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Cotizar por WhatsApp (300 125 0524)</span>
              </a>

              <a
                href="#shows"
                className="w-full sm:w-auto px-7 py-4 text-base font-bold text-purple-900 bg-white hover:bg-purple-50 border-2 border-purple-200 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 font-sans"
              >
                <Theater className="w-5 h-5 text-purple-700" />
                <span>Ver Shows & Obras</span>
              </a>
            </div>

            {/* Sello de confianza */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 font-bold">
              <span className="flex items-center gap-1 text-amber-600">
                <Star className="w-4 h-4 fill-current text-amber-500" />
                +1.500 Familias y Conjuntos Felices
              </span>
              <span>•</span>
              <span className="text-purple-700">Respuesta en menos de 15 minutos</span>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Visual Teatral con Stickers Vivos (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Tarjeta Visual de Escenario */}
              <div className="rounded-3xl bg-white border-2 border-purple-100 p-6 shadow-2xl relative overflow-hidden">
                
                {/* Cabecera del Escenario */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-black text-purple-900 ml-1 font-display">
                      Escenario Imagin-ART
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                    Bogotá D.C.
                  </span>
                </div>

                {/* Show Destacado Visual */}
                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-700 via-fuchsia-600 to-amber-500 text-white shadow-lg text-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-2xl animate-spin-slow">✨</div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-2">
                      SHOW ESTRELLA
                    </span>
                    <h3 className="text-2xl font-black font-display drop-shadow">
                      La Fábrica de las Burbujas
                    </h3>
                    <p className="text-xs text-white/95 mt-1 max-w-xs mx-auto drop-shadow font-sans">
                      Burbujas gigantes, humo blanco, burbujas con fuego y encapsulador de niños.
                    </p>
                  </div>

                  {/* 3 Insignias de Shows */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl text-left">
                      <span className="text-lg block mb-1">🎪</span>
                      <strong className="text-purple-950 font-black block font-display">Fiesta de Circo</strong>
                      <span className="text-[11px] text-slate-500">Pruebas, malabares y comedia</span>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-left">
                      <span className="text-lg block mb-1">🪄</span>
                      <strong className="text-amber-950 font-black block font-display">El Hechizo Mágico</strong>
                      <span className="text-[11px] text-slate-500">Obra interactiva con acertijos</span>
                    </div>

                    <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-left">
                      <span className="text-lg block mb-1">🎭</span>
                      <strong className="text-sky-950 font-black block font-display">Show de Títeres</strong>
                      <span className="text-[11px] text-slate-500">Historias y canciones originales</span>
                    </div>

                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-left">
                      <span className="text-lg block mb-1">🎨</span>
                      <strong className="text-rose-950 font-black block font-display">Pintucaritas Artístico</strong>
                      <span className="text-[11px] text-slate-500">Glitter y maquillaje al agua</span>
                    </div>
                  </div>
                </div>

                {/* Footer de la tarjeta */}
                <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-bold text-purple-700">✓ Actores con ARL y seguridad</span>
                  <a href="#cotizador" className="text-emerald-700 font-black hover:underline">
                    Cotizar fecha →
                  </a>
                </div>

              </div>

              {/* Floating cute sticker */}
              <div className="absolute -bottom-4 -right-3 bg-amber-400 text-slate-950 px-4 py-2 rounded-2xl shadow-xl font-display font-black text-xs rotate-3 border-2 border-white animate-bounce-gentle">
                ¡Pura magia y sonrisas! 🎉
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
