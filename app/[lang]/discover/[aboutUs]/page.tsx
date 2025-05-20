import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
import DiscoverWatch from "@/public/images/discoverWatch.png";
import BackDiscoverWatch from "@/public/images/discoverWatchBack.png";
import BlackBags from "@/public/images/bags.png";
import watch2 from "@/public/images/watch2.png";
import DiscoverAboutHeader from "./components/discover-aboutus-header";
import InformationWithImg from "./components/informationWithImg";
import AccordionWithImg from "./components/accordion-with-img";

const AboutUs = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16 md:mt-20">
            <div className="py-4 md:py-5">
                <BreadcrumbDynamic/>
            </div>
            <DiscoverAboutHeader/>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 ">
                <div className="w-full md:w-1/2">
                    <Image
                        src={DiscoverWatch}
                        alt="Discover watch"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src={BackDiscoverWatch}
                        alt="Back of the watch"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            <InformationWithImg
                imgSource={BlackBags}
                imgAlt="black bags"
                infoText="Be it writing instruments, leather, watches, accessories or our youngest
        category of new technologies, our master craftsmen work diligently to
        pour their hearts and souls into every step of the creation."
            />
            <AccordionWithImg/>
            <div className="pb-12 md:pb-24">
                <InformationWithImg
                    imgSource={watch2}
                    textStyles="font-normal text-gray-800"
                    imgAlt="a watch"
                    infoText=" The international mentality of our 3 pioneering founders of the maison
        continues to be a strong legacy of the brand to this day. Our writing
        instruments are completed in Hamburg, our leather goods in Florence and
        our timepieces in Switzerland."
                />
            </div>
        </div>
    );
};

export default AboutUs;
