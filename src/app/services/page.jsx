import Banner from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";

const data = [
  {
    image: "/ser1.webp",
    imageAlt: "Mortgages",
    heading: "Mortgages",
    link: "mortgages",
  },
  {
    image: "/ser2.webp",
    imageAlt: "Commercial Finance",
    heading: "Commercial Finance",
    link: "commercial-finance",
  },
  {
    image: "/ser3.webp",
    imageAlt: "Insurance",
    heading: "Insurance",
    link: "insurance",
  },
  {
    image: "/ser4.webp",
    imageAlt: "Business Finance",
    heading: "Business Finance",
    link: "business-finance",
  },
];

export async function generateMetadata() {
    return {
      title: "AWS Private Finance - services",
      description: "AWS Private Finance - services",
      icons: {
        icon: "/favicon.png",
      },
      openGraph: {
        title: 'AWS Private Finance - services',
        description: 'AWS Private Finance - services',
        images:
        {
          url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
        },
        type: 'website',
      },
    };
  }

export default function ServicePage() {
  return (
    <>
      <Banner />
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {data?.map((item, index) => (
            <CategoryCard
              key={index}
              heading={item.heading}
              image={item.image}
              imageAlt={item.imageAlt}
              slug={`${item.link}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
