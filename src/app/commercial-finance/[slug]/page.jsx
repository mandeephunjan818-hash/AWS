import {
  getEachCommercialFinance,
} from "@/actions/commercialFinance.actions";
import InnerBanner from "@/components/InnerBanner";
import getLocalImageUrl from "@/lib/ChangeImageUrl";
import { getCustomUrl } from "@/utils/urlTransform";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { finance } = await getEachCommercialFinance(paramsId.slug);
  return {
    title: finance?.metaTitle,
    description: finance?.metaDescription,
    keywords: finance?.metaKeywords,
    openGraph: {
      title: finance?.metaTitle,
      description: finance?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: `https://aws-privatefinance.co.uk/commercial-finance/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function CommercialFinancePage({ params }) {
  const paramsId = await params;
  const { finance } = await getEachCommercialFinance(paramsId.slug);
  finance.image = getCustomUrl(finance.image);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/commercial-finance/${paramsId.slug}`} />
      <InnerBanner image={getLocalImageUrl(finance.image)} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="tw-reset"
            dangerouslySetInnerHTML={{ __html: finance.content || "" }}
          ></div>

          {/* <InnerSidebar /> */}
        </div>
      </div>
    </>
  );
}
