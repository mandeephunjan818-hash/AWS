import getLocalImageUrl from "@/lib/ChangeImageUrl";
import Image from "next/image";
import Link from "next/link";

function FormatData(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function CaseStudyCard({ card }) {
  return (
    <Link href={`/case-studies/${card.slug}`} className="relative h-full">
      <Image
        src={getLocalImageUrl(card.image)}
        width={1200}
        height={1200}
        alt="alt"
        className="h-72 md:h-96 object-cover w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end hover:bg-blue-950 transition-all duration-500 hover:opacity-95">
        <p className="text-white text-[14px] tracking-wide">
          {FormatData(card.date)}
        </p>
        <div className="w-full h-[1px] bg-white my-2"></div>
        <p className="text-white text-[14px] tracking-wide">{card.heading}</p>
      </div>
    </Link>
  );
}
