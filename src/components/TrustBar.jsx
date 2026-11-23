'use client';

import React from 'react';
import { CalendarDays, FileCheck2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: CalendarDays,
      title: '+7 Años de Experiencia',
      description: 'Más de 1.500 fiestas y eventos exitosos en Bogotá y la Sabana.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200'
    },
    {
      icon: FileCheck2,
      title: 'Facturación Electrónica',
      description: 'RUT vigente y documentación lista para conjuntos y empresas.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200'
    },
    {
      icon: ShieldCheck,
      title: 'Personal con ARL y PILA',
      description: 'Recreadores uniformados con seguridad social completa.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200'
    },
    {
      icon: HeartPulse,
      title: 'Primeros Auxilios',
      description: 'Capacitación en seguridad infantil y dinámicas no violentas.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 border-rose-200'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-6 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-indigo-200 hover:shadow-sm transition"
              >
                <div className={`p-3 rounded-xl border ${item.bgColor} ${item.color} flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
