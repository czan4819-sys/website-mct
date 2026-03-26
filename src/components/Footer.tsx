"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showterms, setshowterms] =useState(false);
  const [showCookie, setShowCookie] = useState(false);

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
                <a href="mailto:ptmumtazcyberteknologi@gmail.com" className="hover:text-white transition">
                  Dukungan Email
                </a>
              </li>
              <li>
                <a href="tel:089603528824" className="hover:text-white transition">
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
                  <div className="mt-2 text-gray-300 text-xs bg-gray-800 p-3 rounded-lg
                  max-h-40 overflow-y-auto
                  custom-scrollbar">
                    <strong>1. Kebijakan Privasi (Privacy Policy)</strong><br />
                    Terakhir Diperbarui: 26 Maret 2026<br />
                    Selamat datang di PT Mumtaz Cyber Teknologi. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi pelanggan kami sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.<br />
                    <strong>2. Informasi yang Kami Kumpulkan</strong><br />
                    Kami mengumpulkan informasi identitas pribadi (seperti nama, alamat instalasi, nomor KTP/NIK, email, dan nomor telepon) serta informasi teknis terkait penggunaan layanan internet Anda (seperti alamat IP dan penggunaan bandwidth) untuk keperluan operasional.<br />
                    <strong>3. keamanan data</strong><br />
                    kami menerapkan prosedur keamnan fisik dan elektronik untuk melindungi data anda dari akses yang tidak sah<br />
                    <strong>4. berbagi data dengan pihak ketiga kami tidak menjual data anda</strong><br />
                    kami hanya membagikan data anda kepada mitra pihak ketiga seperti penyedia layanan pembayaran dan penyedia layanan cloud untuk keperluan operasional.
                
                  </div>
                )}
     
              </li>
              
            {/*terms*/}
            <li>

          <button
          onClick={() => setshowterms(!showterms)}
            className="hover:text-white transition text-left w-full"
            >
                  Syarat Layanan {showterms ? '▼' : '▶'}
                </button>
               
                {showterms && (
                  <div className="mt-2 text-gray-300 text-xs bg-gray-800 p-3 rounded-lg max-h-40 overflow-y-auto custom-scrollbar">
                    
                    <strong>2. Syarat layanan (terms)</strong><br />
                    terakhir diperbarui: 26 maret 2026<br />
                    persetujuan ini mengatur hubungan antara PT mutaz cyber teknologi penyedia layanandan anda sebagai pelanggan.<br />
                    <strong>1. layanan internet</strong><br />
                    penyedia layanan setuju untuk memberikan akses internet sesuai dengan paket yang dipilih. dan pelanggan dapat memahami bahwa kecepatan internet dapat dipengaruhi oleh faktor teknis, cuaca, dan lokasi perangkat.<br />
                    <strong>2. kewajiban pelanggan</strong><br />
                    pelanggan dilarang menggunakan layanan untuk kegiatan ilegal (judi online, pornografi, peyebran konten sara, atau serangan siber). pelnggan bertanggung jawab atas keamanan perangkat dan jaringan lokal di lokasi pelanggan. dan dilarang menjual kembali bandwidth atau layanan tanpa izin tertulis dari PT Mumtaz Cyeber Teknologi.<br />
                    <strong>3. Pembayaran dan tagihan</strong><br />
                    tagihan harus dibayar tepat waktu dan sesuai waktu yang ditentukan. keterlambtan pembayaran dapat menyebabkan pemutusan layanan sementara oleh sistem. pelanggan harus membayarkan tagihan langsung kepada biller yang ditunjuk oleh peyedia layanan, jika terjadi masalah pembayaran oleh pelanggan kepada pihak lain yang mengatasnamakan penyedia layanan maka resiko sepenuhnya ditanggung oleh pelanggan.<br />
                   <strong>4. batasan tanggungn jawab</strong><br />
                   PT Mumtaz Cyber Teknologi tidak bertanggung jawab atas kerugian ekonomi atau data yang timbul akibat gangguan jaringan yang disebabkan oleh kejadian diluar kendali kami seperti bencana alam atau putusnya jalur kabel optik.
                   </div>
                )}
               </li> 
              
              
                <button
               onClick={() => setShowCookie(!showCookie)}
             className="hover:text-white transition text-left w-full"
          >
             Kebijakan Cookie {showCookie ? '▼' : '▶'}
           </button>

       {showCookie && (
            <div className="mt-2 text-gray-300 text-xs bg-gray-800 p-3 rounded-lg max-h-40 overflow-y-auto custom-scrollbar">
                 <strong>3. Kebijakan cookie(cookie policy)</strong><br />
                  Terakhir Diperbarui: 26 Maret 2026<br />
                  Website PT Mumtaz Cyber Teknologi menggunakan cookie untuk meningkatkan pengalaman navigasi Anda.
                 <strong>1. apa itu cookie?</strong><br />
                  Cookie adalah file teks kecil yang disimpan di perangkat Anda saat mengunjungi website kami. Ini membantu kami mengenali perangkat Anda pada kunjungan berikutnya.<br />
                 <strong>2. Bagaimana Kami Menggunakan Cookie?</strong><br />
                Cookie Esensial: Dibutuhkan agar fitur dasar website (seperti portal login pelanggan) dapat berfungsi dengan benar.
                 Cookie Fungsional: Mengingat preferensi Anda, seperti pilihan bahasa atau detail login otomatis.
                Cookie Analitik: Membantu kami memantau performa website dan memperbaiki layanan berdasarkan cara pengunjung menggunakan situs kami.<br />
                <strong>3. Mengelola Cookie</strong><br />
                 Anda dapat mengatur atau memblokir cookie melalui pengaturan browser Anda. Namun, perlu diketahui bahwa mematikan cookie tertentu dapat menyebabkan beberapa fitur pada website kami tidak dapat berjalan dengan maksimal.         
          </div>
       )}

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
