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
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
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
      </body>
    </html>
  );
}
