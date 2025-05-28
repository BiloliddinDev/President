import React from "react";

import CustomAccordion from "@/components/shared/custom-accordion/custom-accordion";
import { writingInstruments } from "@/constants/care-services-items";
const InstrumentAccordion = () => {
  return (
    <>
      <p className="text-lg font-medium  mb-5">Writing instruments</p>
      {writingInstruments.map((item) => (
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
