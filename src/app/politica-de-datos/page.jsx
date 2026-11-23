import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Building, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRIVACY_POLICY, LEGAL_INFO } from '@/lib/legalContent';
import LegalFooter from '@/components/LegalFooter';

export const metadata = {
  title: 'Política de Tratamiento de Datos Personales (Habeas Data) | Imagin-ART-recreación',
  description: 'Conoce la Política de Protección y Tratamiento de Datos Personales de Imagin-ART-recreación conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
};

export default function PoliticaDatosPage() {
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
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                Legislación Colombiana
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {PRIVACY_POLICY.title}
              </h1>
            </div>
          </div>

          <p className="text-slate-500 text-sm italic mb-6">
            {PRIVACY_POLICY.subtitle} • Última actualización: {LEGAL_INFO.lastUpdated}
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <p><strong className="text-slate-900">Responsable del Tratamiento:</strong> {LEGAL_INFO.companyName} ({LEGAL_INFO.commercialName})</p>
            <p><strong className="text-slate-900">NIT:</strong> {LEGAL_INFO.nit}</p>
            <p><strong className="text-slate-900">Dirección de Notificaciones:</strong> {LEGAL_INFO.address}</p>
            <p><strong className="text-slate-900">Correo PQRS & Habeas Data:</strong> <span className="text-indigo-600 font-bold">{LEGAL_INFO.emailPQRS}</span></p>
            <p><strong className="text-slate-900">WhatsApp Oficial:</strong> <span className="text-emerald-700 font-bold">{LEGAL_INFO.whatsapp}</span></p>
          </div>
        </div>

        {/* Special NNA Callout */}
        <div className="mb-8 bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="text-slate-900 block text-sm mb-1 font-black">Protección Prevalente a Niños, Niñas y Adolescentes:</strong>
            En nuestras actividades recreativas infantiles, los datos relativos a los menores son suministrados y autorizados exclusivamente por sus padres o representantes legales, respetando en todo momento el Artículo 7 de la Ley 1581 de 2012.
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {PRIVACY_POLICY.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl shadow-sm"
            >
              <h2 className="text-base sm:text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
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
