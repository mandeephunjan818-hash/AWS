import {
  getEachSubInsurance,
  getSubInsurance,
  getSubInsuranceBySlugCategory
} from "@/actions/subInsurance.actions";
import InnerBanner from "@/components/InnerBanner";
import getLocalImageUrl from "@/lib/ChangeImageUrl";
import { getCustomUrl } from "@/utils/urlTransform";

export const revalidate = 2592000;

export async function generateStaticParams() {
  const data = await getSubInsurance();
  // console.log(data);
  return ((data.data ? data.data : []).map((items) => ({
    category: items?.category || "",
    slug: items?.slug || ""
  })))
}

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { data } = await getEachSubInsurance(paramsId.slug);
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
      url: `https://aws-privatefinance.co.uk/insurance/${paramsId.category}/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function InsurancePageCategory({ params }) {
  const paramsId = await params;
  const data = await getSubInsuranceBySlugCategory(paramsId);

  if (data?.data !== null) {
    console.log(data.data);
    data.data.image = getCustomUrl(data.data.image);
    return (
      <>
        <link rel="canonical" href={`https://aws-privatefinance.co.uk/insurance/${data.data.category}/${paramsId.slug}`} />
        <InnerBanner image={getLocalImageUrl(data.data.image)} />
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="tw-reset"
              dangerouslySetInnerHTML={{ __html: data.data.content || "" }}
            ></div>

            {/* <InnerSidebar /> */}
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
