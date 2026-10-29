export interface Product {
  id: string;
  name: string;
  model: string;
  category: 'radiology' | 'icu' | 'lab' | 'surgery' | 'furniture';
  categoryLabel: string;
  brand: string;
  origin: string;
  kemenkesNo: string;
  tkdnScore?: string;
  inEKatalog: boolean;
  warranty: string;
  image: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  scope: string;
  outcome: string;
  itemsDelivered: string[];
}

export interface ClientPartner {
  name: string;
  type: string;
  city: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'rad-01',
    name: 'Digital Ultrasound 4D Doppler Premium',
    model: 'SonoScan V8 Elite',
    category: 'radiology',
    categoryLabel: 'Elektromedik & Radiologi',
    brand: 'Novacare Medical',
    origin: 'Jerman / Indonesia (Perakitan)',
    kemenkesNo: 'KEMENKES RI AKL 21501228490',
    tkdnScore: '41.2% (Tersertifikasi Kemenperin)',
    inEKatalog: true,
    warranty: 'Garansi Resmi 3 Tahun + Free Kalibrasi 2x',
    image: '/src/assets/images/product_radiology_scanner_1793256864956.jpg',
    description: 'Sistem ultrasonografi diagnostik generasi terbaru dengan resolusi kristal monokristal, visualisasi hemodinamik Color Doppler presisi tinggi, dan AI Auto-Measurement untuk Obstetri, Kardiologi, serta Vaskular.',
    features: [
      'Layar LED 21.5-inch High Resolution dengan articulating arm ergonomis',
      'Layar sentuh kendali cerdas 13.3-inch anti-bakteri',
      'Teknologi AI Auto-IMT, Auto-EF, dan 4D Smart Fetal Face Enhancement',
      'Mendukung koneksi DICOM 3.0 terintegrasi penuh ke PACS Rumah Sakit'
    ],
    specs: {
      'Mode Operasi': 'B, M, CFM, PDI, PW, CW, TDI, 3D/4D Real-time',
      'Transducer Port': '4 Active Ports + 1 Parking Port',
      'Kedalaman Scan': 'Hingga 38 cm dengan Dynamic Frequency Imaging',
      'Kapasitas Storage': '1 TB SSD Medis internal + Export USB 3.0 & LAN'
    }
  },
  {
    id: 'icu-01',
    name: 'Multi-Parameter Patient Monitor 15 Inch',
    model: 'OmniVue M15 Pro',
    category: 'icu',
    categoryLabel: 'ICU, NICU & Life Support',
    brand: 'VitalMed Instruments',
    origin: 'Jepang / Indonesia',
    kemenkesNo: 'KEMENKES RI AKL 20502129841',
    tkdnScore: '43.8% (Tersertifikasi Kemenperin)',
    inEKatalog: true,
    warranty: 'Garansi Resmi 2 Tahun + Backup Unit Siaga',
    image: '/src/assets/images/product_icu_monitor_1793256864667.jpg',
    description: 'Monitor pemantau tanda vital pasien kritis untuk ruang ICU, ICCU, IGD, dan Kamar Operasi. Dilengkapi algoritma deteksi aritmia cerdas dan koneksi nirkabel ke Central Monitoring Station (CMS).',
    features: [
      'Monitoring simultan: ECG 12-Lead, SpO2 Masimo/Nellcor, NIBP, Respiration, Temp 2-Ch, IBP, EtCO2',
      'Layar touchscreen 15.6-inch TFT Full Viewing Angle dengan mode Night ICU',
      'Penyimpanan tren parameter hingga 168 jam kontinu',
      'Baterai cadangan Li-ion terintegrasi hingga 4 jam pengoperasian darurat'
    ],
    specs: {
      'Tingkat Akurasi SpO2': '±2% (rentang 70% - 100%)',
      'NIBP Protection': 'Overpressure double-safety valve protection',
      'Konektivitas': 'Wi-Fi, RJ45 LAN, USB, HL7 Interface ke SIMRS',
      'Standar Keselamatan': 'IEC 60601-1, IPX1 Splash Resistant'
    }
  },
  {
    id: 'icu-02',
    name: 'Ventilator Mekanik ICU Dewasa & Pediatrik',
    model: 'RespiCare 700 Plus',
    category: 'icu',
    categoryLabel: 'ICU, NICU & Life Support',
    brand: 'AeroPulse Biomedical',
    origin: 'Swiss / Lisensi Resmi',
    kemenkesNo: 'KEMENKES RI AKL 20403118230',
    tkdnScore: '38.5%',
    inEKatalog: true,
    warranty: 'Garansi Resmi 3 Tahun + Pelatihan Operator Dokter & Perawat',
    image: '/src/assets/images/hero_medical_equipment_1793256864593.jpg',
    description: 'Ventilator ICU berkinerja tinggi berbasis turbin ultra-quiet independen tanpa kompresor gas eksternal. Dirancang untuk pasien dewasa, anak, hingga neonatal berat ekstrem.',
    features: [
      'Turbin penggerak internal, siap bekerja di ruang ICU maupun saat transfer ambulans',
      'Mode ventilasi invasif & non-invasif (NIV, High Flow Nasal Cannula - HFNC)',
      'Grafik loop P-V, F-V, dan tren compliance real-time',
      'Sensor O2 non-konsumsi (Galvanic Free) meminimalkan biaya operasional berkala'
    ],
    specs: {
      'Tidal Volume': '20 mL – 2000 mL (Adult/Pediatric), 2 mL – 300 mL (Neonatal)',
      'Tekanan Inspirasi': '1 – 100 cmH2O',
      'PEEP': '0 – 50 cmH2O',
      'Baterai Internal': 'Hot-swappable dual battery hingga 6 jam kerja'
    }
  },
  {
    id: 'lab-01',
    name: 'Automated 5-Part Hematology Analyzer',
    model: 'HemaCell 5800 Auto',
    category: 'lab',
    categoryLabel: 'Laboratorium & Diagnostik',
    brand: 'CellPath Clinical',
    origin: 'Korea Selatan',
    kemenkesNo: 'KEMENKES RI AKL 20205219483',
    tkdnScore: 'Tersedia di e-Katalog',
    inEKatalog: true,
    warranty: 'Garansi 2 Tahun + Jaminan Reagen Ready Stock',
    image: '/src/assets/images/warehouse_medical_logistics_1793256865410.jpg',
    description: 'Alat pemeriksaan hematologi otomatis 5-bagian diferensial leukosit dengan throughput hingga 80 sampel per jam. Menggunakan teknologi laser scatter flow cytometry mutakhir.',
    features: [
      'Pemeriksaan 29 parameter lengkap termasuk retikulosit & platelet flags',
      'Autoloader 60 tabung otomatis dengan pembaca barcode terintegrasi',
      'Volume sampel mikro hanya 20 μL, ideal untuk pasien pediatrik dan geriatri',
      'Sistem pembersihan probe otomatis mencegah kontaminasi silang sampel'
    ],
    specs: {
      'Kecepatan Analisis': 'Hingga 80 sampel / jam',
      'Metode': 'Semiconductor laser scatter & chemical dye method + Impedance',
      'Kapasitas Memori': '100.000 hasil tes lengkap dengan grafik scattergram',
      'Interfacing': 'Bidirectional LIS / SIMRS ready'
    }
  },
  {
    id: 'surg-01',
    name: 'Meja Operasi Elektrik Universal C-Arm Ready',
    model: 'SurgePro 9000E',
    category: 'surgery',
    categoryLabel: 'Kamar Operasi & Bedah',
    brand: 'OptimaSurg Precision',
    origin: 'Indonesia (Produksi Domestik)',
    kemenkesNo: 'KEMENKES RI AKD 21102920188',
    tkdnScore: '58.4% (Tinggi / Prioritas LKPP)',
    inEKatalog: true,
    warranty: 'Garansi 3 Tahun Konstruksi & Aktuator Hidrolik-Elektrik',
    image: '/src/assets/images/hero_medical_equipment_1793256864593.jpg',
    description: 'Meja operasi multifungsi elektro-hidrolik dengan tabletop radiolusen penuh yang kompatibel dengan C-Arm fluoroskopi. Cocok untuk bedah umum, ortopedi, saraf, dan urologi.',
    features: [
      'Tabletop geser memanjang hingga 350 mm memudahkan akses radiologi 360 derajat',
      'Kasur memory foam anti-dekubitus dengan penutup konduktif tanpa jahitan',
      'Dual control system: Remote kabel fleksibel & panel darurat di kolom meja',
      'Beban kerja aman (Safe Working Load) hingga 320 kg'
    ],
    specs: {
      'Penyesuaian Ketinggian': '680 mm – 1050 mm',
      'Trendelenburg / Reverse': '± 30° / ± 30°',
      'Kemiringan Lateral': '± 20° (Kiri / Kanan)',
      'Material Rangka': 'Stainless Steel Medis Grade 304 anti-korosi'
    }
  },
  {
    id: 'surg-02',
    name: 'Lampu Operasi LED Ganda Shadowless',
    model: 'LumiSurg Dual 700/500',
    category: 'surgery',
    categoryLabel: 'Kamar Operasi & Bedah',
    brand: 'OptimaSurg Precision',
    origin: 'Indonesia',
    kemenkesNo: 'KEMENKES RI AKD 21603920412',
    tkdnScore: '52.7% (Prioritas e-Katalog)',
    inEKatalog: true,
    warranty: 'Garansi 2 Tahun + Umur LED hingga 60.000 Jam',
    image: '/src/assets/images/product_icu_monitor_1793256864667.jpg',
    description: 'Sistem pencahayaan kamar bedah canggih dengan teknologi reflektor optik Jerman tanpa bayangan. Dilengkapi kamera full HD terintegrasi untuk dokumentasi dan tele-surgery.',
    features: [
      'Intensitas cahaya hingga 160.000 Lux dengan suhu warna dapat diatur (3800K - 5000K)',
      'Indeks rendering warna tinggi (Ra > 96, R9 > 95) untuk visualisasi jaringan akurat',
      'Desain aerodinamis kompatibel dengan aliran udara laminar flow plafon OT',
      'Handle sterilisable autoclavable ergonomis'
    ],
    specs: {
      'Diameter Kubah': '700 mm (Kubah Utama) + 500 mm (Kubah Satelit)',
      'Kedalaman Iluminasi': '> 1200 mm',
      'Konsumsi Daya': 'Maksimal 140 Watt (Sangat hemat energi)',
      'Kamera Medis': 'Opsional Full HD 1080p 30x Optical Zoom'
    }
  },
  {
    id: 'furn-01',
    name: 'Hospital Bed ICU 5-Fungsi Elektrik Motorik',
    model: 'CareBed Pro 5E',
    category: 'furniture',
    categoryLabel: 'Hospital Furniture & Sterilisasi',
    brand: 'Medika Fabricators',
    origin: 'Indonesia',
    kemenkesNo: 'KEMENKES RI AKD 20902910321',
    tkdnScore: '64.1% (Tinggi)',
    inEKatalog: true,
    warranty: 'Garansi Motorik 3 Tahun + Rangka 5 Tahun',
    image: '/src/assets/images/hero_medical_equipment_1793256864593.jpg',
    description: 'Tempat tidur perawatan intensif elektrik dengan timbangan digital terintegrasi, tombol CPR darurat cepat, dan posisi cardiac chair satu sentuhan.',
    features: [
      '5 Fungsi gerak elektrik: Backrest, Legrest, Height Adjustment, Trendelenburg, Rev-Trendelenburg',
      'Side rail split empat bagian dengan tombol kontrol pasien dan perawat mandiri',
      'Sistem roda sentral pengunci presisi 150 mm dengan roda kemudi arah',
      'Rangka baja berlapis elektrostatik antibakterial tahan desinfektan kimia'
    ],
    specs: {
      'Dimensi Keseluruhan': '2240 mm (P) x 1060 mm (L) x 480-820 mm (T)',
      'Beban Pasien Maksimal': '250 kg Safe Working Load',
      'Sertifikasi Kelistrikan': 'Linak Actuator Certified Medical Grade',
      'Fitur Tambahan': 'Tiang infus SS304, holder tabung O2, drainase bag holder'
    }
  },
  {
    id: 'rad-02',
    name: 'Digital Radiography (DR) X-Ray Flat Panel',
    model: 'RayPro 500 Ceiling Suspended',
    category: 'radiology',
    categoryLabel: 'Elektromedik & Radiologi',
    brand: 'Novacare Medical',
    origin: 'Korea Selatan / Lisensi Resmi',
    kemenkesNo: 'KEMENKES RI AKL 21501129302',
    tkdnScore: '40.6%',
    inEKatalog: true,
    warranty: 'Garansi Tabung 2 Tahun, Detektor FPD 3 Tahun',
    image: '/src/assets/images/product_radiology_scanner_1793256864956.jpg',
    description: 'Sistem Rontgen Digital stasioner dengan gantri gantung plafon untuk fleksibilitas posisi maksimal dan detektor nirkabel Cesium Iodide (CsI) dosis rendah.',
    features: [
      'High Frequency X-Ray Generator 50kW / 65kW dengan kontrol mikrokontroler presisi',
      'Flat Panel Detector (FPD) 43x43 cm Wireless CsI dengan DQE tinggi',
      'Workstation akuisisi gambar cerdas dengan algoritma penyempurnaan tulang & paru',
      'Integrasi PACS & HIS Rumah Sakit dalam standar DICOM Print & Storage'
    ],
    specs: {
      'Generator Rating': '50 kW / 150 kV / 630 mA',
      'Ukuran Piksel Detektor': '139 mikron untuk ketajaman detail fraktur mikro',
      'Waktu Pratinjau Gambar': '< 2 detik setelah eksposur',
      'Collimator': 'Manual & Auto-collimator LED dengan laser centering'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-01',
    title: 'Pengadaan & Instalasi 24 Bed ICU & Ruang Isolasi Terpadu',
    client: 'RSUD Kabupaten Bogor',
    location: 'Jawa Barat',
    year: '2025',
    category: 'Turnkey Procurement ICU',
    scope: 'Penyediaan menyeluruh 24 unit ventilator intensif, 24 unit monitor pasien multi-parameter, syringe & infusion pump terintegrasi CMS, serta uji fungsi kalibrasi BPFK.',
    outcome: 'Selesai 100% tepat waktu dalam 45 hari kalender dengan lolos sertifikasi kelayakan fasilitas intensif Kemenkes tanpa temuan.',
    itemsDelivered: ['24x Ventilator RespiCare 700', '24x Patient Monitor OmniVue M15', 'Central Nurse Station System', 'Pelatihan 38 Perawat & 6 Dokter Spesialis']
  },
  {
    id: 'cs-02',
    title: 'Modernisasi Instalasi Radiologi & Diagnostic Imaging',
    client: 'RSUP Dr. Wahidin Sudirohusodo',
    location: 'Makassar, Sulawesi Selatan',
    year: '2025',
    category: 'Radiology Turnkey',
    scope: 'Instalasi Digital Radiography Ceiling Suspended, 2 unit USG 4D Doppler, serta integrasi sistem arsip gambar PACS ke SIMRS utama.',
    outcome: 'Meningkatkan kapasitas pemeriksaan radiologi dari 60 pasien/hari menjadi 140 pasien/hari dengan waktu tunggu hasil radiologi terpangkas 55%.',
    itemsDelivered: ['1x Ceiling X-Ray 50kW', '2x SonoScan V8 Elite Doppler', 'Server PACS Storage 24 TB Redundant', 'Timbal Shielding & Lead Glass Door']
  },
  {
    id: 'cs-03',
    title: 'Peralatan Bedah Sentral & Ruang Operasi Modular',
    client: 'RS Swasta Mitra Medika',
    location: 'Surabaya, Jawa Timur',
    year: '2024',
    category: 'Kamar Bedah (OK)',
    scope: 'Pengadaan 4 set meja operasi elektrik C-Arm ready, lampu bedah ganda LED dual dome, serta mesin anestesi 3-gas dengan vaporizer terkalibrasi.',
    outcome: 'Ruang operasi berhasil meraih akreditasi Paripurna KARS dengan standar sterilitas dan keandalan alat 100% terjamin.',
    itemsDelivered: ['4x Meja Bedah SurgePro 9000E', '4x Lampu Operasi LumiSurg Dual 700/500', 'Mesin Anestesi Digital', 'Maintenance Kontrak Purna Jual 3 Tahun']
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'RSUP Dr. Sardjito', type: 'Rumah Sakit Rujukan Nasional', city: 'Yogyakarta' },
  { name: 'RSUD Pasar Minggu', type: 'RSUD Tipe B', city: 'DKI Jakarta' },
  { name: 'RSUP Dr. Hasan Sadikin', type: 'Rumah Sakit Rujukan Nasional', city: 'Bandung' },
  { name: 'RSUD Dr. Soetomo', type: 'RSUD Kelas A Rujukan', city: 'Surabaya' },
  { name: 'RS Siloam Hospitals Group', type: 'Jaringan RS Swasta Nasional', city: 'Nasional' },
  { name: 'RSUD Ulin Banjarmasin', type: 'RSUD Rujukan Wilayah', city: 'Kalimantan Selatan' },
  { name: 'Dinas Kesehatan Kota Medan', type: 'Instansi Pemerintah Daerah', city: 'Sumatera Utara' },
  { name: 'RS Hermina Medika', type: 'Jaringan RS Ibu & Anak', city: 'Nasional' }
];

export const COMPANY_LEGALITY = [
  {
    name: 'Sertifikat Standar CDAKB',
    number: 'No. HK.02.02/CDAKB/1842/2021',
    issuer: 'Kementerian Kesehatan Republik Indonesia',
    desc: 'Memenuhi seluruh parameter Cara Distribusi Alat Kesehatan yang Baik untuk produk elektromedik radiasi, non-radiasi, steril, dan diagnostik in-vitro.'
  },
  {
    name: 'Izin Penyalur Alat Kesehatan (IPAK)',
    number: 'No. FK.01.01/VI/0921-e/2019',
    issuer: 'Direktorat Penilaian Alkes Kemenkes RI',
    desc: 'Surat Izin Usaha Resmi Penyalur Alat Kesehatan Nasional dengan cakupan distribusi ke seluruh wilayah 38 provinsi di Indonesia.'
  },
  {
    name: 'ISO 13485:2016 Certified',
    number: 'Cert No. MED-ID-884102',
    issuer: 'Badan Sertifikasi Internasional Terakreditasi KAN',
    desc: 'Sistem manajemen mutu komprehensif yang diakui secara global untuk distribusi, penyimpanan, dan instalasi perangkat medis.'
  },
  {
    name: 'Penyedia Terverifikasi e-Katalog LKPP',
    number: 'ID Penyedia LKPP: 99420-ALK-SMN',
    issuer: 'Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah',
    desc: 'Terdaftar resmi dalam etalase Pengadaan Alat Kesehatan Sektoral Kemenkes, memfasilitasi e-Purchasing cepat bagi RS Pemerintah & Faskes BLU.'
  }
];
