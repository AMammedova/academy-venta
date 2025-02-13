// import { NextResponse } from "next/server";
// import Negotiator from "negotiator";

// const locales = ["en", "ru", "az"]; // Dəstəklənən dillər
// const defaultLocale = "en"; // Standart dil

// function getLocale(request) {
//   const headers = { "accept-language": request.headers.get("accept-language") || "" };
//   const languages = new Negotiator({ headers }).languages();
//   const matchedLocale = languages.find((lang) => locales.includes(lang)) || defaultLocale;
//   return matchedLocale;
// }

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: ["/((?!_next|api|favicon.ico).*)"], // Xüsusi yolları istisna edin
// };

// middleware.ts
import { NextResponse } from "next/server";
import Negotiator from "negotiator";

const locales = ["en", "ru", "az"];
const defaultLocale = "en";

// Helper to check if the request is for a static file
function isStaticPath(pathname) {
  return (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/icons/') ||
    pathname.startsWith('/_next/') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg')
  );
}

function getLocale(request) {
  const headers = { "accept-language": request.headers.get("accept-language") || "" };
  const languages = new Negotiator({ headers }).languages();
  return languages.find((lang) => locales.includes(lang)) || defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files
  if (isStaticPath(pathname)) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next|images|icons|.*\\.[\\w]+$).*)'
  ],
};