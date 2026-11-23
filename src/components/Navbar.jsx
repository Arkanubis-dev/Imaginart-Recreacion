'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Navbar({ onOpenLegal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#F4ECE0] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Imagin-ART: Tipografía limpia y artística, sin recarga */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-[#E8DFF5] border border-[#D5C4ED] flex items-center justify-center text-[#7C5CFA] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#242429] font-display">
                Imagin<span className="text-[#7C5CFA] font-extrabold">-ART</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#555560]">
                Eventos & Shows Infantiles
              </span>
            </div>
          </Link>

          {/* 5 enlaces limpios sin emojis (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#555560]">
            <a 
              href="#inicio" 
              className="hover:text-[#242429] transition-colors duration-150 py-1"
            >
              Inicio
            </a>
            <a 
              href="#shows" 
              className="hover:text-[#242429] transition-colors duration-150 py-1"
            >
              Shows
            </a>
            <a 
              href="#paquetes" 
              className="hover:text-[#242429] transition-colors duration-150 py-1"
            >
              Planes
            </a>
            <a 
              href="#empresas-conjuntos" 
              className="hover:text-[#242429] transition-colors duration-150 py-1"
            >
              Empresas y Conjuntos
            </a>
            <a 
              href="#galeria" 
              className="hover:text-[#242429] transition-colors duration-150 py-1"
            >
              Galería
            </a>
          </nav>

          {/* Botón único destacado de acción (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#cotizador"
              className="px-5 py-2.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white text-sm font-semibold rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Cotizar Evento
            </a>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desplegable móvil limpio */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#F4ECE0] space-y-2 bg-[#FDFBF7]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
            >
              Inicio
            </a>
            <a
              href="#shows"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
            >
              Shows
            </a>
            <a
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
            >
              Planes
            </a>
            <a
              href="#empresas-conjuntos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
            >
              Empresas y Conjuntos
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#242429] hover:bg-[#FAF6EE] rounded-xl transition"
            >
              Galería
            </a>

            <div className="pt-3 border-t border-[#F4ECE0] px-2 flex flex-col gap-2.5">
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#7C5CFA] text-white text-center text-sm font-semibold rounded-2xl shadow-soft"
              >
                Cotizar Evento
              </a>
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART, deseo cotizar un evento recreativo en Bogotá.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white border border-[#EAE0D0] text-[#242429] text-center text-xs font-semibold rounded-2xl hover:bg-[#FAF6EE]"
              >
                WhatsApp Directo (300 125 0524)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
