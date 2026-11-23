'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Download, 
  Users2, 
  CheckCircle2, 
  MessageCircle,
  BadgeCheck
} from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';

export default function B2BSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const b2bDocs = [
    { title: 'RUT Vigente DIAN', desc: 'Actividad económica principal de recreación, entretenimiento y artes.' },
    { title: 'Cámara de Comercio', desc: 'Certificado de Existencia y Representación Legal al día.' },
    { title: 'Planilla PILA y ARL', desc: 'Seguridad social y ARL de cada recreador previo al evento.' },
    { title: 'Facturación Electrónica', desc: 'Facturación oficial DIAN para el Consejo o Contabilidad.' },
    { title: 'Póliza de Cumplimiento', desc: 'Póliza y garantías requeridas para contrataciones formales.' }
  ];

  const handleDownloadPortfolio = () => {
    const content = `=====================================================
PORTAFOLIO INSTITUCIONAL B2B - IMAGIN-ART-RECREACIÓN S.A.S.
Eventos para Conjuntos Residenciales y Empresas en Bogotá
=====================================================

Nombre Comercial: ${LEGAL_INFO.commercialName}
Razón Social: ${LEGAL_INFO.companyName}
NIT: ${LEGAL_INFO.nit}
WhatsApp Oficial: ${LEGAL_INFO.whatsapp}
Teléfono: ${LEGAL_INFO.phone}
Correo Institucional: ${LEGAL_INFO.emailGeneral}
Cobertura: Bogotá D.C., Chía, Cajicá, Cota, Soacha y municipios de la Sabana

1. EVENTOS PARA CONJUNTOS RESIDENCIALES (PROPIEDAD HORIZONTAL)
- Día del Niño (Abril): Inflables temáticos, ferias kermesse, minitecas neón.
- Vacaciones Recreativas (Junio-Julio): Talleres artísticos, ecológicos y deportivos.
- Celebración de Halloween (Octubre): Show temático, túnel de sorpresas y hora loca.
- Novenas Navideñas (Diciembre): Pesebre en vivo, coros y animación de villancicos.
- Asambleas de Copropietarios: Cuidado y recreación lúdica de niños durante la reunión.

2. EVENTOS CORPORATIVOS & RECURSOS HUMANOS
- Días de la Familia Empresarial (Family Days hasta 1.000 personas).
- Pausas activas masivas y programas de bienestar laboral lúdico.
- Fiestas de Fin de Año para colaboradores e hijos de trabajadores.
- Olimpiadas Recreativas y Team Building para fortalecimiento de equipos.

3. DOCUMENTACIÓN LEGAL ENTREGADA EN CADA CONTRATO
✓ RUT actualizado con actividad de entretenimiento y recreación.
✓ Certificado de Existencia y Representación Legal de Cámara de Comercio.
✓ Planilla PILA con pago vigente de EPS y ARL de todos los recreadores.
✓ Factura Electrónica emitida con validación previa de la DIAN.
✓ Certificación técnica y pólizas de los juegos inflables.

Para agendar una presentación formal ante el Consejo de Administración
o coordinar una visita técnica a sus instalaciones, escríbanos a:
${LEGAL_INFO.emailGeneral} o WhatsApp: ${LEGAL_INFO.whatsapp}`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Portafolio_Imagin_ART_Recreacion_B2B.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="empresas-conjuntos" className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-700/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header B2B */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-800/80 border border-indigo-700 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            <span>Exclusivo para Conjuntos Residenciales & Empresas (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tranquilidad Total para Administradores de Conjuntos y Áreas de RRHH
          </h2>
          <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
            Sabemos que el Consejo de Administración y la Gerencia exigen formalidad absoluta. En <strong className="text-white">Imagin-ART-recreación</strong> entregamos toda la documentación tributaria y de seguridad social antes de iniciar cada evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Documentación Entregada (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-emerald-400" />
              Documentación Legal y Laboral al Día
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {b2bDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-800 flex items-start gap-3 backdrop-blur-sm"
                >
                  <div className="p-2 bg-emerald-500/20 text-emerald-300 rounded-xl flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{doc.title}</h4>
                    <p className="text-[11px] text-indigo-200 mt-0.5 leading-snug">{doc.desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-800 flex items-start gap-3 backdrop-blur-sm">
                <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl flex-shrink-0 mt-0.5">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Aforos de 30 a 800+ personas</h4>
                  <p className="text-[11px] text-indigo-200 mt-0.5 leading-snug">Sonido profesional lineal y staff coordinado para eventos masivos.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-indigo-950/70 border border-indigo-800 text-xs text-indigo-100">
              <span className="font-bold text-amber-300 block mb-1">
                📅 Fechas Clave para su Calendario en la Copropiedad:
              </span>
              <p className="text-indigo-200 text-[11px]">
                Día del Niño (abril) • Vacaciones Recreativas (junio-julio) • Halloween Infantil (octubre) • Novenas y Cierre de Año (diciembre). 
                <strong className="text-white"> ¡Reserve con anticipación para garantizar disponibilidad de inflables y recreadores!</strong>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Descarga de Portafolio B2B (5 cols) */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl relative">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
              Ficha Técnica para Presentación al Consejo
            </span>
            <h3 className="text-xl font-black text-slate-900 mb-3">
              Descargue Nuestro Portafolio Institucional
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Descargue la ficha técnica con fotos, especificaciones de inflables, requisitos eléctricos y cotizaciones corporativas tipo para someter a aprobación de junta o administración.
            </p>

            {/* Botón de Descarga */}
            <button
              onClick={handleDownloadPortfolio}
              className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2 mb-3"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{downloadSuccess ? '✓ Portafolio Descargado' : 'Descargar Portafolio en PDF / Ficha'}</span>
            </button>

            {downloadSuccess && (
              <p className="text-[11px] text-emerald-600 font-bold text-center mb-3">
                Archivo descargado con éxito en su equipo.
              </p>
            )}

            {/* Botón WhatsApp B2B */}
            <a
              href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent('Hola Imagin-ART-recreación, soy administrador de copropiedad / encargado de RRHH y requiero una propuesta formal para un evento en Bogotá.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Atención Prioritaria B2B (300 125 0524)</span>
            </a>

            <p className="text-[10px] text-slate-400 text-center mt-3">
              Atención a Consejos de Administración, Comités de Convivencia y Talento Humano.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
