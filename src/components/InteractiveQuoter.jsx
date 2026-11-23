'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  MessageCircle, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle,
  Check,
  Building2,
  ArrowRight,
  ArrowLeft,
  Cake,
  Award
} from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';
import { saveQuoteLead } from '@/lib/supabase';

// Tipos de evento (Paso 1)
const EVENT_TYPES = [
  { id: 'infantil', label: 'Fiesta Infantil', desc: 'Cumpleaños, bautizo o comunión', icon: Cake, basePrice: 290000 },
  { id: 'conjunto', label: 'Conjunto Residencial', desc: 'Día del Niño, Halloween, novenas', icon: Building2, basePrice: 450000 },
  { id: 'empresa', label: 'Evento Corporativo', desc: 'Family Day, fin de año, bienestar', icon: Award, basePrice: 580000 },
  { id: 'colegio', label: 'Colegio o Jardín', desc: 'Clausura, convivencia o ferias', icon: Sparkles, basePrice: 380000 }
];

// Cantidad de niños / asistentes (Paso 2)
const GUEST_OPTIONS = [
  { id: 'g1', label: '10 a 20 niños', desc: 'Reunión pequeña en casa o salón comunal', staff: '2 Recreadores', priceAdj: 0 },
  { id: 'g2', label: '20 a 35 niños', desc: 'Fiesta promedio con alta energía', staff: '2 Recreadores + Sonido', priceAdj: 60000 },
  { id: 'g3', label: '35 a 60 asistentes', desc: 'Grupo mediano o salón amplio', staff: '3 Recreadores + Sonido Pro', priceAdj: 140000 },
  { id: 'g4', label: 'Más de 60 asistentes', desc: 'Evento masivo para conjunto o empresa', staff: 'Staff coordinado + Sonido Lineal', priceAdj: 280000 }
];

// Extras opcionales (Paso 3)
const EXTRAS_OPTIONS = [
  { id: 'pintucaritas', name: 'Pintucaritas Artístico Hipoalergénico', price: 60000, desc: 'Maquillaje al agua, escarcha y glitter profesional' },
  { id: 'globoflexia', name: 'Globoflexia de Figuras Ilimitada', price: 50000, desc: 'Espadas, coronas, perritos y flores para todos' },
  { id: 'magia-comica', name: 'Show de Magia Cómica y Títeres', price: 110000, desc: '35 min de comedia interactiva que hace reír a todos' },
  { id: 'sonido-luces', name: 'Cabina de Sonido Pro y Micrófono Inalámbrico', price: 90000, desc: 'Música ambiental y animación durante toda la jornada' },
  { id: 'inflable', name: 'Alquiler de Inflable Saltarín con Operador', price: 220000, desc: 'Castillo o tobogán con motor continuo y control de turnos' },
  { id: 'miniteca-neon', name: 'Miniteca Neón, Luces Robóticas y Humo', price: 290000, desc: 'Efecto fluorescente, luz ultravioleta y DJ' },
  { id: 'crispetas', name: 'Estación de Crispetas Recién Hechas (2 hrs)', price: 150000, desc: 'Carrito vintage con crispetas dulces o saladas' },
  { id: 'algodon', name: 'Estación de Algodón de Azúcar de Colores', price: 160000, desc: 'Algodón dulce preparado en vivo frente a los niños' }
];

// Zonas de Bogotá y alrededores
const BOGOTA_ZONES = [
  'Usaquén / Cedritos / Santa Bárbara',
  'Suba / Colina Campestre / Pontevedra',
  'Salitre / Teusaquillo / Quinta Paredes',
  'Chapinero / Chicó / Rosales',
  'Engativá / Álamos / Villas de Granada',
  'Fontibón / Hayuelos / Modelia',
  'Kennedy / Castilla / Américas',
  'Chía / Cajicá / Cota',
  'Soacha / Madrid / Mosquera',
  'Otra zona de Bogotá o Sabana'
];

export default function InteractiveQuoter({ onOpenLegal }) {
  const [step, setStep] = useState(1);

  const [selectedEventType, setSelectedEventType] = useState(EVENT_TYPES[0]);
  const [selectedGuest, setSelectedGuest] = useState(GUEST_OPTIONS[1]);
  const [selectedExtras, setSelectedExtras] = useState(['pintucaritas', 'globoflexia', 'sonido-luces']);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zone, setZone] = useState(BOGOTA_ZONES[0]);
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  // Checkboxes legales obligatorios (desmarcados por defecto)
  const [acceptedHabeasData, setAcceptedHabeasData] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [legalError, setLegalError] = useState('');

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Número oficial: 3001250524
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  const toggleExtra = (id) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const item = EXTRAS_OPTIONS.find((e) => e.id === extraId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = selectedEventType.basePrice + selectedGuest.priceAdj + extrasTotal;

  const formatCOP = (val) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  const buildWhatsAppMessage = () => {
    const extrasList = selectedExtras
      .map((id) => EXTRAS_OPTIONS.find((e) => e.id === id)?.name)
      .join('\n  • ');

    return `🎈 *COTIZACIÓN IMAGIN-ART-RECREACIÓN* 🎈
------------------------------------------
👤 *Cliente:* ${name || 'Por definir'}
📱 *WhatsApp:* ${phone || 'No indicado'}
📍 *Zona/Barrio:* ${zone}
📅 *Fecha Estimada:* ${eventDate || 'Por concertar'}
------------------------------------------
🎉 *Paso 1: Tipo de Evento:*
  • ${selectedEventType.label}

👥 *Paso 2: Número de Asistentes:*
  • ${selectedGuest.label} (${selectedGuest.staff})

✨ *Paso 3: Extras Seleccionados:*
  • ${extrasList || 'Ninguno adicional'}

💰 *TOTAL ESTIMADO:* ${formatCOP(grandTotal)}
💵 *Abono de Reserva (50%):* ${formatCOP(grandTotal * 0.5)}
------------------------------------------
⚖️ *Consentimiento Legal (Colombia):*
✓ Acepto la Política de Tratamiento de Datos Personales (Ley 1581 de 2012)
✓ Acepto los Términos y Condiciones del Servicio (Ley 1480 de 2011)

📝 *Notas:* ${notes || 'Sin observaciones adicionales'}`;
  };

  const handleSendToWhatsApp = (e) => {
    if (e) e.preventDefault();
    setLegalError('');

    if (!name.trim() || !phone.trim()) {
      setLegalError('Por favor ingresa tu Nombre y número de WhatsApp para entregarte la cotización.');
      return;
    }

    if (!acceptedHabeasData) {
      setLegalError('Debes marcar la casilla obligatoria: "Acepto la Política de Tratamiento de Datos Personales" (Ley 1581 de 2012).');
      return;
    }

    if (!acceptedTerms) {
      setLegalError('Debes marcar la casilla obligatoria: "Acepto los Términos y Condiciones del Servicio" (Ley 1480 de 2011).');
      return;
    }

    saveQuoteLead({
      client_name: name,
      client_phone: phone,
      event_type: selectedEventType.label,
      guest_count: selectedGuest.label,
      addons: selectedExtras,
      estimated_total: grandTotal,
      city: zone,
      event_date: eventDate,
      notes: notes,
      habeas_data_accepted: true,
      terms_accepted: true
    }).catch(console.warn);

    const encoded = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${cleanWhatsAppNumber}?text=${encoded}`, '_blank');
    setSubmittedSuccess(true);
  };

  return (
    <section id="cotizador" className="py-20 bg-gradient-to-b from-white via-indigo-50/20 to-white relative border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Cotizador Inteligente Paso a Paso
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Calcula Tu Evento al Instante y Recíbelo por WhatsApp
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Elige tu evento, número de niños y tus extras favoritos. Te entregamos un estimado transparente para tu fiesta con <strong className="text-slate-900">Imagin-ART-recreación</strong>.
          </p>
        </div>

        {/* Indicador de 4 Pasos */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-10 text-center">
          {[
            { num: 1, label: 'Tipo de Evento' },
            { num: 2, label: 'Número de Niños' },
            { num: 3, label: 'Extras y Sonido' },
            { num: 4, label: 'Estimado & WhatsApp' }
          ].map((item) => (
            <button
              key={item.num}
              type="button"
              onClick={() => setStep(item.num)}
              className={`p-3 rounded-2xl border transition text-left flex flex-col justify-between ${
                step === item.num
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : step > item.num
                  ? 'bg-white border-emerald-300 text-slate-800'
                  : 'bg-white/80 border-slate-200 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${
                  step === item.num
                    ? 'bg-white text-indigo-600'
                    : step > item.num
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {step > item.num ? '✓' : item.num}
                </span>
                <span className={`text-[10px] uppercase font-bold hidden sm:inline ${
                  step === item.num ? 'text-indigo-100' : 'text-slate-400'
                }`}>
                  Paso {item.num}
                </span>
              </div>
              <span className="text-xs font-bold truncate block">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Tarjeta del Wizard */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* PASO 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-indigo-600 font-mono">1.</span>
                  ¿Qué tipo de evento estás planeando?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecciona la celebración que deseas realizar en Bogotá o municipios de la Sabana.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EVENT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedEventType.id === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedEventType(type)}
                      className={`cursor-pointer p-5 rounded-2xl border transition duration-200 flex items-start gap-4 ${
                        isSelected
                          ? 'bg-indigo-50/70 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
                          : 'bg-[#FAFBFD] border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className={`p-3 rounded-2xl ${
                        isSelected ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black text-slate-900">{type.label}</h4>
                          {isSelected && <Check className="w-4 h-4 text-indigo-600" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{type.desc}</p>
                        <span className="inline-block mt-2 text-[11px] font-bold text-indigo-600">
                          Base desde {formatCOP(type.basePrice)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shadow-md"
                >
                  <span>Continuar: Número de Niños</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-indigo-600 font-mono">2.</span>
                  ¿Cuántos niños o invitados asistirán?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  En Imagin-ART asignamos el número de recreadores ideal para garantizar seguridad y atención personalizada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUEST_OPTIONS.map((opt) => {
                  const isSelected = selectedGuest.id === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedGuest(opt)}
                      className={`cursor-pointer p-5 rounded-2xl border transition duration-200 ${
                        isSelected
                          ? 'bg-indigo-50/70 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
                          : 'bg-[#FAFBFD] border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-black text-slate-900">{opt.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mb-3">{opt.desc}</p>
                      <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                        <span className="text-slate-700 font-bold">👥 {opt.staff}</span>
                        <span className="text-indigo-600 font-black">
                          {opt.priceAdj === 0 ? 'Incluido' : `+${formatCOP(opt.priceAdj)}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Atrás</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shadow-md"
                >
                  <span>Continuar: Extras y Sonido</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* PASO 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-indigo-600 font-mono">3.</span>
                  ¿Qué atracciones o extras deseas sumar?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pintucaritas artístico, magia, inflables saltarines, sonido y estaciones de snacks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {EXTRAS_OPTIONS.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition duration-200 flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500'
                          : 'bg-[#FAFBFD] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 mt-0.5 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-slate-900">{extra.name}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{extra.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 flex-shrink-0">
                        +{formatCOP(extra.price)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Estimado actual:</span>
                  <span className="text-xl font-black text-indigo-700">{formatCOP(grandTotal)}</span>
                </div>
                <span className="text-xs text-slate-600 font-bold">
                  {selectedExtras.length} extras seleccionados
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Atrás</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shadow-md"
                >
                  <span>Ver Resumen & Recibir por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* PASO 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-indigo-600 font-mono">4.</span>
                  Resumen de tu Cotización & Envío a WhatsApp
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enviaremos tu cotización al WhatsApp <strong className="text-slate-900 font-bold">300 125 0524</strong> de Imagin-ART-recreación.
                </p>
              </div>

              {/* Resumen */}
              <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Tipo de Evento:</span>
                  <strong className="text-slate-900">{selectedEventType.label}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Capacidad:</span>
                  <strong className="text-slate-900">{selectedGuest.label} ({selectedGuest.staff})</strong>
                </div>
                <div className="border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 block mb-1">Extras Seleccionados ({selectedExtras.length}):</span>
                  <div className="space-y-1 pl-2">
                    {selectedExtras.map((id) => {
                      const item = EXTRAS_OPTIONS.find((e) => e.id === id);
                      return (
                        <div key={id} className="flex justify-between text-slate-600 text-[11px]">
                          <span>• {item?.name}</span>
                          <span className="text-indigo-600 font-bold">{formatCOP(item?.price || 0)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-baseline justify-between pt-1 text-sm">
                  <span className="font-bold text-slate-900">TOTAL ESTIMADO:</span>
                  <span className="text-2xl font-black text-indigo-700 tracking-tight">
                    {formatCOP(grandTotal)}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 text-right">
                  Abono del 50% para reserva de fecha: <strong className="text-slate-800">{formatCOP(grandTotal * 0.5)}</strong>
                </div>
              </div>

              {/* Datos de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">
                    Tu Nombre Completo <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Marcela Gómez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAFBFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">
                    Tu Número de WhatsApp / Celular <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 300 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAFBFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">
                    Zona o Barrio en Bogotá
                  </label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full bg-[#FAFBFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  >
                    {BOGOTA_ZONES.map((z, idx) => (
                      <option key={idx} value={z}>{z}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">
                    Fecha Estimada del Evento
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#FAFBFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-700 block mb-1 font-medium">
                    Lugar exacto o temática especial (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Salón comunal del conjunto, temática Mario Bros, espacio al aire libre..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#FAFBFD] border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* REQUISITOS LEGALES OBLIGATORIOS (COLOMBIA) */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="text-[11px] font-black text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Requisitos Legales Obligatorios (Colombia)
                </div>

                {/* CHECKBOX 1: HABEAS DATA */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="checkboxHabeasData"
                    required
                    checked={acceptedHabeasData}
                    onChange={(e) => {
                      setAcceptedHabeasData(e.target.checked);
                      if (e.target.checked) setLegalError('');
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600 flex-shrink-0"
                  />
                  <label htmlFor="checkboxHabeasData" className="text-[11px] text-slate-700 leading-snug cursor-pointer select-none">
                    <span className="text-rose-600 font-bold">* Obligatorio:</span> Acepto la{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal && onOpenLegal('privacy')}
                      className="text-indigo-600 underline font-bold hover:text-indigo-700 inline"
                    >
                      Política de Tratamiento de Datos Personales
                    </button>{' '}
                    (Ley 1581 de 2012) para que Imagin-ART-recreación elabore y remita mi cotización.
                  </label>
                </div>

                {/* CHECKBOX 2: TÉRMINOS Y RETRACTO */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="checkboxTerms"
                    required
                    checked={acceptedTerms}
                    onChange={(e) => {
                      setAcceptedTerms(e.target.checked);
                      if (e.target.checked) setLegalError('');
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600 flex-shrink-0"
                  />
                  <label htmlFor="checkboxTerms" className="text-[11px] text-slate-700 leading-snug cursor-pointer select-none">
                    <span className="text-rose-600 font-bold">* Obligatorio:</span> Acepto los{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal && onOpenLegal('terms')}
                      className="text-indigo-600 underline font-bold hover:text-indigo-700 inline"
                    >
                      Términos y Condiciones del Servicio
                    </button>
                    , incluyendo reservas (50% anticipo), cancelaciones y el Derecho de Retracto (Art. 47 Ley 1480).
                  </label>
                </div>

                {legalError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{legalError}</span>
                  </div>
                )}
              </div>

              {/* Botón WhatsApp */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/25 transition transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Cotización al WhatsApp (300 125 0524)</span>
                </button>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs text-slate-500 hover:text-indigo-600 font-bold flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Modificar Extras</span>
                  </button>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Atención directa por WhatsApp • Respuesta en 15 minutos
                  </span>
                </div>
              </div>

              {submittedSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs text-center font-bold">
                  ✓ ¡Chat de WhatsApp generado exitosamente! También guardamos tu cotización en la base de datos.
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
