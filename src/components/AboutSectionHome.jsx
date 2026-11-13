import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function AboutSectionHome({ aboutData }) {
  const defaultData = {
    image: "/about-page.webp",
    imageAlt: "About AWS Private Finance",
    title: "We Have More Than 50+ Years of Experience",
    content:
      "AWS Private Finance is an award-winning specialist mortgage and protection advisory business. Established in 2015 by managing partner Ashley Slade, we are whole-of-market brokers, offering clients – many of whom are professionals, self-employed and contractors looking for large mortgages – a tailored financial solution, best suited to their particular needs.",
    points: [
      { text: "Commercial mortgages", order: 0 },
      { text: "Development Finance", order: 1 },
      { text: "Buy-to-let mortgages", order: 2 },
      { text: "Pension-backed funding", order: 3 },
      { text: "Self-build mortgages", order: 4 },
      { text: "Home Insurance", order: 5 },
    ],
  };

  const data = aboutData || defaultData;

  // Convert legacy string array to new format and sort by order
  const processedPoints = data.points
    ? data.points
        .map((point, index) => {
          if (typeof point === "string") {
            // Legacy format
            return { text: point, order: index };
          } else {
            // New format
            return { text: point.text, order: point.order };
          }
        })
        .sort((a, b) => a.order - b.order)
    : defaultData.points;

  return (
    <div className="section-container flex flex-col lg:flex-row gap-6 items-center">
      <div className="flex-1 w-full lg:h-[410px]">
        <Image
          src={data.image}
          width={1200}
          height={1400}
          alt={data.imageAlt}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[22px] md:text-[27px] mb-2 md:mb-0">
          {data.title}
        </h3>
        <p className="text-[13px] md:text-[14px] tracking-wide leading-loose text-gray-700 text-justify">
          {data.content}
        </p>
        <h6 className="md:text-[17px] text-[#1D1A4E] font-medium my-3">
          We offer variety of mortgage and protection services, including
        </h6>
        <ul className="grid grid-cols-2 gap-2">
          {processedPoints.map((point, index) => (
            <div
              key={`${point.text}-${index}`}
              className="flex gap-1 items-center"
            >
              <FaChevronRight size={11} />
              <li className="text-[13px] md:text-sm tracking-wide text-gray-700">
                {point.text}
              </li>
            </div>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row sm:items-center mt-3 mb-4">
          <p className="md:text-[17px] tracking-wide text-[#1D1A4E] font-semibold">
            For More Information :
          </p>
          <Link
            href="tel:+44(0)2045539750"
            className="md:text-[17px] tracking-wide custom-blue-text font-semibold"
          >
            +44(0)204 553 9750
          </Link>
        </div>
        <Link
          href="/about-us"
          className="text-sm px-4 py-2 custom-blue text-white"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}
