import { getMortage, getMortgageBySlug } from "@/actions/mortgage.actions";
import { getSubMortgageBySlug } from "@/actions/subMortgage.actions";
import Banner from "@/components/Banner";
import Products from "@/components/InnerProduct";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
    const paramsId = await params;
    const { data } = await getMortgageBySlug(paramsId.category);
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
            url: `https://aws-privatefinance.co.uk/mortgages/${paramsId.category}`, // Must be an absolute URL
        }
    }
}

export default async function MortgagePageCategory({ params }) {
    const paramsId = await params;
    const [{ data }, categoryData] = await Promise.all([
        getMortgageBySlug(paramsId.category),
        getSubMortgageBySlug(paramsId.category),
    ])
    return (
        <>
            <link rel="canonical" href={`https://aws-privatefinance.co.uk/mortgages/${paramsId.category}`} />
            <Banner />
            <div className="section-container py-12">
                {data?.content && <div className="editor-container mb-8" dangerouslySetInnerHTML={{ __html: data?.content || "" }}></div>}
                <Products data={categoryData.data} startSlug={paramsId.category} />
            </div>
        </>
    )
}