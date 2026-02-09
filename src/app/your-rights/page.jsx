import Banner from "@/components/Banner";
import Link from "next/link";


export async function generateMetadata() {
    return {
      title: "AWS Private Finance - your rights ",
      description: "AWS Private Finance - your rights",
      icons: {
        icon: "/favicon.png",
      },
      openGraph: {
        title: 'AWS Private Finance - your rights',
        description: 'AWS Private Finance - your rights',
        images:
        {
          url: `https://aws-privatefinance.co.uk/lion-icon.jpeg`, // Must be an absolute URL
        },
        type: 'website',
      },
    };
  }

export default function Rights() {
  return (
    <>
      <Banner />
      <div className="section-container text-sm tracking-wide">
        Our Firm’s priority is to provide customers with the highest level of
        service. However, we know that sometimes things can go wrong. Customer
        feedback helps us understand where things have gone wrong and gives us
        the opportunity to put them rights. It also helps us understand where we
        need to improve our products and services.
        <br />
        <br />
        If you have a complaint about your Adviser or the service you received
        from our firm please contact us.
        <br />
        <br />
        Post: Compliance Department (Complaints) <br />
        <br />
        <span className="block font-semibold">AWS Financial Services</span>{" "}
        <br />
        Intra Private Finance Ltd <br /> <br /> 4th Floor , 7
        Cutler Street, London, United Kingdom, E1 7DJ <br /> <br />
        Email:
        <Link href="mailto:info@awsmortgages.co.uk">
          info@awsmortgages.co.uk
        </Link>
        <div>
          Phone:
          <Link href="tel:+44(0)203 488 1541"> +44(0)203 488 1541</Link>
          <br /> <br />
        </div>{" "}
        We may record and monitor calls. <br /> <br /> If your complaint cannot
        be resolved straight away, we will: <br /> <br /> Acknowledge receipt in
        writing, confirming our understanding of your complaint, who will be
        handling it. And giving you the opportunity to provide any further
        information or additional documents. <br /> <br /> After investigating
        your concerns we will respond, as quickly as possible. If no decision
        has been reached we will update you on progress after 8 weeks. <br />{" "}
        <br />
        <b className="font-semibold text-lg">The Financial Ombudsman Service</b>
        <br /> <br />
        You can ask the Financial Ombudsman Service for an independent review
        free of charge. But you must do so within six months of the date of the
        firm’s final response letter.
        <br /> <br /> The Financial Ombudsman Service (FOS) will only consider
        your complaint once you’ve tried to resolve it. So, please take up your
        concerns with us first. We do our best to resolve complaints.
        <br /> <br /> The FOS is also only able to consider certain categories
        of complaint. For example complaints about Buy to Let mortgages, will
        normally be outside the jurisdiction of the FOS. And these complaints
        are not regulated by the Financial Conduct Authority.
        <br /> <br /> In addition, the FOS might not be able to consider your
        complaint if:
        <br /> <br /> What you’re complaining about happened more than six years
        ago, and <br /> <br /> You’re complaining more than three years after
        you realized (or should have realized) that there was a problem.
        <br /> <br /> If your complaint was made outside of these time limits,
        which is a matter for The Ombudsman to decide. The Ombudsman will not
        have our permission to consider your complaint. So, will only be able to
        do so in very limited circumstances. For example, if it believes that
        the delay was as a result of exceptional circumstances.
        <br /> <br /> <b className="text-lg font-semibold"> Contact us </b>
        <br /> <br />
        Further information on the services provided by the Financial Ombudsman
        Service can be found on their website: <br /> <br />
        http://www.financial-ombudsman.org.uk Other contact points are by: –{" "}
        <br /> <br />
        Post: The Financial Ombudsman Service, Exchange Tower, London. E14 9S{" "}
        <br /> <br />
        Phone: 0800 023 4567 or 0300 123 9123 <br /> <br /> Email:
        complaint.info@financial-ombudsman.org.uk <br /> <br />
        Alternative Dispute Resolution (ADR) Directive <br /> <br /> Alternative
        Dispute Resolution (ADR) Directive. The ADR directive is European law,
        which means alternative ways of resolving contractual disputes. The
        Financial Ombudsman Service (FOS) is the ADR provider for Financial
        Services in the UK. It will provide a complaint handling service under
        the ADR Directive in addition to its role as an Ombudsman Service.
        <br /> <br />
        Rather than pass the responsibility to the FOS under the ADR Directive.
        This does not affect customers’ statutory rights of referral to the FOS
        as outlined above. <br /> <br />
        Any complaints received via the ADR, will be forwarded to the FOS and
        then to our Firm. Complaints received by this method will be treated in
        the same way as those received through existing means and your rights
        are unaffected.
      </div>
    </>
  );
}
