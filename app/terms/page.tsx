import { NextPage } from "next";
import Head from "next/head";

const TermsPage: NextPage = () => {
  // Terms structured data
  const termsData = {
    sections: [
      {
        title: "Acceptance of Terms",
        content: "By accessing and using Inova Softwares' services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services."
      },
      {
        title: "Use of Services",
        content: "Our services are intended for lawful purposes only. You agree not to use our services for any unlawful or prohibited activities. You must not attempt to gain unauthorized access to our systems or engage in any activity that disrupts our services."
      },
      {
        title: "Intellectual Property Rights",
        content: "All content, features, and functionality of our services, including but not limited to software, code, designs, and documentation, are owned by Inova Softwares and are protected by international copyright, trademark, and other intellectual property laws."
      },
      {
        title: "Client Responsibilities",
        content: "Clients are responsible for providing accurate information, timely feedback, and necessary resources for project completion. Clients must ensure they have the right to use any materials provided to us and that such materials do not infringe on third-party rights."
      },
      {
        title: "Payment Terms",
        content: "Payment terms are specified in individual project agreements. Generally, payments are due according to the agreed schedule. Late payments may incur additional charges. All prices are in the currency specified in the agreement."
      },
      {
        title: "Project Delivery and Warranties",
        content: "We strive to deliver projects on time and according to specifications. However, delivery dates are estimates and may be subject to change due to unforeseen circumstances. We provide limited warranties on our work as specified in individual agreements."
      },
      {
        title: "Limitation of Liability",
        content: "In no event shall Inova Softwares be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services."
      },
      {
        title: "Confidentiality",
        content: "We respect the confidentiality of our clients' information and maintain strict confidentiality measures. We will not disclose client information to third parties except as required by law or with explicit client consent."
      },
      {
        title: "Termination",
        content: "Either party may terminate an agreement with proper notice as specified in the individual contract. Upon termination, each party will return or destroy confidential information belonging to the other party."
      },
      {
        title: "Governing Law",
        content: "These terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Kenya."
      },
      {
        title: "Changes to Terms",
        content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the new terms."
      },
      {
        title: "Contact Information",
        content: "If you have any questions about these Terms and Conditions, please contact us at info@inovasoftwares.co.ke or through our website contact form."
      }
    ]
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
        "name": "Terms and Conditions",
        "item": "https://www.inovasoftwares.co.ke/terms"
      }
    ]
  };

  // Website structured data for legal page
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Inova Softwares",
    "description": "Terms and conditions for using Inova Softwares services and website.",
    "url": "https://www.inovasoftwares.co.ke/terms",
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
        <title>Terms and Conditions - Inova Softwares</title>
        <meta name="description" content="Terms and conditions for using Inova Softwares services. Read our legal terms, conditions, and policies for our software development services." />
        <meta name="keywords" content="terms and conditions, legal, inova softwares, software development, web development, mobile app development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.inovasoftwares.co.ke/terms" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Terms and Conditions - Inova Softwares" />
        <meta property="og:description" content="Terms and conditions for using Inova Softwares services and website." />
        <meta property="og:url" content="https://www.inovasoftwares.co.ke/terms" />
        <meta property="og:type" content="website" />
        
        {/* Add breadcrumb structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
        />
        {/* Add website structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} 
        />
      </Head>
      
      <main className="min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">Terms and Conditions</h1>
          <p className="text-lg text-white mb-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-lg text-white mb-8">
            Please read these Terms and Conditions carefully before using our services.
          </p>

          <div className="space-y-8">
            {termsData.sections.map((section, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {idx + 1}. {section.title}
                </h2>
                <p className="text-white leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-xl font-semibold text-white mb-3">Need Help?</h3>
            <p className="text-white">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us at{" "}
              <a href="mailto:info@inovasoftwares.co.ke" className="text-blue-400 hover:text-blue-300 underline">
                info@inovasoftwares.co.ke
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsPage;   