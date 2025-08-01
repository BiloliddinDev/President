import React from "react";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";
import { WritingMode, services, writingInstruments } from "@/constants/care-services-leather";

export default async function Leather (){

    const myTabs = [
      {
        value: "care-use",
        label: "Уход и использование",
        content: <InstrumentAccordion data={writingInstruments} />,
      },
      {
        value: "services",
        label: "Ремонт и гарантия",
        content: <InstrumentAccordion data={services} />,
      },
      {
        value: "faq",
        label: "Вопросы и ответы",
        content: <></>,
      },
    ];
    

  
  return (
       <CustomTabs className="!my-7 container" tabs={myTabs}/>
    );
};

// export default DiscoverService;
