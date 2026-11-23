'use client';

import React from 'react';
import { Heart, ShieldCheck, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function AboutUs() {
  const pillars = [
    {
      icon: Clock,
      title: 'Puntualidad Absoluta',
      desc: 'Llegamos 30 a 45 minutos antes para montaje y ambientación. Tu cronograma y tu tiempo son sagrados.',
      bg: 'bg-[#FFF4CC]',
      color: 'text-[#996B00]'
    },
    {
      icon: Heart,
      title: 'Recreación Sin Violencia',
      desc: 'Dinámicas basadas en empatía, arte y valores. Cero burlas, apodos ni humillaciones en público.',
      bg: 'bg-[#FCE1D6]',
      color: 'text-[#E26248]'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad & Protocolos',
      desc: 'Personal capacitado en primeros auxilios básicos, pólizas vigentes y maquillaje al agua hipoalergénico.',
      bg: 'bg-[#D9F2EC]',
      color: 'text-[#1F7E73]'
    },
    {
      icon: Users,
      title: 'Vocación Pedagógica',
      desc: 'Recreadores y actores estudiantes de artes escénicas, pedagogía o educación física uniformados con ARL.',
      bg: 'bg-[#E8DFF5]',
      color: 'text-[#6442DF]'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Filosofía */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5CFA]" />
              <span>Nuestra Filosofía</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
              Devolviéndole la magia y el arte a las celebraciones infantiles
            </h2>

            <p className="text-base sm:text-lg text-[#555560] leading-relaxed">
              En <strong className="text-[#242429]">Imagin-ART</strong> nacimos para transformar la recreación tradicional en una experiencia artística auténtica. Creemos firmemente que una fiesta infantil debe ser un espacio de asombro, respeto mutuo y alegría compartida entre niños y adultos.
            </p>

            <p className="text-sm text-[#555560] leading-relaxed">
              Trabajamos con familias en todas las localidades de Bogotá (Usaquén, Suba, Colina, Cedritos, Salitre, Chapinero) y municipios de la Sabana (Chía, Cajicá, Cota, Soacha). Cada integrante de nuestro equipo cuenta con seguridad social verificable y vocación pedagógica comprobada.
            </p>

            {/* 4 Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white p-4.5 rounded-3xl border border-[#EAE0D0] shadow-soft flex items-start gap-3.5"
                  >
                    <div className={`p-2.5 ${pil.bg} ${pil.color} rounded-2xl flex-shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#242429] font-display">{pil.title}</h4>
                      <p className="text-[11px] text-[#555560] mt-0.5 leading-snug">{pil.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Fotográfica de Compromiso */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF6EE] border border-[#EAE0D0] rounded-[2.5rem] p-7 sm:p-8 shadow-soft-lg space-y-6">
              
              <div className="rounded-3xl overflow-hidden shadow-soft h-52 bg-[#E8DFF5] relative">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=80"
                  alt="Equipo de recreadores y actores de Imagin-ART"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white drop-shadow font-display">
                  Staff Uniformado & Certificado
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#242429] font-display">
                  Garantía de Calidad Imagin-ART
                </h3>
                <p className="text-xs text-[#555560] mt-1 leading-relaxed">
                  Presentación impecable con camisetas institucionales, escarapela y verificación de antecedentes al 100%.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#555560] bg-white p-4 rounded-2xl border border-[#EAE0D0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <span>Seguridad social y ARL al día (Planilla PILA previa).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <span>Fórmulas de burbujas biodegradables no tóxicas.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <span>Protocolos de seguridad y cuidado infantil en eventos.</span>
                </div>
              </div>

              <div className="text-[11px] text-[#767682] pt-2 border-t border-[#EAE0D0] text-center">
                {LEGAL_INFO.companyName} • NIT {LEGAL_INFO.nit} • Bogotá D.C.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
