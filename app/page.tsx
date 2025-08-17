'use client';

import Head from 'next/head';
// import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ChooseUs from './components/ChooseUs';
import IndustriesWeServe from './components/IndustriesWeServe';
import { HeroSection1 } from './components/HeroSection1';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Company Name</title>
        <meta name="description" content="Professional web and software solutions tailored for modern businesses." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Inova Softwares",
              "url": "https://inovasoftwares.co.ke",
              "url2": "https://devrotich.vercel.app/",
              "description": "We build fast, scalable apps with a focus on performance, security, and scalability. Custom software solutions for startups and growing businesses.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kiwanja 411",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "postalCode": "00100",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254 720 060 728",
                "contactType": "Customer Service",
                "areaServed": "KE",
                "availableLanguage": "English"
              },
              "logo": "https://inovasoftwares.co.ke/favicon.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100090581374354",
                "https://www.linkedin.com/in/brian-rotich-11150a2a9",
                "https://www.instagram.com/brian_rotich2?igsh=MWcwemJicmJqeXVpcQ==",
                "https://x.com/RotichBrayoo",
                "https://github.com/Brian-Rotich20" 
              ]
            })
          }}
        />
      </Head>
      <HeroSection1 />
      {/* <HeroSection /> */}
      <ServicesSection />
      <ChooseUs />
      <IndustriesWeServe />
     
    </>
  );
}
