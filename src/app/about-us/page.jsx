import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import { FaChevronRight } from "react-icons/fa";

export const revalidate = 2592000;

export async function generateMetadata() {
  return {
    title: "AWS Private Finance - About Us ",
    description: "AWS Private Finance - About Us",
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
      url: 'https://aws-privatefinance.co.uk/about-us', // Must be an absolute URL
    },
  };
}

const services = [
  "Commercial Insurance",
  "Contractor, professional and large mortgages",
  "Commercial mortgages",
  "Buy-to-let mortgages",
  "Self-build mortgages",
  "Development Finance",
  "Debt Advisory Service",
  "Pension-backed funding",
  "Invoice Finance",
  "Asset-Based finance",
  "Life Insurance",
  "Critical Illness Cover",
  "Income Protection",
  "Home Insurance",
  "Residential mortgages, both for purchase and remortgage",
];

export default function AboutPage() {
  return (
    <>

      <link rel="canonical" href="https://aws-privatefinance.co.uk/about-us" />

      <Banner />
      <AboutSection />

      <div className="section-container">
        <div className="space-y-6">
          <div className="grid md:grid-rows-2 md:grid-cols-2 gap-4">
            <section className="col-span-1 row-span-2  text-black py-6 md:py-8 md:px-10 rounded-lg">
              <h2 className="text-xl md:text-2xl font-medium tracking-wide mb-4">
                Residential and Investment Mortgages
              </h2>
              <div className="text-[13px] md:text-[15px] tracking-wide text-gray-900s space-y-2 text-justify">
                <p>
                  AWS Private Finance assists high-net-worth (HNW) clients in
                  achieving the best possible funding, whether you are buying a
                  home to live in, a holiday or second home, starting an
                  investment portfolio or adding to one. Our experts undertake
                  the entire mortgage process on your behalf, delivering an
                  ongoing high quality and professional service.
                </p>
                <p>
                  AWS mortgages has built strong relationships with high-street
                  lenders and private banks, working hard to ensure our clients'
                  funding is structured correctly, as well as securing the best
                  rates. We are not restricted to a limited panel of lenders but
                  can choose from all the lenders on the market, depending on
                  your requirements.
                </p>
                <p>
                  We save you time and hassle shopping around for a mortgage and
                  where speed is of the essence, we ensure that delays are kept
                  to a minimum. We offer practical advice at every stage in the
                  property buying process, guiding you from start to finish.
                  Buying a home is one of the biggest financial decisions you
                  will ever make so it is important to get the right mortgage.
                </p>
              </div>
            </section>

            <section className="col-span-1 row-span-1 bg-gray-100 p-6 md:py-8 md:px-10 rounded-lg">
              <h2 className="text-xl md:text-2xl font-medium tracking-wide mb-2">
                Insurance
              </h2>
              <div className="text-[13px] md:text-[15px] tracking-wide text-gray-800 space-y-2 text-justify">
                <p>
                  It is not just important to get the right funding, making sure
                  you have the right insurance to cover you, your family and
                  your business, is equally crucial. AWS Private Finance can
                  help assist with life insurance, critical illness cover,
                  permanent health insurance (PHI) and critical private client
                  insurance. Our specialists in financial planning can also
                  assist with business protection and groups' plans. We explore
                  the whole market, establishing the best options for our
                  clients.
                </p>
              </div>
            </section>

            <section className=" col-span-1 row-span-1 bg-gray-100 p-6 md:py-8 md:px-10 rounded-lg">
              <h2 className="text-xl md:text-2xl font-medium tracking-wide mb-2">
                Commercial Finance
              </h2>
              <div className="text-[13px] md:text-[15px] tracking-wide text-gray-800 space-y-2 text-justify">
                <p>
                  As well as all your residential finance requirements, we can
                  assist if you are buying a new building for your business or
                  need short-term cashflow, short-term bridging finance, or are
                  looking to purchase a commercial investment. AWS Private
                  Finance has specialists in commercial and investment finance
                  who can assist with all your commercial needs.
                </p>
              </div>
            </section>
          </div>
          <div className=" text-center text-[13px] md:text-[15px] tracking-wide text-gray-800 space-y-2 font-medium bg-gray-100 p-6 md:py-8 md:px-10 rounded-lg">
            <p>AWS  Private Finance  are Appointed Representatives of Intra Private Finance Limited  who are Directly Authorised and Regulated by the Financial Conduct Authority. FCA Number: 832376.</p>
            <p>*BTL and Commercial Loans are non-regulated products and therefore the protection that is afforded to regulated products, by the Financial Services Compensation Scheme does not apply to Non-regulated products.</p>
          </div>
        </div>

        <div className="space-y-6 col-span-2 mt-8">
          <section className="sticky top-8">
            <h2 className="text-xl md:text-2xl font-medium text-center py-10 tracking-wide mb-4">
              AWS Private Finance offers a variety of mortgage and protection
              services, including:
            </h2>
            <ul className="grid md:grid-cols-3 gap-2">
              {services.map((service) => (
                <div key={service} className="flex gap-1 items-start">
                  <FaChevronRight size={11} className="mt-1" />
                  <li
                    key={service}
                    className="text-[13px] md:text-sm tracking-wide text-gray-700"
                  >
                    {service}
                  </li>
                </div>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
