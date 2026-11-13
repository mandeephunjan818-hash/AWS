"use client";

import Image from "next/image";
import Link from "next/link";
import LogoWithoutBg from "../../public/aws-logo1.png";
import LogoDark from "../../public/logo-dark.webp";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import MortgageMenu from "./MortgageMenu";
import SimpleDropdown from "./SimpleDropdown";
import { getHealthNames } from "@/actions/health.actions";
import { getSubHealth } from "@/actions/subHealth.actions";

const navbarMenu1 = [
  {
    name: "Mortgages",
    link: "/mortgages",
    megaMenu: true,
    type: "mega",
  },
  {
    name: "Commercial Finance",
    link: "/commercial-finance",
    megaMenu: true,
    type: "mega",
    links: [
      {
        name: "Commercial Mortgage",
        link: "/commercial-finance/commercial-mortgage",
      },
      {
        name: "Bridging Loans",
        link: "/commercial-finance/bridging-loans",
      },
      {
        name: "Development Finance",
        link: "/commercial-finance/development-finance",
      },
    ],
  },
  {
    name: "Insurance",
    link: "/insurance",
    megaMenu: true,
    type: "mega",
  },
  {
    name: "Business Finance",
    link: "/business-finance",
    megaMenu: true,
    type: "mega",
  },
  {
    name: "Health Care",
    link: "/health-care",
    megaMenu: true,
    type: "mega",
  },
];

const data1 = {
  image: "/nav1.avif",
  imageAlt: "Mortgage Services",
  sidebarHeading: "Expert Mortgage Advice",
  sidebarDescription:
    "Get personalized mortgage solutions tailored to your needs with our expert advisors.",
  linkCategory1: "Residential Mortgages",
  linkCategoryLink1: "/mortgages/residential-mortgages",
  links1: [
    { linkName: "First time buyer", linkUrl: "/mortgages/residential-mortgages/first-time-buyer" },
    { linkName: "Remortgage", linkUrl: "/mortgages/residential-mortgages/remortgage" },
    { linkName: "Contractor mortgage", linkUrl: "/mortgages/residential-mortgages/contractor-mortgage" },
    { linkName: "Large Loans", linkUrl: "/mortgages/residential-mortgages/large-loans" },
    { linkName: "Professional mortgages", linkUrl: "/mortgages/residential-mortgages/professional-mortgages" },
    { linkName: "Let to Buy", linkUrl: "/mortgages/residential-mortgages/let-to-buy" },
  ],
  linkCategory2: "Buy to let and Specialist mortgages",
  linkCategoryLink2: "/mortgages/buy-to-let-and-specialist-mortgages",
  links2: [
    { linkName: "International mortgages", linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/international-mortgages" },
    { linkName: "Buy to let", linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/buy-to-let" },
    { linkName: "Limited company Buy to let", linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/limited-company-buy-to-let" },
    { linkName: "Portfolio Mortgages", linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/portfolio-mortgages" },
    { linkName: "Refinancing your investment", linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/refinancing-your-investment" },
  ],
};

const data2 = {
  image: "/nav23.avif",
  imageAlt: "Insurance",
  sidebarHeading: "Comprehensive Insurance Services",
  sidebarDescription:
    "Protect your assets with our wide range of insurance options, tailored to your unique needs.",
  linkCategory1: "Mortgage Protection",
  linkCategoryLink1: "/insurance/mortgage-protection",
  links1: [
    { linkName: "Life Cover", linkUrl: "/insurance/mortgage-protection/life-cover" },
    { linkName: "Critical Illness Cover", linkUrl: "/insurance/mortgage-protection/critical-illness-cover" },
    { linkName: "Income Protection", linkUrl: "/insurance/mortgage-protection/income-protection" },
    { linkName: "Home Insurance", linkUrl: "/insurance/mortgage-protection/home-insurance" },
  ],
  linkCategory2: "Insurance",
  linkCategoryLink2: "/insurance/insurance",
  links2: [
    { linkName: "Shareholder protection", linkUrl: "/insurance/insurance/shareholder-protection" },
    { linkName: "Directors Insurance", linkUrl: "/insurance/insurance/directors-insurance" },
    { linkName: "Relevant Life cover", linkUrl: "/insurance/insurance/relevant-life-cover" },
    { linkName: "Key man Insurance", linkUrl: "/insurance/insurance/key-man-insurance-life-and-cic" },
    { linkName: "Group Employee Benefits", linkUrl: "/insurance/insurance/group-employee-benefits" },
    { linkName: "Buildings insurance", linkUrl: "/insurance/insurance/buildings-insurance" },
    { linkName: "Stabilisation Loans", linkUrl: "/commercial-finance/stabilisation-loans" },
    { linkName: "Private health care", linkUrl: "/insurance/insurance/private-healthcare" },
  ],
};

const data3 = {
  image: "/finance.jpg",
  imageAlt: "Business Finance",
  sidebarHeading: "Business Finance Services",
  sidebarDescription:
    "Business finance is the strategic management of a company's money to achieve growth, stability, and profitability.",
  linkCategory1: "Healthcare Finance",
  linkCategoryLink1: "/business-finance/healthcare-finance",
  links1: [
    { linkName: "Finance for Care Homes", linkUrl: "/business-finance/healthcare-finance/finance-for-care-homes" },
    { linkName: "Finance for GP Partners", linkUrl: "/business-finance/healthcare-finance/finance-for-gp-partners" },
    { linkName: "Finance for Dentists", linkUrl: "/business-finance/healthcare-finance/finance-for-dentists" },
    { linkName: "Finance for Pharmacists", linkUrl: "/business-finance/healthcare-finance/finance-for-pharmacists" },
    { linkName: "Finance For Opticians", linkUrl: "/business-finance/healthcare-finance/finance-for-opticians" },
    { linkName: "Finance for Healthcare", linkUrl: "/business-finance/healthcare-finance/finance-for-healthcare" },
  ],
  linkCategory2: "Business Funding",
  linkCategoryLink2: "/business-finance/business-funding",
  links2: [
    { linkName: "Invoice Finance", linkUrl: "/business-finance/business-funding/invoice-finance" },
    { linkName: "Asset based lending", linkUrl: "/business-finance/business-funding/asset-based-finance" },
    { linkName: "Cashflow lending", linkUrl: "/business-finance/business-funding/cashflow-finance" },
    { linkName: "Pension Backed funding", linkUrl: "/business-finance/business-funding/pension-backed-funding" },
    { linkName: "Manufacturing Wholesale", linkUrl: "/business-finance/business-funding/manufacturing-wholesale" },
    { linkName: "Recruitment", linkUrl: "/business-finance/business-funding/recruitment" },
    { linkName: "Professional Services", linkUrl: "/business-finance/business-funding/professional-services" },
    { linkName: "Growth Finance", linkUrl: "/business-finance/business-funding/growth-finance" },
    { linkName: "Working Capital", linkUrl: "/business-finance/business-funding/working-capital" },
    { linkName: "MBO & MBI", linkUrl: "/business-finance/business-funding/mbo-mbi" },
    { linkName: "Nursery Finance", linkUrl: "/business-finance/business-funding/nursery-finance" },
  ],
};

const data4 = {
  image: "/Commercial_finances_dropdown.webp",
  imageAlt: "Commercial Finance",
  sidebarHeading: "Strategic Commercial Financing",
  sidebarDescription:
    "Strategic Commercial Financing involves expert planning to secure the best rates and terms.",
  linkCategory1: "",
  linkCategoryLink1: "#",
  links1: [
    { linkName: "Commercial Mortgage", linkUrl: "/commercial-finance/commercial-mortgage" },
    { linkName: "Bridging Loans", linkUrl: "/commercial-finance/bridging-loans" },
    { linkName: "Development Finance", linkUrl: "/commercial-finance/development-finance" },
    { linkName: "Stabilisation Loans", linkUrl: "/commercial-finance/stabilisation-loans" },
  ],
  linkCategory2: "",
  linkCategoryLink2: "#",
  links2: [],
};

// Healthcare data for the mega menu
const data5 = {
  image: "/healthcare-menu.jpg",
  imageAlt: "Healthcare Services",
  sidebarHeading: "Healthcare Finance",
  sidebarDescription: "Tailored funding solutions for the healthcare sector.",
  linkCategory1: "Healthcare Services",
  linkCategoryLink1: "/health-care",
  links1: [],
  linkCategory2: "",
  linkCategoryLink2: "#",
  links2: [],
};

// Fallback data shown while healthcareData is loading
const healthcareFallback = {
  image: "/healthcare-menu.jpg",
  imageAlt: "Healthcare Services",
  sidebarHeading: "Healthcare Finance",
  sidebarDescription: "Tailored funding solutions for the healthcare sector.",
  linkCategory1: "Healthcare Finance",
  linkCategoryLink1: "/health-care",
  links1: [],
  linkCategory2: "",
  linkCategoryLink2: "#",
  links2: [],
};

const navbarMenu2 = [
  { name: "News & Insights", link: "/news" },
  { name: "Case Study", link: "/case-studies" },
  // { name: "Meet the Team", link: "/meet-the-team" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

// Offset used so right-menu indices don't clash with left-menu indices
// when computing animation direction.
const RIGHT_MENU_INDEX_OFFSET = 100;

export default function Navbar() {
  const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [direction, setDirection] = useState(0);
  const [prevMenuIndex, setPrevMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const [healthcareData, setHealthcareData] = useState(null);
  const [healthcareLoading, setHealthcareLoading] = useState(true);

  // Fetch healthcare menu data safely
  useEffect(() => {
    let cancelled = false;

    async function fetchHealthcareData() {
      try {
        const [healthRes, subHealthRes] = await Promise.all([
          getHealthNames(),
          getSubHealth(),
        ]);

        if (cancelled) return;

        // Guard: both calls must succeed and return arrays
        if (
          !healthRes?.success ||
          !subHealthRes?.success ||
          !Array.isArray(healthRes?.data) ||
          !Array.isArray(subHealthRes?.data)
        ) {
          console.warn("Healthcare menu fetch returned unexpected data", {
            healthRes,
            subHealthRes,
          });
          return;
        }

        // Health.slug is the join key → SubHealth.category
        const healthCategories = healthRes.data.filter(
          (h) => h?.slug && h?.heading
        );

        const subHealthItems = subHealthRes.data.filter(
          (sub) =>
            sub &&
            typeof sub.heading === "string" &&
            typeof sub.category === "string" &&
            typeof sub.slug === "string"
        );

        // Build a full list of all categories (dynamic)
        const categories = healthCategories.map((cat) => ({
          heading: cat.heading,
          slug: cat.slug,
          image: cat.image || null,
          imageAlt: cat.imageAlt || null,
          items: subHealthItems
            .filter((sub) => sub.category === cat.slug)
            .map((sub) => ({
              name: sub.heading,        // renamed for mobile menu consistency
              link: `/health-care/${cat.slug}/${sub.slug}`,
              linkName: sub.heading,    // keep old name for desktop links
              linkUrl: `/health-care/${cat.slug}/${sub.slug}`,
            })),
        }));

        // Backward compatibility for the two-column desktop mega menu
        const col1 = healthCategories[0] ?? null;
        const col2 = healthCategories[1] ?? null;

        const getLinks = (cat) =>
          cat
            ? subHealthItems
              .filter((sub) => sub.category === cat.slug)
              .map((sub) => ({
                linkName: sub.heading,
                linkUrl: `/health-care/${cat.slug}/${sub.slug}`,
              }))
            : [];

        setHealthcareData({
          // Old desktop structure (still used by MortgageMenu)
          image: healthCategories[0]?.image || "/Health-care-menu-aws.jpg",
          imageAlt: healthCategories[0]?.imageAlt || "Healthcare Services",
          sidebarHeading: "Healthcare Finance",
          sidebarDescription:
            "Tailored funding solutions for the healthcare sector.",
          linkCategory1: col1?.heading ?? "",
          linkCategoryLink1: col1 ? `/health-care/${col1.slug}` : "/health-care",
          links1: getLinks(col1),
          linkCategory2: col2?.heading ?? "",
          linkCategoryLink2: col2 ? `/health-care/${col2.slug}` : "#",
          links2: getLinks(col2),

          // New: complete list for the mobile menu (and future use)
          categories,
        });
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to fetch healthcare menu data:", error);
        }
      } finally {
        if (!cancelled) {
          setHealthcareLoading(false);
        }
      }
    }

    fetchHealthcareData();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleMouseEnter = (menuName, index) => {
    if (prevMenuIndex !== null) {
      setDirection(index > prevMenuIndex ? 1 : -1);
    }
    setPrevMenuIndex(index);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setPrevMenuIndex(null);
    setDirection(0);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
    setPrevMenuIndex(null);
    setDirection(0);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  // Resolve which data object to pass for left-side menus
  const getLeftMenuData = (index) => {
    switch (index) {
      case 0: return data1;      // Mortgages
      case 1: return data4;      // Commercial Finance
      case 2: return data2;      // Insurance
      case 3: return data3;      // Business Finance
      case 4: return healthcareData ?? healthcareFallback; // Health Care
      default: return data1;
    }
  };

  // The effective data to render for the healthcare mega menu
  // Use fallback while loading so MortgageMenu never receives null
  const resolvedHealthcareData = healthcareData ?? healthcareFallback;

  return (
    <>
      <div
        className={`h-20 fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        {/* Mobile header */}
        <div
          className={`lg:hidden flex justify-between items-center px-6 py-2 md:py-4 ${scrolled ? "bg-white" : "bg-transparent"
            }`}
        >
          <Link href="/">
            <Image
              src={scrolled ? LogoDark : LogoWithoutBg}
              width={160}
              height={160}
              alt="logo"
              className="object-cover"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white inline-flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <div
                className={`${scrolled ? "custom-blue" : "bg-white"
                  } transition-all duration-300 ${isMobileMenuOpen
                    ? "w-6 rotate-45 translate-y-2 h-[1.5px]"
                    : "w-7.5 h-0.5"
                  }`}
              />
              <div
                className={`${scrolled ? "custom-blue" : "bg-white"
                  } transition-all duration-300 ${isMobileMenuOpen
                    ? "w-6 -rotate-45 -translate-y-0 h-[1.5px]"
                    : "w-7.5 h-0.5"
                  }`}
              />
              <span
                className={`text-[10px] font-medium ${scrolled ? "custom-blue-text" : "text-white"
                  } tracking-wider transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              >
                MENU
              </span>
            </div>
          </button>
        </div>

        {/* Desktop menu */}
        <div
          className={`hidden lg:block text-black font-medium px-10 text-[13px] tracking-wide relative ${scrolled ? "bg-white" : "bg-transparent"
            } transition-all duration-300`}
        >
          <div className="flex items-center justify-between">

            {/* ── Left side ── */}
            <div className="flex space-x-2 xl:space-x-5 w-[42%] justify-start">
              {navbarMenu1.map((item, index) => {
                // For Health Care (index 4), use the dynamic healthcare data
                const isHealthcare = item.name === "Health Care";
                
                return (
                  <div
                    key={item.name}
                    className="relative group py-6"
                    onMouseEnter={(e) => {
                      handleMouseEnter(item.name, index);
                      const rect = e.currentTarget.getBoundingClientRect();
                      document.documentElement.style.setProperty("--menu-left", `${rect.left}px`);
                      document.documentElement.style.setProperty("--menu-right", "auto");
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.link}
                      className={`cursor-pointer transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 ${scrolled
                        ? "after:custom-blue custom-blue-text"
                        : "after:bg-white text-white"
                        } after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>

                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                      {item.megaMenu && activeMenu === item.name && (
                        item.type === "mega" ? (
                          <MortgageMenu
                            data={getLeftMenuData(index)}
                            direction={direction}
                            onLinkClick={handleLinkClick}
                          />
                        ) : (
                          <SimpleDropdown
                            links={item.links}
                            direction={direction}
                            onLinkClick={handleLinkClick}
                          />
                        )
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ── Logo ── */}
            <div className="flex justify-center w-[16%]">
              <Link href="/">
                <Image
                  src={scrolled ? LogoDark : LogoWithoutBg}
                  width={180}
                  height={180}
                  alt="logo"
                  className="object-cover scale-[1.05] py-3 h-full w-full"
                />
              </Link>
            </div>

            {/* ── Right side ── */}
            <div className="flex space-x-2 xl:space-x-5 w-[42%] justify-end items-center">
              {navbarMenu2.map((item, index) => {
                // Use an offset so right-menu indices never collide with left-menu indices
                const adjustedIndex = index + RIGHT_MENU_INDEX_OFFSET;

                // Plain nav link (no mega menus on right side anymore)
                return (
                  <Link
                    href={item.link}
                    key={item.name}
                    className={`${scrolled ? "custom-blue-text" : "text-white"
                      } cursor-pointer transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          menu1={navbarMenu1}
          menu2={navbarMenu2}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          healthcareData={resolvedHealthcareData}
        />
      </div>
    </>
  );
}