export default function Pricing() {
  const plans = [
    {
      name: "Basic Internet",
      price: "Rp 199K",
      period: "per month",
      description: "Perfect for home users and light browsing",
      features: [
        "10 Mbps download speed",
        "Unlimited data",
        "Basic support",
        "1 month contract",
        "Standard installation",
      ],
      highlighted: false,
    },
    {
      name: "Premium Internet",
      price: "Rp 349K",
      period: "per month",
      description: "Ideal for streaming and gaming",
      features: [
        "30 Mbps download speed",
        "Unlimited data",
        "Priority 24/7 support",
        "Flexible contract (3/6/12 months)",
        "Professional installation",
        "WiFi router included",
        "Modem upgrade anytime",
      ],
      highlighted: true,
    },
    {
      name: "Business Dedicated",
      price: "Rp 599K",
      period: "per month",
      description: "For businesses needing stable connectivity",
      features: [
        "50 Mbps dedicated bandwidth",
        "Unlimited data",
        "24/7 premium support",
        "Dedicated line guaranteed",
        "Professional installation",
        "Static IP address",
        "SLA guarantee (99.9% uptime)",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Internet Service Plans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the perfect internet plan for your home or business needs
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
                      Most Popular
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
                  Get Started
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
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How fast is your internet connection?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our plans range from 10 Mbps (Basic) to 50 Mbps dedicated (Business). All speeds are tested and guaranteed.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              What is the installation process?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional installation is included. We handle fiber line setup, modem configuration, and WiFi router setup.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Can I cancel my contract anytime?
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
