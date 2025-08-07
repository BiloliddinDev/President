import CustomAccordion from "@/components/shared/custom-accordion/custom-accordion";
import { discoverAboutItems } from "@/constants/discover-items";
import React from "react";
import WatchMaker from "@/public/images/home-page-aboutUs.jpg";
import Image from "next/image";

interface AccordionProps{
  lang:"uz"|"ru"|"en"|"tj"|"az"
}

const AccordionWithImg = ({lang}:AccordionProps) => {
  return (
    <div className="-mx-[calc((100vw-100%)/2)] w-screen bg-[#f6f6f6] my-8 md:my-12">
      <div className="container max-w-screen-xl mx-auto px-2 md:px-4 py-6 md:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
        <div className="w-full lg:w-1/2">
          {discoverAboutItems.map((item) => (
            <CustomAccordion
              key={item.id}
              itemValue={item.value}
              accordionTrigger={item.accordionTrigger[lang]}
              accordionContent={item.accordionContent[lang]}
              accordionContentStyles="text-sm font-light"
              accordionTriggerStyles="font-medium"
              className="my-3 md:my-4 border-b"
            />
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={WatchMaker}
            alt="Watch Maker"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionWithImg;
