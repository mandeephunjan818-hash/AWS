import HeroSection from "./HeroSection";
import { getHeroBanners } from "@/actions/heroSection.actions";

export default async function HeroServer() {
  const { data: slides } = await getHeroBanners();

  return (
    <>
      <HeroSection slides={slides || []} />
    </>
  );
}
