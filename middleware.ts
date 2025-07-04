import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {i18n, Locale} from "./lib/i18n-config";
import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): Locale {
    const cookieLocale = request.cookies.get("lang")?.value as Locale | undefined;
    if (cookieLocale && i18n.locales.includes(cookieLocale)) {
        return cookieLocale;
    }

    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales = [...i18n.locales];
    const languages = new Negotiator({headers: negotiatorHeaders}).languages(locales);

    try {
        return matchLocale(languages, locales, i18n.defaultLocale) as Locale;
    } catch {
        return i18n.defaultLocale;
    }
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const segments = pathname.split('/');
    const firstSegment = segments[1] as Locale | undefined;
    const isLocaleInPath = firstSegment && i18n.locales.includes(firstSegment);

    if (pathname === "/") {
        const locale = getLocale(request);
        const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
        response.cookies.set("lang", locale);
        return response;
    }

    if (!isLocaleInPath) {
        const locale = getLocale(request);
        const newPathname = pathname === "/" ? `/${locale}` : `/${locale}/create`;
        const response = NextResponse.redirect(new URL(newPathname, request.url));
        response.cookies.set("lang", locale);
        return response;
    }

    const isHomePage = segments.length === 2;
    const isCreatePage = segments.length === 3 && segments[2] === 'create';

    if (!isHomePage && !isCreatePage) {
        const response = NextResponse.redirect(new URL(`/${firstSegment}/create`, request.url));
        response.cookies.set("lang", firstSegment);
        return response;
    }

    const response = NextResponse.next();
    if (isLocaleInPath) {
        response.cookies.set("lang", firstSegment);
    }
    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|videos/|assets/).*)',
    ],
};
