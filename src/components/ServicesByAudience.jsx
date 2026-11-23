'use client';

import React from 'react';
import { Cake, Building2, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function ServicesByAudience({ onSelectAudience }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const audiences = [
    {
      id: 'infantil',
      icon: Cake,
      title: 'Fiestas Infantiles',
      badge: 'CUMPLEAÑOS & FAMILIAS',
      color: 'from-amber-400 to-rose-400',
      description: 'Recreación temática y artística sin violencia, dinamismo total y cero estrés para los papás. Adaptado a la edad exacta de tu hijo.',
      items: [
        'Cumpleaños de 1 a 14 años y primeras comuniones',
        'Pintucaritas artístico hipoalergénico y globoflexia',
        'Magia cómica interactiva y títeres para los más peques',
        'Acompañamiento en piñata, canto y reparto de ponqué'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar una fiesta infantil en Bogotá.'
    },
    {
      id: 'conjuntos',
      icon: Building2,
      title: 'Conjuntos Residenciales',
      badge: 'PROPIEDAD HORIZONTAL',
      color: 'from-indigo-600 to-blue-500',
      description: 'Eventos masivos organizados para comunidades seguras. Entregamos toda la documentación para el Consejo de Administración.',
      items: [
        'Celebración del Día del Niño (abril) y Halloween (octubre)',
        'Novenas navideñas interactivas y vacaciones recreativas',
        'Inflables temáticos gigantes con operadores y control de turnos',
        'Kermesse comunitaria y guardería lúdica durante asambleas'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, soy administrador de un conjunto residencial en Bogotá y deseo cotizar un evento.'
    },
    {
      id: 'corporativo',
      icon: Briefcase,
      title: 'Eventos Corporativos',
      badge: 'EMPRESAS & RRHH',
      color: 'from-purple-600 to-indigo-600',
      description: 'Integración laboral y bienestar para colaboradores y sus familias. Facturación electrónica y seguridad social al día.',
      items: [
        'Día de la Familia empresarial y fiestas de fin de año',
        'Olimpiadas recreativas y team building outdoor',
        'Pausas activas masivas y dinámicas de liderazgo',
        'Sonido lineal, animación y logística integral de tarima'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, represento una empresa en Bogotá y requiero cotizar un evento corporativo.'
    },
    {
      id: 'colegios',
      icon: GraduationCap,
      title: 'Colegios y Jardines',
      badge: 'SECTOR EDUCATIVO',
      color: 'from-emerald-500 to-teal-500',
      description: 'Jornadas recreativas pedagógicas con enfoque en valores, arte lúdico, trabajo en equipo y cuidado de los estudiantes.',
      items: [
        'Clausuras de fin de año y convivencias escolares',
        'Semana del estudiante y ferias científicas o recreativas',
        'Talleres creativos de arte, plastilina y slime',
        'Recreadores formados en pedagogía y primeros auxilios'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, deseo cotizar una jornada recreativa para un colegio o jardín en Bogotá.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Servicios a tu Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Soluciones Recreativas & Artísticas
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            En <strong className="text-slate-900 font-bold">Imagin-ART-recreación</strong> adaptamos la logística, el sonido y las dinámicas según tu público objetivo.
          </p>
        </div>

        {/* Cuadrícula de 4 Públicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="bg-white border border-slate-200/90 hover:border-indigo-300 rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${aud.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                      {aud.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {aud.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {aud.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(aud.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-slate-50 hover:bg-indigo-600 text-slate-700 hover:text-white border border-slate-200 hover:border-indigo-600 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Cotizar {aud.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
