import {
  getEachSubInsurance,
  getSubInsurance,
} from "@/actions/subInsurance.actions";
import InnerBanner from "@/components/InnerBanner";
import InnerSidebar from "@/components/InnerSidebar";

export const revalidate = 2592000;

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
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
    }
  };
}

export default async function InsurancePageCategory({ params }) {
  const paramsId = await params;
  const { data } = await getEachSubInsurance(paramsId.slug);
  return (
    <>
      <InnerBanner image={data.image} />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="editor-container flex-1"
            dangerouslySetInnerHTML={{ __html: data.content || "" }}
          ></div>

          {/* <InnerSidebar /> */}
        </div>
      </div>
    </>
  );
}
