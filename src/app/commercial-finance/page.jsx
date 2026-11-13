import { getCommercialFinances } from "@/actions/commercialFinance.actions";
import { getCommercialIndex } from "@/actions/commercialIndex.actions";
import Banner from "@/components/Banner";
import Products from "@/components/InnerProduct";

export const revalidate = 2592000;

export async function generateMetadata() {
    const indexData = await getCommercialIndex();
    return {
        title: indexData?.data?.metaTitle,
        description: indexData?.data?.metaDescription,
        keywords: indexData?.data?.metaKeywords,
        openGraph: {
            title: indexData?.metaTitle,
            description: indexData?.metaDescription,
            images:
            {
                url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
            },
            type: 'website',
            url: 'https://aws-privatefinance.co.uk/commercial-finance', // Must be an absolute URL
        }
    }
}

export default async function CommerciaFinance() {
    const [{ data }, indexData] = await Promise.all([getCommercialFinances(), getCommercialIndex()])
    return (
        <>
            <link rel="canonical" href={`https://aws-privatefinance.co.uk/commercial-finance`} />
            <Banner />
            <div className="section-container py-12">
                {indexData.data.content && <div className="editor-container mb-8" dangerouslySetInnerHTML={{ __html: indexData?.data?.content || "" }}></div>}
                <Products data={data} startSlug='commercial-finance' />
            </div>
        </>
    )
}