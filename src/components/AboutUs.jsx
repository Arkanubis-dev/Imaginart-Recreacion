'use client';

import React from 'react';
import { Heart, ShieldCheck, Clock, Users, Palette, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function AboutUs() {
  const pillars = [
    {
      icon: Clock,
      title: 'Puntualidad Absoluta',
      desc: 'Llegamos 30 minutos antes para montaje y preparación. Tu tiempo y tu programación son sagrados.'
    },
    {
      icon: Heart,
      title: 'Recreación & Arte Sin Violencia',
      desc: 'Dinámicas basadas en valores, inclusión, trabajo en equipo y respeto. Cero burlas ni humillaciones.'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad Integral',
      desc: 'Capacitación en primeros auxilios, pólizas de cumplimiento y maquillaje hipoalergénico certificado.'
    },
    {
      icon: Users,
      title: 'Personal Apasionado',
      desc: 'Recreadores uniformados, estudiantes de artes escénicas, pedagogía o educación física con vocación.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white border-t border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full font-sans">
              Nuestra Filosofía
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              Más de 7 Años Llenando de Arte, Magia y Sonrisas las Fiestas en Bogotá
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              En <strong className="text-purple-900 font-extrabold">Imagin-ART-recreación</strong> nacimos con una misión clara: devolverle la magia y el valor pedagógico a la recreación infantil y familiar, alejándonos de la improvisación.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed font-sans">
              Somos aliados estratégicos de familias, conjuntos residenciales de todas las localidades y empresas de la sabana. Nuestro personal se capacita permanentemente en artes escénicas, manejo de grupos infantiles, primeros auxilios básicos y protocolos de seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div key={idx} className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-start gap-3">
                    <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0 mt-0.5 border border-purple-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900">{pil.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{pil.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-purple-50/70 to-white border-2 border-purple-100 rounded-3xl p-7 shadow-lg space-y-6 text-center">
              
              <div className="w-20 h-20 bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-amber-400 rounded-3xl mx-auto flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <Palette className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-display">Staff Certificado & Uniformado</h3>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  Presentación impecable con camisetas institucionales, escarapela y calzado adecuado.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-purple-100 text-left space-y-2 text-xs text-slate-700 shadow-sm font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Seguridad social y ARL al día (Planilla PILA previa).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Antecedentes judiciales verificados al 100%.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Formación en manejo de emociones y aforos infantiles.</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-semibold font-sans">
                {LEGAL_INFO.companyName} • NIT {LEGAL_INFO.nit} • WhatsApp: {LEGAL_INFO.whatsapp}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
