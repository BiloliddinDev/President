import InstrumentAccordion from "@/app/[lang]/service/faqs/components/instrument-accordion";

export const myTabs = [
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