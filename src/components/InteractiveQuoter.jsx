'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Award, 
  Theater, 
  Copy,
  ExternalLink
} from 'lucide-react';
import { LEGAL_INFO } from '@/lib/legalContent';
import { saveQuoteLead } from '@/lib/supabase';
import { BOGOTA_ZONES, ADDONS } from '@/lib/packagesData';

// Tipos de evento (Paso 1)
const EVENT_TYPES_LIST = [
  { id: 'infantil', label: 'Fiesta Infantil & Cumpleaños', desc: 'Cumpleaños temático, 1 a 12 años', icon: Cake, basePrice: 290000 },
  { id: 'teatro', label: 'Show Teatral o Circo', desc: 'Fábrica de Burbujas, Magia o Títeres', icon: Theater, basePrice: 380000 },
  { id: 'conjunto', label: 'Conjunto Residencial', desc: 'Día del Niño, Halloween, Novenas', icon: Building2, basePrice: 450000 },
  { id: 'empresa', label: 'Evento Corporativo / Colegios', desc: 'Family Day, clausuras, integración', icon: Award, basePrice: 580000 }
];

// Cantidad de niños / asistentes (Paso 2)
const GUEST_OPTIONS_LIST = [
  { id: 'g1', label: 'Hasta 15 niños', desc: 'Fiesta familiar pequeña en casa', staff: '2 Recreadores', priceAdj: 0 },
  { id: 'g2', label: '15 a 30 niños', desc: 'Cumpleaños promedio en salón comunal', staff: '2 Recreadores + Sonido', priceAdj: 60000 },
  { id: 'g3', label: '30 a 60 asistentes', desc: 'Grupo mediano o salón amplio', staff: '3 Recreadores + Sonido Pro', priceAdj: 140000 },
  { id: 'g4', label: 'Más de 60 asistentes', desc: 'Evento masivo para conjunto o empresa', staff: 'Staff coordinado + Sonido Lineal', priceAdj: 280000 }
];

export default function InteractiveQuoter({ onOpenLegal, selectedPackage, selectedPackageId }) {
  const [step, setStep] = useState(1);
  const [selectedPlanNotification, setSelectedPlanNotification] = useState('');

  const [selectedEventType, setSelectedEventType] = useState(EVENT_TYPES_LIST[0]);
  const [selectedGuest, setSelectedGuest] = useState(GUEST_OPTIONS_LIST[1]);
  const [selectedExtras, setSelectedExtras] = useState(['fabrica-burbujas', 'luces-humo']);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zone, setZone] = useState(BOGOTA_ZONES[0]);
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  // Checkboxes legales obligatorios (desmarcados por defecto conforme a la SIC y Ley 1581)
  const [acceptedHabeasData, setAcceptedHabeasData] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [legalError, setLegalError] = useState('');

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const errorRef = useRef(null);

  // WhatsApp oficial: 3001250524
  const cleanWhatsAppNumber = LEGAL_INFO.whatsapp.replace(/\D/g, '');

  // Determinar identificador recibido (acepta objeto { id, timestamp } o string)
  const incomingPackageId = typeof selectedPackage === 'string' 
    ? selectedPackage 
    : (selectedPackage?.id || selectedPackageId);
  const incomingTimestamp = selectedPackage?.timestamp || 0;

  // Sincronizar selección cuando el usuario hace clic en un plan o show en la página
  useEffect(() => {
    if (!incomingPackageId) return;

    if (incomingPackageId === 'plan-basico') {
      setSelectedEventType(EVENT_TYPES_LIST[0]);
      setSelectedGuest(GUEST_OPTIONS_LIST[0]);
      setSelectedExtras(['show-magia']);
      setSelectedPlanNotification('Plan Lúdico & Pintucaritas ($290.000 COP)');
      setStep(1);
    } else if (incomingPackageId === 'plan-intermedio') {
      setSelectedEventType(EVENT_TYPES_LIST[1]);
      setSelectedGuest(GUEST_OPTIONS_LIST[1]);
      setSelectedExtras(['show-magia', 'show-titeres']);
      setSelectedPlanNotification('Plan Mágico Teatral & Títeres ($420.000 COP)');
      setStep(1);
    } else if (incomingPackageId === 'plan-premium') {
      setSelectedEventType(EVENT_TYPES_LIST[1]);
      setSelectedGuest(GUEST_OPTIONS_LIST[2]);
      setSelectedExtras(['fabrica-burbujas', 'luces-humo']);
      setSelectedPlanNotification('Mega Show Burbujas & Circo ($680.000 COP)');
      setStep(3);
    } else if (['fabrica-burbujas', 'burbujas', 'burbujas-show'].includes(incomingPackageId)) {
      setSelectedEventType(EVENT_TYPES_LIST[1]);
      setSelectedGuest(GUEST_OPTIONS_LIST[1]);
      if (!selectedExtras.includes('fabrica-burbujas')) {
        setSelectedExtras((prev) => [...prev, 'fabrica-burbujas']);
      }
      setSelectedPlanNotification('Show Estrella "La Fábrica de las Burbujas"');
      setStep(3);
    } else if (incomingPackageId === 'circo') {
      setSelectedEventType(EVENT_TYPES_LIST[1]);
      if (!selectedExtras.includes('show-magia')) {
        setSelectedExtras((prev) => [...prev, 'show-magia']);
      }
      setSelectedPlanNotification('Show "Fiesta Infantil de Circo"');
      setStep(3);
    } else if (incomingPackageId === 'titeres') {
      setSelectedEventType(EVENT_TYPES_LIST[1]);
      if (!selectedExtras.includes('show-titeres')) {
        setSelectedExtras((prev) => [...prev, 'show-titeres']);
      }
      setSelectedPlanNotification('Show "Aventuras en Títeres"');
      setStep(3);
    } else if (incomingPackageId === 'conjunto' || incomingPackageId === 'conjuntos') {
      setSelectedEventType(EVENT_TYPES_LIST[2]);
      setSelectedGuest(GUEST_OPTIONS_LIST[3]);
      setSelectedExtras(['inflable-saltarin', 'estacion-crispetas']);
      setSelectedPlanNotification('Evento para Conjunto Residencial');
      setStep(1);
    } else if (incomingPackageId === 'empresa' || incomingPackageId === 'corporativo') {
      setSelectedEventType(EVENT_TYPES_LIST[3]);
      setSelectedGuest(GUEST_OPTIONS_LIST[3]);
      setSelectedExtras(['inflable-saltarin', 'luces-humo']);
      setSelectedPlanNotification('Evento Corporativo & Empresa');
      setStep(1);
    }
  }, [incomingPackageId, incomingTimestamp]);

  const toggleExtra = (id) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const item = ADDONS.find((e) => e.id === extraId);
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
      .map((id) => ADDONS.find((e) => e.id === id)?.name)
      .filter(Boolean)
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

✨ *Paso 3: Shows y Extras Seleccionados:*
  • ${extrasList || 'Ninguno adicional'}

💰 *TOTAL ESTIMADO:* ${formatCOP(grandTotal)}
💵 *Abono de Reserva (50%):* ${formatCOP(grandTotal * 0.5)}
------------------------------------------
⚖️ *Consentimiento Legal (Colombia):*
✓ Acepto la Política de Tratamiento de Datos Personales (Ley 1581 de 2012)
✓ Acepto los Términos y Condiciones del Servicio (Ley 1480 de 2011)

📝 *Notas:* ${notes || 'Sin observaciones adicionales'}`;
  };

  const handleCopyMessage = () => {
    const msg = buildWhatsAppMessage();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(msg).then(() => {
        setCopiedSuccess(true);
        setTimeout(() => setCopiedSuccess(false), 3000);
      });
    }
  };

  const handleSendToWhatsApp = (e) => {
    if (e) e.preventDefault();
    setLegalError('');

    if (!name.trim()) {
      setLegalError('Por favor ingresa tu Nombre completo para generar la cotización.');
      if (errorRef.current) errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!phone.trim()) {
      setLegalError('Por favor ingresa tu número de WhatsApp para poder contactarte.');
      if (errorRef.current) errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!acceptedHabeasData) {
      setLegalError('Debes marcar la casilla: "Acepto la Política de Tratamiento de Datos Personales" (Ley 1581 de 2012).');
      if (errorRef.current) errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!acceptedTerms) {
      setLegalError('Debes marcar la casilla: "Acepto los Términos y Condiciones del Servicio" (Ley 1480 de 2011).');
      if (errorRef.current) errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Guardar lead de manera asíncrona sin bloquear la UI
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

    const messageText = buildWhatsAppMessage();
    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encoded}`;
    setLastWhatsAppUrl(waUrl);
    setSubmittedSuccess(true);

    // Método robusto para abrir WhatsApp evitando bloqueadores de ventanas emergentes (Pop-up blockers)
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    try {
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = isMobile ? '_self' : '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = waUrl;
    }

    if (isMobile) {
      // Redirección directa en teléfonos para garantizar apertura de la app
      setTimeout(() => {
        window.location.href = waUrl;
      }, 300);
    }
  };

  return (
    <section id="cotizador" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE0D0] text-[#555560] text-xs font-semibold tracking-wide mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#7C5CFA]" />
            <span>Cotizador Interactivo Paso a Paso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242429] tracking-tight font-display">
            Calcula tu evento al instante
          </h2>

          <p className="mt-2 text-base text-[#555560]">
            Elige el tipo de evento, número de niños y shows adicionales como la <strong className="text-[#242429]">Fábrica de Burbujas</strong>. Conoce el valor estimado y envíalo directo a nuestro WhatsApp sin intermediarios.
          </p>

          {/* Notificación de plan seleccionado desde la web */}
          {selectedPlanNotification && (
            <div className="mt-4 p-3 bg-[#E8DFF5]/60 border border-[#D5C4ED] rounded-2xl inline-flex items-center gap-2 text-xs font-semibold text-[#6442DF] animate-fade-in">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Configuración seleccionada: <strong>{selectedPlanNotification}</strong>. Puedes ajustarla a continuación:</span>
            </div>
          )}
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-[2.5rem] border border-[#EAE0D0] shadow-soft-lg overflow-hidden">
          
          {/* Stepper Tabs Interactivos */}
          <div className="grid grid-cols-4 bg-[#FAF6EE] border-b border-[#EAE0D0] text-center font-display">
            {[
              { num: 1, title: '1. Evento' },
              { num: 2, title: '2. Asistentes' },
              { num: 3, title: '3. Shows / Extras' },
              { num: 4, title: '4. WhatsApp & Datos' }
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setStep(s.num)}
                className={`py-4 px-2 text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  step === s.num
                    ? 'bg-white text-[#242429] border-b-2 border-[#7C5CFA] shadow-soft'
                    : 'text-[#767682] hover:text-[#242429] hover:bg-white/40'
                }`}
              >
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-10">
            
            {/* PASO 1: TIPO DE EVENTO */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#242429] font-display">
                    Paso 1: ¿Qué tipo de evento estás organizando?
                  </h3>
                  <p className="text-xs text-[#555560] mt-1">
                    Selecciona una opción para comenzar tu cotización:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EVENT_TYPES_LIST.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedEventType.id === type.id;
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setSelectedEventType(type)}
                        className={`p-5 rounded-3xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                          isSelected
                            ? 'border-[#7C5CFA] bg-[#E8DFF5]/30 shadow-soft'
                            : 'border-[#EAE0D0] hover:border-[#D5C4ED] bg-white'
                        }`}
                      >
                        <div className={`p-3 rounded-2xl flex-shrink-0 ${isSelected ? 'bg-[#7C5CFA] text-white' : 'bg-[#FAF6EE] text-[#555560]'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-[#242429] font-display">{type.label}</h4>
                            {isSelected && <CheckCircle className="w-5 h-5 text-[#7C5CFA] flex-shrink-0" />}
                          </div>
                          <p className="text-xs text-[#555560] mt-0.5">{type.desc}</p>
                          <span className="text-xs font-bold text-[#7C5CFA] mt-2 block font-display">
                            Base: {formatCOP(type.basePrice)}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#F4ECE0]">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="text-xs font-semibold text-[#555560] hover:text-[#7C5CFA] underline transition cursor-pointer"
                  >
                    O ir directo a enviar por WhatsApp con esta base →
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-xs uppercase tracking-wider rounded-2xl transition shadow-soft hover:shadow-soft-lg font-display cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Siguiente: Cantidad de Niños</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* PASO 2: CANTIDAD DE NIÑOS */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#242429] font-display">
                    Paso 2: ¿Cuántos niños o asistentes participarán?
                  </h3>
                  <p className="text-xs text-[#555560] mt-1">
                    Calculamos el staff necesario para una atención segura y personalizada:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {GUEST_OPTIONS_LIST.map((guest) => {
                    const isSelected = selectedGuest.id === guest.id;
                    return (
                      <button
                        type="button"
                        key={guest.id}
                        onClick={() => setSelectedGuest(guest)}
                        className={`p-5 rounded-3xl border-2 text-left cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-[#7C5CFA] bg-[#E8DFF5]/30 shadow-soft'
                            : 'border-[#EAE0D0] hover:border-[#D5C4ED] bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-[#242429] font-display">{guest.label}</h4>
                          {isSelected && <CheckCircle className="w-5 h-5 text-[#7C5CFA]" />}
                        </div>
                        <p className="text-xs text-[#555560] mt-1">{guest.desc}</p>
                        <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#F4ECE0]">
                          <span className="font-semibold text-[#242429]">👥 {guest.staff}</span>
                          <span className="font-bold text-[#555560] font-display">
                            {guest.priceAdj === 0 ? 'Sin recargo' : `+${formatCOP(guest.priceAdj)}`}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#F4ECE0]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto px-5 py-3 border border-[#EAE0D0] hover:bg-[#FAF6EE] text-[#555560] font-semibold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer font-display"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="text-xs font-semibold text-[#555560] hover:text-[#7C5CFA] underline transition cursor-pointer hidden sm:inline-block"
                    >
                      Ir directo a WhatsApp →
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-xs uppercase tracking-wider rounded-2xl transition shadow-soft font-display cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Siguiente: Shows y Extras</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PASO 3: SHOWS Y EXTRAS */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#242429] font-display">
                    Paso 3: Personaliza tu fiesta con Shows y Extras
                  </h3>
                  <p className="text-xs text-[#555560] mt-1">
                    Selecciona para añadir o retirar la Fábrica de Burbujas, circo, títeres o inflables:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {ADDONS.map((addon) => {
                    const isChecked = selectedExtras.includes(addon.id);
                    return (
                      <button
                        type="button"
                        key={addon.id}
                        onClick={() => toggleExtra(addon.id)}
                        className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                          isChecked
                            ? 'border-[#7C5CFA] bg-[#E8DFF5]/30 shadow-soft'
                            : 'border-[#EAE0D0] hover:border-[#D5C4ED] bg-white'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isChecked ? 'bg-[#7C5CFA] border-[#7C5CFA] text-white' : 'border-[#CBD5E1] bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-[#242429] font-display">{addon.name}</h4>
                            <span className="text-xs font-extrabold text-[#7C5CFA] font-display">{addon.priceFormatted}</span>
                          </div>
                          <p className="text-[11px] text-[#555560] mt-0.5">{addon.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Subtotal flotante */}
                <div className="p-4 rounded-2xl bg-[#FFF4CC]/50 border border-[#FFE999] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#996B00] flex-shrink-0" />
                    <div>
                      <span className="text-xs text-[#555560]">Total estimado acumulado:</span>
                      <strong className="block text-xl font-bold text-[#242429] font-display">{formatCOP(grandTotal)}</strong>
                    </div>
                  </div>
                  <span className="text-xs text-[#996B00] font-semibold bg-[#FFF4CC] px-3 py-1 rounded-full border border-[#E5B82A]/30">
                    50% de abono para reservar ({formatCOP(grandTotal * 0.5)})
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#F4ECE0]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-5 py-3 border border-[#EAE0D0] hover:bg-[#FAF6EE] text-[#555560] font-semibold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer font-display"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-xs uppercase tracking-wider rounded-2xl transition shadow-soft font-display cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Siguiente: Datos y WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* PASO 4: FORMULARIO Y CHECKBOXES LEGALES OBLIGATORIOS */}
            {step === 4 && (
              <form onSubmit={handleSendToWhatsApp} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#242429] font-display">
                    Paso 4: Envía tu Cotización a WhatsApp
                  </h3>
                  <p className="text-xs text-[#555560] mt-1">
                    Ingresa tus datos para recibir la propuesta formal al instante en el <strong className="text-[#242429]">300 125 0524</strong>:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#242429] mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carolina Mendoza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#EAE0D0] focus:border-[#7C5CFA] focus:ring-2 focus:ring-[#7C5CFA]/20 text-xs text-[#242429] bg-[#FAF6EE]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#242429] mb-1">
                      WhatsApp o Celular de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 300 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#EAE0D0] focus:border-[#7C5CFA] focus:ring-2 focus:ring-[#7C5CFA]/20 text-xs text-[#242429] bg-[#FAF6EE]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#242429] mb-1">
                      Zona o Barrio en Bogotá / Sabana *
                    </label>
                    <select
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#EAE0D0] focus:border-[#7C5CFA] focus:ring-2 focus:ring-[#7C5CFA]/20 text-xs text-[#242429] bg-white"
                    >
                      {BOGOTA_ZONES.map((z, idx) => (
                        <option key={idx} value={z}>{z}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#242429] mb-1">
                      Fecha Estimada del Evento
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#EAE0D0] focus:border-[#7C5CFA] focus:ring-2 focus:ring-[#7C5CFA]/20 text-xs text-[#242429] bg-[#FAF6EE]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#242429] mb-1">
                    Comentarios o Temática Especial (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej. Fiesta temática de superhéroes con Show de Burbujas en salón comunal..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-[#EAE0D0] focus:border-[#7C5CFA] focus:ring-2 focus:ring-[#7C5CFA]/20 text-xs text-[#242429] bg-[#FAF6EE]/50"
                  />
                </div>

                {/* Resumen Final de Valores */}
                <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#EAE0D0] space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#555560]">
                    <span>Evento: {selectedEventType.label} ({selectedGuest.label})</span>
                    <span>{formatCOP(selectedEventType.basePrice + selectedGuest.priceAdj)}</span>
                  </div>
                  {extrasTotal > 0 && (
                    <div className="flex items-center justify-between text-xs text-[#555560]">
                      <span>Shows y Extras ({selectedExtras.length} seleccionados)</span>
                      <span>+{formatCOP(extrasTotal)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#EAE0D0] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#555560] font-bold block">TOTAL ESTIMADO:</span>
                      <span className="text-2xl font-extrabold text-[#242429] font-display">{formatCOP(grandTotal)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#555560]">Abono de reserva (50%):</span>
                      <span className="block text-base font-bold text-[#2A9D8F] font-display">{formatCOP(grandTotal * 0.5)}</span>
                    </div>
                  </div>
                </div>

                {/* CHECKBOXES LEGALES OBLIGATORIOS (COLOMBIA) */}
                <div className="p-5 rounded-2xl bg-white border-2 border-[#EAE0D0] space-y-3.5">
                  <span className="text-[11px] font-bold text-[#242429] uppercase tracking-wider flex items-center gap-1.5 font-display">
                    <ShieldCheck className="w-4 h-4 text-[#7C5CFA]" />
                    <span>Consentimiento Legal Obligatorio (Colombia)</span>
                  </span>

                  {/* Checkbox 1: Habeas Data con área clickeable completa */}
                  <label 
                    htmlFor="checkbox-habeas" 
                    className="flex items-start gap-3 cursor-pointer select-none p-2 rounded-xl hover:bg-[#FAF6EE] transition"
                  >
                    <input
                      id="checkbox-habeas"
                      type="checkbox"
                      checked={acceptedHabeasData}
                      onChange={(e) => setAcceptedHabeasData(e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#7C5CFA] border-[#CBD5E1] rounded-md focus:ring-[#7C5CFA] cursor-pointer flex-shrink-0"
                    />
                    <div className="text-xs text-[#555560] leading-relaxed">
                      <span>Acepto la </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onOpenLegal && onOpenLegal('privacy');
                        }}
                        className="text-[#7C5CFA] font-bold underline hover:text-[#6442DF] cursor-pointer inline"
                      >
                        Política de Tratamiento de Datos Personales
                      </button>
                      <span> (Ley 1581 de 2012 / Habeas Data) para la recepción y trámite de esta cotización comercial.</span>
                    </div>
                  </label>

                  {/* Checkbox 2: Términos y Condiciones con área clickeable completa */}
                  <label 
                    htmlFor="checkbox-terms" 
                    className="flex items-start gap-3 cursor-pointer select-none p-2 rounded-xl hover:bg-[#FAF6EE] transition"
                  >
                    <input
                      id="checkbox-terms"
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#7C5CFA] border-[#CBD5E1] rounded-md focus:ring-[#7C5CFA] cursor-pointer flex-shrink-0"
                    />
                    <div className="text-xs text-[#555560] leading-relaxed">
                      <span>Acepto los </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onOpenLegal && onOpenLegal('terms');
                        }}
                        className="text-[#7C5CFA] font-bold underline hover:text-[#6442DF] cursor-pointer inline"
                      >
                        Términos y Condiciones del Servicio
                      </button>
                      <span> (Ley 1480 de 2011), incluyendo el abono del 50% para reserva y el Derecho de Retracto (Art. 47).</span>
                    </div>
                  </label>
                </div>

                {/* Mensaje de error legal destacado */}
                {legalError && (
                  <div 
                    ref={errorRef}
                    className="p-4 rounded-2xl bg-[#FCE1D6] border-2 border-[#FAC8B5] text-[#C04229] text-xs flex items-center gap-3 font-semibold shadow-sm animate-shake"
                  >
                    <AlertCircle className="w-5 h-5 text-[#C04229] flex-shrink-0" />
                    <span className="flex-grow">{legalError}</span>
                  </div>
                )}

                {/* Botones de Envío a WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="sm:w-1/3 py-4 border border-[#EAE0D0] hover:bg-[#FAF6EE] text-[#555560] font-semibold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 font-display cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>

                  <button
                    type="submit"
                    className="sm:w-2/3 py-4 px-6 bg-[#7C5CFA] hover:bg-[#6442DF] text-white font-semibold text-xs uppercase tracking-wider rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 font-display cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Enviar Cotización a WhatsApp (300 125 0524)</span>
                  </button>
                </div>

                {/* Panel de Confirmación Inmediata con Botón Directo y Copia */}
                {submittedSuccess && (
                  <div className="mt-6 p-6 rounded-3xl bg-[#D9F2EC]/60 border-2 border-[#8AD4C4] text-center space-y-4 animate-fade-in shadow-soft">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2A9D8F] text-white shadow-sm mb-1">
                      <CheckCircle className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#1F7E73] font-display">
                        ¡Tu cotización ha sido generada exitosamente!
                      </h4>
                      <p className="text-xs text-[#3E3E47] mt-1 max-w-md mx-auto">
                        Si la ventana de chat de WhatsApp no se abrió de forma automática, presiona el botón a continuación para abrirla de inmediato con el asesor en el <strong className="text-[#242429]">300 125 0524</strong>:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={lastWhatsAppUrl || `https://wa.me/${cleanWhatsAppNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2A9D8F] hover:bg-[#1F7E73] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-soft transition-all font-display"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Abrir mi Cotización en WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-[#BFE7DE] hover:bg-[#FAF6EE] text-[#1F7E73] font-semibold text-xs uppercase tracking-wider rounded-2xl transition cursor-pointer font-display"
                      >
                        {copiedSuccess ? (
                          <>
                            <Check className="w-4 h-4 text-[#2A9D8F]" />
                            <span>¡Copiado al Portapapeles!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copiar Texto de la Cotización</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
