// app/page.tsx - Server Component (NO 'use client')
import News from "@/components/News";
import AboutServer from "@/components/AboutServer";
import CaseStudies from "@/components/CaseStudies";
import Form from "@/components/Form";
import HeroServer from "@/components/HeroServer";
import ProductsServer from "@/components/ProductsServer";
import TrustPilot from "@/components/TrustPilot";

// Define JSON-LD data outside component (no client hooks needed)
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://aws-privatefinance.co.uk/#organization",
      "name": "AWS Private Finance",
      "url": "https://aws-privatefinance.co.uk/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aws-privatefinance.co.uk/wp-content/uploads/2023/06/AWS-Logo.png",
        "width": 600,
        "height": 60
      },
      "description": "AWS Private Finance is an award-winning specialist mortgage and protection advisory business providing whole-of-market advice for residential, investment, and commercial finance.",
      "telephone": "+44-204-553-9750",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4th Floor, Sunshine House, 7 Cutler Street",
        "addressLocality": "London",
        "postalCode": "E1 7DJ",
        "addressCountry": "GB"
      },
      "sameAs": [
        "https://www.facebook.com/awsprivatefinance/",
        "https://www.instagram.com/awsprivatefinance/",
        "https://www.linkedin.com/company/aws-financial-services/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aws-privatefinance.co.uk/#website",
      "url": "https://aws-privatefinance.co.uk/",
      "name": "AWS Private Finance",
      "publisher": {
        "@id": "https://aws-privatefinance.co.uk/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://aws-privatefinance.co.uk/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/mortgages/#webpage",
      "url": "https://aws-privatefinance.co.uk/mortgages",
      "name": "Mortgages",
      "description": "Specialist mortgage advice for residential, buy-to-let, and contractor mortgages.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/commercial-finance/#webpage",
      "url": "https://aws-privatefinance.co.uk/commercial-finance",
      "name": "Commercial Finance",
      "description": "Commercial mortgages, bridging loans, and development finance solutions.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/insurance/#webpage",
      "url": "https://aws-privatefinance.co.uk/insurance",
      "name": "Insurance",
      "description": "Life insurance, critical illness cover, and business protection advice.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/about-us/#webpage",
      "url": "https://aws-privatefinance.co.uk/about-us",
      "name": "About Us",
      "description": "Learn about AWS Private Finance and our expert mortgage advisors.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/case-studies/#webpage",
      "url": "https://aws-privatefinance.co.uk/case-studies",
      "name": "Case Studies",
      "description": "See how we've helped clients secure the best mortgage deals.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    },
    {
      "@type": "WebPage",
      "@id": "https://aws-privatefinance.co.uk/contact-us/#webpage",
      "url": "https://aws-privatefinance.co.uk/contact-us",
      "name": "Contact Us",
      "description": "Get in touch with our mortgage advisors for a free consultation.",
      "isPartOf": { "@id": "https://aws-privatefinance.co.uk/#website" }
    }
  ]
};

export default function Home() {
  // ✅ Use JSON.stringify in Server Component - no client hooks needed
  const jsonLdString = JSON.stringify(jsonLdData);

  return (
    <>
      {/* ✅ Regular script tag works in Server Components */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <HeroServer />
      <TrustPilot />
      <ProductsServer />
      <AboutServer />
      <CaseStudies />
      <Form />
      <News />
    </>
  );
}