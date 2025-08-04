import React from "react";

import CustomAccordion from "@/components/shared/custom-accordion/custom-accordion";
import { tabsType } from "@/constants/care-services-items";
const InstrumentAccordion = ({ data }: { data: tabsType[] }) => {
  return (
    <>
      {data.map((item) => (
        <CustomAccordion
          key={item.id}
          itemValue={item.value}
          accordionTrigger={item.accordionTrigger}
          accordionContent={item.accordionContent}
          accordionContentStyles="text-sm font-normal"
          accordionTriggerStyles="font-medium"
          className="my-3 md:my-4 border-b"
        />
      ))}
    </>
  );
};

export default InstrumentAccordion;
