import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dusun Nglarangan - Lereng Dingin Kaki Gunung Sumbing, Magelang",
    template: "%s | Dusun Nglarangan"
  },
  description: "Website resmi Dusun Nglarangan, Kecamatan Secang, Kabupaten Magelang. Dusun lereng dingin di kaki Gunung Sumbing. Informasi dusun, UMKM lokal, homestay, dan potensi wisata.",
  keywords: ["dusun nglarangan", "magelang", "gunung sumbing", "kecamatan secang", "homestay magelang", "wisata desa", "umkm lokal", "kabut pagi", "lereng sumbing", "desa wisata jawa tengah"],
  authors: [{ name: "Pemerintah Dusun Nglarangan" }],
  creator: "Dusun Nglarangan",
  publisher: "Pemerintah Dusun Nglarangan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://desanglarangan.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dusun Nglarangan - Lereng Dingin Kaki Gunung Sumbing",
    description: "Dusun lereng dingin di kaki Gunung Sumbing. Rasakan ketenangan kabut pagi, kehangatan warga, dan kesederhanaan yang utuh.",
    url: 'https://desanglarangan.id',
    siteName: 'Dusun Nglarangan',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dusun Nglarangan - Kabut Pagi di Lereng Gunung Sumbing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dusun Nglarangan - Lereng Dingin Kaki Gunung Sumbing",
    description: "Dusun lereng dingin di kaki Gunung Sumbing. Rasakan ketenangan kabut pagi dan kehangatan warga.",
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#059669',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Uncomment after verifying with Google Search Console
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
