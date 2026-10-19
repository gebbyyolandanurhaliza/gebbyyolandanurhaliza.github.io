export const profile = {
  name: { first: "Gebby", middle: "Yolanda", last: "Nurhaliza" },
  email: "gebbyyolandanurhaliza@gmail.com",
  linkedin: "https://linkedin.com/in/gebby-yolanda-nurhaliza-063930258",
  linkedinLabel: "linkedin.com/in/gebby-yolanda-nurhaliza",
  whatsapp: "https://wa.me/6285213997368",
  whatsappLabel: "+62 852-1399-7368",
  instagram: "https://instagram.com/gebbyy_yolanda",
  instagramLabel: "@gebbyy_yolanda",
  location: "Pekanbaru, Riau",
  photo: "foto.jpg",
  cv: "cv.pdf",
};

export const nav = [
  { id: "about", label: { id: "Tentang", en: "About" } },
  { id: "projects", label: { id: "Proyek", en: "Projects" } },
  { id: "experience", label: { id: "Pengalaman", en: "Experience" } },
  { id: "skills", label: { id: "Keahlian", en: "Skills" } },
  { id: "education", label: { id: "Pendidikan", en: "Education" } },
  { id: "contact", label: { id: "Kontak", en: "Contact" } },
];

export const hero = {
  status: { id: "Terbuka untuk peluang karier", en: "Open to career opportunities" },
  roles: ["Programmer", "Web Developer", "IoT & Automation Engineer", "AI Integration"],
  lead: {
    id: "Lulusan Fisika Instrumentasi yang membangun sistem web perusahaan, integrasi AI, dan perangkat IoT bertenaga surya, mulai dari database dan back-end, front-end React, hingga mikrokontroler di lapangan.",
    en: "Instrumentation Physics graduate building enterprise web systems, AI integrations, and solar-powered IoT devices, from databases and back-end logic to React front-ends and microcontrollers in the field.",
  },
  ctaProjects: { id: "Lihat Proyek", en: "View Projects" },
  ctaContact: { id: "Hubungi Saya", en: "Contact Me" },
  ctaCv: { id: "Unduh CV", en: "Download CV" },
  yearsLabel: { id: "tahun di PT RSUP", en: "years at PT RSUP" },
};

export const stats = [
  { value: "4+", label: { id: "Tahun pengalaman", en: "Years of experience" } },
  { value: "6+", label: { id: "Sistem IoT & otomasi", en: "IoT & automation systems" } },
  { value: "15+", label: { id: "Teknologi digunakan", en: "Technologies used" } },
  { value: { id: "3,67", en: "3.67" }, label: { id: "IPK S1", en: "Bachelor's GPA" } },
];

export const about = {
  eyebrow: { id: "tentang", en: "about" },
  title: {
    id: "Menghubungkan perangkat keras, data, dan web dalam satu solusi.",
    en: "Bridging hardware, data, and the web into one solution.",
  },
  paragraphs: [
    {
      id: "Saya lulusan S1 Fisika Instrumentasi Universitas Muhammadiyah Riau dengan minat besar pada sistem kendali, Internet of Things (IoT), dan energi terbarukan. Sejak Maret 2022, saya bekerja sebagai Programmer & Automation Engineer di PT Riau Sakti United Plantations (RSUP).",
      en: "I am an Instrumentation Physics graduate from Universitas Muhammadiyah Riau with a strong interest in control systems, the Internet of Things (IoT), and renewable energy. Since March 2022, I have worked as a Programmer & Automation Engineer at PT Riau Sakti United Plantations (RSUP).",
    },
    {
      id: "Sehari-hari saya mengembangkan dan memelihara sistem web untuk departemen perusahaan dan ZHL Singapore, membangun asisten dokumen berbasis AI, serta merancang perangkat monitoring lapangan berbasis Arduino dan ESP32 yang ditenagai panel surya.",
      en: "Day to day, I develop and maintain web systems for company departments and ZHL Singapore, build AI-powered document assistants, and design field monitoring devices based on Arduino and ESP32, powered by solar panels.",
    },
    {
      id: "Ketertarikan saya pada energi terbarukan berawal dari skripsi: sistem otomasi pengatur nutrisi tanaman hidroponik dengan pembangkit listrik tenaga surya off-grid.",
      en: "My interest in renewable energy started with my thesis: an automated nutrient control system for hydroponic plants powered by an off-grid photovoltaic system.",
    },
  ],
  codeComment: { id: "// ringkasan singkat", en: "// quick summary" },
  codeEdu: { id: "S1 Fisika Instrumentasi · IPK 3,67", en: "BSc Instrumentation Physics · GPA 3.67" },
};

export const projectsSection = {
  eyebrow: { id: "proyek", en: "projects" },
  title: { id: "Proyek unggulan yang saya bangun di PT RSUP.", en: "Featured projects I've built at PT RSUP." },
  featured: { id: "unggulan", en: "featured" },
};

export const projects = [
  {
    featured: true,
    category: "AI · ZHL Singapore",
    title: "AI Document Assistant",
    desc: {
      id: "Asisten dokumen berbasis RAG dengan chat kontekstual, ekstraksi teks vision/OCR dari PDF, gambar, dan ZIP, serta ekstraksi field otomatis ke JSON schema. Hasil ekstraksi (invoice, booking receipt, tagihan SP, pembacaan meter) langsung tersimpan ke database dan laporan Excel. Lampiran PDF dari Gmail diproses otomatis lewat Gmail API dan cron job.",
      en: "A RAG-based document assistant with context-aware chat, vision/OCR text extraction from PDFs, images, and ZIP files, and automatic field extraction into a JSON schema. Extracted data (invoices, booking receipts, SP bills, meter readings) is saved straight to the database and Excel reports. PDF attachments from Gmail are processed automatically via the Gmail API and a cron job.",
    },
    tags: ["CodeIgniter 3", "Groq LLM API", "RAG", "OCR", "Gmail API", "PHPExcel"],
  },
  {
    featured: true,
    category: "IoT Web · PT RSUP",
    title: { id: "Dashboard Monitoring Listrik Real-time", en: "Real-time Power Monitoring Dashboard" },
    desc: {
      id: "Dashboard internal untuk distribusi listrik: daya aktif (kW), reaktif (kVAR), konsumsi (kWh), power factor, monitoring 3 fasa, live chart per detik, alert anomali, laporan PDF/Excel, dan manajemen user dengan OTP. Sudah live memantau panel distribusi utama PLTS UHT.",
      en: "An internal dashboard for power distribution: active power (kW), reactive power (kVAR), consumption (kWh), power factor, 3-phase monitoring, per-second live charts, anomaly alerts, PDF/Excel reports, and OTP-based user management. Live and monitoring the main PLTS UHT distribution panel.",
    },
    tags: ["React.js", "WebSocket", "REST API", "RBAC", "OTP"],
  },
  {
    category: "Web · ZHL Singapore",
    title: { id: "Sistem Akuntansi & Monitoring", en: "Accounting & Monitoring System" },
    desc: {
      id: "Monitoring B/L code report dan customer card, serta pemeliharaan sistem akuntansi termasuk pencatatan Payable & Receivable payment, lengkap dengan laporan PDF dan Excel.",
      en: "B/L code report and customer card monitoring, plus maintenance of the accounting system including Payable & Receivable payment records, with PDF and Excel reports.",
    },
    tags: ["CodeIgniter 3", "PHP", "Bootstrap", "PDF / Excel"],
  },
  {
    category: "Web · Production",
    title: { id: "Website Departemen Produksi", en: "Production Department Website" },
    desc: {
      id: "Sistem untuk WTP Filling, WTP Processing, dan DRP: form input, data harian, laporan produksi, dan alur approval laporan.",
      en: "A system for WTP Filling, WTP Processing, and DRP: input forms, daily data, production reports, and a report approval flow.",
    },
    tags: ["CodeIgniter 3", "PHP", "Bootstrap", "Reporting"],
  },
  {
    category: "IoT · Warehouse",
    title: "Put To Light System",
    desc: {
      id: "Sistem penunjuk lokasi produk di gudang PT RSUP menggunakan lampu yang dikendalikan ESP32 melalui WebSocket, sehingga pencarian barang lebih cepat.",
      en: "A light-guided product locator for the PT RSUP warehouse, using ESP32-controlled lights over WebSocket to speed up item picking.",
    },
    tags: ["ESP32", "WebSocket", "C++"],
  },
  {
    category: "IoT · Plantation",
    title: { id: "Monitoring Lapangan Bertenaga Surya", en: "Solar-powered Field Monitoring" },
    desc: {
      id: "Rangkaian perangkat Arduino bertenaga panel surya: irigasi pembibitan kelapa, monitoring kecepatan & arah angin via Telegram, ketinggian air kanal (sensor ultrasonik), serta pH dan kelembapan tanah.",
      en: "A set of solar-powered Arduino devices: coconut nursery irrigation, wind speed & direction monitoring via Telegram, canal water level (ultrasonic sensor), and soil pH and moisture.",
    },
    tags: ["Arduino", "C++", "Solar Panel", "Telegram Bot", "Sensors"],
  },
];

export const experienceSection = {
  eyebrow: { id: "pengalaman", en: "experience" },
  title: { id: "Pengalaman membangun sistem web, AI, dan otomasi lapangan.", en: "Experience building web systems, AI, and field automation." },
};

export const experience = [
  {
    role: "Programmer & Automation Engineer",
    company: "PT Riau Sakti United Plantations (RSUP) · Riau",
    period: { id: "Mar 2022 — Sekarang", en: "Mar 2022 — Present" },
    groups: [
      {
        title: "Programmer · Production",
        items: [
          { id: "Mengembangkan dan memelihara website produksi (WTP Filling, WTP Processing, DRP): form input, data harian, laporan, dan approval.", en: "Developed and maintained the production website (WTP Filling, WTP Processing, DRP): input forms, daily data, reports, and approval." },
          { id: "Integrasi database, pengolahan data dinamis, dan laporan PDF & Excel.", en: "Database integration, dynamic data handling, and PDF & Excel reports." },
        ],
      },
      {
        title: "Programmer · ZHL Singapore",
        items: [
          { id: "Membangun monitoring B/L code report & customer card, serta memelihara sistem akuntansi (Payable & Receivable).", en: "Built B/L code report & customer card monitoring, and maintained the accounting system (Payable & Receivable)." },
          { id: "Membangun AI Document Assistant berbasis RAG dengan Groq LLM API, termasuk pipeline auto-fill ke database dan ingest email otomatis via Gmail API.", en: "Built a RAG-based AI Document Assistant with the Groq LLM API, including auto-fill pipelines into the database and automated email ingestion via the Gmail API." },
        ],
      },
      {
        title: "Front-end · IoT Web Dashboard",
        items: [
          { id: "Mengembangkan dashboard monitoring listrik real-time dengan React.js untuk seluruh departemen PT RSUP.", en: "Developed a real-time power monitoring dashboard in React.js for all PT RSUP departments." },
          { id: "Berkolaborasi dengan back-end engineer untuk integrasi REST API dan WebSocket data kWh.", en: "Collaborated with the back-end engineer to integrate REST APIs and WebSocket for kWh data." },
        ],
      },
      {
        title: "Automation Engineer",
        items: [
          { id: "Merancang sistem irigasi bertenaga surya dan perangkat monitoring angin, air kanal, serta pH & kelembapan tanah berbasis Arduino.", en: "Designed a solar-powered irrigation system and Arduino-based monitors for wind, canal water levels, and soil pH & moisture." },
          { id: "Membuat sistem Put To Light gudang dengan ESP32 dan WebSocket.", en: "Built a warehouse Put To Light system with ESP32 and WebSocket." },
        ],
      },
    ],
  },
  {
    role: { id: "Relawan · Pompin “Pompong Pintar”", en: "Volunteer · Pompin “Pompong Pintar”" },
    company: "Yayasan Bahtera Dwipa Abadi (YBDA) · Riau",
    period: { id: "2025", en: "2025" },
    summary: {
      id: "Terlibat sebagai relawan dalam program Pompin “Pompong Pintar” bersama Yayasan Bahtera Dwipa Abadi.",
      en: "Volunteered in the Pompin “Pompong Pintar” program with Yayasan Bahtera Dwipa Abadi.",
    },
  },
];

export const skillsSection = {
  eyebrow: { id: "keahlian", en: "skills" },
  title: { id: "Tools dan teknologi yang saya gunakan.", en: "Tools and technologies I work with." },
};

export const skills = [
  { title: "web-development", items: ["CodeIgniter 3", "PHP", "JavaScript", "React.js", "HTML", "CSS", "Bootstrap"] },
  { title: "database", items: ["MySQL", "PostgreSQL", "PDF / Excel Reporting"] },
  { title: "ai-and-data", items: ["LLM / AI API (Groq)", "RAG", "OCR Processing", "JSON Schema Extraction", "Gmail API"] },
  { title: "iot-and-hardware", items: ["Arduino IDE", "C++", "ESP32", "WebSocket", "Sensors", "Solar Panel Installation"] },
  { title: "design-and-simulation", items: ["Matlab", "SketchUp", "EWB", "Proteus", "ArcGIS", "Fritzing"] },
  {
    title: "soft-skills",
    items: [
      "Leadership", "Teamwork", "Problem Solving", "Time Management", "Critical Thinking",
      { id: "Indonesia · Fasih", en: "Indonesian · Fluent" },
      { id: "Inggris · Menengah", en: "English · Intermediate" },
    ],
  },
];

export const educationSection = {
  eyebrow: { id: "pendidikan", en: "education" },
  title: { id: "Dasar fisika instrumentasi dari Universitas Muhammadiyah Riau.", en: "An instrumentation physics foundation from Universitas Muhammadiyah Riau." },
};

export const education = {
  degree: { id: "Sarjana Fisika Instrumentasi", en: "Bachelor of Instrumentation Physics" },
  school: { id: "Universitas Muhammadiyah Riau · Agt 2018 — Apr 2022", en: "Universitas Muhammadiyah Riau · Aug 2018 — Apr 2022" },
  gpa: { id: "3,67", en: "3.67" },
  gpaOf: { id: "/ 4,00 IPK", en: "/ 4.00 GPA" },
  activitiesLabel: { id: "Kegiatan", en: "Activities" },
  activities: [
    { id: "Pertukaran pelajar E-Mobility, Faculty of Social and Humanities, Sabah, Malaysia (2022).", en: "E-Mobility student exchange, Faculty of Social and Humanities, Sabah, Malaysia (2022)." },
    { id: "Magang di laboratorium MA Diniyyah Puteri Pekanbaru.", en: "Laboratory internship at MA Diniyyah Puteri Pekanbaru." },
  ],
  publicationLabel: { id: "Publikasi", en: "Publication" },
  publication: "Rancang Bangun Sistem Otomasi Pengatur Nutrisi pada Tanaman Hidroponik Nutrient Film Technique (NFT) dengan Sistem Pembangkit Listrik Off Grid Photovoltaic",
  achievementsLabel: { id: "Prestasi", en: "Achievements" },
  achievements: [
    { id: "Medali Perunggu, Dumai National Choir Competition 2020", en: "Bronze Medal, Dumai National Choir Competition 2020" },
    { id: "Medali Perak, North Sumatra International Choir Competition 2019", en: "Silver Medal, North Sumatra International Choir Competition 2019" },
    { id: "Medali Perak, Dumai National Choir Competition 2018", en: "Silver Medal, Dumai National Choir Competition 2018" },
  ],
};

export const contact = {
  eyebrow: { id: "kontak", en: "contact" },
  title: { id: "Mari berdiskusi tentang proyek dan peluang kerja sama.", en: "Let's talk about projects and collaboration." },
  sub: {
    id: "Saya terbuka untuk peran programmer, web developer, IoT engineer, dan automation engineer.",
    en: "I am open to programmer, web developer, IoT engineer, and automation engineer roles.",
  },
  ctaEmail: { id: "Kirim Email", en: "Send Email" },
  builtWith: { id: "dibuat dengan React + Vite", en: "built with React + Vite" },
};