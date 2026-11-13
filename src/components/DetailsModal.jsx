export default function DetailsModal({ onClose, results, loanDetails }) {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className="relative bg-white rounded-xl w-full max-w-2xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium custom-blue-text">
              Mortgage Details
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
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

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600 mb-1">
                Interest Only Payment
              </p>
              <p className="text-lg font-medium custom-blue-text">
                £{parseFloat(results.monthlyInterestOnly).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Total: £{parseFloat(results.totalInterestOnly).toLocaleString()}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600 mb-1">Loan Details</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Amount</p>
                  <p className="font-medium">
                    £{parseFloat(loanDetails.amount).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Term</p>
                  <p className="font-medium">{loanDetails.years} years</p>
                </div>
                <div>
                  <p className="text-gray-500">Interest Rate</p>
                  <p className="font-medium">{loanDetails.rate}%</p>
                </div>
                <div>
                  <p className="text-gray-500">Total Repayment</p>
                  <p className="font-medium">
                    £{parseFloat(results.totalRepayment).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
