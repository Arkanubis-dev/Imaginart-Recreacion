import React from 'react';
import Link from 'next/link';
import { Scale, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { TERMS_AND_CONDITIONS, LEGAL_INFO } from '@/lib/legalContent';
import LegalFooter from '@/components/LegalFooter';

export const metadata = {
  title: 'Términos y Condiciones, Reservas & Derecho de Retracto | Imagin-ART-recreación',
  description: 'Términos y condiciones de prestación de servicios recreativos de Imagin-ART-recreación, reservas (50% abono), cancelaciones y Derecho de Retracto (Ley 1480 de 2011 de Colombia).',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-800 flex flex-col justify-between">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </Link>
        </div>

        {/* Header Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-600">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                Estatuto del Consumidor (Ley 1480 de 2011)
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {TERMS_AND_CONDITIONS.title}
              </h1>
            </div>
          </div>

          <p className="text-slate-500 text-sm italic mb-6">
            {TERMS_AND_CONDITIONS.subtitle} • Rige las reservas y contrataciones de {LEGAL_INFO.commercialName}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Anticipo de Reserva:</span>
              <strong className="text-slate-900 text-sm">50% para bloqueo de fecha</strong>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Derecho de Retracto:</span>
              <strong className="text-emerald-600 text-sm">5 días hábiles (Ley 1480)</strong>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Reembolso Retracto:</span>
              <strong className="text-slate-900 text-sm">100% en max. 30 días</strong>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {TERMS_AND_CONDITIONS.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl shadow-sm"
            >
              <h2 className="text-base sm:text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>{section.title}</span>
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>

      </div>

      <LegalFooter />
    </div>
  );
}
