 export default function Services() {
  const services = [
    {
      id: 1,
      title: "Layanan Internet",
      description: "Internet fiber optic berkecepatan tinggi dengan koneksi stabil untuk rumah dan kantor Anda",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Voucher WiFi",
      description: "Voucher WiFi prabayar fleksibel dengan berbagai paket dan periode validitas",
      icon: "📡",
    },
    {
      id: 3,
      title: "Khusus untuk Rumah",
      description: "Koneksi internet khusus hanya untuk penggunaan residensial dengan bandwidth prioritas",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Pemasangan CCTV",
      description: "Pemasangan dan setup kamera CCTV profesional untuk keamanan rumah dan bisnis",
      icon: "📹",
    },
    {
      id: 5,
      title: "Pemasangan Starlink",
      description: "Pemasangan dan dukungan internet satelit untuk area dengan konektivitas terbatas",
      icon: "🛰️",
    },
    {
      id: 6,
      title: "Dukungan & Pemeliharaan Internet",
      description: "Dukungan teknis 24/7 dan pemeliharaan untuk semua kebutuhan konektivitas internet Anda",
      icon: "🔧",
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Layanan Internet Kami
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Solusi internet lengkap termasuk fiber berkecepatan tinggi, voucher WiFi, koneksi khusus, CCTV, dan pemasangan Starlink
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mengapa Memilih Layanan Internet Kami
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Koneksi fiber optic cepat dan stabil dengan uptime 99,9%
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Instalasi profesional dan setup dalam 48 jam
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Paket terjangkau dengan opsi pembayaran fleksibel
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Dukungan pelanggan 24/7 dan bantuan teknis
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Tersedia di seluruh negara termasuk area terpencil dengan Starlink
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Membutuhkan Layanan Internet?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hubungi tim kami untuk menemukan solusi internet yang sempurna untuk rumah atau bisnis Anda
            </p>
            <a
              href="/contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-block"
            >
              Jadwalkan Konsultasi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
