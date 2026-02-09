"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function BreadCrumb({ isNewsPage = false, align = "center" }) {
  const pathname = usePathname();

  const formatPathSegment = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getBreadcrumbItems = () => {
    const pathSegments = pathname.split("/").filter(Boolean);

    return pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      return {
        label: formatPathSegment(segment),
        path,
        isLast: index === pathSegments.length - 1,
      };
    });
  };

  const items = getBreadcrumbItems();

  return (
    <div className="text-white">
      <div
        className={`flex flex-wrap ${
          align === "center" ? "justify-center" : ""
        } tracking-wider gap-2 ${
          isNewsPage ? "text-[13px]" : ""
        }  items-center`}
      >
        <Link
          href="/"
          className="hover:text-gray-200 transition-colors text-sm"
        >
          Home
        </Link>

        {items.map((item) => (
          <div key={item.path} className={`flex items-center`}>
            <BiChevronRight size={16} className="mr-2" />
            {item.isLast ? (
              <span className="text-sm line-clamp-1">{item.label}</span>
            ) : (
              <Link
                href={item.path}
                className="text-sm hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
