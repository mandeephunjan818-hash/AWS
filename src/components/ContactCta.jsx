"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactCta() {
  const [email, setEmail] = useState(null);
  useEffect(() => {
    setEmail(`info@awsmortgages.co.uk`);
  }, []);

  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-2">Need Expert Advice?</h3>
        <p className="text-sm text-blue-100 mb-4 tracking-wide">
          Our mortgage advisers are here to help you find the best solution for
          your needs.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <Link href="tel:+44(0)2045539750">+44(0)204 553 9750</Link>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {email ? (
              <Link href={`mailto:${email}`}>{email}</Link>
            ) : (
              <span>Email us</span>
            )}
          </div>
        </div>
        <Link
          href="/contact-us"
          className="mt-6 block text-center bg-white text-blue-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}