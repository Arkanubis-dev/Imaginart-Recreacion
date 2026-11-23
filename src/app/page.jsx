'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TheatricalRibbon from '@/components/TheatricalRibbon';
import BubbleFactoryFeature from '@/components/BubbleFactoryFeature';
import TheatricalShows from '@/components/TheatricalShows';
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
    <div className="min-h-screen bg-[#FCFBFE] text-slate-900 flex flex-col justify-between selection:bg-purple-600 selection:text-white font-sans">
      
      {/* 1. Header Limpio y Fijo con Logo y WhatsApp */}
      <Navbar onOpenLegal={openLegal} />

      <main className="flex-grow">
        {/* 2. Hero Section Teatral estilo La Teatrina */}
        <Hero />

        {/* 3. Cinta Teatral Colorida (Shows, Burbujas, Circo, Títeres, etc.) */}
        <TheatricalRibbon />

        {/* 4. Show Estrella: La Fábrica de las Burbujas Gigantes */}
        <BubbleFactoryFeature onSelectShow={handleSelectPackage} />

        {/* 5. Shows Teatrales y Circo (Obras de Teatro Infantil) */}
        <TheatricalShows onSelectShow={handleSelectPackage} />

        {/* 6. Barra de Confianza (Diferenciadores Rápidos: ARL, RUT, etc.) */}
        <TrustBar />

        {/* 7. Servicios Divididos por Tipo de Cliente (Infantiles, Conjuntos, Empresas, Colegios) */}
        <ServicesByAudience onSelectAudience={handleSelectPackage} />

        {/* 8. Paquetes o Planes Claros (Lúdico, Mágico Teatral, Mega Burbujas) */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* 9. Sección Exclusiva para Conjuntos y Empresas (B2B + Descarga de Portafolio) */}
        <B2BSection />

        {/* 10. Galería de Fotos y Videos / Reels de Energía Real */}
        <GalleryReels />

        {/* 11. Prueba Social (Testimonios Reales de Bogotá) */}
        <Testimonials />

        {/* 12. Formulario de Cotización Inteligente con Checkboxes Legales Obligatorios */}
        <InteractiveQuoter 
          selectedPackageId={selectedPackageId} 
          onOpenLegal={openLegal} 
        />

        {/* 13. Sección Nosotros (Historia, Valores y Seguridad) */}
        <AboutUs />

        {/* 14. Preguntas Frecuentes (Acordeón de Objeciones) */}
        <FAQ onOpenLegal={openLegal} />
      </main>

      {/* 15. Pie de Página con Políticas Obligatorias (Habeas Data, Términos y SIC) */}
      <LegalFooter onOpenLegal={openLegal} />

      {/* Modal Interactivo de Leyes */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />

      {/* Botón Flotante de WhatsApp Business: 3001250524 */}
      <WhatsAppFloat />

    </div>
  );
}
