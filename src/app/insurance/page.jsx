import { getInsurance } from "@/actions/insurance.actions";
import { getInsuranceIndex } from "@/actions/insuranceIndex.model";
import Banner from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";
import getLocalImageUrl from "@/lib/ChangeImageUrl";

export const revalidate = 2592000;

export async function generateMetadata() {
    const { data } = await getInsuranceIndex();
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
            url: 'https://aws-privatefinance.co.uk/insurance', // Must be an absolute URL
        }
    }
}

export default async function Insurance() {
    const [{ data }, indexData] = await Promise.all([getInsurance(), getInsuranceIndex()]);
    console.log("data", indexData)
    return (
        <>  
            <link rel="canonical" href={`https://aws-privatefinance.co.uk/insurance`} />
            <Banner />
            <div>
                <div className="section-container py-12">
                    {indexData.data.content && <div className="editor-container mb-8" dangerouslySetInnerHTML={{ __html: indexData?.data?.content || "" }}></div>}
                    <div className="flex flex-wrap justify-center gap-8">
                        {data?.map((item, index) => (
                            <CategoryCard
                                key={index}
                                heading={item.heading}
                                image={getLocalImageUrl(item.image)}
                                imageAlt={item.imageAlt}
                                slug={`insurance/${item.slug}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}