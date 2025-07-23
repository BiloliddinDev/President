import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Pen2 from "@/public/images/pen3.png";
import Image from "next/image";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "./components/instrument-accordion";
import { writingInstruments ,WritingMode,services,repair} from "@/constants/care-services-faqs";
 
export default function DiscoverService() {
    const myTabs = [
        {
          value: "allinfo",
          label: "Общая информация",
          content: <InstrumentAccordion data={writingInstruments} />,
        },
        {
          value: "my-account",
          label: "Мой аккаунт и заказы",
          content: <InstrumentAccordion data={WritingMode} />,
        },
        {
          value: "consulting",
          label: "Консультации и ремонт по товарам",
          content: <InstrumentAccordion data={services} />,
        },
        {
            value: "cancel",
            label: "Возврат и оплата",
            content: <InstrumentAccordion data={repair} />,
          },
       
      ];
      
  

    return (
        <div className="container md:!mt-26 !mt-42">
            <div className={"container !mt-15"}>
                <BreadcrumbDynamic/>
            </div>
            <div className="-mx-[calc((100vw-100%)/2)] mt-10 w-screen mb-28">
                <Image src={Pen2} alt="a pen"/>
            </div>
            <p className="text-lg font-medium">Часто задаваемые вопросы</p>

            <CustomTabs className="my-7" tabs={myTabs}/>
        </div>
    );
};

