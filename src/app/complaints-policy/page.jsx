import ComplaintsPolicy from "@/components/ComplaintsPolicy";

export const metadata = {
    title: 'Complaints Policy | AWS Private Finance UK ',
    description: 'Read the AWS Private Finance Complaints Policy. Learn how to raise a complaint, our resolution process and your consumer rights in the UK.',
    alternates: {
        canonical: 'https://aws-privatefinance.co.uk/complaints-policy',
    },
    openGraph: {
        title: 'Complaints Policy | AWS Private Finance UK ',
        description: 'Read the AWS Private Finance Complaints Policy. Learn how to raise a complaint, our resolution process and your consumer rights in the UK.',
        images:
        {
            url: `https://aws-privatefinance.co.uk/lionicon.jpeg`,
        },
        type: 'website',
        url: `https://aws-privatefinance.co.uk/complaints-policy`,
    }
};

export default function ComplaintsPolicyPage() {
    return <ComplaintsPolicy />;
}