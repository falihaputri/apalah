import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Phone, Award, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenRfq: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq, onExploreCatalog }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Regulatory and Trust badges (Unboxed, clean typography as per Anti-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-teal-800 tracking-wide">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                Sertifikasi CDAKB Kemenkes RI
              </span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-700" />
                Terdaftar di LKPP e-Katalog
              </span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-teal-700" />
                ISO 13485:2016 Certified
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Mitra Strategis Pengadaan Alat Kesehatan Rumah Sakit & Faskes Terpercaya
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              PT Sarana Medika Nusantara mendistribusikan perangkat elektromedik, instalasi ICU, diagnostic imaging radiologi, serta instrumen bedah dengan 100% legalitas izin edar AKL/AKD, standar mutu CDAKB, dan garansi purna jual resmi didukung teknisi elektromedis tersertifikasi.
            </p>

            {/* Trust bullet checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Siap Transaksi e-Purchasing & Tender LPSE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Garansi Resmi & Teknisi Response &lt; 4 Jam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Pelatihan Dokter & User Medis Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Uji Fungsi & Kalibrasi Sesuai Kemenkes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenRfq}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900 shadow-sm transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-teal-200" />
                <span>Minta Penawaran Harga (RFP/RFQ)</span>
                <ArrowRight className="w-4 h-4 text-teal-200" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs whitespace-nowrap"
              >
                <span>Lihat Katalog Produk</span>
              </button>
            </div>

            {/* Quiet hotline helper */}
            <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Layanan Cepat Pengadaan Khusus RS & Dinas: </span>
              <a 
                href="https://wa.me/6281289001920?text=Halo%20PIC%20Pengadaan%20PT%20Sarana%20Medika%20Nusantara,%20kami%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20alat%20kesehatan." 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-teal-800 hover:underline"
              >
                0812-8900-1920 (Hotline 24/7)
              </a>
            </div>

          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white">
              <img
                src="/src/assets/images/hero_medical_equipment_1793256864593.jpg"
                alt="Instalasi Peralatan Medis ICU dan Diagnostik Rumah Sakit oleh PT Sarana Medika Nusantara"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent pointer-events-none" />

              {/* Informational overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-slate-900">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                      Standar Rumah Sakit Kemenkes RI
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      Penyediaan Terpadu Kamar Operasi, ICU & Ruang Rawat
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Instalasi profesional terkalibrasi BPFK dengan pemeliharaan preventif terjadwal.
                    </div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metric Proof Strip (Section 13: 4-column KPI strip below the hero split, tabular nums) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                15+ Tahun
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Pengalaman Distribusi Alkes Nasional
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Beroperasi aktif sejak 2011
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                280+ Faskes
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                RSUP, RSUD, RS Swasta & Klinik
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Cakupan distribusi 38 provinsi
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                100% Legal
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Izin Edar Resmi Kemenkes AKL / AKD
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Sertifikat CDAKB & Terdaftar LKPP
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                &lt; 4 Jam
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Response Time Teknisi Medis Siaga
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Service center Jabodetabek & regional
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
