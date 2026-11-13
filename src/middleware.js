import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 0. Canonical WWW to non-WWW redirect (301 Permanent)
  if (host.startsWith("www.")) {
    const newHost = host.replace(/^www\./, "");
    const redirectUrl = new URL(`${pathname}${search}`, `https://${newHost}`);
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const token = request.cookies.get("accessToken423798")?.value;

  // 1. Cloudflare Email Obfuscation cleanup
  if (pathname.startsWith("/cdn-cgi/")) {
    return new NextResponse("Gone", { status: 410 });
  }

  // 2. Path Redirects
  if (pathname === '/business-finance/business-funding/finance-for-dentists') {
    return NextResponse.redirect(
      new URL('/business-finance/healthcare-finance/finance-for-dentists', request.url),
      301
    );
  }

  // 3. Auth checks
  if (pathname === "/login") {
    if (token) {
      try {
        await jwtVerify(
          token,
          new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return NextResponse.redirect(new URL("/aws-backend", request.url));
      } catch (error) {
        console.log(error);
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/aws-backend")) {
    if (!token) {
      const r = NextResponse.redirect(new URL("/login", request.url));
      r.headers.set("x-auth-debug", "no-cookie");
      return r;
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (error) {
      console.log("[auth] JWT verify failed on /aws-backend:", error?.message, "| JWT_SECRET set in middleware:", Boolean(process.env.JWT_SECRET));
      const r = NextResponse.redirect(new URL("/login", request.url));
      r.headers.set("x-auth-debug", process.env.JWT_SECRET ? "verify-failed" : "no-secret-in-middleware");
      return r;
    }
  }

  return NextResponse.next();
}

// Updated Matcher to catch all paths for host checks, excluding static assets/images
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (.svg, .png, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};