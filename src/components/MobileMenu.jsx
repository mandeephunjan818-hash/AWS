"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiChevronRight, HiXMark, HiChevronDown } from "react-icons/hi2";

// ---------------------------------------------------------------------------
// Rich mobile menu data for items that have sub-categories (left-side / menu1)
// ---------------------------------------------------------------------------
const mobileMenu1Data = [
  {
    name: "Mortgages",
    link: "/mortgages",
    megaMenu: true,
    featured: { image: "/nav1.avif" },
    categories: [
      {
        title: "Residential Mortgages",
        link: "/mortgages/residential-mortgages",
        items: [
          { name: "First time buyer", link: "/mortgages/residential-mortgages/first-time-buyer" },
          { name: "Remortgage", link: "/mortgages/residential-mortgages/remortgage" },
          { name: "Contractor mortgage", link: "/mortgages/residential-mortgages/contractor-mortgage" },
          { name: "Large Loans", link: "/mortgages/residential-mortgages/large-loans" },
          { name: "Professional mortgages", link: "/mortgages/residential-mortgages/professional-mortgages" },
          { name: "Let to Buy", link: "/mortgages/residential-mortgages/let-to-buy" },
        ],
      },
      {
        title: "Buy to let and Specialist mortgages",
        link: "/mortgages/buy-to-let-and-specialist-mortgages",
        items: [
          { name: "International mortgages", link: "/mortgages/buy-to-let-and-specialist-mortgages/international-mortgages" },
          { name: "Buy to let", link: "/mortgages/buy-to-let-and-specialist-mortgages/buy-to-let" },
          { name: "Limited company Buy to let", link: "/mortgages/buy-to-let-and-specialist-mortgages/limited-company-buy-to-let" },
          { name: "Portfolio Mortgages", link: "/mortgages/buy-to-let-and-specialist-mortgages/portfolio-mortgages" },
          { name: "Refinancing your investment", link: "/mortgages/buy-to-let-and-specialist-mortgages/refinancing-your-investment" },
        ],
      },
    ],
  },
  {
    name: "Commercial Finance",
    link: "/commercial-finance",
    megaMenu: true,
    featured: { image: "/nav2.avif" },
    categories: [
      {
        items: [
          { name: "Commercial Mortgage", link: "/commercial-finance/commercial-mortgage" },
          { name: "Bridging Loans", link: "/commercial-finance/bridging-loans" },
          { name: "Development Finance", link: "/commercial-finance/development-finance" },
          { name: "Stabilisation Loans", link: "/commercial-finance/stabilisation-loans" },
        ],
      },
    ],
  },
  {
    name: "Insurance",
    link: "/insurance",
    megaMenu: true,
    featured: { image: "/nav23.avif" },
    categories: [
      {
        title: "Mortgage Protection",
        link: "/insurance/mortgage-protection",
        items: [
          { name: "Life Cover", link: "/insurance/mortgage-protection/life-cover" },
          { name: "Critical Illness Cover", link: "/insurance/mortgage-protection/critical-illness-cover" },
          { name: "Income Protection", link: "/insurance/mortgage-protection/income-protection" },
          { name: "Home Insurance", link: "/insurance/mortgage-protection/home-insurance" },
        ],
      },
      {
        title: "Insurance",
        link: "/insurance/insurance",
        items: [
          { name: "Shareholder protection", link: "/insurance/insurance/shareholder-protection" },
          { name: "Directors Insurance", link: "/insurance/insurance/directors-insurance" },
          { name: "Relevant Life cover", link: "/insurance/insurance/relevant-life-cover" },
          { name: "Key man Insurance", link: "/insurance/insurance/key-man-insurance-life-and-cic" },
          { name: "Private health care", link: "/insurance/insurance/private-healthcare" },
          { name: "Group Employee Benefits", link: "/insurance/insurance/group-employee-benefits" },
          { name: "Buildings insurance", link: "/insurance/insurance/buildings-insurance" },
        ],
      },
    ],
  },
  {
    name: "Business Finance",
    link: "/business-finance",
    megaMenu: true,
    featured: { image: "/nav4.avif" },
    categories: [
      {
        title: "Healthcare Finance",
        link: "/business-finance/healthcare-finance",
        items: [
          { name: "Finance for Care Homes", link: "/business-finance/healthcare-finance/finance-for-care-homes" },
          { name: "Finance for GP Partners", link: "/business-finance/healthcare-finance/finance-for-gp-partners" },
          { name: "Finance for Dentists", link: "/business-finance/healthcare-finance/finance-for-dentists" },
          { name: "Finance for Pharmacists", link: "/business-finance/healthcare-finance/finance-for-pharmacists" },
          { name: "Finance For Opticians", link: "/business-finance/healthcare-finance/finance-for-opticians" },
          { name: "Professional Mortgages", link: "/business-finance/healthcare-finance/professional-mortgages" },
        ],
      },
      {
        title: "Business Funding",
        link: "/business-finance/business-funding",
        items: [
          { name: "Unsecured Lending", link: "/business-finance/business-funding/unsecured-lending" },
          { name: "Invoice Finance", link: "/business-finance/business-funding/invoice-finance" },
          { name: "Asset based lending", link: "/business-finance/business-funding/asset-based-finance" },
          { name: "Cashflow lending", link: "/business-finance/business-funding/cashflow-finance" },
          { name: "Pension Backed funding", link: "/business-finance/business-funding/pension-backed-funding" },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const slideVariants = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// ---------------------------------------------------------------------------
// Component
// Props:
//   menu1  – navbarMenu1 from Navbar (used to build dynamic Health Care entry)
//   menu2  – navbarMenu2 from Navbar (plain links rendered in the BOTTOM section)
//   isOpen – boolean
//   onClose – callback
//   healthcareData – resolved healthcare sub-pages (same shape as MortgageMenu data)
// ---------------------------------------------------------------------------
export default function MobileMenu({ menu1, menu2, isOpen, onClose, healthcareData }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  // Reset states when menu closes
  const handleClose = () => {
    setActiveCategory(null);
    setExpandedItems({});
    onClose();
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const healthCareEntry = (() => {
    if (!healthcareData || !Array.isArray(healthcareData.categories)) return null;

    return {
      name: "Health Care",
      link: "/health-care",
      megaMenu: true,
      categories: healthcareData.categories.map((cat) => ({
        title: cat.heading,
        link: `/health-care/${cat.slug}`,
        items: cat.items,
      })),
    };
  })();

  // ── TOP section: mobileMenu1Data (Mortgages … Business Finance)
  //    + Health Care appended if data is ready
  const expandableItems = healthCareEntry
    ? [...mobileMenu1Data, healthCareEntry]
    : mobileMenu1Data;

  // ── BOTTOM section: menu2 items that are NOT megaMenu (plain links only)
  //    Health Care is already handled above, so we skip it here.
  const plainLinks = Array.isArray(menu2)
    ? menu2.filter((item) => !item.megaMenu)
    : [];

  // const additionalLink = { name: "Meet the Team", link: "/meet-the-team" };
  const allPlainLinks = [...plainLinks];

  // ---------------------------------------------------------------------------
  const renderSubItems = (items) => (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="pl-4 space-y-2"
    >
      {(items || []).map((item, idx) => (
        <Link
          key={idx}
          href={item.link || "#"}
          onClick={handleClose}
          className="block p-2 text-gray-600 hover:text-blue-800 transition-colors tracking-wide"
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          <div className="fixed inset-y-0 right-0 w-full sm:w-[380px] z-50 flex">
            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="w-full bg-white flex flex-col h-full"
            >
              {/* Header */}
              <div className="custom-blue text-white p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {activeCategory ? activeCategory.name : "Menu"}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-blue-800 rounded-full transition-colors"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto">
                {!activeCategory ? (
                  <div className="p-4 space-y-6">

                    {/* ── TOP: expandable items (navbar1 position = left side on desktop) */}
                    <div className="space-y-2">
                      {expandableItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => setActiveCategory(item)}
                          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors tracking-wide"
                        >
                          <span className="font-medium">{item.name}</span>
                          <HiChevronRight className="w-5 h-5 text-gray-400" />
                        </button>
                      ))}
                    </div>

                    <div className="h-px bg-gray-200" />

                    {/* ── BOTTOM: plain links (navbar2 position = right side on desktop) */}
                    <div className="space-y-2">
                      {plainLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.link}
                          onClick={handleClose}
                          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors tracking-wide"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                ) : (
                  /* Sub-category drill-down */
                  <div className="h-full">
                    <div className="p-4">
                      <button
                        onClick={() => {
                          setActiveCategory(null);
                          setExpandedItems({});
                        }}
                        className="flex items-center text-gray-600 mb-4 tracking-wide"
                      >
                        <HiChevronRight className="w-5 h-5 rotate-180" />
                        <span>Back to menu</span>
                      </button>
                    </div>

                    <div className="px-4 pb-4 space-y-4">
                      {(activeCategory.categories || []).map((category, idx) => (
                        <div
                          key={idx}
                          className="border-b border-gray-100 last:border-0"
                        >
                          {category.title ? (
                            <>
                              <button
                                onClick={() =>
                                  toggleExpanded(`${activeCategory.name}-${idx}`)
                                }
                                className="w-full flex items-center justify-between p-3 text-gray-800 hover:bg-gray-50 transition-colors group tracking-wide"
                              >
                                <Link
                                  href={category.link || "#"}
                                  onClick={handleClose}
                                  className="font-medium group-hover:text-blue-800"
                                >
                                  {category.title}
                                </Link>
                                <motion.div
                                  animate={{
                                    rotate: expandedItems[`${activeCategory.name}-${idx}`] ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <HiChevronDown className="w-5 h-5 text-gray-400" />
                                </motion.div>
                              </button>
                              <AnimatePresence>
                                {expandedItems[`${activeCategory.name}-${idx}`] &&
                                  renderSubItems(category.items)}
                              </AnimatePresence>
                            </>
                          ) : (
                            <div className="py-2 tracking-wide">
                              {renderSubItems(category.items)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}