import { getCaseStudies } from "@/actions/caseStudy.actions";
import { getCaseStudyIndex } from "@/actions/caseStudyIndex.actions";
import Banner from "@/components/Banner";
import CaseStudiesPagination from "./components/CaseStudiesPagination";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { data } = await getCaseStudyIndex();
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

export default async function CaseStudies() {
  const [{ studies }, { data }] = await Promise.all([getCaseStudies(), getCaseStudyIndex()]);

  return (
    <>
      <Banner />
      <div className="section-container py-12">
        {data.content && (
          <div
            className="editor-container mb-8"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        )}
        <CaseStudiesPagination items={studies} itemsPerPage={12} />
      </div>
    </>
  );
}
