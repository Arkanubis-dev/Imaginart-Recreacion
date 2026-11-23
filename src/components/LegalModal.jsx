'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, Building, Scale, AlertCircle } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS, LEGAL_INFO } from '@/lib/legalContent';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-600">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                Centro Legal & Cumplimiento Normativo
                <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  Colombia
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {LEGAL_INFO.companyName} • NIT {LEGAL_INFO.nit}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-100 bg-white px-4 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-t-xl transition border-b-2 ${
              activeTab === 'privacy'
                ? 'bg-indigo-50 text-indigo-700 border-indigo-600'
                : 'text-slate-500 hover:text-slate-800 border-transparent hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Tratamiento de Datos (Habeas Data)
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-t-xl transition border-b-2 ${
              activeTab === 'terms'
                ? 'bg-indigo-50 text-indigo-700 border-indigo-600'
                : 'text-slate-500 hover:text-slate-800 border-transparent hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-600" />
            Términos, Reservas & Retracto
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-600 text-sm leading-relaxed">
          {activeTab === 'privacy' && (
            <div>
              <div className="mb-6 bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 text-sm mb-1">
                    Garantía Legal de Habeas Data (Ley 1581 de 2012)
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Sus datos son recolectados con fines exclusivos de cotización y ejecución del servicio recreativo. Nunca vendemos sus datos y garantizamos el derecho a conocer, actualizar o solicitar la supresión de sus datos en cualquier momento.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-1">{PRIVACY_POLICY.title}</h3>
              <p className="text-xs text-slate-500 mb-6 italic">{PRIVACY_POLICY.subtitle}</p>

              <div className="space-y-6">
                {PRIVACY_POLICY.sections.map((section) => (
                  <div key={section.id} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                    <h4 className="font-black text-slate-900 mb-2 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      {section.title}
                    </h4>
                    <p className="whitespace-pre-line text-slate-600 text-xs sm:text-sm">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <div className="mb-6 bg-blue-50 border border-blue-200 p-4 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm mb-1">
                    Protección al Consumidor (Ley 1480 de 2011)
                  </h4>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    Conoce cómo funcionan las reservas (50% anticipo), tiempos de cancelación, el Derecho de Retracto (5 días hábiles según Art. 47) y las normas de seguridad para inflables y dinámicas infantiles.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-1">{TERMS_AND_CONDITIONS.title}</h3>
              <p className="text-xs text-slate-500 mb-6 italic">{TERMS_AND_CONDITIONS.subtitle}</p>

              <div className="space-y-6">
                {TERMS_AND_CONDITIONS.sections.map((section) => (
                  <div key={section.id} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                    <h4 className="font-black text-slate-900 mb-2 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {section.title}
                    </h4>
                    <p className="whitespace-pre-line text-slate-600 text-xs sm:text-sm">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-slate-400" />
            <span>Vigilado por la Superintendencia de Industria y Comercio (SIC)</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-sm"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
