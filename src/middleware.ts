// middleware.ts
import { type NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";


/**
 * Detect preferred language from the Accept-Language header
 */
function detectLocale(req: NextRequest): string {
  const accept = req.headers.get("accept-language") || "";
  const preferred = accept.split(",").map((lang) => lang.split(";")[0].trim());

  for (const lang of preferred) {
    const base = lang.split("-")[0];
    if (locales.includes(base)) return base;
  }

  return defaultLocale;
}

/**
 * Middleware
 */
export default function middleware(request: NextRequest) {
  const { pathname, search, hash } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // 1) Path already includes a locale prefix
  if (hasLocale) {
    const currentLocale = locales.find(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    )!;

    // Default locale → strip the prefix
    if (currentLocale === defaultLocale) {
      const newPath = pathname.replace(`/${defaultLocale}`, "") || "/";
      return NextResponse.redirect(
        new URL(`${newPath}${search}${hash}`, request.url),
      );
    }

    return NextResponse.next();
  }

  // 2) No prefix → redirect based on browser language
  const locale = detectLocale(request);

  if (locale !== defaultLocale) {
    const newPath = `/${locale}${pathname}`.replace(/\/+/, "/");
    return NextResponse.redirect(
      new URL(`${newPath}${search}${hash}`, request.url),
    );
  }

  // 3) Default locale → no prefix
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
