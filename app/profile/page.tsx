export default function ProfilePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Profile Dusun Nglarangan</h1>
          <p className="text-xl">Mengenal lebih dekat Dusun Nglarangan, Desa Banyusidi, Kecamatan Pakis</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Sejarah Dusun</h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dusun Nglarangan merupakan salah satu dari lima dusun di Desa Banyusidi, Kecamatan Pakis, 
                  Kabupaten Magelang, Jawa Tengah. Nama "Nglarangan" berasal dari kata "larangan" dalam 
                  bahasa Jawa yang memiliki makna historis terkait dengan wilayah yang pada masa lampau 
                  merupakan area terlarang atau suci.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Terletak di lereng Gunung Merbabu pada ketinggian ±799 mdpl, dusun ini telah berkembang 
                  dari masa ke masa menjadi kawasan pertanian dataran tinggi yang produktif. Udara sejuk 
                  dan tanah vulkanik yang subur menjadikan Dusun Nglarangan ideal untuk budidaya sayuran 
                  dataran tinggi. Masyarakat dusun dikenal dengan semangat gotong royong yang tinggi dan 
                  kehidupan beragama yang kuat.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sebagai bagian dari Desa Banyusidi, Dusun Nglarangan memiliki peran penting dalam 
                  perekonomian desa melalui sektor pertanian hortikultura. Warga dusun sebagian besar 
                  bermata pencaharian sebagai petani sayuran dengan komoditas unggulan seperti kubis, 
                  wortel, kentang, dan bawang merah.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Visi Dusun</h2>
              <div className="bg-green-50 border-l-4 border-green-700 p-6 mb-6">
                <p className="text-xl font-semibold text-gray-800 italic">
                  "Terwujudnya Dusun Nglarangan yang Maju, Mandiri, dan Sejahtera 
                  Berlandaskan Nilai-nilai Religius dan Gotong Royong"
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-green-700">Misi Dusun</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </span>
                  <span className="text-gray-700">
                    Meningkatkan kualitas sumber daya manusia warga dusun melalui pendidikan dan pelatihan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-700">
                    Mengembangkan ekonomi dusun berbasis pertanian hortikultura dan UMKM lokal
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </span>
                  <span className="text-gray-700">
                    Meningkatkan infrastruktur jalan dusun dan fasilitas umum
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    4
                  </span>
                  <span className="text-gray-700">
                    Melestarikan nilai-nilai budaya lokal dan kebersamaan masyarakat dusun
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    5
                  </span>
                  <span className="text-gray-700">
                    Mewujudkan tata kelola dusun yang transparan dan partisipatif
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Data Wilayah Dusun</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-700 pl-4">
                  <h4 className="font-bold text-gray-600 mb-1">Luas Wilayah</h4>
                  <p className="text-2xl font-bold text-green-700">±85 Hektar</p>
                  <p className="text-sm text-gray-500">Bagian dari Desa Banyusidi</p>
                </div>
                <div className="border-l-4 border-green-700 pl-4">
                  <h4 className="font-bold text-gray-600 mb-1">Jumlah Penduduk</h4>
                  <p className="text-2xl font-bold text-green-700">±650 Jiwa</p>
                  <p className="text-sm text-gray-500">Data estimasi dusun</p>
                </div>
                <div className="border-l-4 border-green-700 pl-4">
                  <h4 className="font-bold text-gray-600 mb-1">Jumlah KK</h4>
                  <p className="text-2xl font-bold text-green-700">±170 KK</p>
                  <p className="text-sm text-gray-500">Kepala Keluarga</p>
                </div>
                <div className="border-l-4 border-green-700 pl-4">
                  <h4 className="font-bold text-gray-600 mb-1">Ketinggian</h4>
                  <p className="text-2xl font-bold text-green-700">±799 mdpl</p>
                  <p className="text-sm text-gray-500">Lereng Gunung Merbabu</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-green-700">Batas Wilayah Dusun</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-24 font-semibold text-gray-700">Utara</div>
                    <div className="text-gray-600">: Dusun Krajan</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-semibold text-gray-700">Selatan</div>
                    <div className="text-gray-600">: Desa Petung</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-semibold text-gray-700">Timur</div>
                    <div className="text-gray-600">: Dusun Karangsari</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-semibold text-gray-700">Barat</div>
                    <div className="text-gray-600">: Desa Losari</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-blue-800">ℹ️ Informasi Administratif</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Desa:</span> Banyusidi</p>
                  <p><span className="font-semibold">Kecamatan:</span> Pakis</p>
                  <p><span className="font-semibold">Kabupaten:</span> Magelang</p>
                  <p><span className="font-semibold">Provinsi:</span> Jawa Tengah</p>
                  <p><span className="font-semibold">Kode Pos:</span> 56193</p>
                  <p><span className="font-semibold">Koordinat:</span> -7.4679°S, 110.3367°E</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Struktur Kepemimpinan Dusun</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Kepala Dusun (Kadus)</h3>
              <p className="text-xl text-green-700 font-semibold">Bapak [Nama Kadus]</p>
              <p className="text-gray-600 mt-2">Kepala Dusun Nglarangan</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold mb-3 text-blue-800">📋 Struktur Administratif</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">Dusun:</span>
                  <span>Nglarangan (1 dari 5 dusun di Desa Banyusidi)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">RT:</span>
                  <span>3-4 RT (Rukun Tetangga)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-[120px]">RW:</span>
                  <span>1 RW (Rukun Warga)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-2">Ketua RT 01</h4>
                <p className="text-center text-green-700 font-semibold">Bapak [Nama RT 01]</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-2">Ketua RT 02</h4>
                <p className="text-center text-green-700 font-semibold">Bapak [Nama RT 02]</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-2">Ketua RT 03</h4>
                <p className="text-center text-green-700 font-semibold">Bapak [Nama RT 03]</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-2">Ketua RW</h4>
                <p className="text-center text-green-700 font-semibold">Bapak [Nama RW]</p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-amber-800">ℹ️ Catatan</h3>
              <p className="text-sm text-gray-700">
                Kepala Dusun (Kadus) bertanggung jawab kepada Kepala Desa Banyusidi. 
                Struktur ini merupakan bagian dari sistem pemerintahan desa di Indonesia 
                dimana Dusun adalah unit administratif di bawah Desa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
