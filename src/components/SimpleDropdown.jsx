"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SimpleDropdown({ links, onLinkClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 py-3 min-w-52"
      style={{
        marginTop: "0.25rem",
      }}
    >
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className="text-gray-600 hover:custom-blue-text transition-colors block py-2 px-4 text-sm"
              onClick={onLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
