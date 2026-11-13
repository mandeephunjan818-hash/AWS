"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Reusable across the site: builds the email client-side after mount so
// no "mailto:" or plain email address ever sits in server-rendered HTML
// for Cloudflare Email Obfuscation to detect and rewrite into a cdn-cgi link.
export default function ObfuscatedEmailLink({
    user = "info",
    domain = "awsmortgages.co.uk",
    className,
    fallbackText = "Email us",
}) {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        setEmail(`${user}@${domain}`);
    }, [user, domain]);

    if (!email) {
        return <span className={className}>{fallbackText}</span>;
    }

    return (
        <Link href={`mailto:${email}`} className={className}>
            {email}
        </Link>
    );
}