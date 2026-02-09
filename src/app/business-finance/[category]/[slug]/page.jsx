import {
  getBusinessFunding,
  getBusinessFundingBySlug,
} from "@/actions/businessFunding.actions";
import InnerBanner from "@/components/InnerBanner";


export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { finance } = await getBusinessFundingBySlug(paramsId.slug);
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

export default async function BusinessFundingPage({ params }) {
  const slug = await params;
  const slugParams = slug.slug;
  const { data } = await getBusinessFundingBySlug(slugParams);

  return (
    <>
      <InnerBanner image={data?.image} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="editor-container flex-1"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          ></div>
        </div>
      </div>
    </>
  );
}
