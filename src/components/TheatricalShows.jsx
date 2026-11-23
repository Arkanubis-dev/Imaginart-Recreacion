'use client';

import React from 'react';
import { Theater, Sparkles, MessageCircle, ArrowRight, Heart, Award, Star } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function TheatricalShows({ onSelectShow }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const shows = [
    {
      id: 'circo',
      title: 'Fiesta Infantil de Circo',
      tagline: 'Acrobacias Cómicas, Malabares y Niños Artistas',
      badge: 'MUCHA RISA',
      emoji: '🎪',
      age: 'Para 3 a 12 años',
      color: 'from-amber-500 to-rose-500',
      description: 'Una experiencia circense llena de humor fino y participativo. Los niños aprenden trucos de malabares, equilibrismo con platos chinos y son los protagonistas del gran circo.',
      highlights: [
        'Payasos teatrales y mimos sin pintura agresiva ni burlas',
        'Malabares con pelotas, aros y platos chinos para niños',
        'Dinámicas de equilibrio, mini zancos y desafíos cooperativos',
        'Certificado simbólico de "Gran Artista del Circo" para todos'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el show teatral "Fiesta Infantil de Circo" en Bogotá.'
    },
    {
      id: 'magia-teatro',
      title: 'El Hechizo Mágico & El Reino Perdido',
      tagline: 'Obra de Teatro Infantil con Retos y Acertijos',
      badge: 'AVENTURA ÉPICA',
      emoji: '🪄',
      age: 'Para 4 a 11 años',
      color: 'from-purple-600 to-indigo-600',
      description: 'Una obra interactiva donde un mago despistado y su aprendiz necesitan la ayuda de los niños para romper un hechizo misterioso antes de que termine la fiesta.',
      highlights: [
        'Actores profesionales caracterizados con vestuario teatral',
        'Pistas escondidas y acertijos que fomentan el trabajo en equipo',
        'Aparición de objetos mágicos, fuego frío y efectos visuales',
        'Final festivo con coronación del cumpleañero y baile del reino'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, me encantó la obra teatral "El Hechizo Mágico" y quiero cotizarla.'
    },
    {
      id: 'titeres',
      title: 'Aventuras en Títeres de Gran Formato',
      tagline: 'Retablo Artesanal, Música y Canciones Originales',
      badge: 'PRIMERA INFANCIA',
      emoji: '🎭',
      age: 'Para 1 a 6 años',
      color: 'from-sky-500 to-teal-500',
      description: 'Cuentos llenos de ternura, valores ecológicos y canciones interactivas. Títeres de bocón elaborados artesanalmente que conversan directamente con los más pequeñitos.',
      highlights: [
        'Retablo teatral colorido con telón e iluminación propia',
        'Historias sobre amistad, compartir y cuidado de la naturaleza',
        'Canciones en vivo acompañadas de instrumentos suaves',
        'Interacción cercana: los niños saludan y abrazan a los títeres'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, deseo cotizar el Show de Títeres para una fiesta infantil en Bogotá.'
    },
    {
      id: 'burbujas-show',
      title: 'La Fábrica de las Burbujas Gigantes',
      tagline: 'Ciencia, Burbujas con Humo y Encapsulador de Niños',
      badge: 'SHOW ESTRELLA',
      emoji: '🫧',
      age: 'Todas las edades',
      color: 'from-purple-700 via-fuchsia-600 to-sky-500',
      description: 'Nuestro espectáculo insignia inspirado en la magia escénica. Burbujas kilométricas, humo blanco, fuego seguro y cada niño dentro de una burbuja gigante.',
      highlights: [
        'Burbujas gigantes de más de 2 metros de largo',
        'Burbujas con humo misterioso y trucos con fuego controlado',
        'Encapsulador gigante donde el niño entra dentro de la burbuja',
        'Tapete antideslizante y fórmula hipoalergénica no irritante'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar el show estrella "La Fábrica de las Burbujas" para mi fiesta.'
    },
    {
      id: 'miniteca-teatral',
      title: 'Mega Miniteca Neón & Rumba Glow',
      tagline: 'DJ Animador, Luces Robóticas y Pintura Glow',
      badge: 'TENDENCIA',
      emoji: '🪩',
      age: 'Para 7 a 15 años',
      color: 'from-fuchsia-600 to-purple-800',
      description: 'Para los más grandes que buscan una rumba sana, energética y llena de color neón con DJ animador profesional y ambientación de discoteca privada.',
      highlights: [
        'Luces UV Neón, cabezas robóticas y láser visual',
        'Maquillaje neón artístico con pinturas al agua que brillan en UV',
        'Máquina de humo controlada y accesorios de hora loca',
        'Batallas de baile, coreografías TikTok y rumba sana'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, quiero cotizar la Mega Miniteca Neón para una fiesta en Bogotá.'
    },
    {
      id: 'temporada',
      title: 'Obras de Temporada (Conjuntos & Colegios)',
      tagline: 'Halloween, Día del Niño y Novenas Navideñas',
      badge: 'INSTITUCIONAL',
      emoji: '🎪',
      age: 'Eventos masivos',
      color: 'from-emerald-600 to-indigo-700',
      description: 'Grandes montajes teatrales pensados para auditorios, polideportivos y zonas comunes de conjuntos residenciales y colegios.',
      highlights: [
        'Obra de Halloween: "La Fiesta de los Monstruos Amigables"',
        'Día del Niño: Gran Feria Kermesse y estaciones lúdicas masivas',
        'Novenas Navideñas: Pesebre en vivo teatralizado y coros festivos',
        'Sonido lineal, logística completa y facturación electrónica'
      ],
      whatsappMsg: 'Hola Imagin-ART-recreación, requiero una obra de temporada para un conjunto residencial o colegio en Bogotá.'
    }
  ];

  return (
    <section id="shows" className="py-20 bg-white border-t border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-wider mb-4 font-sans">
            <Theater className="w-4 h-4" />
            <span>Repertorio Escénico Imagin-ART</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Nuestros Shows y Obras Teatrales
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Elige el espectáculo ideal para la temática y edad de tus invitados. 
            Cada show está diseñado y actuado por <strong className="text-purple-900 font-bold">artistas escénicos profesionales</strong> con puntualidad y póliza de cumplimiento.
          </p>
        </div>

        {/* Grilla de 6 Shows Teatrales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show) => {
            const isStar = show.id === 'burbujas-show';
            return (
              <div
                key={show.id}
                className={`rounded-3xl border-2 flex flex-col justify-between p-6 sm:p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl relative ${
                  isStar
                    ? 'border-purple-400 bg-gradient-to-b from-purple-50/70 via-white to-sky-50/40 shadow-xl ring-2 ring-purple-400/20'
                    : 'border-slate-200 bg-white hover:border-purple-300'
                }`}
              >
                {/* Badge Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${show.color} shadow-sm font-sans`}>
                    {show.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {show.age}
                  </span>
                </div>

                <div>
                  {/* Emoji & Titulo */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                      {show.emoji}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-display leading-tight">
                        {show.title}
                      </h3>
                      <p className="text-xs font-bold text-purple-700 mt-0.5 font-sans">
                        {show.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs text-slate-600 leading-relaxed my-4 font-sans">
                    {show.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100 text-xs text-slate-700 font-sans">
                    {show.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Cotización por WhatsApp y Cotizador */}
                <div className="pt-2 space-y-2">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(show.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition font-display ${
                      isStar
                        ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white shadow-lg shadow-purple-600/30'
                        : 'bg-slate-900 hover:bg-purple-700 text-white shadow-sm'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar este Show</span>
                  </a>

                  <a
                    href="#cotizador"
                    onClick={() => onSelectShow && onSelectShow(show.id)}
                    className="w-full py-1.5 text-center text-xs text-purple-700 hover:text-purple-950 font-bold block cursor-pointer font-sans"
                  >
                    O personalizar en cotizador ↓
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Banner Inferior: ¿Quieres combinar recreación con show? */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
              🎉 ¡Combina a tu gusto!
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-display">
              ¿Quieres recreación dirigida + Fábrica de Burbujas o Circo?
            </h4>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl font-sans">
              Puedes agregar cualquiera de estos shows a tu paquete base en nuestro cotizador interactivo con descuento especial por combo.
            </p>
          </div>

          <a
            href="#cotizador"
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition flex-shrink-0 shadow-lg font-display"
          >
            Ir al Cotizador Paso a Paso ↓
          </a>
        </div>

      </div>
    </section>
  );
}
