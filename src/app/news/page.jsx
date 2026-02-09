import { getNewsIndex } from "@/actions/newsIndex.actions";
import { getNewsStudies } from "@/actions/newStudy.actions";
import Banner from "@/components/Banner";
import NewsPagination from "./components/NewsPagination";

export const revalidate = 2592000;

export async function generateMetadata() {
  const { data } = await getNewsIndex();
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

export default async function News() {

  const [{ studies }, { data }] = await Promise.all([getNewsStudies(), getNewsIndex()]);

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
        <NewsPagination items={studies} itemsPerPage={12} />
      </div>
    </>
  );
}
