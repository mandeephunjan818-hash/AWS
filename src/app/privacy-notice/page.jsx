import PrivacyNotice from "@/components/PrivacyNotice";

export const metadata = {
    title: 'Privacy Notice | AWS Private Finance UK',
    description: 'Read the AWS Private Finance Privacy Notice to learn how we collect, use, store and protect your personal data in line with UK GDPR.',
    alternates: {
        canonical: 'https://aws-privatefinance.co.uk/privacy-notice',
    },
    openGraph: {
        title: 'Privacy Notice | AWS Private Finance UK',
        description: 'Read the AWS Private Finance Privacy Notice to learn how we collect, use, store and protect your personal data in line with UK GDPR.',
        images:
        {
            url: `https://aws-privatefinance.co.uk/lionicon.jpeg`,
        },
        type: 'website',
        url: `https://aws-privatefinance.co.uk/privacy-notice`,
    }
};

export default function PrivacyNoticePage() {
    return <PrivacyNotice />;
}