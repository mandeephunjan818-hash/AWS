import { FaChevronRight } from "react-icons/fa";
import CaseStudyCard from "./CaseStudyCard";
import { getCaseStudies } from "@/actions/caseStudy.actions";
import Link from "next/link";

export default async function CaseStudies() {
  const { studies } = await getCaseStudies(4);
  return (
    <div className="bg-gray-100">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <h4 className="text-[22px] md:text-[27px] text-center md:text-left">
              Case Studies
            </h4>
            <p className="text-[13px] md:text-[14px] tracking-wide leading-loose text-gray-700 text-center md:text-left">
              See How We’ve Made Homeownership Happen
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden custom-blue text-white px-4 md:px-6 py-2 md:py-2.5 md:inline-flex items-center gap-2 hover:-translate-y-2 duration-300 text-[13px] md:text-[14px] tracking-wide w-fit"
          >
            View All <FaChevronRight size={10} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0.5 mt-7">
          {studies?.map((card, index) => (
            <CaseStudyCard key={index} card={card} index={index} />
          ))}
        </div>
        <div className="flex md:hidden items-center justify-center mt-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center custom-blue text-white px-4 md:px-6 py-2 md:py-2.5 gap-2 hover:-translate-y-2 duration-300 text-[13px] md:text-[14px] tracking-wide w-fit"
          >
            View All <FaChevronRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
}
