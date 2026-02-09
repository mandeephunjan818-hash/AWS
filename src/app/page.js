import News from "@/components/News";
import AboutServer from "@/components/AboutServer";
import CaseStudies from "@/components/CaseStudies";
import Form from "@/components/Form";
import HeroServer from "@/components/HeroServer";
import ProductsServer from "@/components/ProductsServer";
import TrustPilot from "@/components/TrustPilot";

export default function Home() {
  return (
    <>
      <HeroServer />
      <TrustPilot />
      <ProductsServer />
      <AboutServer />
      <CaseStudies />
      <Form />
      <News />
    </>
  );
}
