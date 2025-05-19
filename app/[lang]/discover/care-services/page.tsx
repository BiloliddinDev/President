import Image from "next/image";
import React from "react";
import Pen from "@/public/images/Pen.png";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
const CareAndServices = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16 md:!mt-20">
      <div className="py-4 md:py-8">
        <BreadcrumbDynamic />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen ">
        <Image src={Pen} alt="a pen" />
      </div>
    </div>
  );
};

export default CareAndServices;
