import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, FileText, Check, Phone, Printer, Download, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { Product, PRODUCTS } from '../data/medicalData';

interface RfqItemWithQty {
  product: Product;
  quantity: number;
}

interface RfqQuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onAddProduct: (product: Product) => void;
}

export const RfqQuotationModal: React.FC<RfqQuotationModalProps> = ({
  isOpen,
  onClose,
  selectedProducts,
  onRemoveProduct,
  onClearAll,
  onAddProduct
}) => {
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  
  // Form fields
  const [institutionName, setInstitutionName] = useState('');
  const [facilityType, setFacilityType] = useState('RS Tipe B / C');
  const [fundingSource, setFundingSource] = useState('e-Katalog LKPP / APBD');
  const [timeline, setTimeline] = useState('1 - 2 Bulan (Tahun Berjalan)');
  const [picName, setPicName] = useState('');
  const [picRole, setPicRole] = useState('');
  const [picPhone, setPicPhone] = useState('');
  const [picEmail, setPicEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [showPreviewDoc, setShowPreviewDoc] = useState(false);

  if (!isOpen) return null;

  const getQty = (id: string) => quantities[id] || 1;

  const handleQtyChange = (id: string, delta: number) => {
    const current = getQty(id);
    const updated = Math.max(1, current + delta);
    setQuantities((prev) => ({ ...prev, [id]: updated }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!institutionName.trim() || !picName.trim() || !picPhone.trim()) {
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedRef = `SMN-RFQ/2026/MED-${randomSuffix}`;
    setSubmittedRef(generatedRef);
    setShowPreviewDoc(true);
  };

  const getWhatsAppShareLink = () => {
    const itemList = selectedProducts.length > 0 
      ? selectedProducts.map(p => `- ${p.name} (${p.model}): ${getQty(p.id)} unit`).join('%0A')
      : '- Konsultasi paket alkes umum';

    const text = `Halo%20PT%20Sarana%20Medika%20Nusantara,%20kami%20mengajukan%20permohonan%20penawaran%20harga%20resmi%20(RFQ)%20dengan%20rincian:%0A%0A*No.%20Ref:*%20${submittedRef || 'DRAFT-RFQ'}%0A*Instansi:*%20${encodeURIComponent(institutionName)}%0A*Tipe%20Faskes:*%20${encodeURIComponent(facilityType)}%0A*Sumber%20Dana:*%20${encodeURIComponent(fundingSource)}%0A*PIC:*%20${encodeURIComponent(picName)}%20(${encodeURIComponent(picRole)})%0A*Kontak:*%20${encodeURIComponent(picPhone)}%0A%0A*Daftar%20Kebutuhan%20Alkes:*%0A${itemList}%0A%0A*Catatan:*%20${encodeURIComponent(notes || 'Mohon kirimkan surat penawaran resmi beserta brosur dan sertifikat izin edar.')}`;
    return `https://wa.me/6281289001920?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Formulir Permohonan Penawaran Resmi
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Request For Quotation (RFQ) Alat Kesehatan
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[78vh] overflow-y-auto space-y-6">
          
          {/* If already submitted and showing official document preview */}
          {showPreviewDoc && submittedRef ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Permohonan Penawaran Berhasil Dibuat
                    </div>
                    <div className="text-sm font-semibold mt-0.5">
                      Nomor Registrasi RFQ: <span className="font-mono font-bold">{submittedRef}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Quotation Document Card */}
              <div className="p-6 rounded-xl border border-slate-300 bg-white shadow-xs font-sans text-xs text-slate-800 space-y-5">
                
                {/* Letterhead */}
                <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-base font-extrabold tracking-tight text-slate-900">
                      PT SARANA MEDIKA NUSANTARA
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Distributor Resmi Alat Kesehatan & Laboratorium · Sertifikat CDAKB Kemenkes RI
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Gedung Medika Tower Lt. 8, Jl. TB Simatupang, Jakarta Selatan · Telp: (021) 789-4210
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-[11px]">
                    <div className="font-mono font-bold text-teal-900">{submittedRef}</div>
                    <div className="text-slate-500">Tanggal: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </div>

                {/* Recipient & Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Pemohon / Rumah Sakit:</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{institutionName}</div>
                    <div className="text-slate-600 mt-0.5">Tipe Faskes: {facilityType}</div>
                    <div className="text-slate-600">Sumber Dana: {fundingSource}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Penanggung Jawab (PIC):</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{picName} ({picRole || 'Pejabat Pengadaan'})</div>
                    <div className="text-slate-600 mt-0.5">WhatsApp/Telp: {picPhone}</div>
                    <div className="text-slate-600">Email: {picEmail || '-'}</div>
                  </div>
                </div>

                {/* Itemized Table */}
                <div>
                  <div className="font-bold text-slate-900 mb-2">Rincian Peralatan yang Dimintakan Penawaran:</div>
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200 text-[11px]">
                        <tr>
                          <th className="p-2.5">No</th>
                          <th className="p-2.5">Deskripsi Produk & Model</th>
                          <th className="p-2.5">No. Izin Edar Kemenkes</th>
                          <th className="p-2.5 text-center">Jumlah</th>
                          <th className="p-2.5">Status Pengadaan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {selectedProducts.map((p, index) => (
                          <tr key={p.id} className="hover:bg-slate-50">
                            <td className="p-2.5 font-mono">{index + 1}</td>
                            <td className="p-2.5 font-medium text-slate-900">
                              {p.name}
                              <span className="block text-[11px] text-slate-500 font-mono">Model: {p.model} · {p.brand}</span>
                            </td>
                            <td className="p-2.5 font-mono text-[11px] text-teal-800">{p.kemenkesNo}</td>
                            <td className="p-2.5 text-center font-mono font-bold">{getQty(p.id)} Unit</td>
                            <td className="p-2.5 text-[11px]">e-Katalog / Garansi Resmi</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {notes && (
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-700">Catatan Khusus Faskes: </span>
                    <span className="text-slate-600">{notes}</span>
                  </div>
                )}

                {/* Terms summary */}
                <div className="text-[11px] text-slate-500 space-y-1 border-t border-slate-200 pt-3">
                  <div>• Surat penawaran harga resmi (SPH) bermaterai dan berkas teknis lengkap akan dikirimkan oleh Tim Tender kami dalam waktu 1x24 jam.</div>
                  <div>• Sudah termasuk: Uji fungsi teknisi elektromedis, kalibrasi BPFK, garansi resmi, dan sertifikat pelatihan operator RS.</div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPreviewDoc(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  ← Edit Informasi Permohonan
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppShareLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Kirim Langsung ke WhatsApp Tim Pengadaan (Hotline)</span>
                  </a>
                </div>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Selected Items Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Daftar Peralatan Medis Terpilih ({selectedProducts.length})
                  </h4>
                  {selectedProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-xs text-rose-600 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Kosongkan Daftar
                    </button>
                  )}
                </div>

                {selectedProducts.length === 0 ? (
                  <div className="p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center space-y-2">
                    <p className="text-xs text-slate-600">
                      Anda belum memilih produk spesifik dari katalog. Anda tetap dapat mengajukan konsultasi pengadaan umum dengan mengisi formulir di bawah.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 pt-1">
                      {PRODUCTS.slice(0, 3).map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => onAddProduct(p)}
                          className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded text-teal-800 hover:bg-teal-50"
                        >
                          + Tambah {p.name.split(' ')[0]} {p.model}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                    {selectedProducts.map((p) => (
                      <div key={p.id} className="p-3.5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded-lg border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-xs font-bold text-slate-900">{p.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono">
                              Model: {p.model} · {p.kemenkesNo}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                          {/* Qty selector */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                            <button
                              type="button"
                              onClick={() => handleQtyChange(p.id, -1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                              aria-label="Kurangi"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 py-1 text-xs font-mono font-bold text-slate-800">
                              {getQty(p.id)} Unit
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQtyChange(p.id, 1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                              aria-label="Tambah"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Delete button */}
                          <button
                            type="button"
                            onClick={() => onRemoveProduct(p.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                            aria-label="Hapus dari RFQ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Input Grid */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Data Rumah Sakit / Instansi Pemohon
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Fasilitas Kesehatan / RS <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="Contoh: RSUD Harapan Sehat / RS Mitra Husada"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Klasifikasi / Tipe Faskes
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800 bg-white"
                    >
                      <option value="RS Tipe A (Rujukan Nasional)">RS Tipe A (Rujukan Nasional)</option>
                      <option value="RS Tipe B / C">RS Tipe B / C</option>
                      <option value="RS Tipe D / RS Pratama">RS Tipe D / RS Pratama</option>
                      <option value="Jejaring RS Swasta">Jejaring RS Swasta</option>
                      <option value="Klinik Rawat Inap / Pratama">Klinik Rawat Inap / Pratama</option>
                      <option value="Laboratorium Klinik Mandiri">Laboratorium Klinik Mandiri</option>
                      <option value="Dinas Kesehatan Kabupaten / Kota">Dinas Kesehatan Kabupaten / Kota</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mekanisme / Sumber Anggaran
                    </label>
                    <select
                      value={fundingSource}
                      onChange={(e) => setFundingSource(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800 bg-white"
                    >
                      <option value="e-Katalog LKPP / APBD">e-Katalog LKPP / APBD</option>
                      <option value="e-Katalog LKPP / APBN Kemenkes">e-Katalog LKPP / APBN Kemenkes</option>
                      <option value="Anggaran BLU Rumah Sakit">Anggaran BLU Rumah Sakit</option>
                      <option value="Dana Investasi Swasta / Yayasan">Dana Investasi Swasta / Yayasan</option>
                      <option value="Tender / LPSE Terbuka">Tender / LPSE Terbuka</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimasi Target Waktu Pengadaan
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800 bg-white"
                    >
                      <option value="Segera (< 1 Bulan)">Segera (&lt; 1 Bulan)</option>
                      <option value="1 - 2 Bulan (Tahun Berjalan)">1 - 2 Bulan (Tahun Berjalan)</option>
                      <option value="Triwulan Mendatang">Triwulan Mendatang</option>
                      <option value="Perencanaan Anggaran Tahun Depan">Perencanaan Anggaran Tahun Depan</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama PIC / Pejabat Pengadaan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={picName}
                      onChange={(e) => setPicName(e.target.value)}
                      placeholder="Nama lengkap PIC"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Jabatan / Bagian
                    </label>
                    <input
                      type="text"
                      value={picRole}
                      onChange={(e) => setPicRole(e.target.value)}
                      placeholder="Contoh: PPK / Kabid Penunjang Medis / Direktur"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp / HP Aktif <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={picPhone}
                      onChange={(e) => setPicPhone(e.target.value)}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Resmi Instansi
                    </label>
                    <input
                      type="email"
                      value={picEmail}
                      onChange={(e) => setPicEmail(e.target.value)}
                      placeholder="pengadaan@rsud.go.id / pic@rs.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Catatan Kebutuhan Tambahan / Spesifikasi Khusus
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Membutuhkan pendampingan uji fungsi kalibrasi BPFK dan kabel power standar rumah sakit 3 phase."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-800"
                  />
                </div>

              </div>

              {/* Submit footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4 text-teal-200" />
                  <span>Generate Dokumen Penawaran & Kirim Permohonan</span>
                  <ArrowRight className="w-4 h-4 text-teal-200" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
