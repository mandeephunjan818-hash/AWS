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
import 'react-hook-consent/dist/styles/style.css';
import ConsentWrapper from "./ConsentWrapper";
import PreferredSourceButton from "./PreferredSourceButton";

export async function generateMetadata() {
  return {
    title: "AWS Private Finance",
    description: "AWS Private Finance",
    metadataBase: new URL("https://aws-privatefinance.co.uk"),
    icons: {
      icon: [
        { url: "/aws-favicon-48x48.png?v=2", sizes: "48x48", type: "image/png" },
      ],
    },
    openGraph: {
      title: 'AWS Private Finance',
      description: 'AWS Private Finance',
      images: [
        {
          url: `https://aws-privatefinance.co.uk/lionicon.jpeg`,
          width: 1200,
          height: 630,
          alt: "AWS Private Finance",
        },
      ],
      type: 'website',
      url: 'https://aws-privatefinance.co.uk/',
    },
    twitter: {
      card: "summary_large_image",
      title: "AWS Private Finance",
      description: "AWS Private Finance",
      images: ["https://aws-privatefinance.co.uk/lionicon.jpeg"],
    },
  };
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.variable}>
      <head>

        <link rel="icon" href="/aws-favicon-48x48.png?v=2" sizes="48x48" type="image/png" />
        <link rel="shortcut icon" href="/aws-favicon-48x48.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/lionicon.jpeg" />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />


        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'denied',
                'security_storage': 'granted' 
              });
              
              // Store consent status for debugging
              window.__consentInitialized = true;
            `,
          }}
        />

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
        <ConsentWrapper>
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
          <PreferredSourceButton />
        </ConsentWrapper>
      </body>
    </html>
  );
}