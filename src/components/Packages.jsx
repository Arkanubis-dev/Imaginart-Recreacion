'use client';

import React from 'react';
import { Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Packages({ onSelectPackage }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const clearPlans = [
    {
      id: 'plan-basico',
      title: 'Plan Lúdico & Pintucaritas',
      subtitle: 'Celebraciones familiares, primeros añitos y reuniones en casa o salón comunal.',
      priceStarting: '$290.000 COP',
      badge: 'Primeros Añitos',
      hours: '2 Horas de recreación dirigida',
      staff: '2 Recreadores profesionales con ARL',
      accentBg: 'bg-[#D9F2EC]/40',
      accentBorder: 'border-[#BFE7DE]',
      badgeBg: 'bg-[#D9F2EC] text-[#1F7E73]',
      features: [
        'Pintucaritas artístico profesional (maquillaje al agua con glitter)',
        'Globoflexia ilimitada con figuras divertidas para todos los niños',
        'Juegos cooperativos rompehielos y dinámicas lúdicas sin violencia',
        'Acompañamiento en el canto del cumpleaños, piñata y ponqué',
        'Cabina de sonido portátil para ambientación musical'
      ],
      whatsappMsg: 'Hola Imagin-ART, quiero cotizar el Plan Lúdico & Pintucaritas ($290.000 COP) para una fiesta en Bogotá.'
    },
    {
      id: 'plan-intermedio',
      title: 'Plan Mágico Teatral & Títeres',
      subtitle: 'Nuestro paquete estrella. Recreación dinámica combinada con obra de títeres o magia cómica.',
      priceStarting: '$420.000 COP',
      badge: 'El Más Solicitado',
      hours: '3 Horas de espectáculo continuo',
      staff: '2 Actores / Recreadores + Coordinador',
      accentBg: 'bg-[#E8DFF5]/50',
      accentBorder: 'border-[#D5C4ED]',
      badgeBg: 'bg-[#E8DFF5] text-[#6442DF]',
      features: [
        'Show de Magia Cómica interactiva o Show de Títeres con canciones',
        'Pintucaritas temático con escarcha y maquillaje de fantasía',
        'Globoflexia ilimitada para todos los niños asistentes',
        'Concursos por equipos, carreras de relevos y paracaídas gigante',
        'Cabina de sonido amplificada con micrófono inalámbrico',
        'Minifarra / Carnavalito con dinámicas de baile y hora loca'
      ],
      whatsappMsg: 'Hola Imagin-ART, quiero cotizar el Plan Mágico Teatral & Títeres ($420.000 COP) en Bogotá.'
    },
    {
      id: 'plan-premium',
      title: 'Mega Show Burbujas & Circo',
      subtitle: 'La experiencia escénica definitiva: incluye el show de Burbujas Gigantes, Encapsulador y Circo.',
      priceStarting: '$680.000 COP',
      badge: 'Experiencia Completa',
      hours: '3.5 Horas de gran espectáculo',
      staff: 'Staff teatral completo: 2 Actores + Logística con ARL',
      accentBg: 'bg-[#FCE1D6]/40',
      accentBorder: 'border-[#FAC8B5]',
      badgeBg: 'bg-[#FCE1D6] text-[#E26248]',
      features: [
        'Show "La Fábrica de las Burbujas": burbujas gigantes, humo blanco y fuego seguro',
        '¡El Gran Encapsulador! Cada niño dentro de una burbuja de jabón gigante',
        'Taller y show cómico de circo (malabares con platos chinos y acrobacias)',
        'Pintucaritas artístico premium al agua + Globoflexia ilimitada',
        'Sonido envolvente profesional y DJ de música infantil',
        'Tapete antideslizante y fórmula biodegradable para máxima seguridad'
      ],
      whatsappMsg: 'Hola Imagin-ART, quiero cotizar el Mega Show Burbujas & Circo ($680.000 COP) en Bogotá.'
    }
  ];

  return (
    <section id="paquetes" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFA]" />
            <span>Tarifas Transparentes & Sin Sorpresas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Planes diseñados con amor y profesionalismo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#555560] leading-relaxed">
            Tarifas de referencia en Bogotá y municipios aledaños. Cada plan incluye recreadores uniformados de <strong className="text-[#242429]">Imagin-ART</strong> con ARL y puntualidad garantizada.
          </p>
        </div>

        {/* 3 Planes con Diseño Editorial Pastel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {clearPlans.map((plan) => {
            const isFeatured = plan.id === 'plan-intermedio';

            return (
              <div
                key={plan.id}
                className={`relative rounded-[2.5rem] bg-white border ${plan.accentBorder} flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 hover:shadow-soft-xl ${
                  isFeatured
                    ? 'shadow-soft-lg ring-2 ring-[#7C5CFA]/20 md:-translate-y-2'
                    : 'shadow-soft'
                }`}
              >
                {/* Header de la tarjeta con badge pastel */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${plan.badgeBg}`}>
                      {plan.badge}
                    </span>
                    <span className="text-xs text-[#555560]">Bogotá & Sabana</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#242429] mb-2 font-display">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-[#555560] leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Precios y duración en recuadro suave */}
                  <div className={`p-4 rounded-2xl ${plan.accentBg} mb-6 border border-white/60`}>
                    <span className="text-[11px] text-[#555560] block font-medium uppercase tracking-wider">Inversión estimada:</span>
                    <span className="text-3xl font-extrabold text-[#242429] tracking-tight font-display">
                      {plan.priceStarting}
                    </span>
                    <div className="mt-2.5 space-y-0.5 text-xs text-[#555560]">
                      <p className="font-semibold text-[#242429]">⏱ {plan.hours}</p>
                      <p>👥 {plan.staff}</p>
                    </div>
                  </div>

                  {/* Lista de Qué Incluye */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#242429]">
                      ¿Qué incluye este plan?
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#555560]">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                          <Check className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Acciones: WhatsApp y Personalizar */}
                <div className="space-y-2.5 pt-4 border-t border-[#F4ECE0]">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-2xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition font-display ${
                      isFeatured
                        ? 'bg-[#7C5CFA] hover:bg-[#6442DF] text-white shadow-soft hover:shadow-soft-lg'
                        : 'bg-[#242429] hover:bg-[#34343D] text-white shadow-soft'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectPackage && onSelectPackage(plan.id)}
                    className="w-full py-2 text-center text-xs text-[#555560] hover:text-[#7C5CFA] font-semibold block transition cursor-pointer"
                  >
                    O personalizar en el cotizador paso a paso ↓
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
