export default function PotensiPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Potensi Dusun Nglarangan</h1>
          <p className="text-xl">Mengenal potensi dan kekayaan Dusun Nglarangan, Lereng Gunung Merbabu</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-700">Potensi Unggulan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dusun Nglarangan yang terletak di lereng Gunung Merbabu memiliki berbagai potensi 
                pertanian dataran tinggi yang menjadi sumber penghidupan utama warga dusun
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-700">Pertanian Dataran Tinggi</h3>
                  <p className="text-gray-700 mb-4">
                    Sektor pertanian hortikultura merupakan mata pencaharian utama masyarakat Dusun Nglarangan. 
                    Dengan ketinggian ±799 mdpl di lereng Gunung Merbabu, dusun ini sangat cocok untuk 
                    budidaya sayuran dataran tinggi berkualitas yang dipasarkan hingga ke kota-kota besar.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                      Sayuran dataran tinggi (kubis, wortel, brokoli)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                      Kentang dan bawang merah
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                      Sayuran organik untuk pasar premium
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                      Tanaman hortikultural
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-700">UMKM dan Industri Kreatif</h3>
                  <p className="text-gray-700 mb-4">
                    Berkembangnya UMKM di Dusun Nglarangan menunjukkan kreativitas dan semangat 
                    kewirausahaan masyarakat. Berbagai produk unggulan telah dipasarkan hingga 
                    ke luar daerah.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      Kerajinan bambu dan anyaman
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      Olahan makanan tradisional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      Batik dan tekstil
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      Produk olahan hasil pertanian
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-700">Wisata Alam</h3>
                  <p className="text-gray-700 mb-4">
                    Dengan lokasi strategis di kaki Gunung Sumbing, Dusun Nglarangan memiliki 
                    potensi wisata alam yang sangat menarik dengan pemandangan yang indah dan 
                    udara yang sejuk.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-700 rounded-full mr-2"></span>
                      Trekking dan hiking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-700 rounded-full mr-2"></span>
                      Wisata sawah dan pertanian
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-700 rounded-full mr-2"></span>
                      Spot foto panorama pegunungan
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-700 rounded-full mr-2"></span>
                      Desa wisata edukatif
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-700">Budaya dan Tradisi</h3>
                  <p className="text-gray-700 mb-4">
                    Kekayaan budaya dan tradisi yang masih terjaga dengan baik menjadi aset 
                    berharga desa. Berbagai kegiatan budaya rutin dilaksanakan untuk melestarikan 
                    warisan leluhur.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-2"></span>
                      Upacara adat tradisional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-2"></span>
                      Kesenian wayang dan karawitan
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-2"></span>
                      Tari-tarian tradisional Jawa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-2"></span>
                      Festival budaya tahunan
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-700">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Peluang Investasi</h3>
              <p className="text-gray-700 mb-6">
                Dusun Nglarangan terbuka untuk berbagai peluang investasi yang dapat memberikan 
                manfaat bagi masyarakat dan mendukung pembangunan desa. Beberapa sektor yang 
                berpotensi untuk dikembangkan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2 text-green-700">Agribisnis Modern</h4>
                  <p className="text-gray-600 text-sm">
                    Pengembangan pertanian berkelanjutan dengan teknologi modern
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2 text-green-700">Wisata Desa</h4>
                  <p className="text-gray-600 text-sm">
                    Pembangunan fasilitas wisata dan homestay
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2 text-green-700">Industri Pengolahan</h4>
                  <p className="text-gray-600 text-sm">
                    Pengolahan hasil pertanian menjadi produk bernilai tambah
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2 text-green-700">Energi Terbarukan</h4>
                  <p className="text-gray-600 text-sm">
                    Pemanfaatan energi surya dan biogas untuk kemandirian energi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-700">Tertarik Bekerja Sama?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Kami terbuka untuk berbagai bentuk kerja sama yang dapat memberikan manfaat 
              bagi masyarakat Dusun Nglarangan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/profile"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Pelajari Lebih Lanjut
              </a>
              <a
                href="#"
                className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
