'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-800 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Dusun Nglarangan</h1>
              <p className="text-xs text-gray-500">Magelang, Jawa Tengah</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all font-medium">
              Beranda
            </Link>
            <Link href="/profile" className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all font-medium">
              Profile
            </Link>
            <Link href="/potensi" className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all font-medium">
              Potensi Desa
            </Link>
            <Link href="/peta" className="px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all font-medium">
              Peta Wilayah
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 space-y-1">
            <Link href="/" className="block py-2 px-4 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="/profile" className="block py-2 px-4 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition" onClick={() => setIsOpen(false)}>
              Profile
            </Link>
            <Link href="/potensi" className="block py-2 px-4 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition" onClick={() => setIsOpen(false)}>
              Potensi Desa
            </Link>
            <Link href="/peta" className="block py-2 px-4 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition" onClick={() => setIsOpen(false)}>
              Peta Wilayah
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
