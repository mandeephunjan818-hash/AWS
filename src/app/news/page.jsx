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
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/news', // Must be an absolute URL
    }
  };
}

export default async function News() {

  const NewsStudy = await getNewsStudies();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AWS Private Finance News & Insights",
    "description": "Latest insights, market updates, mortgage news, and financial articles from AWS Private Finance.",
    "url": "https://aws-privatefinance.co.uk/news",
    "numberOfItems": 6,
    "itemListElement": NewsStudy?.studies?.slice(0, 6).map((study, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://aws-privatefinance.co.uk/news`,
      "name": study.title?.replace(/"/g, "'"),
      "datePublished": study.updatedAt,
      "description": study.metaDescription?.replace(/"/g, "'")
    })) || []
  };

  const [{ studies }, { data }] = await Promise.all([getNewsStudies(), getNewsIndex()]);

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
