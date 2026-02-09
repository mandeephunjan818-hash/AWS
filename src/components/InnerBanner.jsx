"use client";

import { usePathname } from "next/navigation";
import BreadCrumb from "./BreadCrumb";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InnerBanner({
  isNewsPage = false,
  image = "https://awsmortgages.co.uk/wp-content/uploads/2020/04/Development-Finance-01-570x370.jpg",
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
    <div className="relative h-[65vh] md:h-[70vh] pt-28 md:pt-20">
      <img
        src={image}
        // src="/newtest.jpeg"
        alt={getPageTitle()}
        // width={2580}
        // height={1600}
        className="w-full h-full absolute inset-0 object-cover"
        // priority
      />

      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      <div className="relative z-10 h-full grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1 h-full flex items-center">
          <div className="bg-[#0A2B5C]/80 h-[95%] md:h-[85%] w-[90%] ml-[5%] rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>

            <div className="relative z-10 h-full flex flex-col justify-center px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <div className="w-16 h-1 bg-white mb-4"></div>

                <h1
                  className={`text-2xl ${
                    isNewsPage ? "md:text-4xl" : "md:text-5xl"
                  } font-semibold tracking-wide leading-tight mb-3`}
                >
                  {getPageTitle()}
                </h1>

                <div className="mt-4 mb-8">
                  <BreadCrumb isNewsPage={isNewsPage} align={"left"} />
                </div>

                <Link
                  href="/contact-us"
                  className="w-fit px-4 py-2 md:px-8 md:py-3 text-black bg-white text-[13px] md:text-[14px] font-medium tracking-wide text-custom-blue rounded-md shadow-lg hover:shadow-xl hover:scale-105  transition-all duration-300 inline-flex items-center gap-2"
                >
                  Speak to an Advisor
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1"></div>
      </div>
    </div>
  );
}
