import React, { FC, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: TabItem[];
  className?: string;
  tabtriggerClasses?: string;
}

const CustomTabs: FC<Props> = ({ tabs, className, tabtriggerClasses }) => {
  return (
    <Tabs defaultValue={tabs[0].value} className={`w-full  ${className}`}>
      <TabsList className="bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`bg-neutral-100 transition-all text-sm px-4 py-4 mr-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white ${tabtriggerClasses}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent className="pt-7" key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
