import StampDutyCalc from "@/components/StampDutyCalc";

export async function generateMetadata() {
    return {
      title: "AWS Private Finance - calculator ",
      description: "AWS Private Finance - calculator",
      icons: {
        icon: "/favicon.png",
      },
      openGraph: {
        title: 'AWS Private Finance - calculator',
        description: 'AWS Private Finance - calculator',
        images:
        {
          url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
        },
        type: 'website',
      },
    };
  }

export default function StampDutyCalculator() { 
  return (
    <>
        <StampDutyCalc/>
    </>
  );
}
