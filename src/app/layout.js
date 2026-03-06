import NavbarComponent from "@/components/NavbarComponent";
import { poppins } from "./font";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/FooterComponent";
import BottomMenu from "@/components/BottomMenu";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import HomePdf from "@/components/HomePdf";
import HomeCalculator from "@/components/HomeCalculator";
import ImportantInfo from "@/components/ImportantInfo";
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export async function generateMetadata() {
  return {
    title: "AWS Private Finance",
    description: "AWS Private Finance",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: 'AWS Private Finance',
      description: 'AWS Private Finance',
      images:
      {
        url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
      },
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/', // Must be an absolute URL
    },
  };
}
export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.variable}>
      <head>

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-PDDWCD62');
          `}
        </Script>
      </head>
      <body className="font-poppins" suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDDWCD62" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        <Toaster />
        <NavbarComponent>
          <Navbar />
        </NavbarComponent>
        <div className="pb-16 lg:pb-0">{children}</div>
        <FooterComponent>
          <HomeCalculator />
          <ImportantInfo />
          <HomePdf />
          <Footer />
        </FooterComponent>
        <BottomMenu />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
