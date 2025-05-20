import Image from "next/image";
import React from "react";
import Pen from "@/public/images/Pen.png";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { careServicesItems } from "@/constants/care-services-items";
import IconComponent from "@/components/shared/icon-view";
const CareAndServices = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16 md:!mt-20">
      <div className="py-4 md:py-8">
        <BreadcrumbDynamic />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen ">
        <Image src={Pen} alt="a pen" />
      </div>
      <div className="mt-[100px] mb-[200px]">
        <h5 className="text-gray-900 text-lg font-medium leading-7 mb-7">
          Care & Services
        </h5>
        <div className="flex gap-5 justify-between flex-wrap md:flex-nowrap">
          {careServicesItems.map((item) => (
            <div
              key={item.id}
              className="w-full px-9 py-7 flex items-center justify-between rounded gap-6 outline-1 outline-offset-[-1px] outline-gray-200"
            >
              <p className="text-sm font-medium leading-tight">
                {item.serviceType}
              </p>
              <IconComponent name={item.iconName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareAndServices;
