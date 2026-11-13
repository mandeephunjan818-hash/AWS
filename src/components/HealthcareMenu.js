"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const menuVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -50 : 50,
        opacity: 0,
    }),
};

export default function HealthcareMenu({ data, direction, onLinkClick }) {
    if (!data) return null;

    const { image, imageAlt, sidebarHeading, sidebarDescription, categories } = data;

    return (
        <motion.div
            custom={direction}
            variants={menuVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 w-screen bg-white shadow-xl z-50 py-10 px-8"
            style={{ marginTop: "var(--menu-top, 0px)" }}
        >
            <div className="max-w-7xl mx-auto flex gap-10">
                {/* Sidebar */}
                <div className="w-1/4 flex-shrink-0">
                    <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{sidebarHeading}</h3>
                    <p className="text-sm text-gray-600">{sidebarDescription}</p>
                </div>

                {/* 2x2 Grid of Categories */}
                <div className="w-3/4 grid grid-cols-2 gap-x-10 gap-y-8">
                    {categories.map((category) => (
                        <div key={category.slug}>
                            <Link
                                href={`/health-care/${category.slug}`}
                                onClick={onLinkClick}
                                className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors block mb-3 border-b pb-1"
                            >
                                {category.name}
                            </Link>
                            <ul className="space-y-2">
                                {category.links.map((link) => (
                                    <li key={link.linkUrl}>
                                        <Link
                                            href={link.linkUrl}
                                            onClick={onLinkClick}
                                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                                        >
                                            {link.linkName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}