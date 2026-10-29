import React, { useState, useMemo } from 'react';
import { Search, FileText, ShoppingBag, Check, Eye, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/medicalData';

interface CatalogSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleRfq: (product: Product) => void;
  rfqItems: Product[];
  onOpenRfq: () => void;
}

type CategoryFilter = 'all' | 'radiology' | 'icu' | 'lab' | 'surgery' | 'furniture';

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectProduct,
  onToggleRfq,
  rfqItems,
  onOpenRfq
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'radiology', label: 'Elektromedik & Radiologi' },
    { id: 'icu', label: 'ICU & Life Support' },
    { id: 'lab', label: 'Laboratorium & Diagnostik' },
    { id: 'surgery', label: 'Kamar Bedah & Operasi' },
    { id: 'furniture', label: 'Hospital Furniture' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.kemenkesNo.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const isItemInRfq = (id: string) => rfqItems.some((item) => item.id === id);

  return (
    <section id="katalog" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Katalog Alat Kesehatan Resmi
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
              Peralatan Medis Siap Pengadaan e-Katalog & Tender Rumah Sakit
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Seluruh unit dilengkapi sertifikat izin edar Kemenkes RI, jaminan suku cadang, dan kalibrasi BPFK. Pilih alat untuk menambahkan ke permohonan penawaran harga resmi (RFQ).
            </p>
          </div>

          {/* Quick RFQ Basket Floating Banner if items selected */}
          {rfqItems.length > 0 && (
            <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-xs flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-xs">
                {rfqItems.length}
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">{rfqItems.length} Alkes Terpilih</span>
                <span className="text-slate-500">Siap diajukan penawaran</span>
              </div>
              <button
                onClick={onOpenRfq}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors whitespace-nowrap"
              >
                Buka RFQ
              </button>
            </div>
          )}
        </div>

        {/* Filter Controls Bar (Interactive tabs as per Anti-Pill Section A) */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari alkes, nomor AKL/AKD..."
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 text-slate-800 placeholder-slate-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => {
            const inRfq = isItemInRfq(product.id);

            return (
              <div
                key={product.id}
                className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all group"
              >
                {/* Product Image Frame with fallback */}
                <div 
                  className="relative h-48 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay button */}
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-xs">
                      <Eye className="w-3.5 h-3.5" />
                      Detail Spesifikasi
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Category & Status: unboxed clean text separated by dot */}
                    <div className="text-[11px] text-slate-500 font-medium">
                      <span>{product.categoryLabel}</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span className="text-teal-800 font-semibold">{product.brand}</span>
                    </div>

                    {/* Product Name & Model */}
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="text-sm font-bold text-slate-900 mt-1 cursor-pointer hover:text-teal-800 transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">
                      Model: {product.model}
                    </div>

                    {/* Kemenkes & LKPP indicators */}
                    <div className="mt-2.5 pt-2 border-t border-slate-100 text-[11px] space-y-1">
                      <div className="text-slate-600 truncate">
                        <span className="text-slate-400">Reg:</span> {product.kemenkesNo}
                      </div>
                      {product.tkdnScore && (
                        <div className="text-slate-600 truncate">
                          <span className="text-slate-400">TKDN:</span> {product.tkdnScore}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <button
                      onClick={() => onToggleRfq(product)}
                      className={`w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors shadow-2xs whitespace-nowrap ${
                        inRfq
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                          : 'bg-teal-800 hover:bg-teal-900 text-white'
                      }`}
                    >
                      {inRfq ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Sudah di RFQ</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-teal-200" />
                          <span>+ Tambah ke RFQ</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full text-center text-[11px] font-medium text-slate-500 hover:text-teal-800 transition-colors"
                    >
                      Lihat Lembar Spesifikasi Teknis →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200 mt-6 space-y-3">
            <div className="text-sm font-semibold text-slate-800">
              Tidak ada alat kesehatan yang cocok dengan pencarian "{searchQuery}"
            </div>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Perlu pengadaan alat khusus di luar etalase ini? Kami memiliki jaringan prinsipal resmi untuk ribuan SKU elektromedik & laboratorium.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
