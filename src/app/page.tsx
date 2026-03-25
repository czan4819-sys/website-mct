export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-white-600 dark:text-white-400">your trusted internet service provider</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Penyedia layanan internet resmi dan solusi internet fiber optic cepat, stabil, dan terjangkau untuk rumah tangga dan bisnis di indonesia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Fast & Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lightning-fast performance and 99.9% uptime guarantee for your peace of mind
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dedicated professionals with years of experience in the industry
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Customer Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your success is our priority. We are committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers already benefiting from our services
          </p>
          <a
            href="/contact"
            className="bg-white dark:bg-gray-200 text-blue-600 dark:text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
