# Panduan Deploy ke Vercel

## 📋 Persiapan Sebelum Deploy

### 1. Install Vercel CLI (Opsional)
```bash
npm install -g vercel
```

### 2. Pastikan Database Production
Untuk production, gunakan database yang lebih robust:
- **Vercel Postgres** (Recommended)
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL)
- **Railway** (PostgreSQL)

## 🚀 Cara Deploy ke Vercel

### Opsi 1: Deploy via Vercel Dashboard (Recommended)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository GitHub Anda
   - Vercel akan auto-detect Next.js

3. **Set Environment Variables**
   Di Vercel Dashboard → Settings → Environment Variables, tambahkan:
   ```
   DATABASE_URL=<your-production-database-url>
   NEXTAUTH_SECRET=<generate-random-string>
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-google-maps-key>
   ```

4. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai

### Opsi 2: Deploy via CLI

```bash
# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

## 🗄️ Setup Database Production

### Menggunakan Vercel Postgres (Recommended)

1. Di Vercel Dashboard → Storage → Create Database
2. Pilih "Postgres"
3. Copy connection string
4. Update `DATABASE_URL` di Environment Variables
5. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // ganti dari sqlite
     url      = env("DATABASE_URL")
   }
   ```

### Menggunakan PlanetScale (MySQL)

1. Buat database di [planetscale.com](https://planetscale.com)
2. Copy connection string
3. Update schema:
   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
     relationMode = "prisma"
   }
   ```

## 📝 Checklist Sebelum Deploy

- [ ] Push code ke GitHub
- [ ] Setup database production
- [ ] Set environment variables di Vercel
- [ ] Generate NEXTAUTH_SECRET yang aman
- [ ] Test build locally: `npm run build`
- [ ] Pastikan `.env` tidak ter-commit (ada di .gitignore)

## 🔐 Generate Secure Secret

```bash
# Generate random secret
openssl rand -base64 32
```

Copy hasilnya ke `NEXTAUTH_SECRET`

## 🎯 Setelah Deploy

1. **Seed Database Production**
   ```bash
   # Via Vercel CLI
   vercel env pull .env.production
   npx prisma db seed
   ```

2. **Login Admin**
   - URL: `https://your-domain.vercel.app/admin`
   - Email: `admin@desa.go.id`
   - Password: `admin123`
   - **PENTING**: Ganti password setelah login pertama!

3. **Test Semua Fitur**
   - Login/Logout
   - CRUD Berita
   - CRUD Galeri
   - Edit Konten

## 🔄 Update Website

Setiap kali push ke GitHub, Vercel akan auto-deploy:

```bash
git add .
git commit -m "Update content"
git push
```

## ⚠️ Troubleshooting

### Build Error
- Cek logs di Vercel Dashboard
- Pastikan semua dependencies terinstall
- Test `npm run build` locally

### Database Connection Error
- Cek DATABASE_URL format
- Pastikan database accessible dari Vercel
- Cek firewall/whitelist IP

### Environment Variables Not Working
- Redeploy setelah update env vars
- Pastikan tidak ada typo di nama variable

## 📱 Custom Domain

1. Di Vercel Dashboard → Settings → Domains
2. Add domain Anda
3. Update DNS records sesuai instruksi
4. Update `NEXTAUTH_URL` dengan domain baru

## 🎉 Selesai!

Website Anda sekarang live di internet dan bisa diakses dari mana saja!
