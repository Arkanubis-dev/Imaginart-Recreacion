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
  FileText,
  CalendarDays
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
  <title>Portafolio Institucional B2B - Imagin-ART-recreación S.A.S.</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 40px; color: #242429; line-height: 1.6; }
    .header { border-bottom: 2px solid #E8DFF5; padding-bottom: 20px; margin-bottom: 30px; }
    h1 { color: #242429; margin: 0; font-size: 24px; font-weight: 800; }
    h2 { color: #6442DF; margin-top: 25px; border-bottom: 1px solid #FAF6EE; padding-bottom: 8px; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; color: #555560; margin-top: 8px; }
    ul { padding-left: 20px; font-size: 13px; color: #3E3E47; }
    li { margin-bottom: 6px; }
    .box { background: #FAF6EE; border: 1px solid #EAE0D0; border-radius: 8px; padding: 15px; margin: 20px 0; font-size: 13px; }
    .badge { display: inline-block; background: #E8DFF5; color: #6442DF; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; }
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
      <strong>Correo:</strong> ${LEGAL_INFO.emailGeneral} | <strong>Canal PQRS:</strong> ${LEGAL_INFO.emailPQRS}
    </div>
  </div>

  <h2>1. Perfil y Propuesta de Valor Institucional</h2>
  <p style="font-size: 13px; color: #555560;">Empresa colombiana especializada en espectáculos artísticos, obras teatrales y recreación dirigida masiva para copropiedades (Propiedad Horizontal) y bienestar laboral empresarial en Bogotá y la Sabana.</p>

  <h2>2. Eventos para Conjuntos Residenciales</h2>
  <ul>
    <li><strong>Día del Niño (Abril):</strong> Circuito de inflables gigantes, ferias kermesse, algodón de azúcar, pintucaritas al agua y sonido lineal.</li>
    <li><strong>Vacaciones Recreativas (Junio-Julio):</strong> Talleres lúdicos de teatro, ciencias divertidas, magia y manualidades.</li>
    <li><strong>Halloween Infantil (Octubre):</strong> Obras temáticas con monstruos amigables, pasarela y miniteca.</li>
    <li><strong>Novenas y Navidad (Diciembre):</strong> Pesebre en vivo teatralizado, villancicos interactivos y personajes.</li>
  </ul>

  <h2>3. Documentación Legal Entregada en Cada Contrato</h2>
  <div class="box">
    ✓ RUT vigente con actividad económica de artes escénicas y entretenimiento.<br>
    ✓ Certificado de Existencia y Representación Legal de la Cámara de Comercio de Bogotá.<br>
    ✓ Planilla PILA con pago vigente de EPS y ARL de todos los recreadores y actores.<br>
    ✓ Facturación Electrónica validada previamente por la DIAN.<br>
    ✓ Certificación técnica y pólizas de responsabilidad de juegos inflables.
  </div>

  <p style="font-size: 11px; color: #767682; margin-top: 40px; text-align: center;">
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
    <section id="empresas-conjuntos" className="py-20 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header B2B */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <Building2 className="w-4 h-4 text-[#7C5CFA]" />
            <span>Propiedad Horizontal & Talento Humano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Tranquilidad y formalidad para Administradores de Conjuntos y RRHH
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#555560] leading-relaxed">
            Sabemos que el Consejo de Administración y la Gerencia exigen cumplimiento riguroso. En <strong className="text-[#242429]">Imagin-ART</strong> entregamos toda la documentación tributaria y de seguridad social antes de iniciar cada evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Columna Izquierda: Documentación Entregada (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-lg font-bold text-[#242429] flex items-center gap-2 font-display">
              <BadgeCheck className="w-5 h-5 text-[#2A9D8F]" />
              Documentación Laboral y Tributaria al Día
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {b2bDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-3xl border border-[#EAE0D0] shadow-soft hover:shadow-soft-lg transition-all duration-200 flex items-start gap-3.5"
                >
                  <div className="p-2.5 bg-[#D9F2EC] text-[#1F7E73] rounded-2xl flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#242429] font-display">{doc.title}</h4>
                    <p className="text-[11px] text-[#555560] mt-0.5 leading-snug">{doc.desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-white p-5 rounded-3xl border border-[#EAE0D0] shadow-soft flex items-start gap-3.5">
                <div className="p-2.5 bg-[#FFF4CC] text-[#996B00] rounded-2xl flex-shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242429] font-display">Aforos de 30 a 800+ personas</h4>
                  <p className="text-[11px] text-[#555560] mt-0.5 leading-snug">Sonido profesional lineal y staff coordinado para eventos masivos.</p>
                </div>
              </div>
            </div>

            {/* Cuadro de fechas clave */}
            <div className="p-5 rounded-3xl bg-[#E8DFF5]/40 border border-[#D5C4ED] text-xs text-[#555560]">
              <div className="flex items-center gap-2 font-bold text-[#6442DF] mb-1 font-display">
                <CalendarDays className="w-4 h-4" />
                <span>Fechas Clave para su Calendario en la Copropiedad:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Día del Niño (abril) • Vacaciones Recreativas (junio-julio) • Halloween Infantil (octubre) • Novenas y Cierre de Año (diciembre). 
                <strong className="text-[#242429]"> Reserve con anticipación para asegurar disponibilidad de inflables y staff.</strong>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Portafolio B2B (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#EAE0D0] text-[#242429] rounded-[2.5rem] p-7 sm:p-8 shadow-soft-xl">
            <span className="text-[11px] font-bold text-[#7C5CFA] uppercase tracking-wider block mb-1">
              Ficha Técnica para Presentación al Consejo
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#242429] mb-3 font-display">
              Portafolio Institucional B2B
            </h3>
            <p className="text-xs text-[#555560] leading-relaxed mb-6">
              Descargue o visualice la ficha técnica completa con requisitos eléctricos, especificaciones de inflables, obras teatrales y garantías legales para someter a aprobación de junta o administración.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowPortfolioModal(true)}
                className="w-full py-3.5 px-4 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-xs uppercase tracking-wider rounded-2xl shadow-soft hover:shadow-soft-lg transition flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <FileText className="w-4 h-4 stroke-[2.2]" />
                <span>Ver Ficha Técnica / Imprimir PDF</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadFile}
                className="w-full py-2.5 px-4 bg-[#FAF6EE] hover:bg-[#F4ECE0] text-[#242429] font-medium text-xs rounded-2xl border border-[#EAE0D0] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#7C5CFA]" />
                <span>{downloadSuccess ? '✓ Archivo Descargado' : 'Descargar Archivo Ficha Técnica'}</span>
              </button>

              {/* Botón WhatsApp B2B */}
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART, soy administrador de copropiedad / encargado de RRHH y requiero una propuesta formal para un evento en Bogotá.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#242429] hover:bg-[#34343D] text-white font-medium text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-soft"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#D9F2EC]" />
                <span>Contactar Asesor B2B por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Modal Ficha Técnica B2B */}
      {showPortfolioModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowPortfolioModal(false)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#EAE0D0]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 bg-[#FAF6EE] border-b border-[#F4ECE0]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#E8DFF5] text-[#6442DF] rounded-2xl">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-[#242429]">
                    Ficha Técnica Institucional — Imagin-ART-recreación S.A.S.
                  </h3>
                  <p className="text-xs text-[#555560]">
                    NIT {LEGAL_INFO.nit} • {LEGAL_INFO.city}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPortfolioModal(false)}
                className="p-2 text-[#767682] hover:text-[#242429] rounded-xl hover:bg-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#555560]">
              <div className="p-4 rounded-2xl bg-[#D9F2EC]/50 border border-[#BFE7DE]">
                <span className="font-bold text-[#1F7E73] block mb-1">
                  ✓ Documentación Lista para Consejo de Administración y Contabilidad:
                </span>
                <p className="text-xs text-[#2A9D8F] leading-relaxed">
                  Entregamos RUT actualizado, Certificado de Cámara de Comercio vigente, Facturación Electrónica validada por la DIAN y Planilla PILA con pago de ARL y EPS de cada recreador previo al inicio del evento.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#242429] text-base font-display mb-2">
                  Eventos Principales para Conjuntos Residenciales:
                </h4>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li><strong>Celebración Día del Niño (Abril):</strong> Inflables temáticos gigantes, estaciones de feria kermesse, miniteca neón, crispetera y recreadores profesionales con ARL.</li>
                  <li><strong>Vacaciones Recreativas (Junio-Julio):</strong> Jornadas lúdicas continuas con actividades artísticas, científicas y deportivas.</li>
                  <li><strong>Halloween Infantil (Octubre):</strong> Obra teatral temática, pasarela de disfraces, pintucaritas artístico y hora loca.</li>
                  <li><strong>Novenas Navideñas (Diciembre):</strong> Pesebre teatralizado en vivo, animación de villancicos con sonido lineal y personajes.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#242429] text-base font-display mb-2">
                  Requisitos Técnicos Suministrados por la Copropiedad:
                </h4>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Toma eléctrica estándar de 110V a menos de 20 metros de la zona de inflables o sonido.</li>
                  <li>Zona cubierta alterna (salón comunal o carpas) en caso de contingencia por lluvia en Bogotá.</li>
                  <li>Autorización de ingreso para el staff de Imagin-ART 40 minutos antes del inicio para montaje.</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-[#FAF6EE] border-t border-[#F4ECE0] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-white hover:bg-[#F4ECE0] text-[#242429] border border-[#EAE0D0] font-semibold text-xs rounded-xl flex items-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#7C5CFA]" />
                <span>Imprimir / Guardar como PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setShowPortfolioModal(false)}
                className="px-5 py-2 bg-[#242429] hover:bg-[#34343D] text-white font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
