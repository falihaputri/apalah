import React, { useState } from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Download, Building, Users2, Landmark } from 'lucide-react';
import { COMPANY_LEGALITY } from '../data/medicalData';

export const AboutSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section id="tentang" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Profil Perusahaan & Kepatuhan Regulasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Berdedikasi Meningkatkan Standar Fasilitas Pelayanan Kesehatan Indonesia
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            PT Sarana Medika Nusantara adalah badan usaha perseroan terbatas yang bergerak di bidang distribusi, instalasi, dan pemeliharaan alat kesehatan (alkes) elektromedik, radiologi, instrumen laboratorium diagnostik, dan fasilitas ruang perawatan intensif.
          </p>
        </div>

        {/* 2-Column Story & Pillar overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Column: Company Background & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-teal-800" />
                Integritas Tata Kelola & Komitmen Nasional
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Sejak berdiri, kami berpegang teguh pada prinsip kepatuhan regulasi kesehatan Republik Indonesia. Seluruh produk yang kami distribusikan memiliki nomor registrasi Izin Edar resmi dari Kementerian Kesehatan RI (AKL/AKD) dan disalurkan sesuai kaidah Cara Distribusi Alat Kesehatan yang Baik (CDAKB).
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Kami aktif mendukung program kemandirian alat kesehatan dalam negeri melalui kemitraan dengan produsen berkategori Tingkat Komponen Dalam Negeri (TKDN) tinggi guna menyukseskan e-Purchasing pada e-Katalog LKPP Sektoral Kesehatan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 block">Jaringan Prinsipal Resmi</span>
                    <span className="text-slate-500">Kemitraan langsung dengan pabrikan terpercaya global dan nasional.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 block">Insinyur Elektromedis Siaga</span>
                    <span className="text-slate-500">Tim teknisi bersertifikat STR BPFK dan pelatihan prinsipal berkala.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wide">Visi Perusahaan</div>
                <div className="text-sm text-slate-700 font-medium mt-1.5 leading-snug">
                  Menjadi mitra pengadaan alat kesehatan nomor satu yang paling terpercaya, profesional, dan solutif bagi seluruh institusi faskes di Indonesia.
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wide">Misi Utama</div>
                <div className="text-sm text-slate-700 font-medium mt-1.5 leading-snug">
                  Menyediakan alkes berkualitas tinggi, menjamin ketersediaan suku cadang orisinal, serta memberikan pendampingan edukasi teknis bagi tenaga kesehatan.
                </div>
              </div>
            </div>

            {/* Download Brochure Bar */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Company Profile Resmi (PDF)
                  </div>
                  <div className="text-xs text-slate-600">
                    Dokumen legalitas, portofolio RS, dan katalog ringkas PT Sarana Medika Nusantara (14.2 MB)
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownloadBrochure}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Profil PDF</span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="p-3 text-xs text-teal-800 bg-teal-100/90 border border-teal-300 rounded-lg animate-fade-in">
                ✓ Permintaan unduh berhasil diverifikasi. Dokumen company profile resmi sedang disiapkan.
              </div>
            )}
          </div>

          {/* Right Column: Legalitas & Sertifikasi Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>Sertifikasi & Legalitas Pengadaan</span>
              <span className="text-xs text-teal-800 font-medium">Terverifikasi Aktif</span>
            </div>

            <div className="space-y-3">
              {COMPANY_LEGALITY.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      Resmi
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-700 mt-1 font-semibold">
                    {item.number}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Penerbit: {item.issuer}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Note */}
            <div className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
              <span>Salinan legalitas lengkap dilampirkan dalam setiap berkas penawaran tender & e-purchasing.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
