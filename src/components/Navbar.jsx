'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, Menu, X, Shield, CalendarCheck, Theater, Palette } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Navbar({ onOpenLegal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Imagin-ART-recreación con estilo Teatral & Artístico */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-amber-400 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition transform">
              <Theater className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1 font-display">
                Imagin<span className="text-purple-700 font-black">-ART</span>
              </span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-purple-700 font-sans">
                Shows Teatrales & Recreación
              </p>
            </div>
          </Link>

          {/* Menú simple desktop */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-700 font-sans">
            <a href="#inicio" className="hover:text-purple-700 transition">
              Inicio
            </a>
            <a href="#burbujas" className="hover:text-purple-700 transition flex items-center gap-1 text-sky-600">
              <span>🫧 Fábrica de Burbujas</span>
            </a>
            <a href="#shows" className="hover:text-purple-700 transition">
              Shows & Teatro
            </a>
            <a href="#paquetes" className="hover:text-purple-700 transition">
              Planes & Tarifas
            </a>
            <a href="#empresas-conjuntos" className="hover:text-purple-700 transition flex items-center gap-1 text-purple-800 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Conjuntos & Empresas
            </a>
            <a href="#galeria" className="hover:text-purple-700 transition">
              Galería
            </a>
            <a href="#cotizador" className="hover:text-purple-700 transition">
              Cotizador
            </a>
          </nav>

          {/* Botones de acción */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-purple-700 bg-purple-50/50 border border-purple-100 px-3 py-1.5 rounded-full transition font-semibold"
              title="Habeas Data Ley 1581"
            >
              <Shield className="w-3.5 h-3.5 text-purple-600" />
              <span>Habeas Data</span>
            </button>

            <a
              href="#cotizador"
              className="px-5 py-2.5 text-sm font-black text-white bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 hover:from-purple-800 hover:to-fuchsia-700 rounded-2xl shadow-md shadow-purple-600/25 transition transform hover:-translate-y-0.5 flex items-center gap-2 font-display"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Cotizar mi fiesta</span>
            </a>
          </div>

          {/* Menú Móvil */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 rounded-xl focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desplegable móvil */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-purple-100 space-y-2 bg-white">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-50 rounded-lg"
            >
              Inicio
            </a>
            <a
              href="#burbujas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-sky-600 bg-sky-50 rounded-lg"
            >
              🫧 Fábrica de Burbujas Gigantes
            </a>
            <a
              href="#shows"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-50 rounded-lg"
            >
              Shows Teatrales & Circo
            </a>
            <a
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-50 rounded-lg"
            >
              Planes & Tarifas
            </a>
            <a
              href="#empresas-conjuntos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-purple-800 bg-purple-50 rounded-lg"
            >
              Conjuntos & Empresas (B2B)
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-50 rounded-lg"
            >
              Galería de Fotos & Videos
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-black text-purple-700 hover:bg-purple-50 rounded-lg"
            >
              Cotizador en Línea
            </a>

            <div className="pt-2 border-t border-purple-100 flex flex-col gap-2">
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-black rounded-xl text-center text-sm shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                Cotizar mi evento
              </a>
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=Hola%20Imagin-ART-recreación,%20quiero%20cotizar%20un%20show%20para%20una%20fiesta%20en%20Bogotá`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp (300 125 0524)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
