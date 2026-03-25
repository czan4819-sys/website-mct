'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
        </p>
      </section>

      {/* Contact Content */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  📧 Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400 break-words">
                  <a href="mailto:mumtazcyberteknologi@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 block">
                    mumtazcyberteknologi@gmail.com
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  📞 Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +6289603528824
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  📍 Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  96123 JL brigjend piola isa<br />
                  dulomo selatan, kota gorontalo<br />
                  indonesia
                
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg">
                      Thank you for your message! We will get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Business Hours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              💼 Normal Hours
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🆘 Emergency Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Available 24/7 for premium customers<br />
              Call: +1 (234) 567-891<br />
              Email: support@mycompany.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
