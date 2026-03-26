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
          Hubungi Kami
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Ada pertanyaan? Kami ingin mendengar dari Anda. Kirimkan pesan kepada kami dan kami akan merespons sesegera mungkin.
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
                    089603528824
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  📍 Alamat
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  96123 JL Brigjend Piola Isa<br />
                  Dulomo Selatan, Kota Gorontalo<br />
                  Indonesia
                </p>
                <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <iframe
                    title="Lokasi Perusahaan"
                    width="100%"
                    height="400"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.481373141124!2d123.08005417659243!3d0.5717758404200858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327ed35525172179%3A0xa5da5bfdc46d353e!2sDulomo%20Sel.%2C%20Kec.%20Kota%20Utara%2C%20Kota%20Gorontalo%2C%20Gorontalo!5e0!3m2!1sid!2sid!4v1774496910006!5m2!1sid!2sid"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nama Anda"
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
                      placeholder="email@anda.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Perusahaan Anda"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pesan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                  >
                    Kirim Pesan
                  </button>

                  {submitted && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg">
                      Terima kasih atas pesan Anda! Kami akan menghubungi Anda segera.
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
          Jam Kerja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              💼 Jam Normal
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Senin - Jumat: 09:00 - 18:00<br />
              Sabtu: 10:00 - 16:00<br />
              Minggu: Tutup
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🆘 Dukungan Darurat
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tersedia 24/7 untuk pelanggan premium<br />
              Panggilan: 089603528824<br />
              Email: Fauzanhamdata671@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
