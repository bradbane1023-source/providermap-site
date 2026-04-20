import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");
  const url = request.nextUrl.clone();

  if (host === "providermap.tech") {
    url.hostname = "www.providermap.tech";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
