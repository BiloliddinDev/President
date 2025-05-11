import {Inter} from "next/font/google";
import "../globals.css";
import React, {Suspense} from "react";
import {Navbar} from "@/components/shared/navbar/navbar";
import {Footer} from "@/components/shared/footer/footer";
import favicon from "@/public/svg/favicon.svg"
import {Metadata} from "next";



const inter = Inter({
    subsets: ["latin"],
});


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
        url: "https://president.uz/",
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
            <title>President</title>
            <link rel="icon" type="image/png" sizes="32x32" href={favicon.src}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favicon.src}/>
        </head>
        <body className={inter.className}>
        
            <Navbar/>
            {children}
            <Footer/>
       
        </body>
        </html>
    );
}
