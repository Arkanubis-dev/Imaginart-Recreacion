'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, ShieldCheck, Scale, Phone, Mail, MapPin, MessageCircle, ExternalLink, Building, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function LegalFooter({ onOpenLegal }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-xs leading-relaxed">
      
      {/* 1. Banner Superior: Enlace Obligatorio a la Superintendencia de Industria y Comercio (SIC) */}
      <div className="bg-slate-950 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl text-indigo-400 flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center justify-center lg:justify-start gap-2">
                  <span>Protección al Consumidor y Transparencia Web</span>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                    Ley 1480 de 2011 (Colombia)
                  </span>
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  Garantizamos el Derecho de Retracto (Art. 47), Reversión del Pago (Decreto 587/2016) y Tratamiento de Datos Personales (Ley 1581/2012).
                </p>
              </div>
            </div>

            {/* Enlace Oficial a la SIC */}
            <a
              href={LEGAL_INFO.superintendenciaWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-400 text-slate-200 text-xs font-bold hover:text-white transition shadow-sm"
              title="Superintendencia de Industria y Comercio de Colombia"
            >
              <Building className="w-4 h-4 text-indigo-400" />
              <span>Superintendencia de Industria y Comercio (SIC)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

          </div>
        </div>
      </div>

      {/* 2. Cuerpo del Footer: Datos de Identificación Visibles de Imagin-ART-recreación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Columna 1: Identificación Legal (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 flex items-center justify-center text-white shadow-md">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-black text-white">
                  Imagin<span className="text-indigo-400 font-extrabold">-ART</span>
                </span>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider">
                  RECREACIÓN & EVENTOS EN BOGOTÁ Y SABANA
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Empresa líder en recreación artística para fiestas infantiles, eventos en conjuntos residenciales, inflables temáticos y minitecas con los más altos estándares pedagógicos y de seguridad.
            </p>

            {/* Datos de Identificación */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Datos de Identificación Legal (Colombia)</span>
              </div>
              <p><strong className="text-white">Nombre Comercial:</strong> {LEGAL_INFO.commercialName}</p>
              <p><strong className="text-white">Razón Social:</strong> {LEGAL_INFO.companyName}</p>
              <p><strong className="text-white">NIT:</strong> {LEGAL_INFO.nit}</p>
              <p><strong className="text-white">Ciudad de Operación:</strong> {LEGAL_INFO.city}</p>
              <p><strong className="text-white">Domicilio de Notificaciones:</strong> {LEGAL_INFO.address}</p>
            </div>
          </div>

          {/* Columna 2: Políticas Legales Obligatorias (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Políticas Legales Obligatorias</span>
            </h4>
            <p className="text-slate-400 text-xs">
              Conoce en detalle tus derechos como consumidor y titular de datos:
            </p>

            <ul className="space-y-3 pt-1">
              <li>
                <Link
                  href="/politica-de-datos"
                  className="bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 p-3 rounded-xl transition flex items-start gap-2.5 text-left group block"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white group-hover:text-indigo-400 transition text-xs block">
                      Política de Tratamiento de Datos Personales
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013 (Habeas Data)
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 p-3 rounded-xl transition flex items-start gap-2.5 text-left group block"
                >
                  <FileText className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white group-hover:text-emerald-400 transition text-xs block">
                      Términos y Condiciones del Servicio
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Reservas, abono del 50%, cancelaciones y Derecho de Retracto (Ley 1480)
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="text-[11px] text-indigo-400 hover:underline flex items-center gap-1 pl-1"
                >
                  <span>Ver resumen interactivo de políticas sin salir de la página</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Canales Oficiales y WhatsApp 3001250524 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-xs">
              Contacto Oficial & PQRS
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition font-bold text-white"
                >
                  {LEGAL_INFO.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span>{LEGAL_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-400">Canal PQRS y Habeas Data:</span>
                  <a href={`mailto:${LEGAL_INFO.emailPQRS}`} className="text-indigo-400 hover:underline break-all">
                    {LEGAL_INFO.emailPQRS}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">
                  Carrera 15 # 85-30, Bogotá D.C.
                </span>
              </li>
              <li className="text-[11px] text-slate-400 pt-1">
                Lunes a Sábado: 8:00 a.m. a 7:00 p.m.
              </li>
            </ul>
          </div>

        </div>

        {/* Barra de Derechos */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {LEGAL_INFO.companyName} • NIT {LEGAL_INFO.nit}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/politica-de-datos" className="hover:text-indigo-400 transition">
              Habeas Data (Ley 1581)
            </Link>
            <span>•</span>
            <Link href="/terminos-y-condiciones" className="hover:text-indigo-400 transition">
              Términos & Retracto (Ley 1480)
            </Link>
            <span>•</span>
            <a
              href={LEGAL_INFO.superintendenciaWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition inline-flex items-center gap-1"
            >
              <span>Portal de la SIC</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
