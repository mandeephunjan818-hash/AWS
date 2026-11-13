"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page immediately on client side
        router.push("/");
    }, [router]);

    // Return null or a loading state while redirecting
    return null;
}