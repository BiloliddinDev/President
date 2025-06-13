import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Pen2 from "@/public/images/pen3.png";
import Image from "next/image";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";
const DiscoverService = () => {
  const myTabs = [
    {
      value: "care-use",
      label: "Care & Use",
      content: <InstrumentAccordion />,
    },
    {
      value: "writing-modes",
      label: "Writing Modes",
      content: "Writing Modes content",
    },
    {
      value: "refills-link",
      label: "Refills & Ink",
      content: "Refills & Ink content",
    },
    { value: "nibs", label: "Nibs", content: "Nibs content" },
    { value: "services", label: "Services", content: "Services content" },
    {
      value: "repair-warranty",
      label: "Repair & Warranty",
      content: "Repair & Warranty content",
    },
    { value: "faq", label: "FAQ", content: "Frequently Asked questions" },
  ];

  return (
    <div className="container mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen mb-28">
        <Image src={Pen2} alt="a pen" />
      </div>
      <p className="text-lg font-medium">Writing instruments</p>

      <CustomTabs className="my-7" tabs={myTabs} />
    </div>
  );
};

export default DiscoverService;
