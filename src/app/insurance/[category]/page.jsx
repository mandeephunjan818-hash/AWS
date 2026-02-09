import { getInsurance, getInsuranceBySlug } from "@/actions/insurance.actions";
import { getSubInsuranceBySlug } from "@/actions/subInsurance.actions";
import Banner from "@/components/Banner";
import Products from "@/components/InnerProduct";

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
    const paramsId = await params;
    const { data } = await getInsuranceBySlug(paramsId.category);
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
    }
}

export default async function InsurancePageCategory({ params }) {
    const paramsId = await params;
    const [{ data }, categoryData] = await Promise.all([getSubInsuranceBySlug(paramsId.category), getInsuranceBySlug(paramsId.category)]);
    return <>
        <Banner />
        <div className="section-container py-12">
            {categoryData?.data?.content && <div className="editor-container mb-8" dangerouslySetInnerHTML={{ __html: categoryData?.data?.content || "" }}></div>}
            <Products data={data} startSlug={paramsId.category} />
        </div>
    </>
}