# Website Profile Dusun Nglarangan

Website resmi Dusun Nglarangan, Desa Banyusidi, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah dengan fitur CMS (Content Management System) dan integrasi Google Maps.

## 🎯 Fitur Utama

### Frontend (User)
- **Halaman Beranda**: Informasi umum, statistik dusun, dan berita terkini
- **Profile Dusun**: Sejarah, visi misi, data wilayah, dan struktur kepemimpinan
- **Potensi Dusun**: Informasi pertanian hortikultura dan UMKM
- **Peta Wilayah**: Google Maps interaktif dengan lokasi geografis

### Backend (Admin CMS) ✨
- **Dashboard Admin**: Overview dan quick access
- **Manajemen Berita**: CRUD berita dengan status draft/published
- **Manajemen Galeri**: Upload dan kelola foto kegiatan
- **Manajemen Konten**: Edit konten halaman website (Hero, Profile, Potensi)
- **Autentikasi**: Login/logout dengan JWT session

## 🛠️ Teknologi

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Database**: SQLite (Prisma ORM)
- **Authentication**: Custom JWT dengan jose
- **Maps**: Google Maps API (@react-google-maps/api)
- **Form Validation**: Zod + React Hook Form

## 📦 Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd desa-nglarangan
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Setup Environment Variables

Buat file `.env` di root folder:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_GOOGLE_MAPS_API_KEY_HERE"
```

**Cara mendapatkan Google Maps API Key:**
1. Kunjungi [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang ada
3. Enable Google Maps JavaScript API
4. Buat API Key di Credentials
5. Salin API Key ke file `.env`

### 4. Setup Database

```bash
# Push database schema
npm run db:push

# Seed database dengan data dummy dan admin user
npm run db:seed
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses `http://localhost:3000`

## 🔐 Login Admin

Setelah menjalankan `npm run db:seed`, gunakan credentials berikut untuk login:

```
URL: http://localhost:3000/admin
Email: admin@desa.go.id
Password: admin123
```

## 📁 Struktur Folder

```
desa-nglarangan/
├── app/
│   ├── api/
│   │   ├── auth/          # API endpoints autentikasi
│   │   │   ├── login/
│   │   │   ├── logout/
│   │   │   └── me/
│   │   ├── news/          # API endpoints berita
│   │   ├── gallery/       # API endpoints galeri
│   │   └── announcements/ # API endpoints pengumuman
│   ├── admin/
│   │   ├── page.tsx       # Login page
│   │   ├── dashboard/     # Admin dashboard
│   │   ├── news/          # Kelola berita
│   │   └── gallery/       # Kelola galeri
│   ├── page.tsx           # Halaman beranda
│   ├── profile/           # Halaman profile desa
│   ├── potensi/           # Halaman potensi desa
│   └── peta/              # Halaman peta wilayah
├── components/
│   ├── Navbar.tsx         # Navigasi header
│   ├── Footer.tsx         # Footer
│   └── GoogleMap.tsx      # Google Maps component
├── lib/
│   ├── prisma.ts          # Prisma client
│   └── auth.ts            # Auth utilities
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Database seeder
└── public/                # Asset statis
```

## 🗄️ Database Schema

### User
- id, email, name, password, role
- Relations: news, galleries

### News
- id, title, slug, content, excerpt, image
- published, publishedAt, authorId

### Gallery
- id, title, description, image, category
- published, uploadedById

### Announcement
- id, title, content, type
- published, startDate, endDate

### Setting
- id, key, value

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

**Quick Start:**
```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Import ke Vercel
# Buka vercel.com/new dan import repo

# 3. Set Environment Variables di Vercel
DATABASE_URL=<your-production-db>
NEXTAUTH_SECRET=<random-32-chars>
NEXTAUTH_URL=https://your-domain.vercel.app
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-key>

# 4. Deploy!
```

**Panduan Lengkap:**
- 📖 [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Deploy dalam 5 menit
- 📖 [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Panduan detail
- 📖 [CMS_GUIDE.md](./CMS_GUIDE.md) - Cara pakai CMS

### Database Production

Untuk production, gunakan:
- **Vercel Postgres** (Recommended)
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL)
- **Railway** (PostgreSQL)

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // atau "mysql"
  url      = env("DATABASE_URL")
}
```

### Build untuk Production

```bash
npm run build
npm start
```

### Environment Variables untuk Production

Pastikan mengupdate environment variables:

```env
DATABASE_URL="file:./production.db"
NEXTAUTH_SECRET="generate-random-secure-key-here"
NEXTAUTH_URL="https://your-domain.com"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-production-api-key"
```

**Generate secure secret:**
```bash
openssl rand -base64 32
```

## 🔧 Scripts

```bash
npm run dev        # Development server
npm run build      # Build production
npm start          # Start production server
npm run lint       # Run ESLint
npm run db:push    # Push database schema
npm run db:seed    # Seed database
```

## 📝 Pengembangan Lebih Lanjut

Fitur yang bisa ditambahkan:

1. **Upload Gambar**: Integrasi dengan Cloudinary/S3 untuk upload gambar
2. **Rich Text Editor**: TinyMCE/CKEditor untuk editor berita
3. **Search & Filter**: Fitur pencarian berita dan filter
4. **Pagination**: Pagination untuk list berita
5. **User Management**: Kelola multiple admin users
6. **Statistics Dashboard**: Grafik statistik pengunjung
7. **Email Notifications**: Notifikasi email untuk pengumuman
8. **Multi-language**: Support bahasa Indonesia dan Jawa

## 🐛 Troubleshooting

### Error: Module not found

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Google Maps tidak muncul

1. Pastikan API Key sudah benar di `.env`
2. Enable Google Maps JavaScript API di Google Cloud Console
3. Pastikan billing account aktif (free tier tersedia)

### Database error

```bash
rm -rf prisma/dev.db
npm run db:push
npm run db:seed
```

## 📄 Lisensi

© 2026 Desa Banyusidi. All rights reserved.

## 👨‍💻 Developer

Developed for Desa Banyusidi, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah.
