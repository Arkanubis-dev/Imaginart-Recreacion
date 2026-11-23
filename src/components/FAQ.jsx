'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS_BOGOTA = [
  {
    q: '¿Con cuánto tiempo de anticipación se debe reservar el evento?',
    a: `Para fiestas infantiles de fines de semana recomendamos apartar la fecha con mínimo 1 a 2 semanas de anticipación. Para fechas de alta demanda en conjuntos residenciales (Día del Niño en abril, vacaciones en junio/julio, Halloween en octubre y Novenas en diciembre) sugerimos reservar con 3 a 4 semanas de antelación para asegurar disponibilidad de inflables y recreadores asignados.`
  },
  {
    q: '¿Cómo funcionan los abonos y medios de pago?',
    a: `Para separar la fecha en nuestro calendario oficial solicitamos un anticipo del 50% del valor total presupuestado. El 50% restante se cancela el día del evento antes del inicio de las actividades recreativas. Aceptamos transferencias Bancolombia, Nequi, Daviplata, PSE y efectivo contraentrega.`
  },
  {
    q: '¿Qué pasa si llueve en un evento al aire libre en Bogotá o la Sabana?',
    a: `El clima de Bogotá puede ser cambiante. Por seguridad eléctrica y física de los niños, los inflables y equipos de sonido no pueden operarse bajo lluvia directa. Siempre solicitamos que el contratante o conjunto cuente con una zona cubierta alterna (salón comunal, kiosco, carpa impermeable). Nuestros recreadores adaptarán las dinámicas al espacio cubierto de inmediato. Si no existe espacio alterno, se ofrece reprogramación garantizada dentro de los siguientes 90 días sin cobros adicionales.`
  },
  {
    q: '¿Hasta qué zonas de Bogotá y alrededores cubren?',
    a: `Cubrimos todas las localidades de Bogotá (Usaquén, Suba, Colina, Cedritos, Salitre, Chapinero, Engativá, Fontibón, Kennedy, Teusaquillo, etc.) y municipios aledaños de la Sabana (Chía, Cajicá, Cota, Soacha, La Calera, Madrid, Mosquera, Funza, Sopó, Tabio). En municipios fuera del perímetro urbano aplica un recargo mínimo por desplazamiento del personal.`
  },
  {
    q: '¿Cuánto cuesta la hora extra o recreador adicional?',
    a: `La hora extra de recreación dirigida tiene un valor de $90.000 COP por recreador. Si tu evento tiene más de 30 niños y requieres un recreador adicional de apoyo para garantizar atención personalizada y mayor seguridad, el costo es de $110.000 COP por jornada estándar.`
  },
  {
    q: '¿Cómo aplica el Derecho de Retracto legal (Ley 1480 de 2011)?',
    a: `De conformidad con el Artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor), en compras o contrataciones realizadas a través de canales no presenciales (sitio web o WhatsApp), el cliente tiene derecho a retractarse dentro de los cinco (5) días hábiles siguientes al pago del abono, siempre que el servicio no haya comenzado a ejecutarse. Se reembolsará el 100% del dinero pagado en un plazo máximo de 30 días calendario.`
  }
];

export default function FAQ({ onOpenLegal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF6EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#7C5CFA]" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Respuestas claras antes de contratar
          </h2>
          <p className="mt-2 text-base text-[#555560]">
            Resolvemos tus dudas sobre tiempos, zonas, clima, abonos y garantías en Bogotá.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_BOGOTA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#EAE0D0] rounded-2xl overflow-hidden shadow-soft transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#242429] hover:text-[#7C5CFA] transition gap-4 cursor-pointer font-display"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <div className="p-1.5 text-[#767682] bg-[#FAF6EE] rounded-xl flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#7C5CFA]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555560] leading-relaxed border-t border-[#F4ECE0]">
                    <p className="whitespace-pre-line">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Respaldo Legal de Políticas */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#EAE0D0] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#242429] font-display">¿Tienes dudas adicionales sobre contratos o políticas?</h4>
            <p className="text-xs text-[#555560]">Consulta los documentos completos avalados bajo la legislación colombiana.</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="px-4 py-2 text-xs font-semibold text-[#6442DF] bg-[#E8DFF5] rounded-xl hover:bg-[#D5C4ED] transition cursor-pointer"
            >
              Términos & Retracto
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="px-4 py-2 text-xs font-semibold text-[#242429] bg-[#FAF6EE] border border-[#EAE0D0] rounded-xl hover:bg-[#F4ECE0] transition cursor-pointer"
            >
              Habeas Data
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
