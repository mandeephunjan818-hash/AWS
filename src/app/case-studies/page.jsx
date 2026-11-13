import { getCaseStudies } from "@/actions/caseStudy.actions";
import { getCaseStudyIndex } from "@/actions/caseStudyIndex.actions";
import Banner from "@/components/Banner";
import CaseStudiesPagination from "./components/CaseStudiesPagination";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { data } = await getCaseStudyIndex();
  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    keywords: data?.metaKeywords,
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/case-studies', // Must be an absolute URL
    }
  };
}


export default async function CaseStudies() {
  const [{ studies }, { data }] = await Promise.all([getCaseStudies(), getCaseStudyIndex()]);
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://aws-privatefinance.co.uk/case-studies#webpage",
      "url": "https://aws-privatefinance.co.uk/case-studies",
      "name": "Case Studies | AWS Private Finance",
      "description": "Explore real client case studies from AWS Private Finance covering residential mortgages, commercial finance, contractor mortgages, development finance, healthcare funding and specialist lending solutions.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@id": "https://aws-privatefinance.co.uk/#website"
      },
      "publisher": {
        "@id": "https://aws-privatefinance.co.uk/#organization"
      },
      "mainEntity": {
        "@id": "https://aws-privatefinance.co.uk/case-studies#itemlist"
      },
      "breadcrumb": {
        "@id": "https://aws-privatefinance.co.uk/case-studies#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://aws-privatefinance.co.uk/#website",
      "name": "AWS Private Finance",
      "url": "https://aws-privatefinance.co.uk/",
      "publisher": {
        "@id": "https://aws-privatefinance.co.uk/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://aws-privatefinance.co.uk/#organization",
      "name": "AWS Private Finance",
      "legalName": "A W S Financial Services Limited",
      "url": "https://aws-privatefinance.co.uk/",
      "telephone": "+442045539750",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4th Floor, 7 Cutler Street",
        "addressLocality": "London",
        "postalCode": "E1 7DJ",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://aws-privatefinance.co.uk/case-studies#itemlist",
      "name": "AWS Private Finance Case Studies",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 2,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "@id": "https://aws-privatefinance.co.uk/case-studies/100000-fp34-stock-facility-for-an-independent-pharmacy#article",
            "headline": "£100,000 FP34 Stock Facility for an Independent Pharmacy",
            "url": "https://aws-privatefinance.co.uk/case-studies/100000-fp34-stock-facility-for-an-independent-pharmacy",
            "datePublished": "2026-10-09",
            "author": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            },
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            },
            "inLanguage": "en-GB"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "@id": "https://aws-privatefinance.co.uk/case-studies/a-smarter-funding-solution-for-a-growing-dental-practice#article",
            "headline": "A Smarter Funding Solution for a Growing Dental Practice",
            "url": "https://aws-privatefinance.co.uk/case-studies/a-smarter-funding-solution-for-a-growing-dental-practice",
            "datePublished": "2026-09-29",
            "author": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            },
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            },
            "inLanguage": "en-GB"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aws-privatefinance.co.uk/case-studies#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aws-privatefinance.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": "https://aws-privatefinance.co.uk/case-studies"
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
    <link rel="canonical" href={`https://aws-privatefinance.co.uk/case-studies`} />
      <Banner />
      <div className="section-container py-12">
        {data.content && (
          <div
            className="editor-container mb-8"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        )}
        <CaseStudiesPagination items={studies} itemsPerPage={12} />
      </div>
    </>
  );
}
