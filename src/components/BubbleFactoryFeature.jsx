'use client';

import React from 'react';
import { Sparkles, MessageCircle, CheckCircle2, Flame, Wind, Eye, Users } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function BubbleFactoryFeature({ onSelectShow }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const bubbleWhatsAppMsg = encodeURIComponent(
    'Hola Imagin-ART-recreación, vi el show estrella "La Fábrica de las Burbujas" en su web y quiero cotizarlo para una fiesta infantil en Bogotá.'
  );

  const bubbleHighlights = [
    {
      icon: Eye,
      title: 'Burbujas Gigantes (+2 Metros)',
      desc: 'Estructuras gigantescas y túneles de burbuja iridiscente que flotan en el aire dejando a los niños boquiabiertos.'
    },
    {
      icon: Wind,
      title: 'Burbujas con Humo Blanco',
      desc: 'Burbujas opacas y misteriosas rellenas de vapor frío que al reventar liberan una nube mágica en las manos de los pequeños.'
    },
    {
      icon: Flame,
      title: 'El Desafío del Fuego Controlado',
      desc: 'Un truco de ciencia y magia 100% seguro y supervisado: burbujas con fuego en la palma de la mano del recreador/actor.'
    },
    {
      icon: Users,
      title: '¡El Gran Encapsulador de Niños!',
      desc: 'El momento más esperado: colocamos a cada niño o al cumpleañero dentro de una burbuja de jabón gigante. ¡La foto soñada!'
    }
  ];

  return (
    <section id="burbujas" className="py-20 bg-gradient-to-b from-sky-50 via-purple-50/50 to-white relative overflow-hidden">
      
      {/* Decorative Bubble Blurs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner de Presentación */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-purple-700 shadow-sm text-xs font-black uppercase tracking-wider mb-4 font-sans">
            <span className="text-base">🫧</span>
            <span>El Show Estrella de Imagin-ART</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            La Fábrica de las{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-sky-500">
              Burbujas Mágicas
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Un espectáculo teatral y sensorial donde la ciencia se transforma en poesía. 
            Burbujas gigantes, trucos con humo, burbujas que botan en guantes y el inigualable 
            <strong className="text-purple-900 font-extrabold"> encapsulador de niños</strong>.
          </p>
        </div>

        {/* Showcase Principal: 2 Columnas con Escenario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Tarjeta Escénica (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-sky-500 p-1 shadow-2xl">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-[22px] p-6 sm:p-8 text-white relative overflow-hidden">
                
                {/* Floating bubbles emojis */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce">🫧</div>
                <div className="absolute bottom-4 left-4 text-2xl animate-pulse">✨</div>

                <div className="space-y-4">
                  <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    Experiencia Sensorial 100% Interactiva
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    ¡Todos los Niños Pasan al Escenario!
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-sans">
                    No es solo mirar: los niños interactúan con las burbujas, las tocan, aprenden secretos divertidos y el homenajeado es coronado dentro de un domo gigante de jabón.
                  </p>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Fórmula especial biodegradable y no irritante para los ojos.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Protección de pisos con tapete antideslizante profesional.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Apto para interiores (salones comunales) y exteriores protegidos.</span>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="pt-3 space-y-2.5">
                    <a
                      href={`https://wa.me/${cleanWhatsAppNumber}?text=${bubbleWhatsAppMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2 font-display"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Cotizar Show de Burbujas por WhatsApp</span>
                    </a>

                    <a
                      href="#cotizador"
                      className="w-full py-2.5 text-center text-xs text-purple-200 hover:text-white font-bold block transition"
                    >
                      O agrégalo como extra en tu cotización personalizada ↓
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Columna Derecha: 4 Momentos de la Fábrica (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bubbleHighlights.map((hl, idx) => {
                const Icon = hl.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border-2 border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-lg transition duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-100 to-sky-100 group-hover:from-purple-600 group-hover:to-sky-500 flex items-center justify-center text-purple-700 group-hover:text-white transition duration-300 mb-4 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-base font-black text-slate-900 group-hover:text-purple-700 transition font-display mb-2">
                      {hl.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {hl.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Testimonio Corto del Show de Burbujas */}
            <div className="mt-6 p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center gap-4">
              <span className="text-3xl">🫧</span>
              <p className="text-xs sm:text-sm text-purple-950 font-medium">
                <em>"El momento del encapsulador de burbuja gigante fue mágico. Las fotos de mi hija dentro de la burbuja quedaron espectaculares y todos los papás nos preguntaron dónde los habíamos contratado."</em>
                <strong className="block text-xs font-bold text-purple-700 mt-1">— Andrea Morales (Cumpleaños 5 años, Cedritos)</strong>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
