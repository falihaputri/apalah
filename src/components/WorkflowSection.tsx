import React from 'react';
import { ClipboardList, ShoppingCart, Truck, Wrench, GraduationCap, ShieldCheck } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Analisis Kebutuhan Faskes',
      desc: 'Tim spesialis kami berdiskusi dengan manajemen RS / PPK mengenai spesifikasi teknis, beban kerja pasien, dan kesesuaian anggaran pengadaan.',
      icon: ClipboardList
    },
    {
      num: '02',
      title: 'Penerbitan Penawaran / Transaksi e-Katalog',
      desc: 'Penyusunan dokumen penawaran harga resmi (RFP/RFQ) yang kompetitif, atau pendampingan transaksi e-Purchasing via e-Katalog LKPP.',
      icon: ShoppingCart
    },
    {
      num: '03',
      title: 'Pengiriman Berstandar & Berasuransi',
      desc: 'Distribusi logistik menggunakan armada khusus berstandar CDAKB dengan kemasan anti-getar dan asuransi penuh hingga tiba di instalasi RS.',
      icon: Truck
    },
    {
      num: '04',
      title: 'Instalasi, Uji Fungsi & Kalibrasi',
      desc: 'Pemasangan oleh teknisi elektromedis bersertifikat STR, commissioning test kelistrikan medis, dan pengujian akurasi laik pakai.',
      icon: Wrench
    },
    {
      num: '05',
      title: 'BAST & Pelatihan Tenaga Medis',
      desc: 'Penandatanganan Berita Acara Serah Terima disertai workshop training operasional langsung bagi dokter spesialis dan perawat faskes.',
      icon: GraduationCap
    },
    {
      num: '06',
      title: 'Garansi & Pemeliharaan Terjadwal',
      desc: 'Pendampingan purna jual, inspeksi preventif berkala, kalibrasi ulang, dan respon cepat teknisi siaga darurat 24/7.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Tata Kelola Pengadaan
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Alur Pengadaan Transparan & Akuntabel untuk RS Pemerintah & Swasta
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Setiap tahapan pengadaan dirancang memenuhi kepatuhan regulasi pengadaan barang/jasa LKPP dan standar akreditasi rumah sakit KARS/JCI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      Langkah {step.num}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-800">
                  Kepatuhan Standar Regulasi ✓
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
