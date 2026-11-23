'use client';

import React from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight, Theater } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Packages({ onSelectPackage }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const clearPlans = [
    {
      id: 'plan-basico',
      title: 'Plan Lúdico & Pintucaritas',
      subtitle: 'Ideal para celebraciones familiares, primeros añitos y grupos pequeños en casa o salón comunal.',
      priceStarting: 'Desde $290.000 COP',
      badge: null,
      hours: '2 Horas de recreación dirigida',
      staff: '2 Recreadores profesionales con ARL',
      features: [
        'Pintucaritas artístico hipoalergénico profesional (maquillaje al agua con glitter)',
        'Globoflexia ilimitada con figuras divertidas (espadas, flores, perritos, coronas)',
        'Juegos cooperativos rompehielos y dinámicas lúdicas sin violencia',
        'Acompañamiento en el canto del cumpleaños, piñata y ponqué',
        'Cabina de sonido portátil para ambientación musical'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el *Plan Lúdico & Pintucaritas* desde $290.000 COP para un evento en Bogotá.'
    },
    {
      id: 'plan-intermedio',
      title: 'Plan Mágico Teatral & Títeres',
      subtitle: 'Nuestro paquete más solicitado. Recreación dinámica combinada con obra de títeres o show de magia cómica.',
      priceStarting: 'Desde $420.000 COP',
      badge: 'MÁS POPULAR',
      hours: '3 Horas de espectáculo continuo',
      staff: '2 Actores / Recreadores + Coordinador',
      features: [
        'Show de Magia Cómica interactiva o Show de Títeres con canciones',
        'Pintucaritas temático con escarcha y maquillaje de fantasía',
        'Globoflexia ilimitada para todos los niños',
        'Concursos por equipos, pruebas de relevos y paracaídas multicolor gigante',
        'Cabina de sonido amplificada con micrófono inalámbrico y música infantil',
        'Minifarra / Carnavalito con accesorios festivos y baile dirigido'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el *Plan Mágico Teatral & Títeres* desde $420.000 COP para una fiesta en Bogotá.'
    },
    {
      id: 'plan-premium',
      title: 'Mega Show Burbujas & Circo',
      subtitle: 'La experiencia escénica definitiva: incluye el show estrella de Burbujas Gigantes, Encapsulador y Circo.',
      priceStarting: 'Desde $680.000 COP',
      badge: 'SHOW ESTRELLA',
      hours: '3.5 Horas de gran espectáculo',
      staff: 'Staff teatral completo: 2 Actores + Logística con ARL',
      features: [
        'Show "La Fábrica de las Burbujas": burbujas gigantes, humo blanco y fuego seguro',
        '¡El Gran Encapsulador! Cada niño dentro de una burbuja de jabón gigante',
        'Taller y show cómico de circo (malabares, platos chinos y acrobacias)',
        'Pintucaritas artístico premium al agua + Globoflexia ilimitada',
        'Cabina de sonido envolvente con micrófonos y DJ musical infantil',
        'Tapete antideslizante y fórmula hipoalergénica para máxima seguridad'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el *Mega Show Burbujas & Circo* desde $680.000 COP en Bogotá.'
    }
  ];

  return (
    <section id="paquetes" className="py-20 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-wider mb-3 font-sans">
            <Sparkles className="w-4 h-4" />
            <span>Tarifas Claras y Sin Sorpresas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Planes Recreativos & Teatrales
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-sans">
            Tarifas de referencia en Bogotá y la Sabana. Cada plan incluye recreadores uniformados de <strong className="text-purple-900 font-extrabold">Imagin-ART</strong> con ARL y puntualidad garantizada.
          </p>
        </div>

        {/* Los 3 Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {clearPlans.map((plan) => {
            const isFeatured = plan.id === 'plan-intermedio';
            const isStar = plan.id === 'plan-premium';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white border-2 flex flex-col justify-between p-7 sm:p-8 transition duration-300 hover:shadow-2xl ${
                  isStar
                    ? 'border-purple-400 shadow-xl shadow-purple-600/10 md:-translate-y-2 ring-2 ring-purple-400/20'
                    : isFeatured
                    ? 'border-amber-400 shadow-lg shadow-amber-400/10'
                    : 'border-slate-200 hover:border-purple-200'
                }`}
              >
                {/* Badge Superior */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md font-sans ${
                      isStar ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-sky-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mt-2 mb-2 font-display">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                    {plan.subtitle}
                  </p>

                  {/* Precios Desde $... */}
                  <div className="mb-6 pb-6 border-b border-purple-100">
                    <span className="text-xs text-slate-400 block font-medium">Inversión:</span>
                    <span className="text-3xl font-black text-purple-900 tracking-tight font-display">
                      {plan.priceStarting}
                    </span>
                    <div className="mt-3 space-y-1 text-xs text-slate-600 font-semibold font-sans">
                      <p className="text-purple-700 font-bold">⏱ {plan.hours}</p>
                      <p>👥 {plan.staff}</p>
                    </div>
                  </div>

                  {/* Detalle de Qué Incluye */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-800 font-sans">
                      ¿Qué incluye este plan?
                    </p>
                    <ul className="space-y-2.5 font-sans">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón WhatsApp Oficial: 3001250524 */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition font-display ${
                      isStar
                        ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white shadow-lg shadow-purple-600/30'
                        : isFeatured
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <a
                    href="#cotizador"
                    onClick={() => onSelectPackage && onSelectPackage(plan.id)}
                    className="w-full py-2 text-center text-xs text-purple-700 hover:text-purple-900 font-bold block font-sans"
                  >
                    O personalizar en el cotizador paso a paso ↓
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
