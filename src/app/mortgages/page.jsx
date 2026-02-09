import { getMortage } from "@/actions/mortgage.actions";
import { getMortgageIndex } from "@/actions/mortgageIndex.actions";
import Banner from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { mortgageIndex } = await getMortgageIndex();
  return {
    title: mortgageIndex?.metaTitle,
    description: mortgageIndex?.metaDescription,
    keywords: mortgageIndex?.metaKeywords,
    openGraph: {
      title: mortgageIndex?.metaTitle,
      description: mortgageIndex?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
    }
  };
}

export default async function MortgagePage() {
  const [{ data }, { mortgageIndex }] = await Promise.all([
    getMortage(),
    getMortgageIndex(),
  ]);

  return (
    <>
      <Banner />
      <div className="section-container py-12">
        {mortgageIndex.content && <div
          className="editor-container mb-8"
          dangerouslySetInnerHTML={{ __html: mortgageIndex?.content || "" }}
        />}
        <div className="flex flex-wrap justify-center gap-8">
          {data?.map((item, index) => (
            <CategoryCard
              key={index}
              heading={item.heading}
              image={item.image}
              imageAlt={item.imageAlt}
              slug={`mortgages/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}