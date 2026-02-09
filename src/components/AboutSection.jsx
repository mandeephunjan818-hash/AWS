import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="section-container flex gap-6 items-start flex-col md:flex-row pt-16">
      <div className="flex-1 order-2 md:order-1">
        <Image
          src="/About.webp"
          width={1200}
          height={1200}
          alt="alt"
          className="object-cover"
        />
      </div>
      <div className="flex-1 order-1 md:order-2">
        <h3 className="text-xl md:text-2xl lg:text-[28px] mb-2">
          Few Words About AWS Group
        </h3>
        <p className="text-[13px] md:text-[14px] tracking-wide leading-loose text-gray-700 text-justify">
          AWS Private Finance is an award-winning specialist mortgage and
          protection advisory business. Established in 2015 by managing partner
          Ashley Slade, we are whole-of-market brokers, offering clients – many
          of whom are professionals, self-employed and contractors looking for
          large mortgages – a tailored financial solution, best suited to their
          particular needs.
          <br />
          <br />
          Moreover, our advice will help you buy your first home, re-mortgage
          your existing home or build your property portfolio. As experts in our
          field, we undertake the entire mortgage process and then, we provide
          you with ongoing high quality and professional service.
        </p>
      </div>
    </div>
  );
}
