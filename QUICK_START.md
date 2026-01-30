# 🚀 Quick Start Guide

Panduan cepat untuk menjalankan website dalam 5 menit!

## ⚡ Instalasi Cepat

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Setup environment (gunakan default dulu)
echo 'DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="development-secret-key"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=""' > .env

# 3. Setup database
npm run db:push
npm run db:seed

# 4. Jalankan!
npm run dev
```

## 🎉 Selesai!

**Website:** http://localhost:3000
**Admin Panel:** http://localhost:3000/admin

**Login Admin:**
- Email: `admin@desa.go.id`
- Password: `admin123`

## 📝 Catatan Penting

⚠️ **Google Maps akan error** karena API Key belum diisi. Untuk menampilkan peta:

1. Dapatkan Google Maps API Key (gratis): 
   - Buka: https://console.cloud.google.com/
   - Enable "Maps JavaScript API"
   - Buat API Key

2. Masukkan ke file `.env`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"
   ```

3. Restart server:
   ```bash
   npm run dev
   ```

## 🎯 Fitur yang Bisa Dicoba

1. **Lihat Website User** 
   - Beranda, Profile, Potensi, Peta

2. **Login ke Admin**
   - Dashboard dengan statistik
   - Kelola berita (sudah ada 3 sample news)
   - Kelola galeri

3. **Edit Konten**
   - Masuk ke admin/news
   - Edit atau hapus berita
   - Lihat perubahan di halaman beranda

## 📚 Dokumentasi Lengkap

- **README.md** - Dokumentasi lengkap fitur
- **INSTALLATION.md** - Panduan instalasi detail
- **prisma/schema.prisma** - Database structure

Selamat mencoba! 🎊
