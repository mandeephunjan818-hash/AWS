"use client";

import { useState, useEffect } from "react";
import Banner from "./Banner";
import GraphModal from "./GraphModal";
import { BiCalculator } from "react-icons/bi";
import { LuMessageCircleWarning } from "react-icons/lu";

export default function StampDuty() {
  const [price, setPrice] = useState("");
  const [buyerType, setBuyerType] = useState("first-time");
  const [showFullCalculation, setShowFullCalculation] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const calculateStampDuty = (price, type) => {
    const value = parseFloat(price);
    let duty = 0;
    let bands = [];
    if (type === "first-time") {
      if (value <= 300000) {
        // No stamp duty for first-time buyers up to £300,000 (not £425,000)
        duty = 0;
        bands.push({ band: "£0 - £300,000", rate: "0%", amount: 0 });
      } else if (value <= 500000) {
        // 5% on the portion between £300,001 and £500,000
        const firstBand = 300000;
        const remainingAmount = value - firstBand;
        duty = remainingAmount * 0.05;
        bands.push(
          { band: "£0 - £300,000", rate: "0%", amount: 0 },
          { band: "£300,001 - £500,000", rate: "5%", amount: duty }
        );
      } else {
        // For purchases over £500,000, first-time buyers pay the standard rates
        // According to the image, these are the correct tax bands
        duty = 0;
        bands = [];

        // £0 - £125k: 0%
        if (value > 0) {
          const amount = Math.min(value, 125000);
          const bandDuty = 0;
          duty += bandDuty;
          bands.push({ band: "£0 - £125,000", rate: "0%", amount: bandDuty });
        }

        // £125k - £250k: 2%
        if (value > 125000) {
          const amount = Math.min(value, 250000) - 125000;
          const bandDuty = amount * 0.02;
          duty += bandDuty;
          bands.push({
            band: "£125,001 - £250,000",
            rate: "2%",
            amount: bandDuty,
          });
        }

        // £250k - £925k: 5%
        if (value > 250000) {
          const amount = Math.min(value, 925000) - 250000;
          const bandDuty = amount * 0.05;
          duty += bandDuty;
          bands.push({
            band: "£250,001 - £925,000",
            rate: "5%",
            amount: bandDuty,
          });
        }

        // £925k - £1.5m: 10%
        if (value > 925000) {
          const amount = Math.min(value, 1500000) - 925000;
          const bandDuty = amount * 0.1;
          duty += bandDuty;
          bands.push({
            band: "£925,001 - £1,500,000",
            rate: "10%",
            amount: bandDuty,
          });
        }

        // Above £1.5m: 12%
        if (value > 1500000) {
          const amount = value - 1500000;
          const bandDuty = amount * 0.12;
          duty += bandDuty;
          bands.push({
            band: "Above £1,500,000",
            rate: "12%",
            amount: bandDuty,
          });
        }
      }
    } else if (type === "moving-home") {
      duty = calculateStandardRates(value);
      bands = getStandardBands(value);
    } else {
      // Additional property calculation based on the image
      duty = 0;
      bands = [];

      // Less than £125k: 5%
      if (value > 0) {
        const amount = Math.min(value, 125000);
        const bandDuty = amount * 0.05;
        duty += bandDuty;
        bands.push({ band: "£0 - £125,000", rate: "5%", amount: bandDuty });
      }

      // £125k to £250k: 7%
      if (value > 125000) {
        const amount = Math.min(value, 250000) - 125000;
        const bandDuty = amount * 0.07;
        duty += bandDuty;
        bands.push({
          band: "£125,001 - £250,000",
          rate: "7%",
          amount: bandDuty,
        });
      }

      // £250k to £925k: 10%
      if (value > 250000) {
        const amount = Math.min(value, 925000) - 250000;
        const bandDuty = amount * 0.1;
        duty += bandDuty;
        bands.push({
          band: "£250,001 - £925,000",
          rate: "10%",
          amount: bandDuty,
        });
      }

      // £925k to £1.5m: 15%
      if (value > 925000) {
        const amount = Math.min(value, 1500000) - 925000;
        const bandDuty = amount * 0.15;
        duty += bandDuty;
        bands.push({
          band: "£925,001 - £1,500,000",
          rate: "15%",
          amount: bandDuty,
        });
      }

      // Rest over £1.5m: 17%
      if (value > 1500000) {
        const amount = value - 1500000;
        const bandDuty = amount * 0.17;
        duty += bandDuty;
        bands.push({ band: "Above £1,500,000", rate: "17%", amount: bandDuty });
      }
    }

    return { total: duty, bands };
  };

  const calculateStandardRates = (value) => {
    let duty = 0;

    // £0 - £125k: 0%
    if (value > 0) {
      const amount = Math.min(value, 125000);
      duty += 0;
    }

    // £125k - £250k: 2%
    if (value > 125000) {
      const amount = Math.min(value, 250000) - 125000;
      duty += amount * 0.02;
    }

    // £250k - £925k: 5%
    if (value > 250000) {
      const amount = Math.min(value, 925000) - 250000;
      duty += amount * 0.05;
    }

    // £925k - £1.5m: 10%
    if (value > 925000) {
      const amount = Math.min(value, 1500000) - 925000;
      duty += amount * 0.1;
    }

    // Above £1.5m: 12%
    if (value > 1500000) {
      const amount = value - 1500000;
      duty += amount * 0.12;
    }

    return duty;
  };

  const getStandardBands = (value, isAdditional = false) => {
    const surcharge = isAdditional ? 0.03 : 0;
    const bands = [];

    // £0 - £125k: 0% (+ surcharge if applicable)
    if (value > 0) {
      const amount = Math.min(value, 125000);
      const rate = surcharge * 100;
      const bandDuty = amount * surcharge;
      bands.push({
        band: "£0 - £125,000",
        rate: `${rate}%`,
        amount: bandDuty,
      });
    }

    // £125k - £250k: 2% (+ surcharge if applicable)
    if (value > 125000) {
      const amount = Math.min(value, 250000) - 125000;
      const rate = 2 + surcharge * 100;
      const bandDuty = amount * (0.02 + surcharge);
      bands.push({
        band: "£125,001 - £250,000",
        rate: `${rate}%`,
        amount: bandDuty,
      });
    }

    // £250k - £925k: 5% (+ surcharge if applicable)
    if (value > 250000) {
      const amount = Math.min(value, 925000) - 250000;
      const rate = 5 + surcharge * 100;
      const bandDuty = amount * (0.05 + surcharge);
      bands.push({
        band: "£250,001 - £925,000",
        rate: `${rate}%`,
        amount: bandDuty,
      });
    }

    // £925k - £1.5m: 10% (+ surcharge if applicable)
    if (value > 925000) {
      const amount = Math.min(value, 1500000) - 925000;
      const rate = 10 + surcharge * 100;
      const bandDuty = amount * (0.1 + surcharge);
      bands.push({
        band: "£925,001 - £1,500,000",
        rate: `${rate}%`,
        amount: bandDuty,
      });
    }

    // Above £1.5m: 12% (+ surcharge if applicable)
    if (value > 1500000) {
      const amount = value - 1500000;
      const rate = 12 + surcharge * 100;
      const bandDuty = amount * (0.12 + surcharge);
      bands.push({
        band: "Above £1,500,000",
        rate: `${rate}%`,
        amount: bandDuty,
      });
    }

    return bands;
  };

  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const calculation = calculateStampDuty(price, buyerType);
    setResult(calculation);
  };

  useEffect(() => {
    if (showGraph) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showGraph]);

  useEffect(() => {
    if (price) {
      const calculation = calculateStampDuty(price, buyerType);
      setResult(calculation);
    }
  }, [buyerType]);

  return (
    <>
      <Banner />
      <div className="bg-gray-100">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <div className="bg-gray-100 p-1.5 rounded-lg grid grid-cols-3 gap-2 mb-8">
                {["first-time", "moving-home", "additional"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setBuyerType(type)}
                    className={`py-2.5 px-4 text-[13px] tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center ${
                      buyerType === type
                        ? "bg-white text-gray-800 shadow-sm font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {type === "first-time" && "First Time Buyer"}
                    {type === "moving-home" && "Moving Home"}
                    {type === "additional" && "Additional Property"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium tracking-wide text-gray-900 mb-2">
                    Purchase Price (£){" "}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      £
                    </span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="pl-8 block w-full rounded-lg border-gray-400 shadow-sm focus:border-[#154583] focus:ring-[#154583] text-sm p-3 border text-gray-800"
                      placeholder="e.g. 250000"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg shadow-sm text-sm font-normal text-white custom-blue hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#154583]"
                  >
                    Calculate Stamp Duty
                  </button>
                </div>
              </form>
            </div>

            <div
              className={`transition-opacity duration-200 ${
                !result ? "opacity-100" : "opacity-100"
              }`}
            >
              {result ? (
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Total Stamp Duty
                        </p>
                        <h2 className="text-2xl font-medium custom-blue-text">
                          £
                          {result.total.toLocaleString("en-GB", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
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
                          onClick={() =>
                            setShowFullCalculation(!showFullCalculation)
                          }
                          className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg hover:bg-gray-50"
                        >
                          {showFullCalculation
                            ? "Hide Details"
                            : "Show Details"}
                        </button>
                      </div>
                    </div>

                    {showFullCalculation && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-600 mb-4">
                          Calculation Breakdown
                        </h3>
                        <div className="space-y-3">
                          {result.bands.map((band, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center text-sm bg-white p-4 rounded-lg border border-gray-100"
                            >
                              <div>
                                <span className="text-gray-700 font-medium">
                                  {band.band}
                                </span>
                                <span className="text-gray-500 ml-2">
                                  ({band.rate})
                                </span>
                              </div>
                              <span className="font-medium custom-blue-text">
                                £
                                {band.amount.toLocaleString("en-GB", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-md shadow-md p-8 h-full flex flex-col justify-center">
                  <div>
                    <div className="flex items-center flex-col">
                      <BiCalculator size={50} />
                      <h3 className="text-lg font-medium text-gray-900 my-3 tracking-wide">
                        No Calculation Yet
                      </h3>
                      <p className="text-sm text-gray-700 max-w-md text-center tracking-wider">
                        Enter your property value and select your buyer type to
                        calculate the Stamp Duty Land Tax (SDLT).
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showGraph && (
        <div className="fixed inset-0 z-50" onClick={() => setShowGraph(false)}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div
              className="relative bg-white rounded-xl w-full max-w-4xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <GraphModal
                isOpen={showGraph}
                onClose={() => setShowGraph(false)}
                data={result || { bands: [] }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
