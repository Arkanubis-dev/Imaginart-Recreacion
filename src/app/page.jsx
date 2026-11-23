'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesByAudience from '@/components/ServicesByAudience';
import Packages from '@/components/Packages';
import B2BSection from '@/components/B2BSection';
import GalleryReels from '@/components/GalleryReels';
import Testimonials from '@/components/Testimonials';
import InteractiveQuoter from '@/components/InteractiveQuoter';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import LegalFooter from '@/components/LegalFooter';
import LegalModal from '@/components/LegalModal';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('privacy');
  const [selectedPackageId, setSelectedPackageId] = useState('plan-intermedio');

  const openLegal = (tab = 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectPackage = (pkgId) => {
    setSelectedPackageId(pkgId);
    const quoter = document.getElementById('cotizador');
    if (quoter) {
      quoter.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      
      {/* 1. Header Limpio y Fijo */}
      <Navbar onOpenLegal={openLegal} />

      <main className="flex-grow">
        {/* 2. Hero Section con H1 y visual interactivo */}
        <Hero />

        {/* 3. Barra de Confianza (Diferenciadores Rápidos) */}
        <TrustBar />

        {/* 4. Servicios Divididos por Tipo de Cliente (Infantiles, Conjuntos, Empresas, Colegios) */}
        <ServicesByAudience onSelectAudience={handleSelectPackage} />

        {/* 5. Paquetes o Planes Claros (Básico, Intermedio, Premium) */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* 6. Sección Exclusiva para Conjuntos y Empresas (B2B + Descarga de Portafolio) */}
        <B2BSection />

        {/* 7. Galería de Fotos y Videos / Reels de Energía Real */}
        <GalleryReels />

        {/* 8. Prueba Social (Testimonios de Bogotá) */}
        <Testimonials />

        {/* 9. Formulario de Cotización Inteligente con Checkboxes Legales */}
        <InteractiveQuoter 
          selectedPackageId={selectedPackageId} 
          onOpenLegal={openLegal} 
        />

        {/* 10. Sección Nosotros (Historia, Valores y Seguridad) */}
        <AboutUs />

        {/* 11. Preguntas Frecuentes (Acordeón de Objeciones) */}
        <FAQ onOpenLegal={openLegal} />
      </main>

      {/* 12. Pie de Página con Políticas Obligatorias (Habeas Data, Términos y SIC) */}
      <LegalFooter onOpenLegal={openLegal} />

      {/* Modal Interactivo de Leyes */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />

      {/* Botón Flotante de WhatsApp Business */}
      <WhatsAppFloat />

    </div>
  );
}
