import { getHealthBySlug } from "@/actions/health.actions";
import { getSubHealthBySlug } from "@/actions/subHealth.actions";
import Banner from "@/components/Banner";
import Products from "@/components/InnerProduct";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
    const paramsId = await params;
    const { data } = await getHealthBySlug(paramsId.category);
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
            url: `https://aws-privatefinance.co.uk/health-care/${paramsId.category}`, // Must be an absolute URL
        }
    }
}

export default async function HealthPageCategory({ params }) {
    const paramsId = await params;
    const [{ data }, categoryData] = await Promise.all([
        getHealthBySlug(paramsId.category),
        getSubHealthBySlug(paramsId.category),
    ])
    return (
        <>
            <link rel="canonical" href={`https://aws-privatefinance.co.uk/health-care/${paramsId.category}`} />
            <Banner />
            <div className="section-container py-12">
                {data?.content && <div className="editor-container mb-8" dangerouslySetInnerHTML={{ __html: data?.content || "" }}></div>}
                <Products data={categoryData.data} startSlug={paramsId.category} />
            </div>
        </>
    )
}