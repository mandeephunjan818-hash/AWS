import getLocalImageUrl from "@/lib/ChangeImageUrl";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function NewsCard({ card, index }) {
  return (
    <Link href={`/news/${card.slug}`} className="p-4 shadow-2xl" key={index}>
      <Image
        src={getLocalImageUrl(card.image)}
        width={400}
        height={400}
        alt="alt"
        className="object-cover w-full h-40"
      />
      <div className="mt-3">
        <h6 className="line-clamp-2 text-[#1D1A4E] font-semibold">
          {card.heading}
        </h6>
        <p className="text-[13px] tracking-wide text-gray-700 leading-loose mt-2 line-clamp-4s">
          {card.shortTitle}
        </p>
        <button className="w-full text-[13px] font-medium tracking-wide px-8 py-3 custom-blue  text-white inline-flex items-center justify-center gap-2 hover:-translate-y-2 duration-300 mt-3">
          Read More <FaChevronRight size={10} />
        </button>
      </div>
    </Link>
  );
}
