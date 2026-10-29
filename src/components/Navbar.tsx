import React, { useState } from 'react';
import { ShieldCheck, PhoneCall, FileText, Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  rfqCount: number;
  onOpenRfq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ rfqCount, onOpenRfq }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark as per Top Bar contract) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <ShieldCheck className="w-6 h-6 text-teal-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
                PT Sarana Medika Nusantara
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Distributor Resmi Alat Kesehatan & Laboratorium
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a 
              href="#tentang" 
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Tentang Kami
            </a>
            <a 
              href="#katalog" 
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Katalog Alkes
            </a>
            <a 
              href="#cdakb" 
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Standar CDAKB
            </a>
            <a 
              href="#proyek" 
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Proyek & Klien
            </a>
            <a 
              href="#kontak" 
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Kontak
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (+ RFQ Basket trigger) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="relative flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
              title="Daftar Permintaan Penawaran"
            >
              <ShoppingBag className="w-4 h-4 text-teal-700" />
              <span>Daftar RFQ</span>
              {rfqCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-teal-700 rounded-full tabular-nums">
                  {rfqCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenRfq}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 text-teal-200" />
              <span>Minta Penawaran (RFQ)</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRfq}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg relative"
              aria-label="Keranjang RFQ"
            >
              <ShoppingBag className="w-5 h-5 text-teal-800" />
              {rfqCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-teal-700 rounded-full">
                  {rfqCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            <a 
              href="#tentang" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Tentang Kami
            </a>
            <a 
              href="#katalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Katalog Alkes
            </a>
            <a 
              href="#cdakb" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Standar CDAKB
            </a>
            <a 
              href="#proyek" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Proyek & Klien
            </a>
            <a 
              href="#kontak" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Kontak
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900"
            >
              <FileText className="w-4 h-4 text-teal-200" />
              <span>Minta Penawaran (RFQ) ({rfqCount})</span>
            </button>
            <a
              href="https://wa.me/6281289001920?text=Halo%20PT%20Sarana%20Medika%20Nusantara,%20saya%20ingin%20konsultasi%20pengadaan%20alkes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-teal-800 bg-teal-50 rounded-lg hover:bg-teal-100"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp PIC Pengadaan</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
