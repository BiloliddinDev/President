import React from "react";
import AccountSidebar from "@/app/[lang]/account/components/sidebar/sidebar";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { getDictionary } from "@/lib/get-dictionary";

interface RootLayoutProps {
  children: React.ReactNode;
  params?: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params?.then((res) => res.lang)) || "uz";
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <div className={"container md:!mt-26 !mt-42"}>
        <BreadcrumbDynamic />
        <SectionTitle className={"mt-10 mb-16"} text={dictionary.account.title} />
      </div>
      <div className={"bg-neutral-100 py-10"}>
        <div className={"flex flex-col md:flex-row container gap-25"}>
          <AccountSidebar lang={lang} dictionary={dictionary}/>
          <div className={"w-full"}>{children}</div>
        </div>
      </div>
    </div>
  );
}
