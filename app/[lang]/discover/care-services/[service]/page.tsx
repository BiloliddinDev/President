import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
// import Pen2 from "@/public/images/pen3.png";
import leather from "@/public/images/Bag.jpg";
import watch from "@/public/images/Watches1.png";
import writing from "@/public/images/care-detail.png";
import Image from "next/image";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";

interface ServiceProps {
  params: Promise<{ 
    service:string
   }>
}
export default async function DiscoverService ({params}:ServiceProps){
  const service: { service: string } = await params;
  console.log(service)

    // service ga mos rasmni tanlash
    let imageSrc = writing; // default
    if (service.service === "leather") {
      imageSrc = leather;
    } else if (service.service === "watches") {
      imageSrc = watch;
    }
    
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
    // {
    //   value: "refills-link",
    //   label: "Refills & Ink",
    //   content: "Refills & Ink content",
    // },
    // { value: "nibs", label: "Nibs", content: "Nibs content" },
    { value: "services", label: "Services", content: "Services content" },
    {
      value: "repair-warranty",
      label: "Repair & Warranty",
      content: "Repair & Warranty content",
    },
    { value: "faq", label: "FAQ", content: "Frequently Asked questions" },
  ];

  // "writing%20instrument" "leather"  "watches"
  
  return (
    <div className="container mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen mb-28">
        <Image src={imageSrc} alt="a pen" width={10000} height={1000}/>
      </div>
      <p className="text-lg font-medium">Writing instruments</p>

            <CustomTabs className="!my-7 container" tabs={myTabs}/>
        </div>
    );
};

// export default DiscoverService;
