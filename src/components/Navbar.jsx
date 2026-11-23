'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Palette, Sparkles, MessageCircle, Menu, X, Shield, CalendarCheck } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function Navbar({ onOpenLegal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Imagin-ART-recreación */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition transform">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                Imagin<span className="text-indigo-600 font-extrabold">-ART</span>
              </span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                Recreación & Eventos Bogotá
              </p>
            </div>
          </Link>

          {/* Menú simple desktop: Inicio, Servicios, Paquetes, Empresas y Conjuntos, Galería, Nosotros, Contacto */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#inicio" className="hover:text-indigo-600 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-indigo-600 transition">
              Servicios
            </a>
            <a href="#paquetes" className="hover:text-indigo-600 transition">
              Paquetes
            </a>
            <a href="#empresas-conjuntos" className="hover:text-indigo-600 transition flex items-center gap-1.5 text-indigo-700 font-bold bg-indigo-50 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Empresas y Conjuntos
            </a>
            <a href="#galeria" className="hover:text-indigo-600 transition">
              Galería
            </a>
            <a href="#nosotros" className="hover:text-indigo-600 transition">
              Nosotros
            </a>
            <a href="#cotizador" className="hover:text-indigo-600 transition">
              Contacto
            </a>
          </nav>

          {/* Botón llamativo de acción principal: "Cotizar evento" */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full transition"
              title="Habeas Data Ley 1581"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-500" />
              <span>Habeas Data</span>
            </button>

            <a
              href="#cotizador"
              className="px-5 py-2.5 text-sm font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-md shadow-indigo-600/20 transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Cotizar evento</span>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-slate-100 space-y-2 bg-white">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Servicios
            </a>
            <a
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Paquetes
            </a>
            <a
              href="#empresas-conjuntos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-indigo-700 bg-indigo-50 rounded-lg"
            >
              Empresas y Conjuntos (B2B)
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Galería
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Nosotros
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-indigo-600 hover:bg-slate-50 rounded-lg"
            >
              Cotizador & Contacto
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl text-center text-sm shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                Cotizar evento
              </a>
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=Hola%20Imagin-ART-recreación,%20vi%20su%20página%20web%20y%20quiero%20cotizar%20un%20evento%20en%20Bogotá`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp (300 125 0524)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
