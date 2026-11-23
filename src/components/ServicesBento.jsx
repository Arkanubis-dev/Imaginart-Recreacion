'use client';

import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function ServicesBento({ onSelectShow }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <section id="shows" className="py-20 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            <span>Repertorio Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Experiencias diseñadas para encantar a cada edad
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#555560] font-normal leading-relaxed">
            Desde la magia visual de nuestras burbujas gigantes hasta montajes teatrales y olimpiadas para grandes aforos. Cada show cuenta con recreadores y actores profesionales de <strong className="text-[#242429]">Imagin-ART</strong>.
          </p>
        </div>

        {/* Bento Grid Editorial: 4 Bloques con Fotografía Protagonista y Zoom Suave */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Bento Card 1: La Fábrica de las Burbujas (Destacado Principal - 7 cols en desktop) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-white border border-[#EAE0D0] overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Foto Protagonista con Zoom Suave */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-[#D9F2EC]">
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80"
                alt="Show La Fábrica de las Burbujas Gigantes con niños asombrados"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/60 via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#242429] text-xs font-bold shadow-sm inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B82A]" />
                  <span>Show Estrella</span>
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-white/90 font-medium">Todas las edades</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mt-0.5 drop-shadow-sm">
                  La Fábrica de las Burbujas
                </h3>
              </div>
            </div>

            {/* Contenido Editorial Limpio */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
              <p className="text-sm sm:text-base text-[#555560] leading-relaxed">
                Un espectáculo visual y sensorial inigualable: burbujas gigantes de más de 2 metros, humo blanco que flota en el aire, truco del fuego controlado supervisado y el momento culminante donde <strong className="text-[#242429]">cada niño entra dentro de una burbuja de jabón gigante</strong> con fórmula biodegradable no irritante.
              </p>

              <div className="pt-2 border-t border-[#F4ECE0] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2A9D8F]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tapete antideslizante para salones o jardín</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART, deseo cotizar el show estrella "La Fábrica de las Burbujas".')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white text-xs font-semibold rounded-xl shadow-soft transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectShow && onSelectShow('fabrica-burbujas')}
                    className="px-4 py-2.5 bg-[#FAF6EE] hover:bg-[#E8DFF5] text-[#6442DF] border border-[#D5C4ED] text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Calcular en Cotizador</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bento Card 2: Teatro Infantil & Títeres (5 cols en desktop) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[2.5rem] bg-white border border-[#EAE0D0] overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group">
            
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#E8DFF5]">
              <img
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80"
                alt="Teatro infantil y títeres con actores sonrientes"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/60 via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#242429] text-xs font-bold shadow-sm">
                  1 a 7 Años
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-display drop-shadow-sm">
                  Teatro & Títeres de Gran Formato
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-[#555560] leading-relaxed">
                Retablo teatral artesanal con personajes entrañables, música en vivo y mensajes sobre amistad y cuidado de la naturaleza. Ideal para captar la atención de los más pequeñitos sin saturación sonora.
              </p>

              <div className="pt-2 border-t border-[#F4ECE0] flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART, deseo cotizar el Show de Teatro y Títeres en Bogotá.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FAF6EE] hover:bg-[#E8DFF5] text-[#242429] text-xs font-semibold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#7C5CFA]" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectShow && onSelectShow('titeres')}
                  className="px-3.5 py-2 bg-[#E8DFF5]/60 hover:bg-[#E8DFF5] text-[#6442DF] text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Calcular en Cotizador</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bento Card 3: Circo & Magia Cómica (5 cols en desktop) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[2.5rem] bg-white border border-[#EAE0D0] overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group">
            
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FFF4CC]">
              <img
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
                alt="Circo, comedia sana y magia divertida para niños"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/60 via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#242429] text-xs font-bold shadow-sm">
                  3 a 12 Años
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-display drop-shadow-sm">
                  Circo & Magia Cómica
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-[#555560] leading-relaxed">
                Platos chinos giratorios, malabares con pelotas gigantes y magia con objetos cotidianos donde los niños participan como estrellas del espectáculo. Risas aseguradas sin chistes groseros.
              </p>

              <div className="pt-2 border-t border-[#F4ECE0] flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART, deseo cotizar la Fiesta de Circo y Magia en Bogotá.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FAF6EE] hover:bg-[#FFF4CC] text-[#242429] text-xs font-semibold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E5B82A]" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectShow && onSelectShow('circo')}
                  className="px-3.5 py-2 bg-[#FFF4CC]/60 hover:bg-[#FFF4CC] text-[#996B00] text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Calcular en Cotizador</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bento Card 4: Eventos para Conjuntos & Empresas (7 cols en desktop) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-white border border-[#EAE0D0] overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group">
            
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FCE1D6]">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
                alt="Eventos masivos para conjuntos residenciales y empresas con inflables y kermesse"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/60 via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#242429] text-xs font-bold shadow-sm">
                  Copropiedades & Empresas B2B
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-white/90 font-medium">Grandes Aforos</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mt-0.5 drop-shadow-sm">
                  Día del Niño, Halloween, Novenas y Family Days
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
              <p className="text-sm text-[#555560] leading-relaxed">
                Logística completa para administraciones de conjuntos y gerencias de talento humano: circuitos de inflables certificados, estaciones de feria kermesse, rumbaterapia, sonido lineal y presentación formal con RUT, Cámara de Comercio, Facturación Electrónica DIAN y planillas PILA con ARL.
              </p>

              <div className="pt-2 border-t border-[#F4ECE0] flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#empresas-conjuntos"
                  className="text-xs font-bold text-[#7C5CFA] hover:text-[#6442DF] flex items-center gap-1"
                >
                  <span>Descargar ficha técnica institucional B2B</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onSelectShow && onSelectShow('conjunto')}
                  className="px-4 py-2 bg-[#7C5CFA] hover:bg-[#6442DF] text-white text-xs font-semibold rounded-xl shadow-soft transition cursor-pointer"
                >
                  Cotizar para Conjunto / Empresa
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
