# Panduan Instalasi Website Desa Nglarangan

Panduan lengkap untuk menjalankan website dari awal.

## 📋 Prasyarat

Pastikan sudah terinstal:
- Node.js (v20 atau lebih baru)
- npm atau yarn
- Git

## 🚀 Langkah Instalasi

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Catatan:** Flag `--legacy-peer-deps` diperlukan karena kompatibilitas Next.js 16 dengan beberapa packages.

### 2. Setup Environment Variables

Buat file `.env` di root folder:

```bash
cat > .env << 'ENVFILE'
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_GOOGLE_MAPS_API_KEY_HERE"
ENVFILE
```

### 3. Setup Google Maps API Key

**Cara mendapatkan Google Maps API Key (GRATIS):**

1. **Buka Google Cloud Console**
   - Kunjungi: https://console.cloud.google.com/

2. **Buat Project Baru**
   - Klik "Select a project" → "New Project"
   - Nama project: "Desa Nglarangan"
   - Klik "Create"

3. **Enable Google Maps JavaScript API**
   - Di menu sebelah kiri, pilih "APIs & Services" → "Library"
   - Cari "Maps JavaScript API"
   - Klik "ENABLE"

4. **Buat API Key**
   - Klik "APIs & Services" → "Credentials"
   - Klik "CREATE CREDENTIALS" → "API Key"
   - Copy API Key yang muncul

5. **Masukkan ke .env**
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSy..."
   ```

**Optional: Restrict API Key (Recommended)**
- Klik "Edit API Key"
- Application restrictions: HTTP referrers
- Add: `localhost:3000/*`, `yourdomain.com/*`
- API restrictions: Restrict key → Maps JavaScript API
- Save

### 4. Setup Database

```bash
# Push schema ke database (membuat tabel)
npm run db:push

# Seed database dengan data dummy dan admin user
npm run db:seed
```

Output yang diharapkan:
```
✅ Admin user created: admin@desa.go.id
✅ Sample news created: Musyawarah Perencanaan Pembangunan Desa 2026 ...
✅ Sample gallery created: Kegiatan Gotong Royong Desa
✅ Sample announcement created: Pengumuman Jadwal Posyandu Bulan Ini
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka browser: http://localhost:3000

## 🔐 Login ke Admin Panel

1. Buka: http://localhost:3000/admin
2. Login dengan:
   - Email: `admin@desa.go.id`
   - Password: `admin123`

## ✅ Verifikasi Instalasi

### Cek Website User:
- ✅ Halaman Beranda: http://localhost:3000
- ✅ Halaman Profile: http://localhost:3000/profile
- ✅ Halaman Potensi: http://localhost:3000/potensi
- ✅ Halaman Peta: http://localhost:3000/peta (cek Google Maps muncul)

### Cek Admin Panel:
- ✅ Login Page: http://localhost:3000/admin
- ✅ Dashboard: http://localhost:3000/admin/dashboard
- ✅ Kelola Berita: http://localhost:3000/admin/news
- ✅ Kelola Galeri: http://localhost:3000/admin/gallery

## 🐛 Troubleshooting

### Error: Cannot find module

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Google Maps tidak muncul

**Cek 1: API Key sudah benar?**
```bash
cat .env | grep GOOGLE_MAPS
```

**Cek 2: API sudah di-enable?**
- Buka Google Cloud Console
- Pastikan "Maps JavaScript API" sudah ENABLED

**Cek 3: Billing account (untuk quota gratis)**
- Google Maps memerlukan billing account aktif
- Tapi tetap gratis untuk penggunaan normal (28,000 map loads/bulan)
- Setup billing: https://console.cloud.google.com/billing

### Database error saat db:push

```bash
# Hapus database lama dan reset
rm -rf prisma/dev.db
npm run db:push
npm run db:seed
```

### Port 3000 sudah digunakan

```bash
# Jalankan di port lain
PORT=3001 npm run dev
```

### Error saat npm install

**Jika ada error peer dependencies:**
```bash
npm install --legacy-peer-deps --force
```

**Jika node_modules corrupt:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install --legacy-peer-deps
```

## 🎯 Next Steps

Setelah instalasi berhasil:

1. **Ganti Password Admin**
   - Login ke admin panel
   - Ganti password default

2. **Update Konten**
   - Edit berita di admin panel
   - Upload foto ke galeri
   - Update informasi desa sesuai kebutuhan

3. **Kustomisasi**
   - Edit warna di `tailwind.config.js`
   - Update logo dan gambar
   - Sesuaikan konten halaman

4. **Production Deployment**
   - Lihat `README.md` untuk panduan deployment

## 📞 Support

Jika mengalami kendala:
1. Cek file `README.md` untuk dokumentasi lengkap
2. Cek console browser untuk error messages
3. Cek terminal untuk error logs

## ⚡ Quick Command Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build production
npm start                # Start production server

# Database
npm run db:push          # Push schema
npm run db:seed          # Seed data

# Maintenance
npm run lint             # Check code quality
```

Happy coding! 🚀
