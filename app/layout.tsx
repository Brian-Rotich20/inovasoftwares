import PageTransitionLoader from './components/PageTransitionLoader'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Inova Softwares Company',
  description: 'Your modern software partner.',
  keywords: ['inova', 'software company', 'web development', 'full-stack developers', 'Mobile Applications', 'Nairobi'],
  authors: [{ name: 'Inova Team' }],
  openGraph: {
    title: 'Inova Softwares',
    description: 'Your modern software partner.',
    url: 'https://inovasoftwares.vercel.app',
    siteName: 'Inova Softwares',
    images: [
      {
        url: 'https://inovasoftwares.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <PageTransitionLoader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
