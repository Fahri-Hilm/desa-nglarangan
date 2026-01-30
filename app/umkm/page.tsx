export default function UMKMPage() {
  const umkmData = [
    {
      id: 1,
      name: "Pak Hadi",
      category: "Homestay",
      business: "Homestay Lereng Sumbing",
      description: "Homestay dengan pemandangan lereng gunung. 3 kamar bersih dengan kasur nyaman dan kamar mandi dalam. Cocok untuk keluarga atau rombongan kecil.",
      products: ["Kamar Standard (2 orang)", "Kamar Family (4 orang)", "Breakfast opsional"],
      location: "Dusun Krajan RT 02 RW 01",
      whatsapp: "628123456789",
      instagram: "@homestay.nglarangan",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      price: "Rp 150.000/malam",
      badge: "Homestay",
      badgeColor: "bg-emerald-600"
    },
    {
      id: 2,
      name: "Ibu Siti Aminah",
      category: "Hasil Kebun",
      business: "Sayuran Segar Lereng",
      description: "Menjual sayuran segar hasil kebun sendiri di lereng gunung. Sayuran ditanam tanpa pestisida, dipanen setiap pagi untuk kesegaran maksimal.",
      products: ["Kubis", "Wortel", "Kentang", "Daun bawang", "Tomat"],
      location: "Dusun Krajan RT 02 RW 01",
      whatsapp: "628234567890",
      instagram: "",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
      price: "Mulai Rp 5.000/kg",
      badge: "Hasil Kebun",
      badgeColor: "bg-green-600"
    },
    {
      id: 3,
      name: "Pak Budi Santoso",
      category: "Kuliner",
      business: "Warung Kopi Puncak",
      description: "Warung kopi dengan view pegunungan. Menyajikan kopi lokal pilihan, makanan rumahan, dan cemilan tradisional. Tempat favorit untuk ngobrol santai.",
      products: ["Kopi Sumbing Hitam", "Kopi Susu", "Nasi Goreng", "Mie Goreng", "Gorengan"],
      location: "Dusun Sawit RT 01 RW 02",
      whatsapp: "628345678901",
      instagram: "@warungkopi.puncak",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80",
      price: "Mulai Rp 8.000",
      badge: "Kuliner",
      badgeColor: "bg-orange-600"
    },
    {
      id: 4,
      name: "Ibu Wulan",
      category: "Kuliner",
      business: "Keripik Singkong Lereng",
      description: "Produksi keripik singkong dengan berbagai rasa. Dibuat dari singkong lokal dengan resep turun temurun. Renyah dan gurih, cocok untuk oleh-oleh.",
      products: ["Keripik Original", "Keripik Pedas", "Keripik Balado", "Keripik Manis"],
      location: "Dusun Sawit RT 03 RW 02",
      whatsapp: "628456789012",
      instagram: "@keripik.lereng",
      image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=600&q=80",
      price: "Rp 15.000/pack",
      badge: "Oleh-oleh",
      badgeColor: "bg-purple-600"
    },
    {
      id: 5,
      name: "Pak Joko",
      category: "Jasa",
      business: "Tour Guide Nglarangan",
      description: "Pemandu wisata lokal yang berpengalaman. Siap menemani Anda menjelajahi desa, sawah teras, dan spot-spot tersembunyi. Bisa bahasa Jawa dan Indonesia.",
      products: ["City Tour Desa", "Trekking Sawah Teras", "Sunrise Tour", "Customized Tour"],
      location: "Dusun Krajan RT 01 RW 01",
      whatsapp: "628567890123",
      instagram: "@guide.nglarangan",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
      price: "Rp 100.000/trip",
      badge: "Tour Guide",
      badgeColor: "bg-blue-600"
    },
    {
      id: 6,
      name: "Ibu Nur",
      category: "Homestay",
      business: "Rumah Tamu Kabut Pagi",
      description: "Penginapan sederhana dengan suasana tenang. 2 kamar dengan pemandangan sawah. Sarapan tradisional termasuk. Cocok untuk solo traveler atau pasangan.",
      products: ["Kamar Single", "Kamar Double", "Sarapan tradisional included"],
      location: "Dusun Krajan RT 03 RW 01",
      whatsapp: "628678901234",
      instagram: "",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      price: "Rp 100.000/malam",
      badge: "Homestay",
      badgeColor: "bg-emerald-600"
    },
    {
      id: 7,
      name: "Pak Bambang",
      category: "Hasil Kebun",
      business: "Madu Hutan Lereng",
      description: "Madu asli dari hutan lereng Sumbing. Dipanen langsung dari sarang lebah liar. Kualitas premium, kaya nutrisi, rasa manis alami.",
      products: ["Madu Hutan Murni 250ml", "Madu Hutan 500ml", "Madu Hutan 1L"],
      location: "Dusun Sawit RT 02 RW 02",
      whatsapp: "628789012345",
      instagram: "@madu.lereng",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784422?w=600&q=80",
      price: "Rp 75.000/250ml",
      badge: "Hasil Hutan",
      badgeColor: "bg-yellow-600"
    },
    {
      id: 8,
      name: "Ibu Sri",
      category: "Kuliner",
      business: "Warung Makan Bu Sri",
      description: "Warung makan dengan menu rumahan khas Jawa. Porsi besar, rasa enak, harga ramah kantong. Buka setiap hari jam makan siang dan malam.",
      products: ["Ayam Goreng", "Sayur Asem", "Tempe Bacem", "Sambel Terasi", "Nasi Putih"],
      location: "Dusun Krajan RT 01 RW 01",
      whatsapp: "628890123456",
      instagram: "",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      price: "Mulai Rp 12.000",
      badge: "Kuliner",
      badgeColor: "bg-orange-600"
    }
  ];

  const categories = [
    { name: "Semua", count: umkmData.length },
    { name: "Homestay", count: umkmData.filter(u => u.category === "Homestay").length },
    { name: "Kuliner", count: umkmData.filter(u => u.category === "Kuliner").length },
    { name: "Hasil Kebun", count: umkmData.filter(u => u.category === "Hasil Kebun").length },
    { name: "Jasa", count: umkmData.filter(u => u.category === "Jasa").length }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              🛍️ Dukung Ekonomi Lokal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">UMKM Dusun Nglarangan</h1>
            <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Kenali warga dan produk lokal mereka. Setiap pembelian adalah dukungan langsung untuk ekonomi desa.
              Hubungi langsung via WhatsApp!
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 font-medium transition-all border border-gray-200 hover:border-emerald-300"
              >
                {cat.name} <span className="text-sm opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* UMKM Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {umkmData.map((umkm) => (
              <div key={umkm.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-square relative bg-gray-200">
                  <img
                    src={umkm.image}
                    alt={umkm.business}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${umkm.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {umkm.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{umkm.name}</h3>
                      <p className="text-emerald-600 font-medium text-sm">{umkm.business}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {umkm.description}
                  </p>

                  {/* Products */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">PRODUK/LAYANAN:</p>
                    <div className="flex flex-wrap gap-2">
                      {umkm.products.slice(0, 3).map((product, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                      {umkm.products.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          +{umkm.products.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location & Price */}
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span>{umkm.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{umkm.price}</span>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${umkm.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      WhatsApp
                    </a>
                    {umkm.instagram && (
                      <a
                        href={`https://instagram.com/${umkm.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Cara Berbelanja</h3>
              <div className="text-left space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">1.</span>
                  <span>Klik tombol <strong>WhatsApp</strong> pada UMKM yang Anda minati</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">2.</span>
                  <span>Chat langsung dengan pemilik usaha untuk tanya produk/harga</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">3.</span>
                  <span>Atur detail pemesanan (jumlah, pengambilan/pengiriman)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">4.</span>
                  <span>Transfer langsung ke pemilik, atau bayar saat COD</span>
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                💚 Semua transaksi langsung dengan warga. Tidak ada fee tambahan dari website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
