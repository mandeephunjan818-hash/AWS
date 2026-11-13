import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
// import Icon1 from "/public/icon1.png";
// import Icon2 from "/public/icon2.png";
// import Icon3 from "/public/icon3.png";
// import Icon4 from "/public/icon4.png";
// import Service1 from "/public/service1.webp";
// import Service2 from "/public/service2.webp";
// import Service3 from "/public/service3.webp";
// import Service4 from "/public/service4.webp";
import Link from "next/link";

export default function Products({ productData }) {
  const defaultData = {
    title: "Our Key Products",
    description:
      "AWS Group helps clients secure the best possible mortgage's for residential and buy-to-let mortgages. Whether you're purchasing a home to live in, a holiday or second home, or adding to an investment portfolio, we tailor our service to meet your unique needs. We also specialise in commercial finance, bridging finance, and business finance solutions. Whether you're looking to finance a business expansion, manage cash flow, or secure short-term funding, we offer bespoke solutions designed to meet your specific requirements. AWS group",
    services: [
      {
        image: "/service1.webp",
        imageAlt: "Residential Mortgage",
        title: "Residential Mortgage",
        description:
          "We provide expert advice, from buying your first home to multi-million purchases and building your investment portfolio.",
        link: "/mortgages/residential-mortgages",
        order: 0,
      },
      {
        image: "/service2.webp",
        imageAlt: "Insurance",
        title: "Insurance",
        description:
          "AWS Group offers expert advice on personal, business, and group protection, working with a carefully selected list of providers to deliver the most competitive and comprehensive coverage.",
        link: "/insurance",
        order: 1,
      },
      {
        image: "/service3.webp",
        imageAlt: "Commercial Finance",
        title: "Commercial Finance",
        description:
          "Our team of commercial real estate experts is renowned for its extensive experience, providing tailored structuring and execution services across various sectors, including commercial real estate, development & bridging finance.",
        link: "/commercial-finance",
        order: 2,
      },
      {
        image: "/service4.webp",
        imageAlt: "Healthcare Finance",
        title: "Healthcare Finance",
        description:
          "AWS Group has a team of specialists healthcare advisors who provide tailored solutions to help GPs, dentists, pharmacists, and care home operators with refinancing, acquisitions, and cash flow lending—empowering your business to thrive and grow.",
        link: "/business-funding/finance-for-healthcare",
        order: 3,
      },
    ],
  };

  const data = productData || defaultData;

  // Sort services by order
  const sortedServices = data.services
    ? [...data.services].sort((a, b) => a.order - b.order)
    : defaultData.services;

  const subData = [
    {
      icon: "/icon1.png",
      heading: "Whole of Market<br/>Broker",
    },
    {
      icon: "/icon2.png",
      heading: "Tailored Service for<br/>clients",
    },
    {
      icon:"/icon3.png",
      heading: "Specialise in Complex<br/>Income",
    },
    {
      icon: "/icon4.png",
      heading: "Loans from £150,000-<br/>£25m+",
    },
  ];

  return (
    <div className="relative">
      <div className="hidden md:block absolute w-full bg-[#154583] h-[22rem] bottom-0 z-0"></div>

      <div className="relative z-10">
        <div className="section-container pt-6">
          <div className="max-w-5xl text-center mx-auto">
            <div className="text-[27px] mb-2">{data.title}</div>
            <p className="text-[13px] tracking-wider leading-loose text-gray-700 -mb-6">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sortedServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-lg overflow-hidden"
              >
                <Link href={item.link} className="block h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link href={item.link}>
                    <h2 className="text-[17px] tracking-wide mb-2">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-[13px] text-gray-700 tracking-wide leading-loose line-clamp-4">
                    {item.description}
                  </p>
                  <div className="h-[1px] w-full bg-gray-300 my-3"></div>
                  <Link
                    href={item.link}
                    className="text-[13px] font-medium custom-blue-text inline-flex items-center gap-2 hover:gap-3 duration-300"
                  >
                    Know More
                    <FaChevronRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 custom-blue md:bg-transparent lg:grid-cols-4 gap-0 lg:gap-6 lg:-mt-24 lg:pt-28 mt-6">
            {subData.map((item, index) => {
              const Icon = item.icon;
              return(
                <div
                className={`flex items-center justify-between p-2 ${
                  index === 0 && "border-r border-b md:border-0"
                }
              ${index === 1 && "border-b md:border-b-0"} 
              ${index === 2 && "border-r md:border-r-0"}

              `}
                key={index}
              >
                <div className="flex flex-col items-center gap-1 md:gap-4 my-4 flex-1">
                  <div className="w-14 h-14 md:w-16 md:h-16">
                    <Image src={item.icon} alt={item.heading} width={60} height={60} />
                  </div>
                  <p
                    className="text-[13px] md:text-[15px] font-medium tracking-wide text-white max-w-40 text-center"
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                  />
                </div>
                {index < subData.length - 1 && (
                  <div className="w-[1px] h-12 bg-gray-300 my-3 hidden lg:block"></div>
                )}
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
