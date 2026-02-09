"use client";

import { usePathname } from "next/navigation";

export default function NavbarComponent({ children }) {
  const pathName = usePathname();
  const isBackend =
    pathName.startsWith("/aws-backend") || pathName === "/login";

  return <>{!isBackend && children}</>;
}
