import "../globals.css";
import React, {Suspense} from "react";
import {Metadata} from "next";
import {LoadingComponent} from "@/components/shared/loading-component/loading-component";
import {Footer} from "@/components/shared/footer/footer";
import {Navbar} from "@/components/shared/navbar/navbar";
import localFont from 'next/font/local'
import {InitGeoCookie} from "@/lib/get-userlocation";


const microsoftHimalaya = localFont({
    src: "../fonts/microsoft-himalaya.ttf",
    variable: "--font-microsoft-himalaya"

});

const manropeFont = localFont({
    src: "../fonts/manrope-variable.ttf",
    variable: "--font-manrope"

})


interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;

}

export const metadata: Metadata = {
    title: "President",
    description: "President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness, and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and the highest standards of quality.",
    openGraph: {
        title: "President",
        description: "President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness, and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and the highest standards of quality.",
        url: "https://president.io/",
        siteName: "President",
        locale: "en",
        type: "website",
    },
}

export default async function RootLayout({children, params}: RootLayoutProps) {
    const language: { lang: string } = await params;

    return (
        <html suppressHydrationWarning={true} lang={language.lang}>
        <head>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="President"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>President</title>
        </head>
        <body className={`${microsoftHimalaya.className} ${manropeFont.className}`}>
        <Suspense fallback={<LoadingComponent/>}>
            <Navbar/>
            {children}
            <Footer/>
        </Suspense>
        <InitGeoCookie/>
        </body>
        </html>
    );
}
