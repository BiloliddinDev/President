import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
// import Pen2 from "@/public/images/pen3.png";
import leather from "@/public/images/Bag.jpg";
import watch from "@/public/images/Watches1.png";
import writing from "@/public/images/care-detail.png";
import Image from "next/image";
// import CustomTabs from "@/components/shared/tabs/custom-tabs";
// import InstrumentAccordion from "../components/instrument-accordion";
// import { WritingMode, services, writingInstruments,repair, tabsType } from "@/constants/care-services-items";
import Writing from "../components/writing";
import Leather from "../components/leatger";
import Watches from "../components/watches";

interface ServiceProps {
  params: Promise<{ 
    service:string
   }>
}
export default async function DiscoverService ({params}:ServiceProps){
  const service: { service: string } = await params;
  // console.log(service)

    // service ga mos rasmni tanlash
    let imageSrc = writing; // default
    if (service.service === "leather") {
      imageSrc = leather;
    } else if (service.service === "watches") {
      imageSrc = watch;
    }

  
  return (
    <div className="container mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen mb-28">
        <Image src={imageSrc} alt="a pen" width={10000} height={1000}/>
      </div>
      <p className="text-lg font-medium">{imageSrc==writing ? "Письменный инструмент":imageSrc==leather ? "Кожа" :"Часы"}</p>

      {imageSrc==writing ? <Writing/> :imageSrc==leather ? <Leather/> : <Watches/>} 
        </div>
    );
};

// export default DiscoverService;
