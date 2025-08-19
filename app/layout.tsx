import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import localFont from 'next/font/local'
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logoFont = localFont({
  src: '/fonts/mongule.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-logo', // key step
});


const roboto = Roboto({
  weight: ["400", "500", "700"], // adjust as needed
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: 'Inova Softwares Company',
  description: 'Your modern software partner.',
  keywords: ['inova', 'software company', 'web development', 'full-stack developers', 'Mobile Applications', 'Nairobi', 'Kenya', 'software solutions', 'custom software', 'web applications', 'mobile apps', 'software development',
               'IT solutions', 'digital transformation', 'Leading software company', 'software engineering', 'technology solutions', 'business software', 'enterprise applications', 'cloud solutions', 'AI development', 'machine learning',
                'data analytics', 'e-commerce solutions', 'SaaS development', 'API development', 'software consulting', 'UI/UX design', 'agile development', 'DevOps services', 'cybersecurity solutions', 
                'IT support services', 'Brian Rotich', 'Ralph Rotich', 'Website', 'Applications'],
  authors: [{ name: 'Inova Team' }],
  openGraph: {
    title: 'Inova Softwares',
    description: 'Your modern software partner.',
    url: 'https://inovasoftwares.co.ke',
    siteName: 'Inova Softwares',
    images: [
      {
        url: 'https://inovasoftwares.co.ke/og-image.jpg',
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
    <html lang="en" className={roboto.variable}>
      <body
        
      >
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}
