import React from "react";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";
import {services, writingInstruments} from "@/constants/care-services-watches";

export default async function Watches() {

    const myTabs = [
        {
            value: "care-use",
            label: "Уход и использование",
            content: <InstrumentAccordion data={writingInstruments}/>,
        },
        {
            value: "services",
            label: "Ремонт и гарантия",
            content: <InstrumentAccordion data={services}/>,
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
