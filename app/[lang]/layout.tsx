import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import React from "react";
import {Navbar} from "@/components/shared/navbar/navbar";
import {Footer} from "@/components/shared/footer/footer";


const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "President",
    description: "the best",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning={true} lang="en">
        <body
            className={`${inter.className} antialiased`}
        >
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
