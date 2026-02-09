import {
  getCommercialFinances,
  getEachCommercialFinance,
} from "@/actions/commercialFinance.actions";
import InnerBanner from "@/components/InnerBanner";

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
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
    }
  };
}

export default async function CommercialFinancePage({ params }) {
  const paramsId = await params;
  const { finance } = await getEachCommercialFinance(paramsId.slug);

  return (
    <>
      <InnerBanner image={finance.image} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="editor-container flex-1"
            dangerouslySetInnerHTML={{ __html: finance.content || "" }}
          ></div>

          {/* <InnerSidebar /> */}
        </div>
      </div>
    </>
  );
}
