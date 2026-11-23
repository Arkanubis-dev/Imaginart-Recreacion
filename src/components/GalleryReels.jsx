'use client';

import React, { useState } from 'react';
import { Sparkles, Play, Pause, Camera, ShieldCheck, Heart, Film, ArrowUpRight, X, MessageCircle, Volume2, Share2, MapPin } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function GalleryReels() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedReelModal, setSelectedReelModal] = useState(null);
  const [likedReels, setLikedReels] = useState({});

  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const reels = [
    {
      id: 1,
      title: '¡Hora Loca & Globoflexia Creativa!',
      author: '@imaginart_recreacion',
      views: '14.2K',
      likes: 1540,
      location: 'Cedritos, Bogotá',
      duration: '0:15',
      energy: 'Explosión de Baile y Arte',
      bgGradient: 'from-amber-400 via-rose-500 to-purple-700',
      description: 'Más de 25 niños bailando con espadas y coronas de globoflexia en salón comunal de Cedritos. ¡Cero juegos violentos y pura alegría familiar!'
    },
    {
      id: 2,
      title: 'Día del Niño en Conjunto Residencial',
      author: '@imaginart_recreacion',
      views: '19.8K',
      likes: 2680,
      location: 'Chía / Cota',
      duration: '0:20',
      energy: 'Inflable Gigante & Kermesse',
      bgGradient: 'from-purple-700 via-sky-500 to-emerald-500',
      description: 'Jornada recreativa con más de 120 familias, inflables temáticos, algodón de azúcar y carreras de relevos.'
    },
    {
      id: 3,
      title: 'Mega Miniteca Neón & Glow Facepaint',
      author: '@imaginart_recreacion',
      views: '25.3K',
      likes: 3410,
      location: 'Salitre, Bogotá',
      duration: '0:18',
      energy: 'Luces UV & DJ en Vivo',
      bgGradient: 'from-fuchsia-600 via-purple-700 to-amber-400',
      description: 'Pintura neón corporal que brilla bajo luces ultravioleta, humo festivo y animación de rumba sana para preadolescentes.'
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
      bg: 'bg-gradient-to-tr from-blue-500/80 to-purple-600/80'
    },
    {
      category: 'miniteca',
      title: 'Montaje de Luces Robóticas y Sonido Pro',
      location: 'Fiesta Neón en Salitre Plaza',
      caption: 'Estructura con reflectores UV, efectos láser y máquina de humo.',
      bg: 'bg-gradient-to-tr from-purple-600/80 to-fuchsia-500/80'
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

  const toggleLike = (reelId) => {
    setLikedReels((prev) => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  return (
    <section id="galeria" className="py-20 bg-[#FAFBFD] border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full font-sans">
            Prueba Visual & Energía Real
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight font-display">
            Galería de Fotos & Momentos en Directo
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans">
            Así se viven de verdad las fiestas con <strong className="text-purple-900 font-extrabold">Imagin-ART-recreación</strong> en Bogotá y la Sabana.
          </p>
        </div>

        {/* REELS / VIDEOS CORTOS INTERACTIVOS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-purple-700" />
              <h3 className="text-lg font-black text-slate-900 font-display">Reels & Momentos en Directo</h3>
            </div>
            <span className="text-xs text-slate-500 font-medium font-sans">
              Haz clic en cualquier Reel para abrir el reproductor interactivo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reels.map((reel) => {
              const isLiked = likedReels[reel.id];
              return (
                <div
                  key={reel.id}
                  onClick={() => setSelectedReelModal(reel)}
                  className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-purple-100 bg-slate-900 flex flex-col justify-between p-5 group cursor-pointer transition transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${reel.bgGradient} opacity-90 group-hover:scale-105 transition-all duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  {/* Header del Reel */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-white font-sans">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 font-bold text-[11px]">
                      📍 {reel.location}
                    </span>
                    <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="relative z-10 mx-auto my-auto text-center">
                    <div className="w-16 h-16 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-xl transition transform group-hover:scale-110">
                      <Play className="w-7 h-7 fill-current ml-1 text-white" />
                    </div>
                    <span className="inline-block mt-2 text-[11px] font-bold text-white drop-shadow font-sans">
                      Reproducir Reel
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10 font-sans">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{reel.energy}</span>
                    </div>
                    <h4 className="text-base font-black text-white leading-tight mb-2 font-display">
                      {reel.title}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] text-white/80 pt-2 border-t border-white/20">
                      <span>{reel.author}</span>
                      <span className="flex items-center gap-1">
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-current' : 'text-rose-400 fill-current'}`} />
                        {isLiked ? reel.likes + 1 : reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* REEL VIEWER MODAL INTERACTIVO */}
        {selectedReelModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedReelModal(null)}
          >
            <div 
              className="relative w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold font-sans">Reel de Fiesta Real en Vivo</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedReelModal(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Screen with Animation */}
              <div className={`relative h-80 bg-gradient-to-br ${selectedReelModal.bgGradient} flex flex-col justify-between p-6 overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40" />

                {/* Animated sound waves */}
                <div className="relative z-10 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold">
                    📍 {selectedReelModal.location}
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>Música & Risas en Vivo</span>
                  </div>
                </div>

                {/* Animated central icon */}
                <div className="relative z-10 text-center my-auto">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center border-2 border-white/60 animate-bounce">
                    <Sparkles className="w-10 h-10 text-amber-300" />
                  </div>
                  <p className="mt-3 text-sm font-black font-display text-white drop-shadow">
                    ¡Momento Capturado en Directo!
                  </p>
                </div>

                {/* Progress bar */}
                <div className="relative z-10 w-full bg-white/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-3/4 animate-pulse" />
                </div>
              </div>

              {/* Reel Information & Actions */}
              <div className="p-5 space-y-4 bg-slate-900 font-sans">
                <div>
                  <h3 className="text-lg font-black text-white font-display">
                    {selectedReelModal.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {selectedReelModal.description}
                  </p>
                </div>

                {/* Social Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => toggleLike(selectedReelModal.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 transition cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${likedReels[selectedReelModal.id] ? 'fill-current text-rose-500' : ''}`} />
                    <span className="text-white font-bold">
                      {likedReels[selectedReelModal.id] ? selectedReelModal.likes + 1 : selectedReelModal.likes}
                    </span>
                  </button>

                  <span className="text-slate-400 text-[11px]">
                    {selectedReelModal.views} reproducciones
                  </span>
                </div>

                {/* WhatsApp Direct Action */}
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(`Hola Imagin-ART-recreación, vi el reel "${selectedReelModal.title}" en su web y quiero cotizar una fiesta similar en Bogotá.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 font-display"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Cotizar este tipo de fiesta por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* FOTOGRAFÍAS DE MONTAJES Y MATERIALES */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 font-display">
              <Camera className="w-5 h-5 text-purple-700" />
              <span>Nuestros Montajes, Pintucaritas y Materiales</span>
            </h3>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 text-xs font-bold font-sans">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'infantil', label: 'Infantiles' },
                { id: 'inflables', label: 'Inflables' },
                { id: 'miniteca', label: 'Minitecas' },
                { id: 'conjuntos', label: 'Conjuntos' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setActiveTab(btn.id)}
                  className={`px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                    activeTab === btn.id
                      ? 'bg-purple-700 text-white shadow-sm'
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
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1 group"
              >
                <div className={`h-48 w-full ${photo.bg} p-5 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 border border-white text-slate-800 shadow-sm font-sans">
                      📍 {photo.location}
                    </span>
                    <Camera className="w-4 h-4 text-white drop-shadow" />
                  </div>
                  <div className="text-white drop-shadow-md">
                    <Sparkles className="w-5 h-5 text-amber-200 mb-1" />
                    <p className="text-sm font-bold leading-snug font-display">{photo.title}</p>
                  </div>
                </div>

                <div className="p-4 bg-white font-sans">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Aviso Legal de Protección a Menores */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shadow-sm font-sans">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Aviso de Privacidad:</strong> Contamos con autorización de uso de imagen suscrita por los padres de familia conforme a la Ley 1581 de 2012.
              </span>
            </div>
            <a
              href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART-recreación, vi su galería y quiero más fotos o videos de montajes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-700 font-bold hover:underline cursor-pointer"
            >
              <span>Ver más montajes por WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
