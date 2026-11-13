"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiPhone,
  HiEnvelope,
  HiHome,
  HiSquares2X2,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

export default function BottomMenu() {
  const [email, setEmail] = useState(null);
  useEffect(() => {
    setEmail(`info@awsmortgages.co.uk`);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-end justify-between px-4 sm:px-8">
        <div className="flex justify-center py-1.5">

          <a
            href="tel:+44(0)203 488 1541"
            className="flex flex-col items-center justify-center text-gray-600 "
          >
            <div className="p-2 rounded-full">
              <HiPhone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium tracking-wider mt-1">
              Call
            </span>
          </a>
        </div>

        <div className="flex justify-center py-1.5">

          <a
            href={email ? `mailto:${email}` : "#"}
            className="flex flex-col items-center justify-center text-gray-600 "
          >
            <div className="p-2 rounded-full ">
              <HiEnvelope className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium tracking-wider mt-1">
              Email
            </span>
          </a>
        </div>

        <div className="flex justify-center -mt-6 py-1.5">
          <Link
            href="/"
            className="flex flex-col items-center justify-center text-blue-800"
          >
            <div className="custom-blue rounded-full p-4 shadow-lg shadow-blue-800/20 ">
              <HiHome className="w-6 h-6 text-white" />
            </div>
            <span className="text-[11px] font-medium tracking-wider mt-2">
              Home
            </span>
          </Link>
        </div>

        <div className="flex justify-center py-1.5">
          <Link
            href="/services"
            className="flex flex-col items-center justify-center text-gray-600"
          >
            <div className="p-2 rounded-full ">
              <HiSquares2X2 className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium tracking-wider mt-1">
              Services
            </span>
          </Link>
        </div>

        <div className="flex justify-center py-1.5">
          <Link
            href="/contact-us"
            className="flex flex-col items-center justify-center text-gray-600"
          >
            <div className="p-2 rounded-full ">
              <HiChatBubbleLeftRight className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium tracking-wider mt-1">
              Contact
            </span>
          </Link>
        </div>
      </div >
    </div >
  );
}