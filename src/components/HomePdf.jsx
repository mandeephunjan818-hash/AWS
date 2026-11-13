import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function HomePdf() {
  const data = [
    {
      image: "/pdf1.webp",
      heading: "How to & All you need to know to own a property.",
      downloadPdf:
        "/AWS-Financial-Services-The-How-to-All-you-need-to-know-to-own-a-property.pdf",
    },
    {
      image: "/pdf2.webp",
      heading: "About AWS Financial Services.",
      downloadPdf: "/About-AWS-Financial-Services.pdf",
    },
  ];
  return (
    <div className="bg-[#0A2B5C] text-white">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 max-w-lg">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="alt"
              className=""
            />
            <div className="flex flex-col justify-center">
              <h4 className="text-[15px] md:text-[17px] font-medium leading-relaxed">
                {item.heading}
              </h4>
              <Link
                href={item.downloadPdf}
                target="_blank"
                className="mt-3 w-fit rounded-full text-xs px-5 py-2 inline-flex items-center gap-2 border border-black hover:-translate-y-1.5 duration-300 text-[14px] tracking-wide"
              >
                <FaDownload size={11} />
                Download{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
