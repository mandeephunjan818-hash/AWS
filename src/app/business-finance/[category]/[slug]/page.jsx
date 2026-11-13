import {
  getBusinessFundingBySlug,
  getBusinessFunding,
  getBusinessFundingBySlugCategory
} from "@/actions/businessFunding.actions";
import InnerBanner from "@/components/InnerBanner";
import getLocalImageUrl from "@/lib/ChangeImageUrl";
import { getCustomUrl } from "@/utils/urlTransform";

export async function generateStaticParams() {
  const data = await getBusinessFunding();
  // console.log(data);
  return ((data.data ? data.data : []).map((items) => ({
    category: items?.category === "67f7a130bb68239130acb53a" ? "healthcare-finance" : "business-funding" || "",
    slug: items?.slug || ""
  })))
}

export async function generateMetadata({ params }) {
  const paramsId = await params;
  console.log("paramsId", paramsId.slug);
  const { success, data } = await getBusinessFundingBySlug(paramsId.slug);
  // console.log("finance", data, success);
  return {
    title: data?.metaTitle || "Business Funding - Private Finance",
    description: data?.metaDescription || "Explore our comprehensive business funding solutions tailored to meet your unique needs. From small business loans to venture capital, we provide the financial support you need to grow and succeed.",
    keywords: data?.metaKeywords || "business funding, small business loans, venture capital, financial support, business growth",
    openGraph: {
      title: data?.metaTitle || "Business Funding - Private Finance",
      description: data?.metaDescription || "Explore our comprehensive business funding solutions tailored to meet your unique needs. From small business loans to venture capital, we provide the financial support you need to grow and succeed.",
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: `https://aws-privatefinance.co.uk/business-finance/${paramsId.category}/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function BusinessFundingPage({ params }) {
  const slug = await params;
  const data = await getBusinessFundingBySlugCategory(slug);

  if (data.data !== null) {
    console.log("data", data.data);
    data.data.image = getCustomUrl(data.data.image);

    return (
      <>
        <link rel="canonical" href={`https://aws-privatefinance.co.uk/business-finance/${slug.category}/${slug.slug}`} />
        <InnerBanner image={getLocalImageUrl(data?.data?.image)} />
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="tw-reset"
              dangerouslySetInnerHTML={{ __html: data?.data?.content || "" }}
            ></div>
          </div>
        </div>
      </>
    );
  } else {

    return (
      <div className="not-found ">
        <p>404 | Not Found.</p>
      </div>
    )

  }
}
