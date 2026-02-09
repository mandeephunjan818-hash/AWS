"use client";

import { useState, useEffect } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";

export default function CaseStudiesPagination({
  items = [],
  itemsPerPage = 12,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NavButton = ({ onClick, disabled, icon: Icon, label, isDouble }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${
        isDouble ? "w-11" : "w-10"
      } h-10 rounded border border-gray-200 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-gray-300 transition-colors`}
      aria-label={label}
    >
      <Icon className={`w-5 h-5 ${isDouble ? "text-gray-700" : ""}`} />
      <span className="sr-only">{label}</span>
    </button>
  );

  return (
    <div className="space-y-8">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-100"
        }`}
      >
        {currentItems.map((study, index) => (
          <CaseStudyCard
            key={startIndex + index}
            card={study}
            index={startIndex + index}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 px-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <NavButton
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                icon={HiChevronDoubleLeft}
                label="First Page"
                isDouble
              />
              <NavButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                icon={HiChevronLeft}
                label="Previous Page"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              {getPageNumbers().map((number, index) =>
                number === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-gray-500 text-sm"
                  >
                    {number}
                  </span>
                ) : (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded border text-sm transition-colors ${
                      currentPage === number
                        ? "border-blue-800 bg-blue-800 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <NavButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                icon={HiChevronRight}
                label="Next Page"
              />
              <NavButton
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                icon={HiChevronDoubleRight}
                label="Last Page"
                isDouble
              />
            </div>
          </div>

          <div className="text-sm text-gray-600 text-center px-2">
            Showing {startIndex + 1} to {Math.min(endIndex, items.length)} of{" "}
            {items.length} items
          </div>
        </div>
      )}
    </div>
  );
}
