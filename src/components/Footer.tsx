"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">PT MUMTAZ CYBER TEKNOLOGI</h3>
            <p className="text-gray-400 text-sm">
              Membangun solusi inovatif untuk bisnis modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Dukungan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <a href="mailto:support@mycompany.com" className="hover:text-white transition">
                  Dukungan Email
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Hukum</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
                  className="hover:text-white transition text-left w-full"
                >
                  Kebijakan Privasi {showPrivacyPolicy ? '▼' : '▶'}
                </button>
                {showPrivacyPolicy && (
                  <div className="mt-2 text-gray-300 text-xs bg-gray-800 p-3 rounded">
                    <strong>1. Kebijakan Privasi (Privacy Policy)</strong><br />
                    Terakhir Diperbarui: 26 Maret 2026<br />
                    Selamat datang di PT Mumtaz Cyber Teknologi. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi pelanggan kami sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.<br />
                    <strong>1. Informasi yang Kami Kumpulkan</strong><br />
                    Kami mengumpulkan informasi identitas pribadi (seperti nama, alamat instalasi, nomor KTP/NIK, email, dan nomor telepon) serta informasi teknis terkait penggunaan layanan internet Anda (seperti alamat IP dan penggunaan bandwidth) untuk keperluan operasional.
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Syarat Layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kebijakan Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} PT MUMTAZ CYBER TEKNOLOGI. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
