import React from 'react';
import { X, Check, ShieldCheck, Award, FileText, CheckCircle2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/medicalData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToRfq: (product: Product) => void;
  isInRfq: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToRfq,
  isInRfq
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <div className="text-xs font-semibold text-teal-800">
              {product.categoryLabel} · Model: {product.model}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Top row: Image & Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="sm:col-span-7 space-y-3">
              <div className="space-y-1">
                <div className="text-xs text-slate-500">Nomor Izin Edar Kemenkes RI:</div>
                <div className="text-xs font-mono font-bold text-teal-900 bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                  {product.kemenkesNo}
                </div>
              </div>

              {product.tkdnScore && (
                <div className="space-y-1">
                  <div className="text-xs text-slate-500">Kandungan TKDN:</div>
                  <div className="text-xs font-semibold text-slate-800">
                    {product.tkdnScore}
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <div className="text-xs text-slate-500">Prinsipal & Asal Produk:</div>
                <div className="text-xs font-medium text-slate-700">
                  {product.brand} ({product.origin})
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-500">Jaminan Garansi & Layanan:</div>
                <div className="text-xs font-medium text-teal-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{product.warranty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Deskripsi Produk
            </h4>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Keunggulan & Fitur Utama
            </h4>
            <div className="space-y-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Spesifikasi Teknis
            </h4>
            <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-200 text-xs">
              {Object.entries(product.specs).map(([label, val], idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-2.5 bg-white even:bg-slate-50">
                  <div className="font-semibold text-slate-600 sm:col-span-1">
                    {label}
                  </div>
                  <div className="text-slate-800 sm:col-span-2 mt-0.5 sm:mt-0 font-medium">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Procurement notes */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-teal-700" />
              Kelengkapan Berkas Pengadaan:
            </div>
            <div>
              Setiap pengadaan disertai COO (Certificate of Origin), Surat Kuasa Prinsipal (LoA), Sertifikat Uji Fungsi/Kalibrasi, Buku Manual Bahasa Indonesia, dan Berita Acara Pelatihan Operator.
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Tutup
          </button>

          <button
            onClick={() => onAddToRfq(product)}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors shadow-xs ${
              isInRfq
                ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                : 'bg-teal-800 hover:bg-teal-900 text-white'
            }`}
          >
            {isInRfq ? (
              <>
                <Check className="w-4 h-4" />
                <span>Sudah di Daftar RFQ (Klik untuk Hapus)</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-teal-200" />
                <span>+ Tambahkan ke Permohonan Penawaran (RFQ)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
