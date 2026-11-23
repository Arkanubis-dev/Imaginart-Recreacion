'use client';

import React from 'react';
import { Star, MapPin } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcela Gómez',
      role: 'Mamá de Santiago (Cumpleaños 6 años)',
      location: 'Colina Campestre, Bogotá',
      stars: 5,
      comment: 'Los recreadores de Imagin-ART llegaron 25 minutos antes, impecablemente uniformados y con una energía increíble. Mantuvieron a 22 niños de 6 años entretenidos sin parar y sin juegos violentos. ¡Por primera vez pude disfrutar la fiesta sin estrés!',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Carlos Restrepo',
      role: 'Administrador Propiedad Horizontal',
      location: 'Conjunto Residencial Cedro Real (Cedritos)',
      stars: 5,
      comment: 'Contratamos a Imagin-ART para el Día del Niño con 180 niños. Nos entregaron planilla PILA con ARL y factura electrónica a tiempo para presentar al Consejo. Los inflables estaban impecables y el orden logístico fue excelente.',
      date: 'Abril 2026'
    },
    {
      name: 'Viviana Beltrán',
      role: 'Mamá de Valentina (10 años)',
      location: 'Salitre Plaza, Bogotá',
      stars: 5,
      comment: 'La Mega Miniteca Neón fue un espectáculo. El DJ animador puso música acorde a su edad, las luces UV y la pintura glow artística hicieron que las fotos quedaran increíbles. ¡100% recomendados en Bogotá!',
      date: 'Hace 1 mes'
    },
    {
      name: 'Ing. Fernando Pardo',
      role: 'Gerente de Talento Humano',
      location: 'Empresa de Logística, Chapinero',
      stars: 5,
      comment: 'Excelente coordinación en nuestro Family Day. Integraron tanto a los adultos como a los niños con estaciones de olimpiadas y ferias. Muy profesionales y con toda la formalidad que exige la empresa.',
      date: 'Hace 3 meses'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Calificación 4.9 / 5.0 en Google</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Opiniones Reales de Familias y Administradores
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            En <strong className="text-slate-900">Imagin-ART-recreación</strong> la confianza se construye con puntualidad, arte y alegría.
          </p>
        </div>

        {/* Grilla de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-[#FAFBFD] border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <h4 className="text-sm font-black text-slate-900">{test.name}</h4>
                <p className="text-xs text-indigo-600 font-bold">{test.role}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {test.location}
                  </span>
                  <span>{test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Respaldo de Google Business */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 text-xs text-slate-700 shadow-sm">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-black">
              G
            </div>
            <span>
              Verificado en <strong>Google Business Profile Bogotá</strong> • Más de 180 reseñas de 5 estrellas.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
