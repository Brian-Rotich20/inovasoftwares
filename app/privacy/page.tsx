import { NextPage } from "next";
import Head from "next/head";

const PrivacyPage: NextPage = () => {
  // Privacy policy data
  const privacyData = {
    sections: [
      {
        title: "Data Collection",
        content: "Clients are responsible for collecting, managing, and securing their own customer data. Inova Softwares does not process or store customer information on behalf of clients."
      },
      {
        title: "User Accounts",
        content: "We collect limited personal information such as name, email, and contact details during account registration for administrative purposes only."
      },
      {
        title: "Payment Information",
        content: "Payments are processed through trusted third-party gateways. Inova Softwares does not store or manage payment credentials, and clients are responsible for securing their payment transactions."
      },
      {
        title: "Cookies and Tracking",
        content: "We use cookies and analytics to improve user experience. Users can disable cookies through their browser settings at any time."
      },
      {
        title: "Data Security",
        content: "Clients must implement their own security measures to protect customer data. Inova Softwares is not liable for data breaches resulting from client negligence."
      },
      {
        title: "Third-Party Services",
        content: "Our platform may integrate third-party services such as payment gateways and analytics tools. Users should review the privacy policies of these providers."
      },
      {
        title: "Data Sharing",
        content: "We do not sell or share user data with third parties, except where required by law."
      },
      {
        title: "Client Responsibility",
        content: "Clients must ensure that their businesses comply with applicable data protection regulations."
      },
      {
        title: "Account Deletion",
        content: "Users may request account deletion, but historical transaction data may be retained for legal and security purposes."
      },
      {
        title: "Policy Updates",
        content: "We reserve the right to update this Privacy Policy at any time. Continued use of our services constitutes acceptance of these changes."
      },
      {
        title: "Contact Information",
        content: "If you have any questions regarding this Privacy Policy, contact us at support@inovasoftwares.co.ke or call +254705079016."
      }
    ]
  };

  // Breadcrumb schema
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
        "name": "Privacy Policy",
        "item": "https://www.inovasoftwares.co.ke/privacy"
      }
    ]
  };

  // Webpage schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Inova Softwares",
    "description": "Privacy Policy detailing how Inova Softwares collects, uses, and protects user and client data.",
    "url": "https://www.inovasoftwares.co.ke/privacy",
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
        <title>Privacy Policy - Inova Softwares</title>
        <meta
          name="description"
          content="Read Inova Softwares Privacy Policy to learn how we collect, use, and protect user and client data."
        />
        <meta
          name="keywords"
          content="privacy policy, inova softwares, data protection, software development, web development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.inovasoftwares.co.ke/privacy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Inova Softwares" />
        <meta property="og:description" content="How Inova Softwares collects, uses, and protects client and user data." />
        <meta property="og:url" content="https://www.inovasoftwares.co.ke/privacy" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} 
        />
      </Head>

      <main className="min-h-screen py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-lg text-white mb-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-lg text-white mb-8">
            This Privacy Policy explains how Inova Softwares collects, uses, and protects user data when you access our platform. By using our services, you agree to the terms outlined in this policy.
          </p>

          <div className="space-y-8">
            {privacyData.sections.map((section, idx) => (
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
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@inovasoftwares.co.ke" className="text-blue-400 hover:text-blue-300 underline">
                support@inovasoftwares.co.ke
              </a>{" "}
              or call{" "}
              <a href="tel:+254705079016" className="text-blue-400 hover:text-blue-300 underline">
                +254 720 060 728
              </a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPage;
