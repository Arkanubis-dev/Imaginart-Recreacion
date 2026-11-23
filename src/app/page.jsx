'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import OrganicWave from '@/components/OrganicWave';
import ServicesBento from '@/components/ServicesBento';
import Packages from '@/components/Packages';
import B2BSection from '@/components/B2BSection';
import GalleryMasonry from '@/components/GalleryMasonry';
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
  
  // Usar objeto con timestamp para que cada clic en cualquier botón de la web siempre reactive el cotizador
  const [selectedPackageAction, setSelectedPackageAction] = useState({ id: 'plan-intermedio', timestamp: 0 });

  const openLegal = (tab = 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectPackage = (pkgId) => {
    setSelectedPackageAction({ id: pkgId, timestamp: Date.now() });
    const quoter = document.getElementById('cotizador');
    if (quoter) {
      quoter.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#242429] flex flex-col justify-between selection:bg-[#E8DFF5] selection:text-[#242429] font-sans">
      
      {/* 1. Header Limpio y Profesional */}
      <Navbar onOpenLegal={openLegal} />

      <main className="flex-grow">
        {/* 2. Hero Inmersivo con Collage Fotográfico Dinámico */}
        <Hero />

        {/* 3. Barra de Confianza (Diferenciadores Rápidos en Tonos Pastel) */}
        <TrustBar />

        {/* Separador Orgánico Suave */}
        <OrganicWave fill="#FAF6EE" />

        {/* 4. Sección de Servicios Interactiva: Bento Grid Editorial con Fotografía Protagonista */}
        <ServicesBento onSelectShow={handleSelectPackage} />

        {/* Separador Orgánico */}
        <OrganicWave fill="#FDFBF7" />

        {/* 5. Planes y Paquetes Recreativos con Estilo Editorial */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Separador Orgánico */}
        <OrganicWave fill="#FAF6EE" />

        {/* 6. Sección para Conjuntos y Empresas (B2B + Ficha Técnica Imprimible) */}
        <B2BSection />

        {/* Separador Orgánico */}
        <OrganicWave fill="#FDFBF7" />

        {/* 7. Galería Tipo Mosaico (Masonry Dinámico con Fotos y Reels) */}
        <GalleryMasonry />

        {/* Separador Orgánico */}
        <OrganicWave fill="#FAF6EE" />

        {/* 8. Testimonios Reales de Familias y Administradores en Bogotá */}
        <Testimonials />

        {/* Separador Orgánico */}
        <OrganicWave fill="#FDFBF7" />

        {/* 9. Cotizador Interactivo Limpio con Checkboxes Legales Obligatorios */}
        <InteractiveQuoter 
          selectedPackage={selectedPackageAction} 
          onOpenLegal={openLegal} 
        />

        {/* 10. Sección Nosotros (Historia, Valores Pedagógicos y Seguridad) */}
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

      {/* Botón Flotante Discreto de WhatsApp */}
      <WhatsAppFloat />

    </div>
  );
}
