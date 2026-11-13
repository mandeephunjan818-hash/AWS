import {
  getNewsStudyBySlug,
  getOtherPosts,
} from "@/actions/newStudy.actions";
import ContactCta from "@/components/ContactCta";
import InnerBanner from "@/components/InnerBanner";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getCustomUrl } from "@/utils/urlTransform";
import getLocalImageUrl from "@/lib/ChangeImageUrl";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { study } = await getNewsStudyBySlug(paramsId.slug);
  return {
    title: study.metaTitle || paramsId.slug,
    description: study.metaDescription || "AWS Private Finance",
    keywords: study.metaKeywords,
    openGraph: {
      title: study?.metaTitle,
      description: study?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: `https://aws-privatefinance.co.uk/news/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function NewsPage({ params }) {
  const paramsSlug = await params;
  const [{ study }, { otherPosts }] = await Promise.all([
    getNewsStudyBySlug(paramsSlug.slug),
    getOtherPosts(paramsSlug.slug, 10),
  ]);

  study.image = getCustomUrl(study.image);

  console.log(study);
  return (
    <>

      <link rel="canonical" href={`https://aws-privatefinance.co.uk/news/${paramsSlug.slug}`} />

      <InnerBanner image={getLocalImageUrl(study?.image)} isNewsPage={true} />

      <div className="section-container py-16">

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="tw-reset">
              {parse(study.description)}
            </div>
          </div>

          <div className="w-full lg:w-80">

            <div className="sticky top-8 space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Other News</h3>
                <div className="space-y-3">
                  {otherPosts.map((link, index) => (
                    <Link
                      key={index}
                      href={link.slug}
                      className="flex items-center lg:justify-between text-sm py-2 border-b border-gray-200 gap-2"
                    >
                      <Image
                        src={getLocalImageUrl(link.image)}
                        width={80}
                        height={120}
                        alt={link.imageAlt}
                        className="rounded-lg h-16 object-cover"
                      />
                      <span className="line-clamp-3 text-[13px] tracking-wide">
                        {link?.heading}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <ContactCta />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
