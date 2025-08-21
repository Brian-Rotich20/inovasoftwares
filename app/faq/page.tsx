import { NextPage } from "next";
import Head from "next/head";

const FaqPage: NextPage = () => {
  // FAQ content
  const faqData = [
    {
      question: "Who is Inova Softwares?",
      answer: "Inova Softwares is a technology company specializing in custom web, mobile, and enterprise solutions."
    },
    {
      question: "What does Inova Softwares do?",
      answer: "We develop innovative software solutions tailored to businesses, helping them streamline operations and achieve growth."
    },
    {
      question: "Where is Inova Softwares located?",
      answer: "Our headquarters are located in Nairobi, Kenya, serving clients globally."
    },
    {
      question: "When was Inova Softwares founded?",
      answer: "Inova Softwares was founded in 2023 with the mission to deliver cutting-edge digital solutions."
    },
    {
      question: "Why choose Inova Softwares?",
      answer: "We focus on delivering scalable, user-friendly, and reliable software products with personalized support."
    },
    {
      question: "How can I contact Inova Softwares?",
      answer: "You can reach us through our website contact form or email us at info@inovasoftwares.co.ke."
    }
  ];

  // FAQ structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inovasoftwares.co.ke/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://www.inovasoftwares.co.ke/faq"
      }
    ]
  };

  // Page structured data
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Frequently Asked Questions - Inova Softwares",
    "description": "Find answers to the most frequently asked questions about Inova Softwares, our services, and how we work with clients.",
    "url": "https://www.inovasoftwares.co.ke/faq",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Inova Softwares",
      "url": "https://www.inovasoftwares.co.ke"
    },
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US"
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Inova Softwares</title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about Inova Softwares, our services, expertise, and client engagement process."
        />
        <meta
          name="keywords"
          content="faq, frequently asked questions, inova softwares, software development, web development, mobile app development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.inovasoftwares.co.ke/faq" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Frequently Asked Questions - Inova Softwares" />
        <meta property="og:description" content="Answers to common questions about Inova Softwares and our services." />
        <meta property="og:url" content="https://www.inovasoftwares.co.ke/faq" />
        <meta property="og:type" content="website" />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>

      <main className="min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
          <p className="text-lg text-white mb-8">
            Below are answers to common questions about Inova Softwares and our services.
          </p>

          <div className="space-y-8">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-3">
                  {idx + 1}. {faq.question}
                </h2>
                <p className="text-white leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-xl font-semibold text-white mb-3">Still have questions?</h3>
            <p className="text-white">
              We're here to help. Contact us at{" "}
              <a
                href="mailto:info@inovasoftwares.co.ke"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                info@inovasoftwares.co.ke
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default FaqPage;
