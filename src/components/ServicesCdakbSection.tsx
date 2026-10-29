import React from 'react';
import { ShieldCheck, Wrench, ThermometerSnowflake, Activity, GraduationCap, PackageCheck, Clock } from 'lucide-react';

export const ServicesCdakbSection: React.FC = () => {
  return (
    <section id="cdakb" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Kepatuhan CDAKB & Purna Jual
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Standar Distribusi Alat Kesehatan yang Baik & Dukungan Teknisi Siaga 24/7
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Pengadaan alat kesehatan tidak berhenti saat serah terima barang. Kami menjamin keandalan klinis jangka panjang dengan kepatuhan rantai pasok CDAKB Kemenkes RI, instalasi tersertifikasi, dan program pemeliharaan preventif.
          </p>
        </div>

        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-center">
          
          {/* Left Column: Visual Warehouse Carrier */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img
                src="/src/assets/images/warehouse_medical_logistics_1793256865410.jpg"
                alt="Fasilitas Pergudangan Logistik Medis Berstandar CDAKB PT Sarana Medika Nusantara"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-teal-700" />
                  Gudang Utama Distribusi Medis Cikarang
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Luas fasilitas 2.400 m² dengan climate control suhu terkalibrasi, area karantina barang, dan sistem WMS terintegrasi lot number trace.
                </div>
              </div>
            </div>

            {/* Quick SLA Highlight */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center gap-3">
              <Clock className="w-6 h-6 text-teal-800 shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">SLA Response Cepat:</span>
                Teknisi tiba di lokasi faskes dalam waktu &lt; 4 jam untuk area Jabodetabek dan &lt; 24 jam untuk kota-kota provinsi se-Indonesia.
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Service Standards (Natural human editorial numbering 01 - 05) */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-sm font-mono font-bold text-teal-800 bg-teal-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-teal-200">
                  01
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Penyimpanan Terstandar & Cold Chain Management
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Menjaga integritas alat diagnostik sensitif dan reagen laboratorium menggunakan ruangan ber-AC 24 jam dengan pemantauan suhu otomatis, back-up genset darurat, serta penanganan anti-debu sesuai Cara Distribusi Alat Kesehatan yang Baik.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-sm font-mono font-bold text-teal-800 bg-teal-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-teal-200">
                  02
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Instalasi & Uji Fungsi oleh Teknisi Bersertifikat STR
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Setiap peralatan dipasang oleh Biomedical Engineer berpengalaman dengan Surat Tanda Registrasi (STR) elektromedis. Dilakukan commissioning test ketat untuk parameter kelistrikan medis IEC 60601 dan verifikasi grounding.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-sm font-mono font-bold text-teal-800 bg-teal-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-teal-200">
                  03
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Kalibrasi Balai Pengamanan Fasilitas Kesehatan (BPFK)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Memfasilitasi pengujian dan kalibrasi resmi dari BPFK Kemenkes RI atau institusi penguji terakreditasi KAN, sehingga setiap unit siap diterbitkan sertifikat laik pakai untuk akreditasi rumah sakit (KARS/JCI).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-sm font-mono font-bold text-teal-800 bg-teal-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-teal-200">
                  04
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Pelatihan User Medis & CME Workshop Terstruktur
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Memberikan transfer knowledge intensif kepada dokter spesialis, perawat ruangan, dan staf penunjang medis rumah sakit hingga mahir mengoperasikan dan merawat alat secara mandiri.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-sm font-mono font-bold text-teal-800 bg-teal-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-teal-200">
                  05
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Jaminan Ketersediaan Spare Part Orisinal 5–10 Tahun
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Didukung komitmen resmi dari prinsipal pabrikan dengan jaminan ketersediaan komponen suku cadang asli dan software update resmi selama masa pakai alat kesehatan.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
