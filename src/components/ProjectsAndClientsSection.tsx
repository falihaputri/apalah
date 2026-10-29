import React from 'react';
import { Building2, CheckCircle2, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { CASE_STUDIES, CLIENT_PARTNERS } from '../data/medicalData';

export const ProjectsAndClientsSection: React.FC = () => {
  return (
    <section id="proyek" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Portofolio Pengadaan & Bukti Kinerja
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Rekam Jejak Pengadaan Turnkey Rumah Sakit di Seluruh Indonesia
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Menjadi mitra terpercaya bagi rumah sakit rujukan nasional, RSUD tipe B & C, serta jejaring rumah sakit swasta terkemuka dalam mewujudkan ruang rawat dan diagnostik modern.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-slate-50/80 transition-colors"
            >
              <div>
                {/* Clean unboxed metadata with dot separator */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-teal-800 font-semibold">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {project.year}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {project.title}
                </h3>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  Klien: {project.client}
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {project.scope}
                </p>

                {/* Items delivered */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    Peralatan Terpasang:
                  </div>
                  {project.itemsDelivered.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concrete Outcome Highlight */}
              <div className="mt-5 p-3 rounded-xl bg-teal-50 border border-teal-200/80">
                <div className="text-[11px] font-bold text-teal-900 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-700" />
                  Dampak & Hasil Terukur:
                </div>
                <div className="text-xs text-teal-800 mt-1 leading-snug font-medium">
                  {project.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Partners Grid */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-base font-bold text-slate-900">
              Mitra Faskes & Jejaring Rumah Sakit
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Dipercaya oleh ratusan fasilitas kesehatan untuk pemenuhan sarana dan prasarana medis.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENT_PARTNERS.map((client, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-center flex flex-col justify-center items-center shadow-2xs hover:border-slate-300 transition-colors"
              >
                <Building2 className="w-5 h-5 text-teal-700 mb-1" />
                <span className="text-xs font-bold text-slate-800 line-clamp-1">
                  {client.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {client.type} · {client.city}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
