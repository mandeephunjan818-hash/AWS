import {
  getBusinessCategory,
  getBusinessCategoryBySlug,
} from "@/actions/businessCategory.actions";
import { getBusinessFundingByCategory } from "@/actions/businessFunding.actions";
import Banner from "@/components/Banner";
import Products from "@/components/InnerProduct";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { data } = await getBusinessCategoryBySlug(paramsId.category);
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
      url: `https://aws-privatefinance.co.uk/business-finance/${paramsId.category}`, // Must be an absolute URL
    }
  };
}

export default async function BusinessFundingCategory({ params }) {
  const paramsId = await params;
  const [{ data }, fundingData] = await Promise.all([
    getBusinessCategoryBySlug(paramsId.category),
    getBusinessFundingByCategory(paramsId.category),
  ]);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/business-finance/${paramsId.category}`} />
      <Banner />
      <div className="section-container py-12">
        {data?.content && (
          <div
            className="editor-container mb-8"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        )}
        <Products data={fundingData.data} startSlug={`${paramsId.category}`} />
      </div>
    </>
  );
}
