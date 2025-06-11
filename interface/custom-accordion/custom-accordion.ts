import { ReactNode } from "react";

export interface AccordionProps {
  accordionTrigger: string;
  accordionContent: string | ReactNode;
  itemValue: string;
  className?: string;
  accordionContentStyles?: string;
  accordionTriggerStyles?: string;
}
