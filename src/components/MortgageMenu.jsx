"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MortgageMenu({ direction, onLinkClick, data }) {
  return (
    <motion.div
      key="mortgage-menu"
      custom={direction}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed left-12 right-80s bg-white shadow-lg border-t border-gray-100"
      style={{
        top: "var(--menu-top, 105px)",
      }}
    >
      <div className="section-container max-w-6xl px-0 py-0 pr-12">
        <div className="flex">
          <div className="max-w-80 w-full bg-gray-100 px-6 py-6">
            <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[16px] tracking-wide font-medium text-gray-800 mb-3">
              {data.sidebarHeading}
            </h3>
            <p className="text-[13px] tracking-wider text-gray-600 mb-4">
              {data.sidebarDescription}
            </p>
            <Link
              href="/contact-us"
              className="custom-blue text-white py-1.5 px-3.5 text-[13px] inline-block rounded-lg"
              onClick={onLinkClick}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex-1 flex py-10">
            <div className="ml-10">
              <div>
                <Link
                  onClick={onLinkClick}
                  href={data.linkCategoryLink1}
                  className="block text-[15px] font-semibold text-gray-800 mb-4"
                >
                  {data.linkCategory1}
                </Link>
                <ul className="space-y-3">
                  {data.links1.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.linkUrl}
                        className="text-gray-600 hover:custom-blue-text transition-colors block text-sm"
                        onClick={onLinkClick}
                      >
                        {link.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h-60 w-[0.5px] bg-gray-200 mx-20"></div>
           {
            data?.linkCategory2 &&  <div>
              <Link
                onClick={onLinkClick}
                href={data.linkCategoryLink2}
                className="block text-[15px] font-semibold text-gray-800 mb-4"
              >
                {data.linkCategory2}
              </Link>
              <ul className="space-y-3">
                {data.links2.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.linkUrl}
                      className="text-gray-600 hover:custom-blue-text transition-colors block text-sm"
                      onClick={onLinkClick}
                    >
                      {link.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> 
           }
          </div>
        </div>
      </div>
    </motion.div>
  );
}
