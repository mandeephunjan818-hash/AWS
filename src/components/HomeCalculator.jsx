"use client";

import Link from "next/link";
import { IoCalculator } from "react-icons/io5";
import Image from "next/image";
import { useState, useEffect } from "react";
import MortgageGraphModal from "./MortgageGraphModal";
import DetailsModal from "./DetailsModal";
import CommercialStampDutyHome from "./CommercialStampDutyHome";

export default function HomeCalculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [results, setResults] = useState(null);
  const [showGraph, setShowGraph] = useState(false);
  const [showFullCalculation, setShowFullCalculation] = useState(false);

  const [error, setError] = useState("");

  const validateInputs = () => {
    if (parseFloat(amount) <= 0) {
      setError("Please enter a valid amount greater than 0");
      return false;
    }
    if (parseFloat(years) <= 0) {
      setError("Please enter a valid term greater than 0");
      return false;
    }
    if (parseFloat(rate) <= 0) {
      setError("Please enter a valid interest rate greater than 0");
      return false;
    }
    setError("");
    return true;
  };

  const calculateMortgage = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseFloat(years) * 12;

    const monthlyRepayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyInterestOnly = principal * monthlyRate;

    setResults({
      monthlyRepayment: monthlyRepayment.toFixed(2),
      monthlyInterestOnly: monthlyInterestOnly.toFixed(2),
      totalRepayment: (monthlyRepayment * numberOfPayments).toFixed(2),
      totalInterestOnly: (
        monthlyInterestOnly * numberOfPayments +
        principal
      ).toFixed(2),
    });
  };

  useEffect(() => {
    if (showGraph || showFullCalculation) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showGraph, showFullCalculation]);

  return (
    <div className="bg-gray-100">
      <div className="section-container grid items-center justify-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-6">
            <CommercialStampDutyHome   />
       

          <div className="relative rounded-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/calculator.avif"
                alt="Calculator background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <div className="relative bg-[#1D2939]/90 p-6 md:p-8 h-full flex flex-col justify-center">
              <h3 className="text-[15px] md:text-[17px] text-white text-center">
                Know Before You Buy – Instant Stamp Duty Estimates!
              </h3>
              <Link
                href="/stamp-duty-calculator"
                className="custom-blue text-white py-3 px-4 text-[11px] md:text-[12px] tracking-wider font-medium mt-6 inline-flex items-center justify-center gap-2"
              >
                <IoCalculator className="text-lg" />
                Stamp Duty Calculator
              </Link>
            </div>
          </div>
        </div>
             {/* start */}
          <div className="bg-white p-6 md:p-8 rounded-sm   ">
            <h3 className="text-[15px] md:text-[17px] mb-3 custom-blue-text text-center font-medium">
              Mortgage Calculator
            </h3>
            <form onSubmit={calculateMortgage} className="space-y-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Amount"
                    className="w-full border border-gray-300 px-4 py-2.5 text-[13px] placeholder:text-gray-500 focus:outline-none focus:border-[#154583]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="Years"
                    className="w-full border border-gray-300 px-4 py-2.5 text-[13px] placeholder:text-gray-500 focus:outline-none focus:border-[#154583]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Rate"
                    step="0.01"
                    className="sm:col-span-2 md:col-span-1 w-full border border-gray-300 px-4 py-2.5 text-[13px] placeholder:text-gray-500 focus:outline-none focus:border-[#154583]"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full custom-blue text-white py-2.5 text-[13px] font-medium tracking-wide duration-300"
                >
                  Calculate
                </button>
                {error && (
                  <p className="text-red-500 text-[12px] text-center">
                    {error}
                  </p>
                )}
              </div>
            </form>

            {results && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Monthly Repayment
                        </p>
                        <h2 className="text-xl font-medium custom-blue-text">
                          £
                          {parseFloat(
                            results.monthlyRepayment
                          ).toLocaleString()}
                        </h2>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setShowGraph(true)}
                          className="px-4 py-2 text-sm custom-blue-text border border-[#154583] rounded-lg hover:bg-gray-50"
                        >
                          View Graph
                        </button>
                        <button
                          onClick={() => setShowFullCalculation(true)}
                          className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg hover:bg-gray-50"
                        >
                          Show Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* end */}

      
      </div>

      {showGraph && (
        <div className="fixed inset-0 z-50" onClick={() => setShowGraph(false)}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="relative bg-white rounded-xl w-full max-w-4xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <MortgageGraphModal
                isOpen={showGraph}
                onClose={() => setShowGraph(false)}
                data={{
                  repayment: parseFloat(results.monthlyRepayment),
                  interestOnly: parseFloat(results.monthlyInterestOnly),
                  amount: parseFloat(amount),
                  years: parseInt(years),
                  rate: parseFloat(rate),
                }}
              />
            </div>
          </div>
        </div>
      )}

      {showFullCalculation && (
        <DetailsModal
          onClose={() => setShowFullCalculation(false)}
          results={results}
          loanDetails={{ amount, years, rate }}
        />
      )}
    </div>
  );
}
