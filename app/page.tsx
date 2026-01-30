import { AnimatedSection } from '@/components/animations/AnimatedSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Kabut Pagi di Desa Lereng */}
      <section className="relative min-h-[85vh] bg-gray-900 text-white overflow-hidden">
        {/* Background Image - Placeholder (ganti via CMS nanti) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Kabut pagi di desa lereng gunung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32 flex items-center min-h-[85vh]">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              🏔️ Dusun Nglarangan, Desa Banyusidi, Pakis, Magelang
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Di sini, waktu tidak dikejar.<br/>
              <span className="text-emerald-300">Ia berjalan berdampingan.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed font-light max-w-2xl">
              Dusun lereng sejuk di kaki Gunung Merbabu. Rasakan ketenangan kabut pagi,
              kehangatan warga, dan kesederhanaan yang utuh di Dusun Nglarangan.
            </p>

            {/* Info Cepat */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>18 km dari Kota Magelang</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span>Udara sejuk lereng Merbabu</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/place/Banyusidi,+Kec.+Pakis,+Kabupaten+Magelang,+Jawa+Tengah+56193/@-7.4679,110.3367,14z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Buka Google Maps
              </a>
              <a
                href="/potensi"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                Lihat Potensi Desa
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Persiapan Berkunjung - "Honest Tourism" */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                ℹ️ Info Penting
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Persiapan Berkunjung</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dusun Nglarangan adalah dusun apa adanya. Bukan resort, bukan paket wisata.
                Kami menyambut Anda dengan kehangatan dan kesederhanaan warga dusun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Akses Jalan */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Akses Jalan</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jalan berkelok menanjak, aman untuk mobil dan motor.
                  Perjalanan 45 menit dari Magelang.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Kondisi jalan aspal baik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Banyak tikungan tajam</span>
                  </li>
                </ul>
              </div>

              {/* Apa yang Dibawa */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Apa yang Dibawa</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Udara dingin sepanjang tahun. Siapkan perlengkapan berikut:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Jaket/sweater tebal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Sepatu nyaman untuk jalan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Uang cash (belum banyak ATM)</span>
                  </li>
                </ul>
              </div>

              {/* Etika Kunjungan */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Etika Kunjungan</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hormati privasi warga dan jaga kebersihan desa:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Minta izin sebelum foto warga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Jaga kebersihan, bawa pulang sampah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Parkir di tempat yang tidak mengganggu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Informasi Desa</h2>
            <p className="text-gray-600 text-lg">Data statistik Dusun Nglarangan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-emerald-200 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Jumlah Penduduk</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">3,245</p>
              <p className="text-gray-500">Jiwa</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Jumlah KK</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">856</p>
              <p className="text-gray-500">Kepala Keluarga</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-orange-200 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Luas Wilayah</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">425</p>
              <p className="text-gray-500">Hektar</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Momen Nglarangan - Instagram-Worthy Spots */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              📸 Spot Foto Terbaik
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Momen Nglarangan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Abadikan keindahan desa lereng. Setiap sudut punya cerita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Spot 1 - Kabut Pagi */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                  alt="Kabut pagi di sawah teras"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Kabut Pagi Sawah Teras</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Dusun Krajan</span>
                </div>
                <p className="text-sm text-gray-200">⏰ Best time: 05:30-07:00</p>
              </div>
            </div>

            {/* Spot 2 - Sunset Bukit */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=600&q=80"
                  alt="Sunset dari bukit"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Sunset dari Puncak</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Bukit Suroloyo</span>
                </div>
                <p className="text-sm text-gray-200">⏰ Best time: 17:00-18:00</p>
              </div>
            </div>

            {/* Spot 3 - Jalan Kebun */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
                  alt="Jalan setapak di kebun"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Jalan Setapak Kebun</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Jalur Sawah Teras</span>
                </div>
                <p className="text-sm text-gray-200">⏰ Best time: 09:00-11:00</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              📍 Tap lokasi untuk buka di Google Maps • Jangan lupa tag @desanglarangan!
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* UMKM Preview */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              🛍️ Dukung Lokal
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UMKM Dusun Nglarangan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kenali warga dan produk lokal mereka. Setiap pembelian adalah dukungan langsung untuk ekonomi desa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {/* UMKM 1 - Homestay */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square relative bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
                  alt="Homestay Pak Hadi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Homestay
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pak Hadi</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Homestay dengan pemandangan lereng gunung. 3 kamar bersih, kasur nyaman, kamar mandi dalam.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* UMKM 2 - Sayuran */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square relative bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80"
                  alt="Sayuran Ibu Siti"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Hasil Kebun
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ibu Siti</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Sayuran segar dari kebun lereng. Kubis, wortel, kentang, daun bawang. Panen pagi, tanpa pestisida.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/628234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* UMKM 3 - Warung */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square relative bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&q=80"
                  alt="Warung Kopi Pak Budi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Kuliner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pak Budi</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Warung kopi dengan view pegunungan. Kopi lokal, nasi goreng, mie goreng, dan cemilan tradisional.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/628345678901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/umkm"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Lihat Semua UMKM
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Desa</h2>
            <p className="text-gray-600 text-lg">Berbagai layanan administrasi untuk warga</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Surat Keterangan</h3>
              <p className="text-gray-600 leading-relaxed">Pengurusan surat keterangan domisili, usaha, dan lainnya</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Administrasi KTP</h3>
              <p className="text-gray-600 leading-relaxed">Layanan pengurusan KTP dan Kartu Keluarga</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Izin Usaha</h3>
              <p className="text-gray-600 leading-relaxed">Pengurusan izin usaha mikro dan kecil</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Pengajuan Bantuan</h3>
              <p className="text-gray-600 leading-relaxed">Informasi dan pengajuan program bantuan sosial</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              ✨ Visi Desa
            </div>
            <h2 className="text-4xl font-bold mb-8">Visi Dusun Nglarangan</h2>
            <p className="text-2xl leading-relaxed text-emerald-50">
              "Terwujudnya Dusun Nglarangan yang Maju, Mandiri, dan Sejahtera 
              Berlandaskan Nilai-nilai Religius dan Gotong Royong"
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Berita Terkini</h2>
            <p className="text-gray-600 text-lg">Informasi dan kegiatan terbaru dari desa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <article className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-emerald-400 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  15 Januari 2026
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition">
                  Musyawarah Perencanaan Pembangunan Desa 2026
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pemerintah desa mengadakan musyawarah untuk merencanakan pembangunan tahun 2026...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
                  Baca Selengkapnya 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  12 Januari 2026
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition">
                  Penyaluran Bantuan Langsung Tunai untuk Warga
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Program bantuan langsung tunai telah disalurkan kepada 200 KK penerima manfaat...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Baca Selengkapnya 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-orange-400 to-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  8 Januari 2026
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition">
                  Pelatihan UMKM Pengolahan Hasil Pertanian
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dinas Pertanian mengadakan pelatihan pengolahan hasil pertanian untuk meningkatkan nilai jual...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                  Baca Selengkapnya 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
