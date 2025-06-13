import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Pen2 from "@/public/images/pen3.png";
import Image from "next/image";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import {myTabs} from "@/constants/faqs";

export default function DiscoverService() {


    return (
        <div className="container md:!mt-26 !mt-42">
            <div className={"container !mt-15"}>
                <BreadcrumbDynamic/>
            </div>
            <div className="-mx-[calc((100vw-100%)/2)] mt-10 w-screen mb-28">
                <Image src={Pen2} alt="a pen"/>
            </div>
            <p className="text-lg font-medium">Writing instruments</p>

            <CustomTabs className="my-7" tabs={myTabs}/>
        </div>
    );
};

