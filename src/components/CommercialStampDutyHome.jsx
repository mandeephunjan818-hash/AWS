"use client";

import { useState, useEffect } from "react";
import { IoCalculator } from "react-icons/io5";
import GraphModal from "./GraphModal";

export default function CommercialStampDutyHome() {
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("england");
  const [showDetails, setShowDetails] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [result, setResult] = useState(null);

  const calculateCommercialStampDuty = (price, region) => {
    const value = parseFloat(price);
    if (isNaN(value) || value <= 0) return null;

    let duty = 0;
    let bands = [];
    let totalTaxableSum = 0;

    if (region === "england") {
      // England & Northern Ireland rates
      if (value <= 150000) {
        totalTaxableSum = 0;
        duty = 0;
        bands.push({
          band: "£0 - £150,000",
          rate: "0%",
          taxableSum: value,
          tax: 0,
          amount: 0,
        });
      } else if (value <= 250000) {
        const firstBand = 150000;
        const secondBandAmount = value - firstBand;
        totalTaxableSum = secondBandAmount;
        duty = secondBandAmount * 0.02;
        bands.push(
          {
            band: "£0 - £150,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£150,001 - £250,000",
            rate: "2%",
            taxableSum: secondBandAmount,
            tax: duty,
            amount: duty,
          }
        );
      } else {
        const firstBand = 150000;
        const secondBand = 100000;
        const thirdBandAmount = value - 250000;
        totalTaxableSum = secondBand + thirdBandAmount;

        const secondBandTax = secondBand * 0.02;
        const thirdBandTax = thirdBandAmount * 0.05;
        duty = secondBandTax + thirdBandTax;

        bands.push(
          {
            band: "£0 - £150,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£150,001 - £250,000",
            rate: "2%",
            taxableSum: secondBand,
            tax: secondBandTax,
            amount: secondBandTax,
          },
          {
            band: "£250,001+",
            rate: "5%",
            taxableSum: thirdBandAmount,
            tax: thirdBandTax,
            amount: thirdBandTax,
          }
        );
      }
    } else if (region === "scotland") {
      // Scotland rates
      if (value <= 150000) {
        totalTaxableSum = 0;
        duty = 0;
        bands.push({
          band: "£0 - £150,000",
          rate: "0%",
          taxableSum: value,
          tax: 0,
          amount: 0,
        });
      } else if (value <= 250000) {
        const firstBand = 150000;
        const secondBandAmount = value - firstBand;
        totalTaxableSum = secondBandAmount;
        duty = secondBandAmount * 0.01;
        bands.push(
          {
            band: "£0 - £150,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£150,001 - £250,000",
            rate: "1%",
            taxableSum: secondBandAmount,
            tax: duty,
            amount: duty,
          }
        );
      } else {
        const firstBand = 150000;
        const secondBand = 100000;
        const thirdBandAmount = value - 250000;
        totalTaxableSum = secondBand + thirdBandAmount;

        const secondBandTax = secondBand * 0.01;
        const thirdBandTax = thirdBandAmount * 0.05;
        duty = secondBandTax + thirdBandTax;

        bands.push(
          {
            band: "£0 - £150,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£150,001 - £250,000",
            rate: "1%",
            taxableSum: secondBand,
            tax: secondBandTax,
            amount: secondBandTax,
          },
          {
            band: "£250,001+",
            rate: "5%",
            taxableSum: thirdBandAmount,
            tax: thirdBandTax,
            amount: thirdBandTax,
          }
        );
      }
    } else if (region === "wales") {
      // Wales rates
      if (value <= 225000) {
        totalTaxableSum = 0;
        duty = 0;
        bands.push({
          band: "£0 - £225,000",
          rate: "0%",
          taxableSum: value,
          tax: 0,
          amount: 0,
        });
      } else if (value <= 250000) {
        const firstBand = 225000;
        const secondBandAmount = value - firstBand;
        totalTaxableSum = secondBandAmount;
        duty = secondBandAmount * 0.01;
        bands.push(
          {
            band: "£0 - £225,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£225,001 - £250,000",
            rate: "1%",
            taxableSum: secondBandAmount,
            tax: duty,
            amount: duty,
          }
        );
      } else if (value <= 1000000) {
        const firstBand = 225000;
        const secondBand = 25000;
        const thirdBandAmount = value - 250000;
        totalTaxableSum = secondBand + thirdBandAmount;

        const secondBandTax = secondBand * 0.01;
        const thirdBandTax = thirdBandAmount * 0.05;
        duty = secondBandTax + thirdBandTax;

        bands.push(
          {
            band: "£0 - £225,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£225,001 - £250,000",
            rate: "1%",
            taxableSum: secondBand,
            tax: secondBandTax,
            amount: secondBandTax,
          },
          {
            band: "£250,001 - £1,000,000",
            rate: "5%",
            taxableSum: thirdBandAmount,
            tax: thirdBandTax,
            amount: thirdBandTax,
          }
        );
      } else {
        const firstBand = 225000;
        const secondBand = 25000;
        const thirdBand = 750000;
        const fourthBandAmount = value - 1000000;
        totalTaxableSum = secondBand + thirdBand + fourthBandAmount;

        const secondBandTax = secondBand * 0.01;
        const thirdBandTax = thirdBand * 0.05;
        const fourthBandTax = fourthBandAmount * 0.06;
        duty = secondBandTax + thirdBandTax + fourthBandTax;

        bands.push(
          {
            band: "£0 - £225,000",
            rate: "0%",
            taxableSum: firstBand,
            tax: 0,
            amount: 0,
          },
          {
            band: "£225,001 - £250,000",
            rate: "1%",
            taxableSum: secondBand,
            tax: secondBandTax,
            amount: secondBandTax,
          },
          {
            band: "£250,001 - £1,000,000",
            rate: "5%",
            taxableSum: thirdBand,
            tax: thirdBandTax,
            amount: thirdBandTax,
          },
          {
            band: "£1,000,001+",
            rate: "6%",
            taxableSum: fourthBandAmount,
            tax: fourthBandTax,
            amount: fourthBandTax,
          }
        );
      }
    }

    return { total: duty, bands, taxableSum: totalTaxableSum };
  };

  const getRegionDisplayName = (region) => {
    switch (region) {
      case "england":
        return "England, Northern Ireland";
      case "scotland":
        return "Scotland";
      case "wales":
        return "Wales";
      default:
        return "";
    }
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
      const calculation = calculateCommercialStampDuty(price, region);
      setResult(calculation);
    } else {
      setResult(null);
    }
  }, [price, region]);

  return (
    <div className="bg-white p-6 md:p-8 rounded-sm">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[17px] md:text-[19px] mb-6 custom-blue-text text-center font-medium">
          Commercial Stamp Duty Calculator
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Calculator Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium tracking-wide text-gray-900 mb-2">
                  Purchase Price (£)
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
                    placeholder="e.g. 350000"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium tracking-wide text-gray-900 mb-2">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="block w-full rounded-lg border-gray-400 shadow-sm focus:border-[#154583] focus:ring-[#154583] text-sm p-3 border text-gray-800"
                >
                  <option value="england">England, Northern Ireland</option>
                  <option value="scotland">Scotland</option>
                  <option value="wales">Wales</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col">
            {result ? (
              <>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
                      Total Stamp Duty
                    </p>
                    <h2 className="text-2xl custom-blue-text">
                      £{result.total.toLocaleString("en-GB")}
                    </h2>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
                      Total Taxable Sum
                    </p>
                    <h2 className="text-2xl custom-blue-text">
                      £{result.taxableSum.toLocaleString("en-GB")}
                    </h2>
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mb-4">
                  <button
                    onClick={() => setShowGraph(true)}
                    className="px-4 py-2 text-sm custom-blue-text border border-[#154583] rounded-lg hover:bg-gray-50"
                  >
                    View Graph
                  </button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg hover:bg-gray-50"
                  >
                    {showDetails ? "Hide Details" : "Show Details"}
                  </button>
                </div>

                {/* Tax Breakdown Table */}
                {showDetails && (
                  <div className="mt-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-600 mb-3">
                      Tax Band Breakdown - {getRegionDisplayName(region)}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 text-gray-600 font-medium text-xs">
                              Tax band
                            </th>
                            <th className="text-center py-2 text-gray-600 font-medium text-xs">
                              %
                            </th>
                            <th className="text-right py-2 text-gray-600 font-medium text-xs">
                              Taxable sum
                            </th>
                            <th className="text-right py-2 text-gray-600 font-medium text-xs">
                              Tax
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.bands.map((band, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-100"
                            >
                              <td className="py-2 text-gray-700 text-xs">
                                {band.band}
                              </td>
                              <td className="py-2 text-center text-gray-700 text-xs">
                                {band.rate}
                              </td>
                              <td className="py-2 text-right text-gray-700 text-xs">
                                £{band.taxableSum.toLocaleString("en-GB")}
                              </td>
                              <td className="py-2 text-right font-medium custom-blue-text text-xs">
                                £{band.tax.toLocaleString("en-GB")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1">
                <IoCalculator size={40} className="text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Enter Property Details
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Enter your commercial property value to calculate stamp duty
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showGraph && result && (
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
                data={result}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
