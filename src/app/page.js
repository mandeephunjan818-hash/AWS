import News from "@/components/News";
import AboutServer from "@/components/AboutServer";
import CaseStudies from "@/components/CaseStudies";
import Form from "@/components/Form";
import HeroServer from "@/components/HeroServer";
import ProductsServer from "@/components/ProductsServer";
import TrustPilot from "@/components/TrustPilot";


export async function generateMetadata() {
  return {
    title: "Mortgage Broker London | AWS Private Finance",
    description: "AWS Private Finance is an award-winning mortgage broker London firm, offering whole-of-market mortgage and protection advice to professionals.",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: 'Mortgage Broker London | AWS Private Finance',
      description: 'AWS Private Finance is an award-winning mortgage broker London firm, offering whole-of-market mortgage and protection advice to professionals.',
      images:
      {
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/', // Must be an absolute URL
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://aws-privatefinance.co.uk/#organization",
        "name": "AWS Private Finance",
        "legalName": "A W S Financial Services Limited",
        "url": "https://aws-privatefinance.co.uk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aws-privatefinance.co.uk/wp-content/uploads/2023/06/AWS-Logo.png",
          "width": 600,
          "height": 60
        },
        "image": "https://aws-privatefinance.co.uk/wp-content/uploads/2023/06/AWS-Logo.png",
        "description": "AWS Private Finance is an award-winning specialist mortgage and protection advisory business providing whole-of-market advice for residential, investment, and commercial finance.",
        "telephone": "+44-204-553-9750",
        "email": "info@awsmortgages.co.uk",
        "priceRange": "££",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4th Floor, Sunshine House, 7 Cutler Street",
          "addressLocality": "London",
          "postalCode": "E1 7DJ",
          "addressCountry": "GB"
        },
        "founder": {
          "@type": "Person",
          "name": "Ashley Slade",
          "jobTitle": "Managing Partner"
        },
        "foundingDate": "2015",
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "Financial Conduct Authority",
          "description": "Appointed Representative of Intra Private Finance Limited (FCA Number 832376)"
        },
        "knowsAbout": [
          "Residential Mortgages",
          "Buy-to-Let Mortgages",
          "Commercial Finance",
          "Life Insurance",
          "Critical Illness Cover"
        ],
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
        }
      },
      // ✅ USE ItemList WITH PRIORITY ORDER - This is the strongest signal
      {
        "@type": "ItemList",
        "@id": "https://aws-privatefinance.co.uk/#sitelinks",
        "name": "Important Pages",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://aws-privatefinance.co.uk/mortgages#webpage",
              "url": "https://aws-privatefinance.co.uk/mortgages",
              "name": "Mortgages"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://aws-privatefinance.co.uk/commercial-finance#webpage",
              "url": "https://aws-privatefinance.co.uk/commercial-finance",
              "name": "Commercial Finance"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "WebPage",
              "@id": "https://aws-privatefinance.co.uk/insurance#webpage",
              "url": "https://aws-privatefinance.co.uk/insurance",
              "name": "Insurance"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "WebPage",
              "@id": "https://aws-privatefinance.co.uk/about-us#webpage",
              "url": "https://aws-privatefinance.co.uk/about-us",
              "name": "About Us"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "WebPage",
              "@id": "https://aws-privatefinance.co.uk/contact-us#webpage",
              "url": "https://aws-privatefinance.co.uk/contact-us",
              "name": "Contact Us"
            }
          }
        ]
      },
      // ✅ Homepage WebPage linking to the ItemList
      {
        "@type": "WebPage",
        "@id": "https://aws-privatefinance.co.uk/#homepage",
        "url": "https://aws-privatefinance.co.uk/",
        "name": "AWS Private Finance - Specialist Mortgage Advisors",
        "description": "Award-winning mortgage and protection advisory services in the UK",
        "isPartOf": {
          "@id": "https://aws-privatefinance.co.uk/#website"
        },
        "about": {
          "@id": "https://aws-privatefinance.co.uk/#organization"
        },
        // ✅ SignificantLink tells Google these are your main pages
        "significantLink": [
          "https://aws-privatefinance.co.uk/mortgages",
          "https://aws-privatefinance.co.uk/commercial-finance",
          "https://aws-privatefinance.co.uk/insurance",
          "https://aws-privatefinance.co.uk/about-us",
          "https://aws-privatefinance.co.uk/contact-us"
        ],
        "mainEntity": {
          "@id": "https://aws-privatefinance.co.uk/#sitelinks"
        }
      }
    ]
  };

  return (
    <>
      <link rel="canonical" href="https://aws-privatefinance.co.uk/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      >
      </script>

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