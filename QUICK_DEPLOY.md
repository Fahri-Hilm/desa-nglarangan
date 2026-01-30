# 🚀 Quick Start - Deploy ke Vercel

## Langkah Cepat (5 Menit)

### 1️⃣ Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit - Dusun Nglarangan Website"
git branch -M main
git remote add origin https://github.com/username/desa-nglarangan.git
git push -u origin main
```

### 2️⃣ Deploy ke Vercel
1. Buka [vercel.com/new](https://vercel.com/new)
2. Import repository GitHub
3. Vercel auto-detect Next.js ✅
4. Klik **Deploy**

### 3️⃣ Setup Database (Pilih Salah Satu)

#### Option A: Vercel Postgres (Recommended) 🟢
```bash
# Di Vercel Dashboard:
1. Storage → Create Database → Postgres
2. Copy connection string
3. Settings → Environment Variables → Add:
   DATABASE_URL = <connection-string>
```

#### Option B: PlanetScale (MySQL) 🔵
```bash
# Di planetscale.com:
1. Create database
2. Copy connection string
3. Add to Vercel env vars
```

### 4️⃣ Set Environment Variables
Di Vercel → Settings → Environment Variables:

```env
DATABASE_URL=<your-database-url>
NEXTAUTH_SECRET=<generate-random-32-chars>
NEXTAUTH_URL=https://your-project.vercel.app
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-google-maps-key>
```

**Generate Secret:**
```bash
openssl rand -base64 32
```

### 5️⃣ Redeploy
Setelah set env vars:
- Deployments → Latest → Redeploy

### 6️⃣ Seed Database
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Pull env vars
vercel env pull .env.production

# Seed database
npx prisma db seed
```

### 7️⃣ Login Admin
```
URL: https://your-project.vercel.app/admin
Email: admin@desa.go.id
Password: admin123
```

## ✅ Selesai!

Website sudah live dan CMS siap digunakan! 🎉

## 📝 Update Website

Setiap push ke GitHub akan auto-deploy:
```bash
git add .
git commit -m "Update content"
git push
```

## 🔧 Troubleshooting

**Build Error?**
- Cek Vercel logs
- Test locally: `npm run build`

**Database Error?**
- Cek DATABASE_URL format
- Pastikan database accessible

**Can't Login?**
- Seed database: `npx prisma db seed`
- Cek NEXTAUTH_SECRET & NEXTAUTH_URL

## 📚 Dokumentasi Lengkap

- [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Panduan detail
- [CMS_GUIDE.md](./CMS_GUIDE.md) - Cara pakai CMS
- [README.md](./README.md) - Dokumentasi project

## 🆘 Butuh Bantuan?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Prisma Docs: https://www.prisma.io/docs
