import Link from "next/link";
import ContactCta from "./ContactCta";

export default function InnerSidebar() {
  const data = [
    {
      heading: "Mortgage",
      slug: "/mortgages",
    },
    {
      heading: "Commercial Finance",
      slug: "/commercial-finance",
    },
    {
      heading: "Insurance",
      slug: "/insurance",
    },
    {
      heading: "Business Funding",
      slug: "/business-funding",
    },
  ];
  return (
    <div className="w-full md:w-80">
      <div className="sticky top-8 space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Our Services</h3>
          <div className="space-y-3">
            {data.map((link, index) => (
              <Link
                key={index}
                href={link.slug}
                className="flex items-center justify-between text-sm py-2 border-b border-gray-200 gap-2"
              >
                <span className="line-clamp-3 text-[13px] tracking-wide">
                  {link?.heading}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <ContactCta />
      </div>
    </div>
  );
}
