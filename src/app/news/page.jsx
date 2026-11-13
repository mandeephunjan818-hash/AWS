import { getNewsIndex } from "@/actions/newsIndex.actions";
import { getNewsStudies } from "@/actions/newStudy.actions";
import Banner from "@/components/Banner";
import NewsPagination from "./components/NewsPagination";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { data } = await getNewsIndex();
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
      url: 'https://aws-privatefinance.co.uk/news', // Must be an absolute URL
    }
  };
}

export default async function News() {

  const [{ studies }, { data }] = await Promise.all([getNewsStudies(), getNewsIndex()]);

    const jsonLd = 
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://aws-privatefinance.co.uk/news#webpage",
      "url": "https://aws-privatefinance.co.uk/news",
      "name": "News & Insights | AWS Private Finance",
      "description": "Explore mortgage news, UK lending market updates, contractor mortgages, commercial finance insights and expert financial guidance from AWS Private Finance.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://aws-privatefinance.co.uk/#website",
        "name": "AWS Private Finance",
        "url": "https://aws-privatefinance.co.uk/"
      },
      "publisher": {
        "@id": "https://aws-privatefinance.co.uk/#organization"
      },
      "mainEntity": {
        "@id": "https://aws-privatefinance.co.uk/news#blog"
      },
      "breadcrumb": {
        "@id": "https://aws-privatefinance.co.uk/news#breadcrumb"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://aws-privatefinance.co.uk/#organization",
      "name": "AWS Private Finance",
      "url": "https://aws-privatefinance.co.uk/",
      "legalName": "A W S Financial Services Limited"
    },
    {
      "@type": "Blog",
      "@id": "https://aws-privatefinance.co.uk/news#blog",
      "name": "AWS Private Finance News & Insights",
      "url": "https://aws-privatefinance.co.uk/news",
      "description": "Expert insights covering mortgages, commercial finance, lending trends and specialist funding solutions in the UK.",
      "inLanguage": "en-GB",
      "publisher": {
        "@id": "https://aws-privatefinance.co.uk/#organization"
      },
      "blogPost": {
        "@id": "https://aws-privatefinance.co.uk/news#article-list"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://aws-privatefinance.co.uk/news#article-list",
      "name": "Latest AWS Private Finance Articles",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "BlogPosting",
            "headline": "Hot Topics: Funding Care Home Refurbishments & Compliance Works",
            "url": "https://aws-privatefinance.co.uk/news/hot-topics-funding-care-home-refurbishments-compliance-works",
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "BlogPosting",
            "headline": "Hot Topics: Pharmacy Finance Case Study Series",
            "url": "https://aws-privatefinance.co.uk/news/hot-topics-pharmacy-finance-case-study-series",
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "BlogPosting",
            "headline": "How Contract Gaps Affect Mortgage Applications",
            "url": "https://aws-privatefinance.co.uk/news/hot-topics-how-contract-gaps-affect-mortgage-applications",
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "BlogPosting",
            "headline": "Limited Company Contractor Mortgages",
            "url": "https://aws-privatefinance.co.uk/news/limited-company-contractor-mortgages",
            "publisher": {
              "@id": "https://aws-privatefinance.co.uk/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aws-privatefinance.co.uk/news#breadcrumb",
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
          "name": "News",
          "item": "https://aws-privatefinance.co.uk/news"
        }
      ]
    }
  ]
};

  return (
    <>

      <link rel="canonical" href={`https://aws-privatefinance.co.uk/news`} />

         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      >
      </script>

      <Banner />
      <div className="section-container py-12">
        {data.content && (
          <div
            className="editor-container mb-8"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        )}
        <NewsPagination items={studies} itemsPerPage={12} />
      </div>
    </>
  );
}
