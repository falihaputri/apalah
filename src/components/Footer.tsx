import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Credo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5 text-teal-100" />
              </div>
              <div className="text-base font-bold text-white tracking-tight">
                PT Sarana Medika Nusantara
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Distributor resmi penyedia alat kesehatan, elektromedik, radiologi, dan sarana ICU berstandar CDAKB Kemenkes RI. Mendukung faskes di seluruh Indonesia dengan jaminan purna jual, suku cadang, dan kalibrasi resmi.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>NIB: <span className="font-mono text-slate-300">9120004128912</span></div>
              <div>Izin Penyalur Alkes (IPAK): <span className="font-mono text-slate-300">FK.01.01/VI/0921-e/2019</span></div>
              <div>Sertifikat Standar CDAKB: <span className="font-mono text-slate-300">HK.02.02/CDAKB/1842/2021</span></div>
            </div>
          </div>

          {/* Col 2: Nav Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">Tentang Perusahaan</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">Katalog Alkes Resmi</a>
              </li>
              <li>
                <a href="#cdakb" className="hover:text-white transition-colors">Standar Mutu CDAKB</a>
              </li>
              <li>
                <a href="#proyek" className="hover:text-white transition-colors">Portofolio & Klien RS</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Hubungi Sales & Tender</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kategori Pengadaan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Lini Pengadaan
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>Elektromedik & Radiologi Diagnostic</li>
              <li>Instalasi Ruang ICU, ICCU & NICU</li>
              <li>Instrumen Laboratorium & Reagen</li>
              <li>Peralatan Kamar Operasi & Anestesi</li>
              <li>Hospital Furniture & Tempat Tidur ICU</li>
              <li>Sterilisasi & Autoclave Rumah Sakit</li>
            </ul>
          </div>

          {/* Col 4: Layanan Siaga */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hotline Pengadaan & Darurat
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Gedung Medika Tower Lt. 8, Jl. TB Simatupang, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>(021) 789-4210 · WA: 0812-8900-1920</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>penawaran@saranamedika.co.id</span>
              </div>
            </div>
          </div>

        </div>

        {/* Hairline Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} PT Sarana Medika Nusantara. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span>Standar Kemenkes RI</span>
            <span>·</span>
            <span>e-Katalog LKPP Sektoral</span>
            <span>·</span>
            <span>ISO 13485:2016</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
