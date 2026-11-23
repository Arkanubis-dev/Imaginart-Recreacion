'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Download, 
  Users2, 
  CheckCircle2, 
  MessageCircle,
  BadgeCheck,
  Printer,
  X,
  FileText
} from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function B2BSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const b2bDocs = [
    { title: 'RUT Vigente DIAN', desc: 'Actividad económica principal de recreación, entretenimiento y artes.' },
    { title: 'Cámara de Comercio', desc: 'Certificado de Existencia y Representación Legal al día.' },
    { title: 'Planilla PILA y ARL', desc: 'Seguridad social y ARL de cada recreador previo al evento.' },
    { title: 'Facturación Electrónica', desc: 'Facturación oficial DIAN para el Consejo o Contabilidad.' },
    { title: 'Póliza de Cumplimiento', desc: 'Póliza y garantías requeridas para contrataciones formales.' }
  ];

  const handleDownloadFile = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Portafolio Institucional - Imagin-ART-recreación S.A.S.</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; color: #1e293b; line-height: 1.6; }
    .header { border-bottom: 3px solid #7e22ce; padding-bottom: 20px; margin-bottom: 30px; }
    h1 { color: #581c87; margin: 0; font-size: 26px; }
    h2 { color: #7e22ce; margin-top: 25px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; font-size: 18px; }
    .meta { font-size: 13px; color: #64748b; margin-top: 8px; }
    ul { padding-left: 20px; }
    li { margin-bottom: 8px; }
    .box { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; margin: 20px 0; }
    .badge { display: inline-block; background: #e0e7ff; color: #3730a3; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
    @media print { body { margin: 15px; } }
  </style>
</head>
<body>
  <div class="header">
    <span class="badge">DOCUMENTO INSTITUCIONAL B2B</span>
    <h1>IMAGIN-ART-RECREACIÓN S.A.S.</h1>
    <div class="meta">
      <strong>NIT:</strong> ${LEGAL_INFO.nit} | <strong>Ciudad:</strong> ${LEGAL_INFO.city}<br>
      <strong>WhatsApp Oficial:</strong> ${LEGAL_INFO.whatsapp} | <strong>Teléfono:</strong> ${LEGAL_INFO.phone}<br>
      <strong>Correo:</strong> ${LEGAL_INFO.emailGeneral} | <strong>PQRS:</strong> ${LEGAL_INFO.emailPQRS}
    </div>
  </div>

  <h2>1. Perfil y Propuesta de Valor Institucional</h2>
  <p>Empresa colombiana especializada en espectáculos artísticos, obras teatrales y recreación dirigida masiva para copropiedades (Propiedad Horizontal) y bienestar laboral empresarial en Bogotá y la Sabana.</p>

  <h2>2. Portafolio de Eventos para Conjuntos Residenciales</h2>
  <ul>
    <li><strong>Celebración del Día del Niño (Abril):</strong> Circuito de inflables gigantes, ferias kermesse, algodón de azúcar, pintucaritas al agua y sonido lineal.</li>
    <li><strong>Vacaciones Recreativas (Junio-Julio):</strong> Talleres lúdicos de teatro, ciencias divertidas, magia y manualidades.</li>
    <li><strong>Halloween Infantil (Octubre):</strong> Obras temáticas con monstruos amigables, túnel de sorpresas y miniteca neón.</li>
    <li><strong>Novenas y Navidad (Diciembre):</strong> Pesebre en vivo teatralizado, villancicos interactivos y llegada de personajes.</li>
    <li><strong>Cuidado Infantil en Asambleas:</strong> Guardería lúdica y talleres durante asambleas de copropietarios.</li>
  </ul>

  <h2>3. Eventos Corporativos y Días de la Familia</h2>
  <ul>
    <li>Family Days con aforo desde 50 hasta más de 800 colaboradores y sus familias.</li>
    <li>Olimpiadas corporativas, estaciones de liderazgo, dinámicas de integración y rumbaterapia.</li>
    <li>Sonido lineal para auditorios, polideportivos o salones de convenciones.</li>
  </ul>

  <h2>4. Documentación Legal Entregada en Cada Contrato</h2>
  <div class="box">
    ✓ RUT vigente con actividad económica de artes escénicas y entretenimiento.<br>
    ✓ Certificado de Existencia y Representación Legal de la Cámara de Comercio de Bogotá.<br>
    ✓ Planilla PILA con pago vigente de EPS y ARL de todos los recreadores y actores.<br>
    ✓ Facturación Electrónica validada previamente por la DIAN.<br>
    ✓ Ficha técnica, pólizas y certificación de anclaje de juegos inflables.
  </div>

  <p style="font-size: 12px; color: #64748b; margin-top: 40px; text-align: center;">
    © ${new Date().getFullYear()} Imagin-ART-recreación S.A.S. • Todos los derechos reservados bajo la legislación colombiana.
  </p>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Portafolio_Imagin_ART_Recreacion_B2B.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="empresas-conjuntos" className="py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header B2B */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800/80 border border-purple-700 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 font-sans">
            <Building2 className="w-4 h-4" />
            <span>Exclusivo para Conjuntos Residenciales & Empresas (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Tranquilidad Total para Administradores de Copropiedades y RRHH
          </h2>
          <p className="mt-3 text-purple-100 text-sm sm:text-base leading-relaxed font-sans">
            Sabemos que el Consejo de Administración y la Gerencia exigen formalidad absoluta. En <strong className="text-white">Imagin-ART-recreación</strong> entregamos toda la documentación tributaria y de seguridad social antes de iniciar cada evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Documentación Entregada (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 font-display">
              <BadgeCheck className="w-5 h-5 text-emerald-400" />
              Documentación Legal y Laboral al Día
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
              {b2bDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800 flex items-start gap-3 backdrop-blur-sm"
                >
                  <div className="p-2 bg-emerald-500/20 text-emerald-300 rounded-xl flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{doc.title}</h4>
                    <p className="text-[11px] text-purple-200 mt-0.5 leading-snug">{doc.desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800 flex items-start gap-3 backdrop-blur-sm">
                <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl flex-shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Aforos de 30 a 800+ personas</h4>
                  <p className="text-[11px] text-purple-200 mt-0.5 leading-snug">Sonido profesional lineal y staff coordinado para eventos masivos.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-purple-950/80 border border-purple-800 text-xs text-purple-100 font-sans">
              <span className="font-bold text-amber-300 block mb-1">
                📅 Fechas Clave para su Calendario en la Copropiedad:
              </span>
              <p className="text-purple-200 text-[11px]">
                Día del Niño (abril) • Vacaciones Recreativas (junio-julio) • Halloween Infantil (octubre) • Novenas y Cierre de Año (diciembre). 
                <strong className="text-white"> ¡Reserve con anticipación para garantizar disponibilidad de inflables y recreadores!</strong>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Portafolio B2B (5 cols) */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl relative font-sans">
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block mb-1">
              Ficha Técnica para Presentación al Consejo
            </span>
            <h3 className="text-xl font-black text-slate-900 mb-3 font-display">
              Portafolio Institucional B2B
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Descargue o visualice la ficha técnica completa con requisitos eléctricos, especificaciones de inflables y garantías legales para someter a aprobación de junta o administración.
            </p>

            {/* Botones de Acción */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowPortfolioModal(true)}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <FileText className="w-4 h-4 stroke-[2.5]" />
                <span>Ver Ficha Técnica / Imprimir PDF</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadFile}
                className="w-full py-2.5 px-4 bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-xs rounded-xl border border-purple-200 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? '✓ Descargado con éxito' : 'Descargar Archivo Ficha Técnica'}</span>
              </button>

              {/* Botón WhatsApp B2B */}
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART-recreación, soy administrador de copropiedad / encargado de RRHH y requiero una propuesta formal para un evento en Bogotá.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Contactar Asesor B2B por WhatsApp (300 125 0524)</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* MODAL DE FICHA TÉCNICA B2B */}
      {showPortfolioModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in text-slate-900"
          onClick={() => setShowPortfolioModal(false)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between p-5 bg-purple-50 border-b border-purple-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-700 text-white rounded-xl">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-display text-slate-900">
                    Ficha Técnica Institucional — Imagin-ART-recreación S.A.S.
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    NIT {LEGAL_INFO.nit} • {LEGAL_INFO.city}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPortfolioModal(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-purple-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 font-sans">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="font-bold text-amber-900 block mb-1">
                  ✓ Documentación Lista para Consejo de Administración y Contabilidad:
                </span>
                <p className="text-xs text-amber-800">
                  Entregamos RUT actualizado, Certificado de Cámara de Comercio vigente, Factura Electrónica y Planilla PILA con pago de ARL y EPS de cada recreador previo al inicio del evento.
                </p>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-base font-display mb-2">
                  Eventos Principales para Conjuntos Residenciales:
                </h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  <li><strong>Celebración Día del Niño (Abril):</strong> Inflables temáticos gigantes, estaciones de feria kermesse, miniteca neón, crispetera y recreadores profesionales.</li>
                  <li><strong>Vacaciones Recreativas (Junio-Julio):</strong> Jornadas lúdicas continuas de 1 a 2 semanas con actividades artísticas, científicas y deportivas.</li>
                  <li><strong>Halloween (Octubre):</strong> Obra teatral temática, pasarela de disfraces, pintucaritas artístico y hora loca.</li>
                  <li><strong>Novenas Navideñas (Diciembre):</strong> Pesebre teatralizado en vivo, animación de villancicos con sonido lineal y llegada de personajes.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-base font-display mb-2">
                  Requisitos Técnicos Suministrados por la Copropiedad:
                </h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  <li>Toma eléctrica estándar de 110V a menos de 20 metros de la zona de inflables o sonido.</li>
                  <li>Zona cubierta alterna (salón comunal o carpas) en caso de contingencia por lluvia en Bogotá.</li>
                  <li>Autorización de ingreso para el staff de Imagin-ART 40 minutos antes del inicio para montaje.</li>
                </ul>
              </div>
            </div>

            {/* Footer Modal con Impresión */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 font-sans">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Guardar como PDF</span>
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleDownloadFile}
                  className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-xs rounded-xl transition cursor-pointer"
                >
                  Descargar Archivo
                </button>
                <button
                  type="button"
                  onClick={() => setShowPortfolioModal(false)}
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition cursor-pointer font-display"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
