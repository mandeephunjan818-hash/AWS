"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MortgageMenu({ direction, onLinkClick, data }) {
  // ── Helper to render a single category column ──
  const renderCategoryColumn = (category, idx) => (
    <div key={idx}>
      {category.title && (
        <Link
          onClick={onLinkClick}
          href={category.link || "#"}
          className="block text-[14px] font-semibold text-gray-800 mb-4"
        >
          {category.title}
        </Link>
      )}
      <ul className="space-y-3">
        {(category.items || []).map((link, i) => (
          <li key={i}>
            <Link
              href={link.linkUrl || link.link}
              className="text-gray-600 hover:custom-blue-text transition-colors block text-[13px]"
              onClick={onLinkClick}
            >
              {link.linkName || link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // ── Determine if we are in dynamic multi‑category mode ──
  const isDynamic = !!data.categories;

  // ── Build the column pairs ──
  let categoryPairs = [];
  if (isDynamic) {
    // Group categories into rows of 2
    const cats = data.categories.filter(
      (cat) => cat.heading && Array.isArray(cat.items)
    );
    for (let i = 0; i < cats.length; i += 2) {
      categoryPairs.push({
        left: {
          title: cats[i].heading,
          link: `/health-care/${cats[i].slug}`,
          items: cats[i].items,
        },
        right: cats[i + 1]
          ? {
              title: cats[i + 1].heading,
              link: `/health-care/${cats[i + 1].slug}`,
              items: cats[i + 1].items,
            }
          : null,
      });
    }
  }

  return (
    <motion.div
      key="mortgage-menu"
      custom={direction}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed bg-white shadow-lg border-t border-gray-100"
      style={{
        top: "var(--menu-top, 80px)",
        left: "var(--menu-left, 48px)",
        right: "var(--menu-right, auto)",
      }}
    >
      <div className="section-container max-w-6xl px-0 py-0 pr-12">
        <div className="flex">
          {/* Sidebar (same as before) */}
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

          {/* Main content area */}
          <div className="flex-1 py-10">
            {!isDynamic ? (
              /* Static two‑column layout (existing menus) */
              <div className="flex">
                <div className="ml-10">
                  {data.linkCategory1 && (
                    <Link
                      onClick={onLinkClick}
                      href={data.linkCategoryLink1}
                      className="block text-[14px] font-semibold text-gray-800 mb-4"
                    >
                      {data.linkCategory1}
                    </Link>
                  )}
                  <ul className="space-y-3">
                    {data.links1.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.linkUrl}
                          className="text-gray-600 hover:custom-blue-text transition-colors block text-[13px]"
                          onClick={onLinkClick}
                        >
                          {link.linkName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {data.linkCategory2 && (
                  <>
                    <div className="h-auto w-[0.5px] bg-gray-200 mx-20" />
                    <div>
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
                  </>
                )}
              </div>
            ) : (
              /* Dynamic multi‑category layout (healthcare) */
              <div className="flex flex-col gap-8">
                {categoryPairs.map((pair, idx) => (
                  <div key={idx} className="flex ml-10">
                    <div className="min-w-[200px]">
                      {renderCategoryColumn(pair.left, `${idx}-left`)}
                    </div>

                    {pair.right && (
                      <>
                        <div className="h-auto w-[0.5px] bg-gray-200 mx-20" />
                        <div className="min-w-[200px]">
                          {renderCategoryColumn(pair.right, `${idx}-right`)}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}