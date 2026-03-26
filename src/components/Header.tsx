'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO + NAMA */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo PT Mumtaz Cyber Teknologi"
            width={80}
            height={80
            }
            className="object-contain rounded-full transition-transform hover:scale-110"
          />
          <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
            PT MUMTAZ CYBER TEKNOLOGI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Beranda
          </Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Layanan
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Tentang Kami
          </Link>
          <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Harga
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Kontak
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Beranda
            </Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Layanan
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Tentang Kami
            </Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Harga
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}