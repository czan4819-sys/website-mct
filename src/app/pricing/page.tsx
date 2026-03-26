export default function Pricing() {
  const plans = [
    {
      name: "Internet Dasar",
      price: "Rp 250K",
      period: "per bulan",
      description: "Sempurna untuk pengguna rumah dan browsing ringan",
      features: [
        "Kecepatan download 10 Mbps",
        "Data tanpa batas",
        "Dukungan dasar",
        "Kontrak 1 bulan",
        "Instalasi standar",
      ],
      highlighted: false,
    },
    {
      name: "Internet Premium",
      price: "Rp 350K",
      period: "per bulan",
      description: "Ideal untuk streaming dan gaming",
      features: [
        "Kecepatan download 30 Mbps",
        "Data tanpa batas",
        "Dukungan prioritas 24/7",
        "Kontrak fleksibel (3/6/12 bulan)",
        "Instalasi profesional",
        "Router WiFi disertakan",
        "Upgrade modem kapan saja",
      ],
      highlighted: true,
    },
    {
      name: "Bisnis Khusus",
      price: "Rp 600K",
      period: "per bulan",
      description: "Untuk bisnis yang membutuhkan konektivitas stabil",
      features: [
        "Bandwidth khusus 50 Mbps",
        "Data tanpa batas",
        "Dukungan premium 24/7",
        "Lini khusus dijamin",
        "Instalasi profesional",
        "Alamat IP statis",
        "Jaminan SLA (uptime 99,9%)",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Paket Layanan Internet
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Pilih paket internet yang sempurna untuk kebutuhan rumah atau bisnis Anda
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 transition-all ${
                  plan.highlighted
                    ? "bg-blue-600 dark:bg-blue-700 text-white shadow-2xl scale-105"
                    : "bg-white dark:bg-gray-800 shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="bg-blue-400 dark:bg-blue-300 text-blue-600 dark:text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {plan.price}
                  </span>
                  <p className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                    {plan.period}
                  </p>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition mb-8 block ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Mulai Sekarang
                </a>

                <ul className={`space-y-4 ${plan.highlighted ? "text-white" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Seberapa cepat koneksi internet Anda?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Paket kami berkisar dari 10 Mbps (Dasar) hingga 50 Mbps khusus (Bisnis). Semua kecepatan diuji dan dijamin.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Bagaimana proses instalasi?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Instalasi profesional disertakan. Kami menangani setup lini fiber, konfigurasi modem, dan setup router WiFi.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Bisakah saya membatalkan kontrak kapan saja?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Basic plans offer 1-month flexibility. Premium and Business plans have flexible contract durations (3, 6, or 12 months).
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              What if there is a service issue?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Contact our 24/7 support team immediately. We aim to resolve issues within 24 hours for all customers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get fast internet?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your plan and get connected today! Free installation and 48-hour activation
          </p>
          <a
            href="/contact"
            className="bg-white dark:bg-gray-200 text-blue-600 dark:text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition inline-block"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}
