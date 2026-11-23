'use client';

import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcela Gómez',
      role: 'Mamá de Santiago (Cumpleaños 6 años)',
      location: 'Colina Campestre, Bogotá',
      stars: 5,
      comment: 'Los recreadores de Imagin-ART llegaron media hora antes, impecablemente uniformados y con una calidez hermosa. Mantuvieron a 22 niños de 6 años fascinados con las burbujas y juegos cooperativos. Por primera vez pude disfrutar la fiesta de mi hijo sin estrés.',
      date: 'Hace 2 semanas',
      accent: 'border-[#BFE7DE]'
    },
    {
      name: 'Carlos Restrepo',
      role: 'Administrador Propiedad Horizontal',
      location: 'Conjunto Cedro Real (Cedritos)',
      stars: 5,
      comment: 'Contratamos a Imagin-ART para el Día del Niño con más de 160 niños. Nos entregaron planilla PILA con ARL y factura electrónica a tiempo para el Consejo. Los inflables estaban impecables y el orden logístico fue excelente.',
      date: 'Abril 2026',
      accent: 'border-[#D5C4ED]'
    },
    {
      name: 'Viviana Beltrán',
      role: 'Mamá de Valentina (10 años)',
      location: 'Salitre Plaza, Bogotá',
      stars: 5,
      comment: 'La Miniteca Neón fue un espectáculo total. El DJ animador puso música acorde a su edad, sin canciones vulgares. La pintura glow artística y las fotos de las niñas con las luces UV quedaron espectaculares.',
      date: 'Hace 1 mes',
      accent: 'border-[#F8C8B5]'
    },
    {
      name: 'Ing. Fernando Pardo',
      role: 'Gerente de Talento Humano',
      location: 'Empresa de Logística, Chapinero',
      stars: 5,
      comment: 'Excelente coordinación en nuestro Family Day. Integraron tanto a los adultos como a los niños con estaciones de olimpiadas y ferias. Muy formales y con toda la documentación que exige la empresa.',
      date: 'Hace 3 meses',
      accent: 'border-[#FFE999]'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-[#E5B82A]" />
            <span>Calificación 4.9 / 5.0 en Google Bogotá</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Familias y administradores que confían en nosotros
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#555560] leading-relaxed">
            La confianza en <strong className="text-[#242429]">Imagin-ART</strong> se construye con puntualidad rigurosa, arte sin violencia y personal con vocación.
          </p>
        </div>

        {/* Grilla de Testimonios Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className={`bg-white border ${test.accent} rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between shadow-soft hover:shadow-soft-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#E5B82A]">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#EAE0D0]" />
                </div>

                <p className="text-xs text-[#555560] leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4ECE0]">
                <h4 className="text-sm font-bold text-[#242429] font-display">{test.name}</h4>
                <p className="text-[11px] text-[#7C5CFA] font-medium">{test.role}</p>
                <div className="flex items-center justify-between text-[10px] text-[#767682] mt-1.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#767682]" />
                    {test.location}
                  </span>
                  <span>{test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
