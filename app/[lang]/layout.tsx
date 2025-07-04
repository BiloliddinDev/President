import "../globals.css";
import React, {Suspense} from "react";
import {Metadata} from "next";
import {LoadingComponent} from "@/components/shared/loading-component/loading-component";
import {Footer} from "@/components/shared/footer/footer";
import {Navbar} from "@/components/shared/navbar/navbar";
import localFont from "next/font/local";
import {InitGeoCookie} from "@/lib/get-userlocation";
import {Toaster} from "@/components/ui/sonner";
import AuthSessionProvider from "@/provider/auth-session-provider";
import Script from "next/script";
import Image from "next/image";

const microsoftHimalaya = localFont({
    src: "../fonts/microsoft-himalaya.ttf",
    variable: "--font-microsoft-himalaya",
});

const manropeFont = localFont({
    src: "../fonts/manrope-variable.ttf",
    variable: "--font-manrope",
});

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: "uz" | "ru" | "en" }>;
}

export const metadata: Metadata = {
    title: "President",
    description:
        "President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics...",
    openGraph: {
        title: "President",
        description:
            "President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics...",
        url: "https://president.io/",
        siteName: "President",
        locale: "en",
        type: "website",
    },
};

export default async function RootLayout({children, params}: RootLayoutProps) {
    const language: { lang: "en" | "ru" | "uz" } = await params;

    return (
        <html suppressHydrationWarning={true} lang={language.lang}>
        <head>
            {/* Favicon & Metadata */}
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="President"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>President</title>

            {/* Google Tag Manager */}
            <Script id="gtm-head" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M29WJW77');
                `}
            </Script>

            {/* Facebook Pixel */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2145985465879209');
                fbq('track', 'PageView');
                `}
            </Script>

            {/* Yandex Metrika */}
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
                  (m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(103167645, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
                `}
            </Script>
        </head>

        <body className={`${microsoftHimalaya.className} ${manropeFont.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M29WJW77"
                height="0"
                width="0"
                style={{display: 'none', visibility: 'hidden'}}
            ></iframe>
        </noscript>

        {/* Facebook Pixel (noscript) */}
        <noscript>
            <Image
                height="1"
                width="1"
                style={{display: 'none'}}
                src="https://www.facebook.com/tr?id=2145985465879209&ev=PageView&noscript=1"
                alt=""
            />
        </noscript>

        {/* Yandex Metrika (noscript) */}
        <noscript>
            <div>
                <Image
                    src="https://mc.yandex.ru/watch/103167645"
                    style={{position: 'absolute', left: '-9999px'}}
                    alt=""
                />
            </div>
        </noscript>

        <AuthSessionProvider>
            <Suspense fallback={<LoadingComponent/>}>
                <header>
                    <Navbar lang={language.lang}/>
                </header>
                <main>{children}</main>
                <Footer lang={language.lang}/>
                <Toaster/>
            </Suspense>
            <InitGeoCookie/>
        </AuthSessionProvider>
        </body>
        </html>
    );
}
