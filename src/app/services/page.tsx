export default function Services() {
  const services = [
    {
      id: 1,
      title: "Internet Service",
      description: "High-speed fiber optic internet with stable connection for your home and office",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Voucher WiFi",
      description: "Flexible prepaid WiFi vouchers with various packages and validity periods",
      icon: "📡",
    },
    {
      id: 3,
      title: "Dedicated For Home",
      description: "Dedicated internet connection exclusively for residential use with priority bandwidth",
      icon: "🏠",
    },
    {
      id: 4,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation and setup for home and business security",
      icon: "📹",
    },
    {
      id: 5,
      title: "Starlink Installation",
      description: "Satellite internet installation and support for areas with limited connectivity",
      icon: "🛰️",
    },
    {
      id: 6,
      title: "Internet Support & Maintenance",
      description: "24/7 technical support and maintenance for all your internet connectivity needs",
      icon: "🔧",
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Internet Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Complete internet solutions including high-speed fiber, WiFi vouchers, dedicated connections, CCTV, and Starlink installation
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
                  Learn More →
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
              Why Choose Our Internet Services
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Fast and stable fiber optic connection with 99.9% uptime
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Professional installation and setup within 48 hours
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Affordable packages with flexible payment options
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                24/7 customer support and technical assistance
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                Available nationwide including remote areas with Starlink
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Internet Services?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contact our team to find the perfect internet solution for your home or business
            </p>
            <a
              href="/contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
