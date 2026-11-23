'use client';

import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Hero() {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');
  const whatsAppMsg = encodeURIComponent('Hola Imagin-ART, vi su página web y quiero cotizar una celebración infantil en Bogotá.');

  return (
    <section id="inicio" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#FDFBF7]">
      
      {/* Elementos ambientales suaves de fondo (sin degradados chillones) */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-[#E8DFF5]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#FFF4CC]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-[#D9F2EC]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Mensaje Editorial y Propuesta de Valor (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag editorial limpio (sin emojis excesivos ni píldoras neón) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFA]" />
              <span>Agencia de Eventos & Recreación en Bogotá</span>
            </div>

            {/* H1 Principal Editorial */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#242429] tracking-tight leading-[1.15] font-display">
              Creamos celebraciones{' '}
              <span className="relative inline-block text-[#242429]">
                mágicas
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#E8DFF5] -z-10 rounded-full" />
              </span>{' '}
              que los niños recuerdan para siempre.
            </h1>

            {/* Subtítulo descriptivo y cálido */}
            <p className="text-base sm:text-lg text-[#555560] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Recreación artística sin violencia, obras de teatro, circo y nuestra aclamada{' '}
              <strong className="text-[#242429] font-semibold">Fábrica de Burbujas Gigantes</strong>. 
              Personal profesional con ARL, puntualidad rigurosa y calidez para familias, conjuntos residenciales y empresas.
            </p>

            {/* Botones de acción principales */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${whatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-sm rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 font-display cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Cotizar por WhatsApp (300 125 0524)</span>
              </a>

              <a
                href="#shows"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-[#FAF6EE] text-[#242429] border border-[#EAE0D0] font-semibold text-sm rounded-2xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conoce Nuestros Shows</span>
                <ArrowRight className="w-4 h-4 text-[#7C5CFA]" />
              </a>
            </div>

            <div className="text-center lg:text-left">
              <button
                type="button"
                onClick={() => {
                  document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#7C5CFA] hover:text-[#6442DF] underline transition cursor-pointer"
              >
                O calcular presupuesto con el cotizador paso a paso ↓
              </button>
            </div>

            {/* Diferenciadores rápidos de confianza en texto elegante */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#555560]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                <span>Personal con ARL y PILA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                <span>Facturación Electrónica DIAN</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                <span>Bogotá y Municipios Sabana</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Composición dinámica tipo Collage Fotográfico (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Foto Principal: Burbujas Gigantes y Asombro */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft-xl border-4 border-white bg-[#FCE1D6]">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                  alt="Niños felices disfrutando show de burbujas gigantes en fiesta infantil"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Pie fotográfico sutil */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    La Fábrica de Burbujas
                  </span>
                  <p className="text-sm font-semibold mt-1 drop-shadow-sm font-display">
                    Magia que asombra a niños y papás
                  </p>
                </div>
              </div>

              {/* Foto Secundaria Superpuesta: Alegría y Pintucaritas */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-52 rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-[#D9F2EC] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80"
                  alt="Celebración infantil alegre y llena de color"
                  className="w-full h-36 sm:h-44 object-cover"
                />
              </div>

              {/* Sello flotante orgánico: +7 Años de Magia */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#FFF4CC] border-2 border-white rounded-3xl p-3.5 shadow-soft-lg transform rotate-3 animate-soft-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-2xl bg-[#E5B82A]/20 flex items-center justify-center text-[#996B00]">
                    <Sparkles className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#242429] block font-display">
                      +7 Años Creando Magia
                    </span>
                    <span className="text-[10px] text-[#555560] block">
                      En Bogotá & Sabana
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
