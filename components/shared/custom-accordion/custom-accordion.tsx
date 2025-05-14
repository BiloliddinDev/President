import React, { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AccordionProps } from "@/interface/custom-accordion/custom-accordion";
const CustomAccordion: FC<AccordionProps> = ({
  className,
  accordionContent,
  accordionTrigger,
  itemValue,
  accordionTriggerStyles,
  accordionContentStyles,
}) => {
  return (
    <Accordion
      type="single"
      collapsible={true}
      className={`w-full ${className}`}
    >
      <AccordionItem value={itemValue}>
        <AccordionTrigger className={accordionTriggerStyles}>
          {accordionTrigger}
        </AccordionTrigger>
        <AccordionContent className={accordionContentStyles}>
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
