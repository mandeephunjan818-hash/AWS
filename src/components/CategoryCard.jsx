import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const CategoryCard = ({ heading, image, imageAlt, slug }) => (
  <Link
    href={`/${slug}`}
    className="relative w-80 h-80 rounded-lg overflow-hidden group"
  >
    <div className="absolute inset-0">
      <Image
        src={image}
        alt={imageAlt}
        height={400}
        width={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-transform duration-300">
      <h3 className="text-xl tracking-wider text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        {heading}
      </h3>

      <div>
        <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 gap-2">
          <span className="text-sm font-light">Read More</span>
          <FaArrowRight size={12} />
        </div>
      </div>
    </div>
  </Link>
);
