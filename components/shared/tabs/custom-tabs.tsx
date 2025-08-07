import React, { FC, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface TabItem {
  value: string;
  label: {
    uz: string;
    ru: string;
    en: string;
    tj: string;
    az: string;
  };
  content: ReactNode;
  defaultOpen?: boolean;
}

interface Props {
  tabs: TabItem[];
  className?: string;
  identifier?: string;
  label?:  {
    uz: string;
    ru: string;
    en: string;
    tj: string;
    az: string;
  };
  lang: "uz" | "ru" | "en" | "tj" | "az";
}

const CustomTabs: FC<Props> = ({ tabs, className, identifier, lang }) => {
  const defaultTab = tabs.find((tab) => tab.defaultOpen);
  const defaultValue = defaultTab?.value || tabs[0]?.value;

  return (
    <Tabs
      defaultValue={defaultValue}
      className={`w-full overflow-scroll ${className}`}
    >
      <div className={"overflow-scroll"}>
        <TabsList data-aos="fade-up" className="bg-transparent ">
          {tabs.map((tab) =>
            tab.value == "faq" ? (
              <Link href="/service/faqs" key={tab.value}>
                <TabsTrigger
                  value={tab.value}
                  className={`bg-neutral-100 transition-all text-sm px-4 py-4 mr-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white ${identifier}`}
                >
                  {tab.label[lang]}
                </TabsTrigger>
              </Link>
            ) : (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`bg-neutral-100 transition-all text-sm px-4 py-4 mr-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white ${identifier}`}
              >
                {tab.label[lang]}
              </TabsTrigger>
            )
          )}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent className="pt-7" key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
