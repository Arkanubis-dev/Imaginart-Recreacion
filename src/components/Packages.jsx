'use client';

import React from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Packages({ onSelectPackage }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const clearPlans = [
    {
      id: 'plan-basico',
      title: 'Plan Básico (Chiqui Fiesta)',
      subtitle: 'Ideal para celebraciones familiares y grupos pequeños en casa o salón comunal.',
      priceStarting: 'Desde $290.000 COP',
      badge: null,
      hours: '2 Horas de recreación',
      staff: '2 Recreadores profesionales uniformados',
      features: [
        'Pintucaritas artístico básico (maquillaje hipoalergénico)',
        'Globoflexia de figuras para todos los niños (espadas, perritos, flores)',
        'Juegos dinámicos rompehielos y dinámicas de integración',
        'Acompañamiento en el canto del cumpleaños y piñata',
        'Cabina de sonido portátil para ambientación musical'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, me interesa cotizar el *Plan Básico (Chiqui Fiesta)* desde $290.000 COP para un evento en Bogotá.'
    },
    {
      id: 'plan-intermedio',
      title: 'Plan Intermedio (Fiesta Mágica)',
      subtitle: 'Nuestro paquete estrella. Dinamismo completo con magia cómica y sonido potente.',
      priceStarting: 'Desde $420.000 COP',
      badge: 'MÁS POPULAR',
      hours: '3 Horas de diversión continua',
      staff: '2 Recreadores + Coordinador de sonido',
      features: [
        'Pintucaritas profesional temático con escarcha y glitter',
        'Show de magia cómica interactiva que divierte a niños y adultos',
        'Globoflexia ilimitada durante todo el evento',
        'Concursos por equipos, pruebas de relevos y paracaídas gigante',
        'Cabina de sonido amplificada con micrófono inalámbrico',
        'Minifarra / Hora loca con accesorios festivos'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el *Plan Intermedio (Fiesta Mágica)* desde $420.000 COP para una celebración en Bogotá.'
    },
    {
      id: 'plan-premium',
      title: 'Plan Premium (Mega Fiesta & Miniteca)',
      subtitle: 'Experiencia total para fiestas llenas de energía, luces robóticas y show neón.',
      priceStarting: 'Desde $680.000 COP',
      badge: 'TODO INCLUIDO',
      hours: '4 Horas de espectáculo',
      staff: 'Staff completo: 2 Recreadores + DJ Animador',
      features: [
        'Estructura de luces robóticas, luces láser y reflectores UV Neón',
        'Estación de maquillaje neón (pintura corporal glow fluorescente)',
        'DJ profesional en vivo con mezclas de moda y rumba sana',
        'Máquina de humo controlada para efectos visuales',
        'Opción de inflable saltarín o show temático de personajes',
        'Kit completo de hora loca premium (manillas neón, antifaces, pitos)'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el *Plan Premium (Mega Fiesta & Miniteca)* desde $680.000 COP en Bogotá.'
    }
  ];

  return (
    <section id="paquetes" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Tarifas Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Planes Recreativos Diseñados para Tu Fiesta
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Tarifas de referencia en Bogotá y la Sabana. Cada plan incluye recreadores uniformados de <strong className="text-slate-900">Imagin-ART</strong> con ARL y puntualidad garantizada.
          </p>
        </div>

        {/* Los 3 Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {clearPlans.map((plan) => {
            const isFeatured = plan.id === 'plan-intermedio';
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white border flex flex-col justify-between p-7 sm:p-8 transition duration-300 hover:shadow-2xl ${
                  isFeatured
                    ? 'border-indigo-500 shadow-xl shadow-indigo-500/10 scale-100 md:-translate-y-2 ring-2 ring-indigo-500/20'
                    : 'border-slate-200/90 hover:border-indigo-200'
                }`}
              >
                {/* Badge Si es el más popular */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Precios Desde $... */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-xs text-slate-400 block font-medium">Inversión:</span>
                    <span className="text-3xl font-black text-indigo-700 tracking-tight">
                      {plan.priceStarting}
                    </span>
                    <div className="mt-3 space-y-1 text-xs text-slate-600 font-semibold">
                      <p className="text-indigo-600 font-bold">⏱ {plan.hours}</p>
                      <p>👥 {plan.staff}</p>
                    </div>
                  </div>

                  {/* Detalle de Qué Incluye */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                      ¿Qué incluye exactamente?
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón en cada tarjeta que abre WhatsApp con el número 3001250524 */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition ${
                      isFeatured
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <a
                    href="#cotizador"
                    onClick={() => onSelectPackage && onSelectPackage(plan.id)}
                    className="w-full py-2 text-center text-xs text-slate-500 hover:text-indigo-600 font-semibold block"
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
