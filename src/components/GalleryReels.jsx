'use client';

import React, { useState } from 'react';
import { Sparkles, Play, Pause, Camera, ShieldCheck, Heart, Film, ArrowUpRight } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function GalleryReels() {
  const [activeTab, setActiveTab] = useState('all');
  const [playingReel, setPlayingReel] = useState(null);

  const reels = [
    {
      id: 1,
      title: '¡Hora Loca & Globoflexia Creativa!',
      author: '@imaginart_recreacion',
      views: '14.2K',
      likes: '1.5K',
      location: 'Cedritos, Bogotá',
      duration: '0:15',
      energy: 'Explosión de Baile y Arte',
      bgGradient: 'from-amber-400 via-rose-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Día del Niño en Conjunto Residencial',
      author: '@imaginart_recreacion',
      views: '19.8K',
      likes: '2.6K',
      location: 'Chía / Cota',
      duration: '0:20',
      energy: 'Inflable Gigante & Kermesse',
      bgGradient: 'from-indigo-600 via-cyan-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Mega Miniteca Neón & Glow Facepaint',
      author: '@imaginart_recreacion',
      views: '25.3K',
      likes: '3.4K',
      location: 'Salitre, Bogotá',
      duration: '0:18',
      energy: 'Luces UV & DJ en Vivo',
      bgGradient: 'from-purple-600 via-pink-500 to-amber-400'
    }
  ];

  const photos = [
    {
      category: 'infantil',
      title: 'Pintucaritas Artístico Hipoalergénico',
      location: 'Cumpleaños en Colina Campestre',
      caption: 'Maquillaje al agua fácil de remover, con glitter y escarcha.',
      bg: 'bg-gradient-to-tr from-amber-400/80 to-rose-400/80'
    },
    {
      category: 'inflables',
      title: 'Castillo Saltarín con Operador Certificado',
      location: 'Conjunto Residencial en Suba',
      caption: 'Control riguroso de turnos, sin calzado y máxima seguridad.',
      bg: 'bg-gradient-to-tr from-blue-500/80 to-indigo-600/80'
    },
    {
      category: 'miniteca',
      title: 'Montaje de Luces Robóticas y Sonido Pro',
      location: 'Fiesta Neón en Salitre Plaza',
      caption: 'Estructura con reflectores UV, efectos láser y máquina de humo.',
      bg: 'bg-gradient-to-tr from-purple-600/80 to-pink-500/80'
    },
    {
      category: 'conjuntos',
      title: 'Dinámica Masiva con Paracaídas de Colores',
      location: 'Día de la Familia en Chía',
      caption: 'Juegos cooperativos donde participan niños y papás.',
      bg: 'bg-gradient-to-tr from-emerald-500/80 to-teal-600/80'
    },
    {
      category: 'infantil',
      title: 'Globoflexia Personalizada Ilimitada',
      location: 'Evento Infantil en Usaquén',
      caption: 'Espadas, coronas de princesa, perritos y personajes.',
      bg: 'bg-gradient-to-tr from-rose-400/80 to-amber-400/80'
    },
    {
      category: 'conjuntos',
      title: 'Estación de Crispetas Vintage Recién Hechas',
      location: 'Feria en Cajicá',
      caption: 'Carritos vintage que llenan de olor a fiesta la celebración.',
      bg: 'bg-gradient-to-tr from-amber-400/80 to-orange-500/80'
    }
  ];

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter((p) => p.category === activeTab);

  return (
    <section id="galeria" className="py-20 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Prueba Visual & Energía Real
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Galería de Fotos & Momentos en Directo
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Así se viven de verdad las fiestas con <strong className="text-slate-900">Imagin-ART-recreación</strong> en Bogotá y la Sabana.
          </p>
        </div>

        {/* REELS / VIDEOS CORTOS INTERACTIVOS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-black text-slate-900">Reels & Momentos en Directo</h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Alegría 100% contagiosa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reels.map((reel) => {
              const isPlaying = playingReel === reel.id;
              return (
                <div
                  key={reel.id}
                  className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 flex flex-col justify-between p-5 group cursor-pointer"
                  onClick={() => setPlayingReel(isPlaying ? null : reel.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${reel.bgGradient} opacity-90 group-hover:scale-105 transition-all duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Header del Reel */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-white">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 font-bold text-[11px]">
                      📍 {reel.location}
                    </span>
                    <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="relative z-10 mx-auto my-auto text-center">
                    <div className="w-16 h-16 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl transition transform group-hover:scale-110">
                      {isPlaying ? (
                        <Pause className="w-7 h-7 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 fill-current ml-1 text-white" />
                      )}
                    </div>
                    <span className="inline-block mt-2 text-[11px] font-bold text-white drop-shadow">
                      {isPlaying ? 'Pausar video' : 'Reproducir momento'}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{reel.energy}</span>
                    </div>
                    <h4 className="text-base font-black text-white leading-tight mb-2">
                      {reel.title}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] text-white/80 pt-2 border-t border-white/20">
                      <span>{reel.author}</span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-current" />
                        {reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOTOGRAFÍAS DE MONTAJES Y MATERIALES */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-indigo-600" />
              <span>Nuestros Montajes, Pintucaritas y Materiales</span>
            </h3>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'infantil', label: 'Infantiles' },
                { id: 'inflables', label: 'Inflables' },
                { id: 'miniteca', label: 'Minitecas' },
                { id: 'conjuntos', label: 'Conjuntos' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.id)}
                  className={`px-3.5 py-1.5 rounded-full transition ${
                    activeTab === btn.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, pIdx) => (
              <div
                key={pIdx}
                className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1 group"
              >
                <div className={`h-48 w-full ${photo.bg} p-5 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 border border-white text-slate-800 shadow-sm">
                      📍 {photo.location}
                    </span>
                    <Camera className="w-4 h-4 text-white drop-shadow" />
                  </div>
                  <div className="text-white drop-shadow-md">
                    <Sparkles className="w-5 h-5 text-amber-200 mb-1" />
                    <p className="text-sm font-bold leading-snug">{photo.title}</p>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Aviso Legal de Protección a Menores */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-500 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Aviso de Privacidad:</strong> Contamos con autorización de uso de imagen suscrita por los padres de familia conforme a la Ley 1581 de 2012.
              </span>
            </div>
            <a
              href={`https://wa.me/${LEGAL_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Imagin-ART-recreación, vi su galería y quiero más fotos o videos de montajes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-indigo-600 font-bold hover:underline"
            >
              <span>Ver más por WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
