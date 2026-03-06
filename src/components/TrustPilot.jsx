"use client";
import { useEffect, useState } from "react";

export default function TrustPilot() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="py-4 px-6 bg-gray-100">
      <h1
        style={{letterSpacing:'1px'}}
        className="text-center mx-auto text-[18px] my-2 " 
        data-style-height="24px"
        data-style-alignment="center"
       >Mortgage Broker London | Award-Winning Private Finance Experts</h1>
      <div
        className="trustpilot-widget text-center mx-auto text-[18px] "
        data-locale="en-GB"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="5e73387e44891200011a6358"
        data-style-height="24px"
        data-style-width="100%"
        data-min-review-count="0"
        data-style-alignment="center"
      >
        <a
          href="https://uk.trustpilot.com/review/awsmortgages.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
}
