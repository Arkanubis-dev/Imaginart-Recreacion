'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Scale, Phone, Mail, MapPin, MessageCircle, ExternalLink, Building, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function LegalFooter({ onOpenLegal }) {
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  return (
    <footer className="bg-[#1F1E24] text-[#A0A0AB] text-xs leading-relaxed border-t border-[#34343D]">
      
      {/* 1. Banner Superior: Enlace Obligatorio a la Superintendencia de Industria y Comercio (SIC) */}
      <div className="bg-[#17171B] border-b border-[#2C2C35] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#E8DFF5]/10 border border-[#E8DFF5]/20 rounded-2xl text-[#E8DFF5] flex-shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center justify-center lg:justify-start gap-2 font-display">
                  <span>Protección al Consumidor y Transparencia Web</span>
                  <span className="text-[10px] bg-[#D9F2EC]/20 text-[#D9F2EC] border border-[#D9F2EC]/30 px-2 py-0.5 rounded-full font-semibold">
                    Ley 1480 de 2011 (Colombia)
                  </span>
                </h4>
                <p className="text-[#8E8E99] text-xs mt-0.5">
                  Garantizamos el Derecho de Retracto (Art. 47), Reversión del Pago (Decreto 587/2016) y Tratamiento de Datos Personales (Ley 1581/2012).
                </p>
              </div>
            </div>

            {/* Enlace Oficial a la SIC */}
            <a
              href={LEGAL_INFO.superintendenciaWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#242429] border border-[#3E3E4A] hover:border-[#E8DFF5] text-[#DCDCE2] text-xs font-semibold hover:text-white transition shadow-sm"
              title="Superintendencia de Industria y Comercio de Colombia"
            >
              <Building className="w-4 h-4 text-[#E8DFF5]" />
              <span>Superintendencia de Industria y Comercio (SIC)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8E8E99]" />
            </a>

          </div>
        </div>
      </div>

      {/* 2. Cuerpo del Footer: Identificación Legal y Enlaces */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Columna 1: Identificación Legal (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#E8DFF5] text-[#7C5CFA] flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <span className="text-2xl font-bold text-white font-display">
                Imagin<span className="text-[#7C5CFA]">-ART</span>
              </span>
            </div>

            <p className="text-[#8E8E99] text-xs leading-relaxed max-w-sm">
              Agencia de recreación creativa, shows infantiles y producciones artísticas en Bogotá y la Sabana. Seguridad integral, personal profesional con ARL y puntualidad rigurosa.
            </p>

            {/* Datos de Identificación */}
            <div className="bg-[#17171B] p-4 rounded-2xl border border-[#2C2C35] space-y-1.5 text-xs text-[#A0A0AB]">
              <div className="text-[11px] font-bold text-[#D9F2EC] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-display">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Datos de Identificación Legal (Colombia)</span>
              </div>
              <p><strong className="text-white">Nombre Comercial:</strong> {LEGAL_INFO.commercialName}</p>
              <p><strong className="text-white">Razón Social:</strong> {LEGAL_INFO.companyName}</p>
              <p><strong className="text-white">NIT:</strong> {LEGAL_INFO.nit}</p>
              <p><strong className="text-white">Ciudad:</strong> {LEGAL_INFO.city}</p>
              <p><strong className="text-white">Dirección:</strong> {LEGAL_INFO.address}</p>
            </div>
          </div>

          {/* Columna 2: Políticas Legales Obligatorias (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 font-display">
              <ShieldCheck className="w-4 h-4 text-[#D9F2EC]" />
              <span>Políticas Legales Obligatorias</span>
            </h4>
            <p className="text-[#8E8E99] text-xs">
              Conoce tus derechos como titular de datos y consumidor:
            </p>

            <ul className="space-y-2.5 pt-1">
              <li>
                <Link
                  href="/politica-de-datos"
                  className="bg-[#17171B] hover:bg-[#242429] border border-[#2C2C35] hover:border-[#3E3E4A] p-3 rounded-xl transition flex items-start gap-2.5 text-left group block"
                >
                  <ShieldCheck className="w-4 h-4 text-[#7C5CFA] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white group-hover:text-[#E8DFF5] transition text-xs block font-display">
                      Política de Tratamiento de Datos Personales
                    </strong>
                    <span className="text-[11px] text-[#8E8E99] block mt-0.5">
                      Ley 1581 de 2012 y Decreto 1377 de 2013 (Habeas Data)
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="bg-[#17171B] hover:bg-[#242429] border border-[#2C2C35] hover:border-[#3E3E4A] p-3 rounded-xl transition flex items-start gap-2.5 text-left group block"
                >
                  <FileText className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white group-hover:text-[#D9F2EC] transition text-xs block font-display">
                      Términos y Condiciones del Servicio
                    </strong>
                    <span className="text-[11px] text-[#8E8E99] block mt-0.5">
                      Abono del 50%, cancelaciones y Derecho de Retracto (Ley 1480)
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="text-[11px] text-[#E8DFF5] hover:underline flex items-center gap-1 pl-1 cursor-pointer"
                >
                  <span>Ver resumen de políticas sin salir de la página</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Oficial (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">
              Contacto Oficial & PQRS
            </h4>
            <ul className="space-y-2.5 text-[#DCDCE2]">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9F2EC] transition font-bold text-white"
                >
                  {LEGAL_INFO.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7C5CFA] flex-shrink-0" />
                <span>{LEGAL_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7C5CFA] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-[#8E8E99]">Canal PQRS y Habeas Data:</span>
                  <a href={`mailto:${LEGAL_INFO.emailPQRS}`} className="text-[#E8DFF5] hover:underline break-all">
                    {LEGAL_INFO.emailPQRS}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8E8E99] flex-shrink-0 mt-0.5" />
                <span>{LEGAL_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-[#2C2C35] text-center text-[#767682] text-[11px]">
          © {new Date().getFullYear()} {LEGAL_INFO.companyName} • NIT {LEGAL_INFO.nit} • Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
