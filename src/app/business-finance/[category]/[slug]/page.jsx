import {
  getBusinessFundingBySlug,
} from "@/actions/businessFunding.actions";
import InnerBanner from "@/components/InnerBanner";
import { getCustomUrl } from "@/utils/urlTransform";


export async function generateMetadata({ params }) {
  const paramsId = await params;
  console.log("paramsId", paramsId.slug);
  const { success, data } = await getBusinessFundingBySlug(paramsId.slug);
  console.log("finance", data, success);
  return {
    title: data?.metaTitle || "Business Funding - Private Finance",
    description: data?.metaDescription || "Explore our comprehensive business funding solutions tailored to meet your unique needs. From small business loans to venture capital, we provide the financial support you need to grow and succeed.",
    keywords: data?.metaKeywords || "business funding, small business loans, venture capital, financial support, business growth",
    openGraph: {
      title: data?.metaTitle || "Business Funding - Private Finance",
      description: data?.metaDescription || "Explore our comprehensive business funding solutions tailored to meet your unique needs. From small business loans to venture capital, we provide the financial support you need to grow and succeed.",
      images:
      {
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: `https://aws-privatefinance.co.uk/business-finance/${data.category}/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function BusinessFundingPage({ params }) {
  const slug = await params;
  const slugParams = slug.slug;
  const { data } = await getBusinessFundingBySlug(slugParams);
  console.log("data", data);
  data.image = getCustomUrl(data.image);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/business-finance/${data.category}/${slugParams}`} />
      <InnerBanner image={data?.image} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="tw-reset"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          ></div>
        </div>
      </div>
    </>
  );
}
