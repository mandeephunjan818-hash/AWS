"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function MortgageGraphModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const years = Array.from({ length: data.years }, (_, i) => i + 1);
  const repaymentData = years.map(() => data.repayment);
  const interestOnlyData = years.map(() => data.interestOnly);

  const chartData = {
    labels: years.map((year) => `Year ${year}`),
    datasets: [
      {
        label: "Monthly Repayment",
        data: repaymentData,
        borderColor: "#154583",
        backgroundColor: "rgba(21, 69, 131, 0.05)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#154583",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Interest Only",
        data: interestOnlyData,
        borderColor: "#4B5563",
        backgroundColor: "rgba(75, 85, 99, 0.05)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#4B5563",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        text: "Monthly Payment Comparison",
        font: {
          size: 16,
          family: "'Inter', sans-serif",
          weight: "500",
        },
        padding: {
          bottom: 30,
        },
        color: "#374151",
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#374151",
        bodyColor: "#374151",
        bodyFont: {
          size: 12,
          family: "'Inter', sans-serif",
        },
        padding: 12,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (context) =>
            `£${context.raw.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value) => `£${value.toLocaleString()}`,
          font: {
            size: 11,
            family: "'Inter', sans-serif",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            family: "'Inter', sans-serif",
          },
        },
      },
    },
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium custom-blue-text">
          Mortgage Payment Visualization
        </h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="h-[400px]">
        <Line data={chartData} options={options} />
      </div>
    </>
  );
}
