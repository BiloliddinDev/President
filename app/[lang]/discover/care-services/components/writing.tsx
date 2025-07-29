import React from "react";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";
import {repair, services, writingInstruments, WritingMode} from "@/constants/care-services-items";

export default async function Writing() {

    const myTabs = [
        {
            value: "care-use",
            label: "Уход и использование",
            defaultOpen: true,
            content: <InstrumentAccordion data={writingInstruments}/>,
        },
        {
            value: "writing-modes",
            label: "Режимы письма",
            content: <InstrumentAccordion data={WritingMode}/>,
        },
        {
            value: "services",
            label: "Услуги",
            content: <InstrumentAccordion data={services}/>,
        },
        {
            value: "repair-warranty",
            label: "Ремонт и гарантия",
            content: <InstrumentAccordion data={repair}/>,
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

