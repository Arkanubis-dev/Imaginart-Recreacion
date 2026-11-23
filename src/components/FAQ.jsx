'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS_BOGOTA = [
  {
    q: '¿Con cuánto tiempo de anticipación se debe reservar el evento?',
    a: `Para fiestas infantiles de fines de semana recomendamos apartar la fecha con mínimo 1 a 2 semanas de anticipación. Para fechas de alta demanda en conjuntos residenciales (Día del Niño en abril, vacaciones en junio/julio, Halloween en octubre y Novenas en diciembre) sugerimos reservar con 3 a 4 semanas de antelación para asegurar disponibilidad de inflables y recreadores asignados.`
  },
  {
    q: '¿Cómo funcionan los abonos y medios de pago?',
    a: `Para separar la fecha en nuestro calendario oficial solicitamos un anticipo del 50% del valor total presupuestado. El 50% restante se cancela el día del evento antes del inicio de las actividades recreativas. Aceptamos transferencias Bancolombia, Nequi, Daviplata, PSE, tarjetas de crédito y efectivo contraentrega.`
  },
  {
    q: '¿Qué pasa si llueve en un evento al aire libre en Bogotá o la Sabana?',
    a: `El clima de Bogotá es impredecible. Por seguridad eléctrica y física de los niños, los inflables y equipos de sonido no pueden operarse bajo lluvia directa. Siempre solicitamos que el contratante o conjunto cuente con una zona cubierta alterna (salón comunal, kiosco, carpa impermeable). Nuestros recreadores adaptarán las dinámicas al espacio cubierto de inmediato. Si no existe espacio alterno, se ofrece reprogramación garantizada dentro de los siguientes 90 días sin cobros adicionales.`
  },
  {
    q: '¿Hasta qué zonas de Bogotá y alrededores cubren?',
    a: `Cubrimos todas las localidades de Bogotá (Usaquén, Suba, Colina, Cedritos, Salitre, Chapinero, Engativá, Fontibón, Kennedy, Teusaquillo, etc.) y municipios aledaños de la Sabana (Chía, Cajicá, Cota, Soacha, La Calera, Madrid, Mosquera, Funza, Sopó, Tabio). En municipios fuera del perímetro urbano aplica un recargo mínimo por desplazamiento del personal y transporte de equipos.`
  },
  {
    q: '¿Cuánto cuesta la hora extra o recreador adicional?',
    a: `La hora extra de recreación dirigida tiene un valor de $90.000 COP por recreador. Si tu evento tiene más de 30 niños y requieres un recreador adicional de apoyo para garantizar atención personalizada y mayor seguridad, el costo es de $110.000 COP por jornada estándar.`
  },
  {
    q: '¿Cómo aplica el Derecho de Retracto legal (Ley 1480 de 2011)?',
    a: `De conformidad con el Artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor), en compras o contrataciones realizadas a través de canales no presenciales (sitio web, WhatsApp o teléfono), el cliente tiene derecho a retractarse dentro de los cinco (5) días hábiles siguientes al pago del abono, siempre que el servicio no haya comenzado a ejecutarse. Se reembolsará el 100% del dinero pagado en un plazo máximo de 30 días calendario.`
  }
];

export default function FAQ({ onOpenLegal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Resolución de Objeciones
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-4 tracking-tight">
            Preguntas Frecuentes Antes de Contratar
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Resolvemos tus dudas antes de que preguntes: tiempos, zonas, clima, abonos y garantías en Bogotá.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_BOGOTA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-black text-slate-900 hover:text-indigo-600 transition gap-4"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <div className="p-1 text-slate-500 bg-slate-50 rounded-lg flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="whitespace-pre-line">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enlace a soporte legal */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">¿Tienes dudas adicionales sobre contratos o políticas?</h4>
            <p className="text-xs text-slate-500">Consulta los documentos completos avalados bajo la legislación colombiana.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onOpenLegal('terms')}
              className="px-4 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition"
            >
              Términos & Retracto
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 transition"
            >
              Habeas Data
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
