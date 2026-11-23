'use client';

import React from 'react';
import { PartyPopper, Castle, Disc3, Award, Sparkles, Smile, Popcorn, Flame, Heart } from 'lucide-react';

const SERVICES_LIST = [
  {
    icon: PartyPopper,
    title: 'Fiestas Infantiles & Temáticas',
    color: 'from-orange-500 to-amber-500',
    description: 'Recreación dirigida con pintucaritas hipoalergénico, globoflexia ilimitada, títeres, magia cómica, rompehielos y hora loca adaptada a la edad.',
    tags: ['4 a 12 años', 'Pintucaritas', 'Globoflexia', 'Magia Cómica']
  },
  {
    icon: Castle,
    title: 'Alquiler de Inflables & Saltarines',
    color: 'from-blue-500 to-cyan-500',
    description: 'Castillos saltarines, toboganes gigantes y pistas de obstáculos. Equipos lavados, desinfectados y con operador técnico certificado para total seguridad.',
    tags: ['Aforo Seguro', 'Operador Incluido', 'Motor Continuo', '100% Desinfectados']
  },
  {
    icon: Disc3,
    title: 'Mega Minitecas Neón & Glow',
    color: 'from-purple-500 to-pink-500',
    description: 'Sonido profesional de alta potencia, DJ animador, luces láser, cabezas móviles, luces UV neón, pintura corporal glow y show de humo controlado.',
    tags: ['DJ en Vivo', 'Luces UV Neón', 'Maquillaje Glow', 'Máquina de Humo']
  },
  {
    icon: Award,
    title: 'Eventos Corporativos & Team Building',
    color: 'from-emerald-500 to-teal-500',
    description: 'Días de la familia, olimpiadas recreativas para empresas, pausas activas masivas, coaching lúdico, integración y celebraciones de fin de año.',
    tags: ['Facturación Electrónica', 'Póliza de Cumplimiento', 'Grandes Aforos']
  },
  {
    icon: Popcorn,
    title: 'Estaciones de Snacks & Feria',
    color: 'from-rose-500 to-red-500',
    description: 'Carritos vintage de crispetas recién hechas, algodón de azúcar dulce de colores, fuentes de chocolate y estaciones de feria kermesse con premios.',
    tags: ['Crispeteras', 'Algodón Dulce', 'Kermesse', 'Juegos Tradicionales']
  },
  {
    icon: Sparkles,
    title: 'Shows Temáticos & Personajes en Vivo',
    color: 'from-yellow-500 to-amber-500',
    description: 'Visita de princesas, superhéroes, personajes de cine, show de burbujas gigantes y talleres creativos de plastilina, slime y arte.',
    tags: ['Trajes Profesionales', 'Burbujas Gigantes', 'Talleres Creativos']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Diversión Diseñada para Todas las Edades
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Diseñamos experiencias recreativas a la medida de tu espacio, número de invitados y presupuesto, cumpliendo todos los protocolos de seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/5 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${srv.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                  {srv.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[11px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
