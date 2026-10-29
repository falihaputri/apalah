import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [faskes, setFaskes] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // FAQ toggle state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setFaskes('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSent(false);
    }, 5000);
  };

  const faqs = [
    {
      q: 'Apakah seluruh alat kesehatan sudah terdaftar di e-Katalog LKPP Kemenkes?',
      a: 'Ya, mayoritas lini produk utama kami (Elektromedik, Radiologi, Bedah, dan ICU) telah terdaftar resmi dalam etalase LKPP Sektoral Kesehatan sehingga Faskes Pemerintah dan RSUD dapat melakukan e-Purchasing secara langsung dan transparan.'
    },
    {
      q: 'Bagaimana jaminan legalitas izin edar Kemenkes RI (AKL/AKD)?',
      a: '100% produk yang kami distribusikan memiliki Surat Izin Edar resmi dari Kementerian Kesehatan RI yang masih berlaku aktif. Dokumen legalitas ini kami sertakan dalam setiap proposal penawaran teknis.'
    },
    {
      q: 'Apakah harga sudah mencakup biaya instalasi, uji fungsi, dan kalibrasi BPFK?',
      a: 'Dalam penawaran resmi kami, biaya instalasi oleh teknisi elektromedis tersertifikasi STR, commissioning test, kalibrasi awal laik pakai BPFK, serta pelatihan tenaga medis sudah termasuk di dalam paket penawaran.'
    },
    {
      q: 'Berapa lama estimasi pengiriman untuk rumah sakit di luar Pulau Jawa?',
      a: 'Untuk unit yang berstatus Ready Stock di Gudang Logistik Cikarang, waktu pengiriman ke ibukota provinsi di Sumatera, Kalimantan, Sulawesi, Bali, dan NTB adalah 3-7 hari kerja menggunakan kargo khusus berstandar CDAKB.'
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Hubungi & Lokasi Kantor
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Konsultasi Pengadaan Alkes & Dukungan Layanan Pelanggan
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Tim sales engineering dan divisi tender kami siap membantu telaah teknis, penyusunan Rencana Anggaran Biaya (RAB), dan penjadwalan demo alat kesehatan.
          </p>
        </div>

        {/* 2-Column Split: Contact & Locations vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Column: Office Locations & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-800" />
                Kantor Pusat & Showroom Alat Medis
              </h3>
              
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">PT Sarana Medika Nusantara</p>
                <p>Gedung Medika Tower Lt. 8, Jl. TB Simatupang No. 88, Cilandak, Jakarta Selatan 12430</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Hunting: (021) 789-4210 / (021) 789-4211</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <MessageSquare className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Hotline WhatsApp Tender: 0812-8900-1920 (24 Jam)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Email: penawaran@saranamedika.co.id / info@saranamedika.co.id</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Jam Operasional: Senin – Jumat (08.00 – 17.00 WIB) · Tim Darurat ICU Siaga 24/7</span>
                </div>
              </div>
            </div>

            {/* Warehouse & Regional Service Hubs */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Gudang Logistik & Service Center Regional
              </h4>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900 block">Gudang Logistik CDAKB Cikarang</span>
                  Kawasan Industri Delta Silicon 3, Blok C-12, Cikarang Pusat, Bekasi, Jawa Barat
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Kantor Layanan Surabaya</span>
                  Jl. Raya Manyar No. 45, Gubeng, Kota Surabaya, Jawa Timur 60284
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Kantor Layanan Medan & Makassar</span>
                  Kompleks Ruko Megamas Blok B-08 (Medan) · Ruko Pettarani Megah Blok C-5 (Makassar)
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">
                Kirim Pesan / Permintaan Informasi Pengadaan
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Isi form berikut untuk terhubung langsung dengan Sales Engineer wilayah faskes Anda.
              </p>

              {isSent ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold block">Pesan Terkirim!</span>
                    Sales representative kami akan menghubungi nomor kontak Anda dalam waktu maksimal 2 jam kerja.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: dr. Bambang Setiawan, Sp.An"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Rumah Sakit / Instansi <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={faskes}
                        onChange={(e) => setFaskes(e.target.value)}
                        placeholder="Contoh: RSUD Pratama Sejahtera"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nomor Telepon / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Resmi
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@rumahsakit.co.id"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kebutuhan Alat Kesehatan / Pertanyaan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Jelaskan kebutuhan alat kesehatan, estimasi unit, atau rencana tender faskes Anda..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      Kerahasiaan data pengadaan dijamin terjaga.
                    </span>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-teal-200" />
                      <span>Kirim Pesan</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Procurement FAQs */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-800" />
                Pertanyaan Umum Pengadaan (FAQ)
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 bg-white rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left text-xs font-bold text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
