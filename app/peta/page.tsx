'use client';

export default function PetaPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Peta Wilayah Desa Banyusidi</h1>
          <p className="text-xl">Lokasi dan batas wilayah Desa Banyusidi, Kecamatan Pakis, Kabupaten Magelang</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Lokasi Geografis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Koordinat</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-24 font-semibold text-gray-700">Latitude</div>
                      <div className="text-gray-600">: -7.4679° S</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 font-semibold text-gray-700">Longitude</div>
                      <div className="text-gray-600">: 110.3367° E</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 font-semibold text-gray-700">Ketinggian</div>
                      <div className="text-gray-600">: ±799 mdpl</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 mt-8">Alamat Lengkap</h3>
                  <address className="not-italic text-gray-700">
                    <p className="mb-2">Desa Banyusidi</p>
                    <p className="mb-2">Kecamatan Pakis</p>
                    <p className="mb-2">Kabupaten Magelang</p>
                    <p className="mb-2">Provinsi Jawa Tengah</p>
                    <p className="mb-2">Kode Pos: 56193</p>
                    <p className="mb-2 text-sm text-gray-500">Kode Kemendagri: 33.08.16.2002</p>
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Batas Wilayah</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-700 pl-4">
                      <h4 className="font-semibold text-gray-700">Sebelah Utara</h4>
                      <p className="text-gray-600">Desa Pakis</p>
                    </div>
                    <div className="border-l-4 border-blue-700 pl-4">
                      <h4 className="font-semibold text-gray-700">Sebelah Selatan</h4>
                      <p className="text-gray-600">Desa Petung</p>
                    </div>
                    <div className="border-l-4 border-orange-700 pl-4">
                      <h4 className="font-semibold text-gray-700">Sebelah Timur</h4>
                      <p className="text-gray-600">Desa Daleman Kidul</p>
                    </div>
                    <div className="border-l-4 border-purple-700 pl-4">
                      <h4 className="font-semibold text-gray-700">Sebelah Barat</h4>
                      <p className="text-gray-600">Desa Losari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Peta Interaktif</h2>
              <div className="mb-4 rounded-lg overflow-hidden">
                {/* Google Maps Embed - Desa Banyusidi, Pakis, Magelang */}
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.5!2d110.3367!3d-7.4679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f5e8e8e8e8d%3A0x5e5e5e5e5e5e5e5e!2sBanyusidi%2C%20Kec.%20Pakis%2C%20Kabupaten%20Magelang%2C%20Jawa%20Tengah%2056193!5e0!3m2!1sid!2sid!4v1738260000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Peta Desa Banyusidi"
                  ></iframe>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-emerald-800 font-medium mb-1">
                    💡 Tip: Klik "View larger map" untuk navigasi langsung via Google Maps
                  </p>
                  <p className="text-xs text-emerald-700">
                    Koordinat: -7.4679°S, 110.3367°E • Ketinggian: ±799 mdpl • Lereng Gunung Merbabu
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Pembagian Wilayah</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-700 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      5
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Dusun</h3>
                  <p className="text-gray-600 text-center">Pembagian wilayah administratif</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      18
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">RT</h3>
                  <p className="text-gray-600 text-center">Rukun Tetangga</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-700 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      5
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">RW</h3>
                  <p className="text-gray-600 text-center">Rukun Warga</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-green-700">Daftar Dusun</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Dusun Nglarangan</h4>
                      <p className="text-sm text-gray-600">Dusun utama wilayah desa</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Dusun Krajan</h4>
                      <p className="text-sm text-gray-600">Pusat pemerintahan desa</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Dusun Karangsari</h4>
                      <p className="text-sm text-gray-600">Wilayah pertanian</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Dusun Sumberejo</h4>
                      <p className="text-sm text-gray-600">Wilayah sumber air</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Dusun Kebonrejo</h4>
                      <p className="text-sm text-gray-600">Wilayah perkebunan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Akses dan Transportasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Jarak Tempuh</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Ke Pusat Kecamatan Pakis</span>
                    <span className="font-semibold">5 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ke Kota Magelang</span>
                    <span className="font-semibold">18 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ke Kota Semarang</span>
                    <span className="font-semibold">55 km</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Transportasi Umum</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                    Bus antar kota
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                    Angkutan pedesaan
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                    Ojek online
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                    Kendaraan pribadi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
