import {
  // getCaseStudies,
  getCaseStudyBySlug,
  getOtherCaseStudies,
} from "@/actions/caseStudy.actions";
import Banner from "@/components/Banner";
import { getCustomUrl } from "@/utils/urlTransform";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 300;

// export async function generateStaticParams() {
//   const { studies } = await getCaseStudies();
//   return studies.map((study) => ({
//     slug: study.slug,
//   }));
// }

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { study } = await getCaseStudyBySlug(paramsId.slug);
  return {
    title: study?.metaTitle,
    description: study?.metaDescription,
    keywords: study?.metaKeywords,
    openGraph: {
      title: study?.metaTitle,
      description: study?.metaDescription,
      images:
      {
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: `https://aws-privatefinance.co.uk/case-studies/${paramsId.slug}`, // Must be an absolute URL
    }
  };
}

export default async function Page({ params }) {
  const paramsSlug = await params;
  const [{ study }, { otherPosts }] = await Promise.all([
    getCaseStudyBySlug(paramsSlug.slug),
    getOtherCaseStudies(paramsSlug.slug, 7),
  ]);

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/case-studies/${paramsSlug.slug}`} />
      <Banner
        isNewsPage={true}
        caseStudy={true}
        caseStudyImage={getCustomUrl(study.image) || study.image}
      />
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="tw-reset"
            dangerouslySetInnerHTML={{ __html: study?.description || "" }}
          ></div>

          <div className="w-full lg:w-80">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Other Case Studies</h3>
                <div className="space-y-3">
                  {otherPosts.map((link, index) => (
                    <Link
                      key={index}
                      href={link.slug}
                      className="flex items-center lg:justify-between text-sm py-2 border-b border-gray-200 gap-2"
                    >
                      <Image
                        src={link.image}
                        width={80}
                        height={120}
                        alt={link.imageAlt}
                        className="rounded-lg h-16 object-cover"
                      />
                      <span className="line-clamp-3 text-[13px] tracking-wide">
                        {link.heading}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900 text-white p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">
                    Need Expert Advice?
                  </h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Our mortgage advisers are here to help you find the best
                    solution for your needs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <Link href="tel:+44(0)2045539750">
                        +44(0)204 553 9750
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <Link href="mailto:info@awsmortgages.co.uk">
                        info@awsmortgages.co.uk
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/contact-us"
                    className="mt-6 block text-center bg-white text-blue-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
