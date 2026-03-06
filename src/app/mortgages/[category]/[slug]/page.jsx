import {
  getEachSubMortgage,
  getSubMortgage,
} from "@/actions/subMortgage.actions";
import InnerBanner from "@/components/InnerBanner";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { data } = await getEachSubMortgage(paramsId.slug);
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
      url: `https://aws-privatefinance.co.uk/mortgages/${paramsId.category}/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function MortgagePageCategory({ params }) {
  const paramsId = await params;
  const { data } = await getEachSubMortgage(paramsId.slug);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/mortgages/${data.category}/${paramsId.slug}`} />
      <InnerBanner image={data.image} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="tw-reset"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          ></div>

          {/* <InnerSidebar /> */}
        </div>
      </div>
    </>
  );
}
