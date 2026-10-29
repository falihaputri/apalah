/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { ServicesCdakbSection } from './components/ServicesCdakbSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ProjectsAndClientsSection } from './components/ProjectsAndClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { RfqQuotationModal } from './components/RfqQuotationModal';
import { Product, PRODUCTS } from './data/medicalData';

export default function App() {
  const [rfqItems, setRfqItems] = useState<Product[]>([PRODUCTS[0], PRODUCTS[1]]);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);

  const handleToggleRfq = (product: Product) => {
    setRfqItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleAddProductToRfq = (product: Product) => {
    setRfqItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromRfq = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearRfq = () => {
    setRfqItems([]);
  };

  const handleExploreCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* Navigation Top Bar Contract */}
      <Navbar
        rfqCount={rfqItems.length}
        onOpenRfq={() => setIsRfqModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRfq={() => setIsRfqModalOpen(true)}
          onExploreCatalog={handleExploreCatalog}
        />

        {/* Profil Perusahaan, Visi Misi & Legalitas Kemenkes */}
        <AboutSection />

        {/* Katalog Alkes & Filter Interaktif */}
        <CatalogSection
          onSelectProduct={(product) => setActiveProductModal(product)}
          onToggleRfq={handleToggleRfq}
          rfqItems={rfqItems}
          onOpenRfq={() => setIsRfqModalOpen(true)}
        />

        {/* Standar Mutu CDAKB, Pergudangan & Purna Jual */}
        <ServicesCdakbSection />

        {/* Tata Kelola & Alur Pengadaan Transparan */}
        <WorkflowSection />

        {/* Rekam Jejak Turnkey & Klien Rumah Sakit */}
        <ProjectsAndClientsSection />

        {/* Kontak Kantor, Layanan Tender & Form Pesan */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToRfq={handleToggleRfq}
        isInRfq={activeProductModal ? rfqItems.some((item) => item.id === activeProductModal.id) : false}
      />

      {/* Interactive RFQ Quotation Modal */}
      <RfqQuotationModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        selectedProducts={rfqItems}
        onRemoveProduct={handleRemoveFromRfq}
        onClearAll={handleClearRfq}
        onAddProduct={handleAddProductToRfq}
      />
    </div>
  );
}
