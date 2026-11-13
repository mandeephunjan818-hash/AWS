import Banner from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";

const data = [
  {
    image: "/ser1.webp",
    imageAlt: "Mortgages",
    heading: "Mortgages",
    link: "mortgages",
  },
  {
    image: "/ser2.webp",
    imageAlt: "Commercial Finance",
    heading: "Commercial Finance",
    link: "commercial-finance",
  },
  {
    image: "/ser3.webp",
    imageAlt: "Insurance",
    heading: "Insurance",
    link: "insurance",
  },
  {
    image: "/ser4.webp",
    imageAlt: "Business Finance",
    heading: "Business Finance",
    link: "business-finance",
  },
];

export async function generateMetadata() {
  return {
    title: "AWS Private Finance - services",
    description: "AWS Private Finance - services",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: 'AWS Private Finance - services',
      description: 'AWS Private Finance - services',
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/services', // Must be an absolute URL
    },
  };
}

export default function ServicePage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aws-privatefinance.co.uk/#organization",
        "name": "AWS Private Finance",
        "url": "https://aws-privatefinance.co.uk/",
        "logo": "https://aws-privatefinance.co.uk/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/aws-private-finance",
          "https://www.facebook.com/awsprivatefinance"
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://aws-privatefinance.co.uk/#services-priority",
        "name": "Our Services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "@id": "https://aws-privatefinance.co.uk/mortgages#service",
              "name": "Mortgage Services",
              "provider": {
                "@id": "https://aws-privatefinance.co.uk/#organization"
              },
              "description": "Professional mortgage advice and financing solutions tailored to individual homebuyers and property investors.",
              "url": "https://aws-privatefinance.co.uk/mortgages",
              "serviceType": "Mortgages",
              "areaServed": "UK"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "@id": "https://aws-privatefinance.co.uk/commercial-finance#service",
              "name": "Commercial Finance",
              "provider": {
                "@id": "https://aws-privatefinance.co.uk/#organization"
              },
              "description": "Comprehensive commercial finance solutions for businesses including loans, asset finance, and funding strategies.",
              "url": "https://aws-privatefinance.co.uk/commercial-finance",
              "serviceType": "Commercial Finance",
              "areaServed": "UK"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "@id": "https://aws-privatefinance.co.uk/insurance#service",
              "name": "Insurance Services",
              "provider": {
                "@id": "https://aws-privatefinance.co.uk/#organization"
              },
              "description": "Insurance products and advisory services to protect your assets, business, and personal financial well-being.",
              "url": "https://aws-privatefinance.co.uk/insurance",
              "serviceType": "Insurance",
              "areaServed": "UK"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "@id": "https://aws-privatefinance.co.uk/business-finance#service",
              "name": "Business Finance",
              "provider": {
                "@id": "https://aws-privatefinance.co.uk/#organization"
              },
              "description": "Tailored business finance solutions including startup funding, loans, and working capital consultancy.",
              "url": "https://aws-privatefinance.co.uk/business-finance",
              "serviceType": "Business Finance",
              "areaServed": "UK"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      >
      </script>

      <Banner />
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {data?.map((item, index) => (
            <CategoryCard
              key={index}
              heading={item.heading}
              image={item.image}
              imageAlt={item.imageAlt}
              slug={`${item.link}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
