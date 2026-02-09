"use client";

import { usePathname } from "next/navigation";
import BreadCrumb from "./BreadCrumb";
import Image from "next/image";

export default function Banner({
  isNewsPage = false,
  caseStudy = false,
  caseStudyImage,
}) {
  const pathname = usePathname();

  const getPageTitle = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "Home";

    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="relative min-h-60 max-h-[28rem] mt-[81px]">
      <Image
        src={`${caseStudy ? caseStudyImage : "/banner1.jpg"}`}
        alt="alt"
        width={1200}
        height={400}
        className="w-full h-full absolute inset-0 z-[-1] object-cover"
      />
      <div className="absolute inset-0 z-[-1] bg-black bg-opacity-40"></div>
      <div className="text-white text-center">
        <div className="section-container w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex flex-col justify-center">
          <h1
            className={`text-2xl mb-1.5 ${
              isNewsPage ? "md:text-3xl" : "md:text-4xl"
            } font-medium tracking-wide`}
          >
            {getPageTitle()}
          </h1>
          <BreadCrumb isNewsPage={isNewsPage} />
        </div>
      </div>
    </div>
  );
}
