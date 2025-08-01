import React from "react";
import AccountSidebar from "@/app/[lang]/account/components/sidebar/sidebar";
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {SectionTitle} from "@/components/ui/sectionTitle";

interface RootLayoutProps {
    children: React.ReactNode;
    params?: Promise<{ lang: string }>;
}


export default async function RootLayout({children, params}: RootLayoutProps) {
    const lang = await params?.then(res => res.lang);
    return (
        <div >
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <SectionTitle className={"mt-10 mb-20"} text={"Мой счет"}/>
            </div>
            <div className={'bg-neutral-100 py-10'}>
                <div className={"flex flex-col md:flex-row container gap-25"}>
                    <AccountSidebar lang={lang}/>
                    <div className={"w-full"}>{children}</div>
                </div>
            </div>
        </div>
    )
}
