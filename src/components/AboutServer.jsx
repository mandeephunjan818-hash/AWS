import AboutSectionHome from "./AboutSectionHome";
import { getAboutData } from "@/actions/about.actions";

export default async function AboutServer() {
  const { data: aboutData } = await getAboutData();

  return (
    <>
      <AboutSectionHome aboutData={aboutData} />
    </>
  );
}
