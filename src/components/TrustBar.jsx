'use client';

import React from 'react';
import { CalendarDays, FileCheck2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: CalendarDays,
      title: '+7 Años en Bogotá',
      description: 'Más de 1.500 fiestas exitosas en la capital y la Sabana.',
      color: 'text-[#996B00]',
      bgColor: 'bg-[#FFF4CC]'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad Social & ARL',
      description: 'Recreadores uniformados con planilla PILA verificada.',
      color: 'text-[#1F7E73]',
      bgColor: 'bg-[#D9F2EC]'
    },
    {
      icon: FileCheck2,
      title: 'Facturación DIAN',
      description: 'RUT al día y documentación formal para conjuntos y empresas.',
      color: 'text-[#6442DF]',
      bgColor: 'bg-[#E8DFF5]'
    },
    {
      icon: HeartPulse,
      title: 'Recreación Sin Violencia',
      description: 'Dinámicas basadas en inclusión, respeto y primeros auxilios.',
      color: 'text-[#E26248]',
      bgColor: 'bg-[#FCE1D6]'
    }
  ];

  return (
    <section className="bg-[#FDFBF7] border-y border-[#F4ECE0] py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-3xl bg-white border border-[#EAE0D0] shadow-soft hover:shadow-soft-lg transition-all duration-200"
              >
                <div className={`p-3 rounded-2xl ${item.bgColor} ${item.color} flex-shrink-0`}>
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#242429] leading-snug font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#555560] mt-0.5 leading-relaxed">
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
