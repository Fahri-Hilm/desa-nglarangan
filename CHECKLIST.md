# ✅ Deployment Checklist

## Pre-Deployment

- [ ] Test build locally: `npm run build`
- [ ] Test CMS locally: `npm run dev` → `/admin`
- [ ] Pastikan semua fitur berfungsi
- [ ] Backup database: `cp prisma/dev.db prisma/dev.db.backup`

## GitHub Setup

- [ ] Create repository di GitHub
- [ ] Push code:
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Dusun Nglarangan"
  git branch -M main
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

## Vercel Setup

- [ ] Buka [vercel.com/new](https://vercel.com/new)
- [ ] Import GitHub repository
- [ ] Vercel auto-detect Next.js
- [ ] Klik Deploy (akan error dulu, normal)

## Database Setup (Pilih Salah Satu)

### Option A: Vercel Postgres ⭐ Recommended
- [ ] Di Vercel Dashboard → Storage
- [ ] Create Database → Postgres
- [ ] Copy connection string
- [ ] Simpan untuk step berikutnya

### Option B: PlanetScale (MySQL)
- [ ] Buat account di [planetscale.com](https://planetscale.com)
- [ ] Create database
- [ ] Copy connection string
- [ ] Update schema.prisma: `provider = "mysql"`

### Option C: Supabase (PostgreSQL)
- [ ] Buat account di [supabase.com](https://supabase.com)
- [ ] Create project
- [ ] Copy connection string dari Settings → Database

## Environment Variables

Di Vercel → Settings → Environment Variables, tambahkan:

- [ ] `DATABASE_URL` = `<connection-string-dari-database>`
- [ ] `NEXTAUTH_SECRET` = `<generate: openssl rand -base64 32>`
- [ ] `NEXTAUTH_URL` = `https://your-project.vercel.app`
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = `<your-google-maps-key>`

**Generate Secret:**
```bash
openssl rand -base64 32
```

## Redeploy

- [ ] Vercel → Deployments → Latest
- [ ] Klik "Redeploy"
- [ ] Tunggu build selesai (2-3 menit)
- [ ] Cek logs jika ada error

## Seed Database Production

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

## Test Website

- [ ] Buka `https://your-project.vercel.app`
- [ ] Test navigasi semua halaman
- [ ] Test Google Maps
- [ ] Test responsive (mobile/tablet)

## Test CMS

- [ ] Login: `https://your-project.vercel.app/admin`
  - Email: `admin@desa.go.id`
  - Password: `admin123`
- [ ] Test tambah berita
- [ ] Test upload foto
- [ ] Test edit konten
- [ ] Test logout

## Security

- [ ] Ganti password admin default
- [ ] Pastikan `.env` tidak ter-commit
- [ ] Cek NEXTAUTH_SECRET sudah random
- [ ] Test login/logout beberapa kali

## Optional: Custom Domain

- [ ] Vercel → Settings → Domains
- [ ] Add domain Anda
- [ ] Update DNS records
- [ ] Update `NEXTAUTH_URL` dengan domain baru
- [ ] Redeploy

## Post-Deployment

- [ ] Bookmark URL admin panel
- [ ] Simpan credentials di password manager
- [ ] Share URL dengan tim
- [ ] Update konten via CMS
- [ ] Test dari berbagai device

## Maintenance

- [ ] Backup database secara berkala
- [ ] Monitor Vercel analytics
- [ ] Update dependencies: `npm update`
- [ ] Test setelah update

## 🎉 Done!

Website live dan siap digunakan!

**URL Website:** https://your-project.vercel.app
**URL Admin:** https://your-project.vercel.app/admin

---

**Need Help?**
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
- [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)
- [CMS_GUIDE.md](./CMS_GUIDE.md)
