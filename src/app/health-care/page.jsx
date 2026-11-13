import { getHealth } from "@/actions/health.actions";
import { getHealthIndex } from "@/actions/healthIndex.actions";
import Banner from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";
import getLocalImageUrl from "@/lib/ChangeImageUrl";

export async function generateMetadata() {
  const { healthIndex } = await getHealthIndex();
  return {
    title: healthIndex?.metaTitle,
    description: healthIndex?.metaDescription,
    keywords: healthIndex?.metaKeywords,
    openGraph: {
      title: healthIndex?.metaTitle,
      description: healthIndex?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/health-care', // Must be an absolute URL
    }
  };
}

export default async function HealthPage() {
  const [{ data }
    //  { healthIndex }
  ] = await Promise.all([
    getHealth(),
    // getHealthIndex(),
  ]);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/health-care`} />
      <Banner />
      <div className="section-container py-12">
        {/* {healthIndex.content && <div
          className="editor-container mb-8"
          dangerouslySetInnerHTML={{ __html: healthIndex?.content || "" }}
        />} */}
        <div className="flex flex-wrap justify-center gap-8">
          {data?.map((item, index) => (
            <CategoryCard
              key={index}
              heading={item.heading}
              image={getLocalImageUrl(item.image)}
              imageAlt={item.imageAlt}
              slug={`health-care/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}