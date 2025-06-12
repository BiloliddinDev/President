import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {i18n} from "./lib/i18n-config";
import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales = i18n.locales.slice();
    const languages = new Negotiator({headers: negotiatorHeaders}).languages(
        locales
    );
    return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the path is public (home page)
    const isPublicPath = pathname === "/" || pathname === "/uz" || pathname === "/ru" || pathname === "/en";

    // Add your authentication check here
    const isAuthenticated = request.cookies.get("auth_token"); // auth_token nomli cookie borligini tekshirish

    if (!isPublicPath && !isAuthenticated) {
        // Agar authenticated bo'lmasa va public path bo'lmasa, home page ga redirect qilish
        const locale = getLocale(request);
        const cookieLocale = request.cookies.get("lang")?.value;
        const redirectUrl = new URL(
            `/${cookieLocale ?? locale ?? i18n.defaultLocale}`,
            request.url
        );
        return NextResponse.redirect(redirectUrl);
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        const cookieLocale = request.cookies.get("lang")?.value;
        const redirectUrl = new URL(
            `/${cookieLocale ?? locale ?? i18n.defaultLocale}${
                pathname.startsWith("/") ? "" : "/"
            }${pathname}`,
            request.url
        );
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|videos/).*)"],
};