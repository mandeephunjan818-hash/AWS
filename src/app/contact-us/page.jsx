import ContactUsPage from "./ContactUs";

export const metadata = {
    title: 'Contact AWS Private Finance | Speak to Expert Mortgage Advisors',
    description: 'Contact AWS Private Finance for mortgage and protection advice. Our whole-of-market brokers help professionals secure tailored mortgage solutions.',
    openGraph: {
        title: 'Contact AWS Private Finance | Speak to Expert Mortgage Advisors',
        description: 'Contact AWS Private Finance for mortgage and protection advice. Our whole-of-market brokers help professionals secure tailored mortgage solutions.',
        images:
        {
            url: `https://aws-privatefinance.co.uk/lionicon.jpeg`, // Must be an absolute URL
        },
        type: 'website',
        url: `https://aws-privatefinance.co.uk/contact-us`, // Must be an absolute URL
    }
};

export default function ContactUS() {
    return <ContactUsPage />
}