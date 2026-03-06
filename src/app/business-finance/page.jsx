import Banner from "@/components/Banner";
import { getBusinessCategory } from "@/actions/businessCategory.actions";
import { CategoryCard } from "@/components/CategoryCard";
import { getBusinessFundingIndex } from "@/actions/businessFundingIndex.actions";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { data } = await getBusinessFundingIndex();
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
      url: 'https://aws-privatefinance.co.uk/business-finance', // Must be an absolute URL
    }
  };
}

export async function generateStaticParams() {
  return [{ path: ["business-finance"] }];
}

export default async function BusinessFunding() {
  const [{ data }, indexData] = await Promise.all([
    getBusinessCategory(),
    getBusinessFundingIndex(),
  ]);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/business-finance`} />
      <Banner />
      <div className="section-container py-12">
        {indexData?.data?.content && (
          <div
            className="editor-container mb-8"
            dangerouslySetInnerHTML={{ __html: indexData?.data?.content || "" }}
          />
        )}
        <div className="flex flex-wrap justify-center gap-8">
          {data?.map((item, index) => (
            <CategoryCard
              key={index}
              heading={item.heading}
              image={item.image}
              imageAlt={item.imageAlt}
              slug={`business-finance/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
