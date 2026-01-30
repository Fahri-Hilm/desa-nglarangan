import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@desa.go.id' },
    update: {},
    create: {
      email: 'admin@desa.go.id',
      name: 'Admin Dusun',
      password: hashedPassword,
      role: 'admin',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create sample news
  const news1 = await prisma.news.create({
    data: {
      title: 'Musyawarah Warga Dusun Nglarangan 2026',
      slug: 'musyawarah-warga-dusun-nglarangan-2026',
      excerpt: 'Warga dusun mengadakan musyawarah untuk merencanakan pembangunan tahun 2026',
      content: 'Dusun Nglarangan mengadakan Musyawarah Warga untuk membahas rencana pembangunan tahun 2026. Kegiatan ini dihadiri oleh Kepala Dusun, ketua RT/RW, tokoh masyarakat, dan perwakilan warga untuk membahas prioritas pembangunan infrastruktur dusun dan pengembangan pertanian hortikultura.',
      published: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
  });
  console.log('✅ Sample news created:', news1.title);

  // Create content pages
  const contents = [
    {
      key: 'hero-title',
      title: 'Judul Hero Section',
      content: 'Di sini, waktu tidak dikejar.\nIa berjalan berdampingan.',
    },
    {
      key: 'hero-description',
      title: 'Deskripsi Hero',
      content: 'Dusun lereng sejuk di kaki Gunung Merbabu. Rasakan ketenangan kabut pagi, kehangatan warga, dan kesederhanaan yang utuh di Dusun Nglarangan.',
    },
    {
      key: 'profile-sejarah',
      title: 'Sejarah Dusun',
      content: 'Dusun Nglarangan merupakan salah satu dari lima dusun di Desa Banyusidi, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah. Nama "Nglarangan" berasal dari kata "larangan" dalam bahasa Jawa yang memiliki makna historis terkait dengan wilayah yang pada masa lampau merupakan area terlarang atau suci.\n\nTerletak di lereng Gunung Merbabu pada ketinggian ±799 mdpl, dusun ini telah berkembang dari masa ke masa menjadi kawasan pertanian dataran tinggi yang produktif.',
    },
    {
      key: 'profile-visi',
      title: 'Visi Dusun',
      content: 'Terwujudnya Dusun Nglarangan yang Maju, Mandiri, dan Sejahtera Berlandaskan Nilai-nilai Religius dan Gotong Royong',
    },
    {
      key: 'potensi-pertanian',
      title: 'Potensi Pertanian',
      content: 'Sektor pertanian hortikultura merupakan mata pencaharian utama masyarakat Dusun Nglarangan. Dengan ketinggian ±799 mdpl di lereng Gunung Merbabu, dusun ini sangat cocok untuk budidaya sayuran dataran tinggi berkualitas yang dipasarkan hingga ke kota-kota besar.\n\nKomoditas unggulan: kubis, wortel, brokoli, kentang, bawang merah, dan sayuran organik.',
    },
  ];

  for (const content of contents) {
    await prisma.content.upsert({
      where: { key: content.key },
      update: content,
      create: content,
    });
  }
  console.log('✅ Content pages created');

  console.log('\n🎉 Database seeded successfully!');
  console.log('\n📝 Login credentials:');
  console.log('   Email: admin@desa.go.id');
  console.log('   Password: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
