
import { NextPage } from "next";
import Head from "next/head";

const FaqPage: NextPage = () => {
  // FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Inova Softwares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inova Softwares is a technology company specializing in custom web, mobile, and enterprise solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What does Inova Softwares do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop innovative software solutions tailored to businesses, helping them streamline operations and achieve growth."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Inova Softwares located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our headquarters are located in Nairobi, Kenya, serving clients globally."
        }
      },
      {
        "@type": "Question",
        "name": "When was Inova Softwares founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inova Softwares was founded in 2020 with the mission to deliver cutting-edge digital solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Inova Softwares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on delivering scalable, user-friendly, and reliable software products with personalized support."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Inova Softwares?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach us through our website contact form or email us at info@inovasoftwares.co.ke."
        }
      }
    ]
  };

  // Breadcrumb structured data (for FAQ page only)
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

  return (
    <>
      <Head>
        <title>FAQ - Inova Softwares</title>
        <meta name="description" content="Frequently asked questions about Inova Softwares." />
        {/* Add FAQ structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
        {/* Add breadcrumb structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
        />
      </Head>

      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{faq.name}</h2>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FaqPage;
