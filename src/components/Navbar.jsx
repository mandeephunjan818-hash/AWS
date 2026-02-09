"use client";

import Image from "next/image";
import HeaderStripe from "./HeaderStripe";
import Link from "next/link";
import LogoWithoutBg from "../../public/aws-logo1.png";
import LogoDark from "../../public/logodark.webp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import MortgageMenu from "./MortgageMenu";
import SimpleDropdown from "./SimpleDropdown";

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
    {
      linkName: "First time buyer",
      linkUrl: "/mortgages/residential-mortgages/first-time-buyer",
    },
    {
      linkName: "Remortgage",
      linkUrl: "/mortgages/residential-mortgages/remortgage",
    },
    {
      linkName: "Contractor mortgage",
      linkUrl: "/mortgages/residential-mortgages/contractor-mortgage",
    },
    {
      linkName: "Large Loans",
      linkUrl: "/mortgages/residential-mortgages/large-loans",
    },
    {
      linkName: "Professional mortgages",
      linkUrl: "/mortgages/residential-mortgages/professional-mortgages",
    }, {
      linkName: "Let to Buy ",
      linkUrl: "/mortgages/residential-mortgages/let-to-buy ",
    },
   
  ],
  linkCategory2: "Buy to let and Specialist mortgages",
  linkCategoryLink2: "/mortgages/buy-to-let-and-specialist-mortgages",
  links2: [
    {
      linkName: "International mortgages",
      linkUrl:
        "/mortgages/buy-to-let-and-specialist-mortgages/international-mortgages",
    },
    {
      linkName: "Buy to let",
      linkUrl: "/mortgages/buy-to-let-and-specialist-mortgages/buy-to-let",
    },
    {
      linkName: "Limited company Buy to let",
      linkUrl:
        "/mortgages/buy-to-let-and-specialist-mortgages/limited-company-buy-to-let",
    },
    {
      linkName: "Portfolio Mortgages",
      linkUrl:
        "/mortgages/buy-to-let-and-specialist-mortgages/portfolio-mortgages",
    },
    {
      linkName: "Refinancing your investment",
      linkUrl:
        "/mortgages/buy-to-let-and-specialist-mortgages/refinancing-your-investment",
    },
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
    {
      linkName: "Life Cover",
      linkUrl: "/insurance/mortgage-protection/life-cover",
    },
    {
      linkName: "Critical Illness Cover",
      linkUrl: "/insurance/mortgage-protection/critical-illness-cover",
    },
    {
      linkName: "Income Protection",
      linkUrl: "/insurance/mortgage-protection/income-protection",
    },
    {
      linkName: "Home Insurance",
      linkUrl: "/insurance/mortgage-protection/home-insurance",
    },
  ],
  linkCategory2: "Insurance",
  linkCategoryLink2: "/insurance/insurance",
  links2: [
    {
      linkName: "Shareholder protection",
      linkUrl: "/insurance/insurance/shareholder-protection",
    },
    {
      linkName: "Directors Insurance",
      linkUrl: "/insurance/insurance/directors-insurance",
    },
    {
      linkName: "Relevant Life cover",
      linkUrl: "/insurance/insurance/relevant-life-cover",
    },
    {
      linkName: "Key man Insurance",
      linkUrl: "/insurance/insurance/key-man-insurance-life-and-cic",
    },
    {
      linkName: "Group Employee Benefits",
      linkUrl: "/insurance/insurance/group-employee-benefits",
    },
    {
      linkName: "Buildings insurance",
      linkUrl: "/insurance/insurance/buildings-insurance",
    },
    {
      linkName: "Stabilisation Loans",
      linkUrl: "/commercial-finance/stabilisation-loans",
    },
    {
      linkName: "Private health care",
      linkUrl: "/insurance/insurance/private-healthcare",
    },
  ],
};


const data3 = {
  image: "/finance.jpg",
  imageAlt: "Business Finance",
  sidebarHeading: "Business Finance Services",
  sidebarDescription:
    "Business finance is the strategic management of a company’s money to achieve growth, stability, and profitability.",
  linkCategory1: "Healthcare Finance",
  linkCategoryLink1: "/business-finance/healthcare-finance",
  links1: [
    {
      linkName: "Finance for Care Homes",
      linkUrl: "/business-finance/healthcare-finance/finance-for-care-homes",
    },
    // {
    //   linkName: "Finance for Unsecured lending",
    //   linkUrl: "/business-funding/healthcare-finance/unsecured-lending",
    // },
    {
      linkName: "Finance for GP Partners",
      linkUrl: "/business-finance/healthcare-finance/finance-for-gp-partners",
    },
    {
      linkName: "Finance for Dentists",
      linkUrl: "/business-finance/healthcare-finance/finance-for-dentists",
    },
    {
      linkName: "Finance for Pharmacists",
      linkUrl: "/business-finance/healthcare-finance/finance-for-pharmacists",
    },
    {
      linkName: "Finance For Opticians",
      linkUrl: "/business-finance/healthcare-finance/finance-for-opticians",
    },
    {
      linkName: "Finance for Healthcare",
      linkUrl: "/business-finance/healthcare-finance/finance-for-healthcare",
    },
  ],
  linkCategory2: "Business Funding",
  linkCategoryLink2: "/business-finance/business-funding",
  links2: [
    // {
    //   linkName: "Unsecured Lending",
    //   linkUrl: "/business-finance/business-funding/unsecured-lending",
    // },
    {
      linkName: "Invoice Finance",
      linkUrl: "/business-finance/business-funding/invoice-finance",
    },
    {
      linkName: "Asset based lending",
      linkUrl: "/business-finance/business-funding/asset-based-finance",
    },
    {
      linkName: "Cashflow lending",
      linkUrl: "/business-finance/business-funding/cashflow-finance",
    },
    {
      linkName: "Pension Backed funding",
      linkUrl: "/business-finance/business-funding/pension-backed-funding",
    },
    {
      linkName: "Manufacturing Wholesale",
      linkUrl: "/business-finance/business-funding/manufacturing-wholesale",
    },
    {
      linkName: "Recruitment",
      linkUrl: "/business-finance/business-funding/recruitment",
    },
    {
      linkName: " Professional Services",
      linkUrl: "/business-finance/business-funding/professional-services",
    },
    {
      linkName: " Growth Finance ",
      linkUrl: "/business-finance/business-funding/growth-finance ",
    },
    {
      linkName: "Working Capital ",
      linkUrl: "/business-finance/business-funding/working-capital",
    },
    {
      linkName: "MBO & MBI ",
      linkUrl: "/business-finance/business-funding/mbo-mbi",
    },
    {
      linkName: "Nursery Finance",
      linkUrl: "/business-finance/business-funding/nursery-finance",
    },
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
    {
      linkName: "Commercial Mortgage",
      linkUrl: "/commercial-finance/commercial-mortgage",
    },
    {
      linkName: "Bridging Loans",
      linkUrl: "/commercial-finance/bridging-loans",
    },
    {
      linkName: "Development Finance",
      linkUrl: "/commercial-finance/development-finance",
    },
    {
      linkName: "Stabilisation Loans",
      linkUrl: "/commercial-finance/stabilisation-loans",
    },
  
   
  ],
 
 
};
const navbarMenu2 = [
  { name: "News & Insights ", link: "/news" },
  { name: "Case Study", link: "/case-studies" },
  // { name: "Meet the Team", link: "/meet-the-team" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [direction, setDirection] = useState(0);
  const [prevMenuIndex, setPrevMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);

  //     document.documentElement.style.setProperty("--menu-top", "70px");
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
        className={`h-20 fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className={`lg:hidden flex justify-between items-center px-6 py-2 md:py-4 ${
            scrolled ? "bg-white" : "bg-transparent"
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
                className={`${
                  scrolled ? "custom-blue" : "bg-white"
                } transition-all duration-300  ${
                  isMobileMenuOpen
                    ? "w-6 rotate-45 translate-y-2 h-[1.5px]"
                    : "w-7.5 h-0.5"
                }`}
              ></div>
              <div
                className={`${
                  scrolled ? "custom-blue" : "bg-white"
                } transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "w-6 -rotate-45 -translate-y-0 h-[1.5px]"
                    : "w-7.5 h-0.5"
                }`}
              ></div>
              <span
                className={`text-[10px] font-medium ${
                  scrolled ? "custom-blue-text" : "text-white"
                } tracking-wider transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                MENU
              </span>
            </div>
          </button>
        </div>
        <div
          className={`hidden lg:block text-black font-medium px-10 text-[13px] tracking-wide relative ${
            scrolled ? "bg-white" : "bg-transparent"
          } transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 xl:space-x-5 w-[42%] justify-start">
              {navbarMenu1.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group py-6"
                  onMouseEnter={() => handleMouseEnter(item.name, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* ${
                      scrolled
                        ? "text-black hover:custom-blue-text"
                        : "text-white"
                    } */}
                  <Link
                    href={item.link}
                    className={`cursor-pointer transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 ${
                      scrolled
                        ? "after:custom-blue custom-blue-text"
                        : "after:bg-white text-white "
                    } after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                  <AnimatePresence
                    initial={false}
                    mode="wait"
                    custom={direction}
                  >
                    {item.megaMenu &&
                      activeMenu === item.name &&
                      (item.type === "mega" ? (
                        <MortgageMenu
                          data={
                            // index === 0 ? data1 : index === 2 ? data2 : data3
                            index === 0 ? data1 : index === 1 ? data4 : index === 2 ? data2:data3
                          }
                          direction={direction}
                          onLinkClick={handleLinkClick}
                        />
                      ) : (
                        <SimpleDropdown
                          links={item.links}
                          direction={direction}
                          onLinkClick={handleLinkClick}
                        />
                      ))}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex justify-center w-[16%]">
              <Link href="/" className="">
                <Image
                  src={scrolled ? LogoDark : LogoWithoutBg}
                  width={180}
                  height={180}
                  alt="logo"
                  className="object-cover scale-[1.05] py-3 h-full w-full"
                />
              </Link>
            </div>
            {/* ${
                    scrolled
                      ? "text-black hover:custom-blue-text"
                      : "text-white hover:text-white/80"
                  } */}
            <div className="flex space-x-2 xl:space-x-5 w-[42%] justify-end">
              {navbarMenu2.map((item) => (
                <Link
                  href={item.link}
                  key={item.name}
                  className={`${
                    scrolled ? "custom-blue-text" : "text-white"
                  }  cursor-pointer transition-colors `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu
          menu1={navbarMenu1}
          menu2={navbarMenu2}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </>
  );
}
