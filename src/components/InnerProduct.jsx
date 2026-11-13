import getLocalImageUrl from "@/lib/ChangeImageUrl";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Products({ startSlug = "", data }) {
  return (
    <div className="relative">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-lg overflow-hidden "
            >
              <Link
                href={`${startSlug}/${item.slug}`}
                className="block h-48 overflow-hidden"
              >
                <Image
                  src={getLocalImageUrl(item.image)}
                  alt={item.heading}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-6">
                <Link href={`${startSlug}/${item.slug}`}>
                  <h3 className="text-[17px] tracking-wide mb-2">
                    {item.heading}
                  </h3>
                </Link>
                <p className="text-[13px] text-gray-700 tracking-wide leading-loose">
                  {item.shortContent}
                </p>
                <div className="h-[1px] w-full bg-gray-300 my-3"></div>
                <Link
                  href={`${startSlug}/${item.slug}`}
                  className="text-[13px] font-medium text-blue-800 inline-flex items-center gap-2 hover:gap-3 duration-300"
                >
                  Know More
                  <FaChevronRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
