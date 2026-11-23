'use client';

import React, { useState } from 'react';
import { Camera, Play, Sparkles, Heart, X, MessageCircle, Volume2, ArrowUpRight } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function GalleryMasonry() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedReelModal, setSelectedReelModal] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      category: 'burbujas',
      title: 'El Encapsulador Gigante de Niños',
      location: 'Cedritos, Bogotá',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-8 md:row-span-2',
      height: 'h-80 sm:h-96',
      tag: 'La Fábrica de Burbujas'
    },
    {
      id: 2,
      type: 'reel',
      category: 'teatro',
      title: 'Obra Teatral "El Reino Perdido"',
      location: 'Colina Campestre',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80',
      span: 'md:col-span-4 md:row-span-1',
      height: 'h-64 sm:h-72',
      tag: 'Reel en Directo',
      duration: '0:18',
      likes: 1240,
      description: 'Actores personificando hadas y magos con títeres interactivos. ¡Los niños resolvieron todas las pistas!'
    },
    {
      id: 3,
      type: 'photo',
      category: 'inflables',
      title: 'Feria Kermesse en Conjunto Residencial',
      location: 'Chía / Cota',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      span: 'md:col-span-4 md:row-span-1',
      height: 'h-64 sm:h-72',
      tag: 'Eventos Masivos'
    },
    {
      id: 4,
      type: 'photo',
      category: 'pintucaritas',
      title: 'Pintucaritas Artístico Hipoalergénico',
      location: 'Usaquén, Bogotá',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
      span: 'md:col-span-4 md:row-span-1',
      height: 'h-64 sm:h-72',
      tag: 'Arte al Agua'
    },
    {
      id: 5,
      type: 'reel',
      category: 'miniteca',
      title: 'Mega Miniteca Neón & Rumba Glow',
      location: 'Salitre Plaza',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-8 md:row-span-1',
      height: 'h-64 sm:h-72',
      tag: 'Reel en Directo',
      duration: '0:22',
      likes: 2150,
      description: 'DJ animador en vivo, luces ultravioleta, pintura que brilla en la oscuridad y hora loca con coreografías.'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos los Momentos' },
    { id: 'burbujas', label: 'Burbujas Gigantes' },
    { id: 'teatro', label: 'Teatro & Títeres' },
    { id: 'pintucaritas', label: 'Pintucaritas & Circo' },
    { id: 'inflables', label: 'Conjuntos & Inflables' },
    { id: 'miniteca', label: 'Minitecas' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="galeria" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
              <Camera className="w-3.5 h-3.5 text-[#7C5CFA]" />
              <span>Galería Viva & Energía Real</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
              Momentos auténticos capturados en escena
            </h2>
            <p className="mt-2 text-base text-[#555560]">
              Así se viven nuestras celebraciones infantiles en Bogotá y la Sabana. Risas espontáneas, asombro y seguridad para todos.
            </p>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#242429] text-white shadow-soft font-semibold'
                    : 'bg-white text-[#555560] hover:text-[#242429] border border-[#EAE0D0] hover:bg-[#FAF6EE]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Galería Mosaico / Masonry Dinámico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {filteredItems.map((item) => {
            const isReel = item.type === 'reel';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedReelModal(item)}
                className={`${item.span} relative rounded-[2rem] overflow-hidden border border-[#EAE0D0] shadow-soft hover:shadow-soft-xl transition-all duration-300 group cursor-pointer bg-[#FAF6EE]`}
              >
                <div className={`relative w-full ${item.height} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242429]/75 via-[#242429]/15 to-transparent transition-opacity" />

                  {/* Tag superior */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#242429] text-[11px] font-bold shadow-sm">
                      {item.tag}
                    </span>
                    {isReel && (
                      <span className="px-2.5 py-1 rounded-full bg-[#242429]/80 backdrop-blur-md text-white text-[10px] font-mono">
                        {item.duration}
                      </span>
                    )}
                  </div>

                  {/* Botón central si es Reel */}
                  {isReel && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#7C5CFA] flex items-center justify-center shadow-soft-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Info inferior */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[11px] text-[#D9F2EC] font-medium block">
                      📍 {item.location}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-display mt-0.5 leading-tight flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de Reel Interactivo */}
        {selectedReelModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedReelModal(null)}
          >
            <div 
              className="relative w-full max-w-md bg-[#242429] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#17171B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C5CFA] animate-pulse" />
                  <span className="text-xs font-bold font-display">Momento en Directo Imagin-ART</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedReelModal(null)}
                  className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Imagen/Pantalla de Video */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={selectedReelModal.image}
                  alt={selectedReelModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242429] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px]">
                    📍 {selectedReelModal.location}
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#D9F2EC]">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Música & Risas</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold font-display leading-tight">
                    {selectedReelModal.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    {selectedReelModal.description}
                  </p>
                </div>
              </div>

              {/* Acciones del Reel */}
              <div className="p-4 bg-[#17171B] border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(selectedReelModal.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#F27D65] transition cursor-pointer text-xs"
                >
                  <Heart className={`w-4 h-4 ${likedItems[selectedReelModal.id] ? 'fill-current text-[#F27D65]' : ''}`} />
                  <span className="text-white font-bold">
                    {likedItems[selectedReelModal.id] ? selectedReelModal.likes + 1 : selectedReelModal.likes}
                  </span>
                </button>

                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(`Hola Imagin-ART, vi el momento "${selectedReelModal.title}" en su galería y quiero cotizar una celebración similar.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white text-xs font-semibold rounded-xl shadow-soft transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
