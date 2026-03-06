import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import NewsCard from "./NewsCard";
import { getNewsStudies } from "@/actions/newStudy.actions";
import Link from "next/link";

export default async function News() {
  const { studies } = await getNewsStudies(2);
  return (
    <div className="section-container py-12 flex flex-col md:flex-row gap-6 items-center">
      <div className="md:w-[40%]">
        <span className="mb-3 block text-sm text-gray-700">Latest Updates</span>
        <h5 className="text-[27px] md:text-[32px] lg:text-[36px] leading-normal">
          Your Trusted Source for Mortgage News & Expert Advice
        </h5>
        <Link
          href="/news"
          className="text-[13px] font-medium tracking-wide px-8 py-3 custom-blue text-white inline-flex items-center gap-2 hover:-translate-y-2 duration-300 mt-3"
        >
          View All News <FaChevronRight size={10} />
        </Link>
        <div className="text-[#1D1A4E] text-[17px] font-semibold my-3">
          5 Star Rated Service
        </div>
        <Image
          src="/star.png"
          width={100}
          height={100}
          alt="alt"
          className="mt-3"
        />
      </div>
      <div className="md:w-[60%] grid sm:grid-cols-2 gap-6">
        {studies?.map((card, index) => (
          <NewsCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}
