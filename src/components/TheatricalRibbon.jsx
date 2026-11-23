'use client';

import React from 'react';

export default function TheatricalRibbon() {
  const ribbonItems = [
    { emoji: '🎭', text: 'Shows de Títeres' },
    { emoji: '🪄', text: 'Magia Divertida' },
    { emoji: '🎪', text: 'Juegos Originales' },
    { emoji: '🎭', text: 'Show Teatral' },
    { emoji: '💃', text: 'Baile & Rumba Sana' },
    { emoji: '🎈', text: 'Recreación Dirigida' },
    { emoji: '🎨', text: 'Pintucaritas Profesionales' },
    { emoji: '🫧', text: 'Show de Burbujas Gigantes' },
    { emoji: '🔥', text: 'Burbujas con Humo y Fuego' }
  ];

  return (
    <section className="bg-purple-700 text-white py-6 overflow-hidden relative shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-amber-300 font-display tracking-wide drop-shadow">
            Fiestas Infantiles y Eventos con:
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          {ribbonItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-xs sm:text-sm transition transform hover:scale-105"
            >
              <span className="text-base sm:text-lg">{item.emoji}</span>
              <span className="font-display tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
