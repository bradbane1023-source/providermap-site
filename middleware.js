import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname, pathname, search } = request.nextUrl;

  if (hostname === "providermap.tech") {
    return NextResponse.redirect(
      `https://www.providermap.tech${pathname}${search}`,
      308
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
