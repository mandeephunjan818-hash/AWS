"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const importantLinks = [
    { title: "Mortgages", href: "/mortgages" },
    { title: "Commercial Finance", href: "/commercial-finance" },
    { title: "Insurance", href: "/insurance" },
    { title: "Business Finance", href: "/business-finance" },
    { title: "Case Study", href: "/case-studies" },
    { title: "About Us", href: "/about-us" },
    // { title: "Meet the Team", href: "/meet-the-team" }, // ← added
  ];

  const residentialMortgages = [
    { title: "First time buyer", href: "/mortgages/residential-mortgages/first-time-buyer" },
    { title: "Remortgage", href: "/mortgages/residential-mortgages/remortgage" },
    { title: "Contractor mortgage", href: "/mortgages/residential-mortgages/contractor-mortgage" },
    { title: "Large Loans", href: "/mortgages/residential-mortgages/large-loans" },
    { title: "Professional mortgages", href: "/mortgages/residential-mortgages/professional-mortgages" },
    { title: "Let to Buy", href: "/mortgages/residential-mortgages/let-to-buy" },
  ];

  const specialistMortgages = [
    { title: "International mortgages", href: "/mortgages/buy-to-let-and-specialist-mortgages/international-mortgages" },
    { title: "Buy to let", href: "/mortgages/buy-to-let-and-specialist-mortgages/buy-to-let" },
    { title: "Limited company Buy to let", href: "/mortgages/buy-to-let-and-specialist-mortgages/limited-company-buy-to-let" },
    { title: "Portfolio Mortgages", href: "/mortgages/buy-to-let-and-specialist-mortgages/portfolio-mortgages" },
    { title: "Refinancing your investment", href: "/mortgages/buy-to-let-and-specialist-mortgages/refinancing-your-investment" },
  ];

  const contactInfo = {
    address: "4th Floor , 7 Cutler Street, London, United Kingdom, E1 7DJ",
    phone: "+44(0)204 553 9750",
    phoneForCall: "+442045539750",
  };

  const [email, setEmail] = useState(null);
  useEffect(() => {
    const user = "info";
    const domain = "awsmortgages.co.uk";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <footer className="bg-gray-50 pb-20 lg:pb-0">
      <div className="section-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Important Links column */}
          <div>
            <h4 className="custom-blue-text text-[17px] font-medium mb-[30px]">
              Important Links
            </h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-800 inline-flex items-center gap-2 tracking-wider"
                  >
                    <FaLongArrowAltRight size={14} />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residential Mortgages column */}
          <div>
            <h4 className="custom-blue-text text-[17px] font-medium mb-[30px]">
              Residential Mortgages
            </h4>
            <ul className="space-y-2">
              {residentialMortgages.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-800 inline-flex items-center gap-2 tracking-wider"
                  >
                    <FaLongArrowAltRight size={14} />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialist Mortgages column */}
          <div>
            <h4 className="custom-blue-text text-[17px] font-medium mb-[30px]">
              Buy to let & Specialist mortgages
            </h4>
            <ul className="space-y-2">
              {specialistMortgages.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-800 inline-flex items-center gap-2 tracking-wider"
                  >
                    <FaLongArrowAltRight size={14} />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch column */}
          <div>
            <h4 className="custom-blue-text text-[17px] font-medium mb-[30px]">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-[13px] text-gray-800 tracking-wide">
                Address: {contactInfo.address}
              </p>
              <p className="text-[13px] text-gray-800 tracking-wide">
                Phone :{" "}
                <Link href={`tel:${contactInfo.phoneForCall}`}>
                  {contactInfo.phone}
                </Link>
              </p>
              <p className="text-[13px] text-gray-800 tracking-wide">
                Email :{" "}
                {email ? (
                  <a href={`mailto:${email}`}>{email}</a>
                ) : (
                  <span>Email us</span>
                )}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "bottom",
                width: "fit-content",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <a
                href="https://www.facebook.com/awsprivatefinance/"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <FaFacebookSquare size={30} color="#1877F2" />
              </a>
              <a
                href="https://www.instagram.com/awsprivatefinance/"
                target="_blank"
                className="text-gray-700 hover:text-pink-600"
              >
                <FaInstagramSquare size={30} color="#E4405F" />
              </a>
              <a
                href="https://www.linkedin.com/company/aws-financial-services/"
                target="_blank"
                className="text-gray-700 hover:text-blue-700"
              >
                <FaLinkedin size={30} color="#0077B5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory text */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="section-container py-7">
          <div className="flex flex-col md:flex-row justify-center text-center items-center gap-4 text-[13px] md:text-sm text-gray-800 tracking-wider">
            A W S Financial Services Limited is an Appointed Representative of Intra Private Finance Ltd, FRN:1014991. Intra Private Finance Ltd is authorised and regulated by the Financial Conduct Authority, FRN : 832376. Intra Private Finance Ltd is an authorised credit broker and not a lender. We work with an unrestricted number of Lenders to find a potentially suitable option for consideration. AWS Private Finance is a trading style of A W S Financial Services Limited, registered at Charles Lake House Claire Causeway, Crossways Business Park, Dartford, Kent, United Kingdom, DA2 6QA. Company register number 09667966. ICO Reg Num. ZA579532. We will receive commission from lenders. Different lenders pay different amounts depending on different commission models. For transparency we work with the following commission models: fixed fee, fixed rate of commission, percentage of the amount you borrow and rate for risk (this is based on the risk profile of the business). Further details of the commission model, calculation and amount will be disclosed to you throughout your customer journey.
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] md:text-sm text-gray-800 tracking-wider">
            <p className="text-center md:text-left">
              ©{currentYear} by AWS Financial Services All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/services">Services</Link>
              <Link href="/complaints-policy">Complaints Policy </Link>
              <Link href="/privacy-notice">Privacy Notice </Link>
              <Link href="/your-rights">Your Rights</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}