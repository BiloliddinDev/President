import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
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
            content: <InstrumentAccordion/>,
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
        {value: "nibs", label: "Nibs", content: "Nibs content"},
        {value: "services", label: "Services", content: "Services content"},
        {
            value: "repair-warranty",
            label: "Repair & Warranty",
            content: "Repair & Warranty content",
        },
        {value: "faq", label: "FAQ", content: "Frequently Asked questions"},
    ];

    return (
        <div className="mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
            <div className="!mb-10 container">
                <BreadcrumbDynamic/>
            </div>
            <div className="container !mb-10">
                <Image src={Pen2} alt="a pen"/>
            </div>

            <CustomTabs className="!my-7 container" tabs={myTabs}/>
        </div>
    );
};

export default DiscoverService;
