import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
// import DiscoverWatch from "@/public/images/discoverWatch.png";
// import BackDiscoverWatch from "@/public/images/discoverWatchBack.png";
// import BlackBags from "@/public/images/Bag.jpg";
import BlackBags from "@/public/images/bags.png";
import watch1 from "@/public/images/about-detail1.jpg";
import watch2 from "@/public/images/about-detail2.png";
import watch3 from "@/public/images/about-detail3.jpg";
// import map from "@/public/images/about-detail-map.jpg";
// import watch2 from "@/public/images/watch2.png";
import DiscoverAboutHeader from "./components/discover-aboutus-header";
import InformationWithImg from "./components/informationWithImg";
import AccordionWithImg from "./components/accordion-with-img";

const AboutUs = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="py-4 md:py-5">
        <BreadcrumbDynamic />
      </div>
      <DiscoverAboutHeader />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 ">
        <div className="w-full md:w-1/2">
          <Image
            src={watch1}
            alt="Discover watch"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={watch2}
            alt="Back of the watch"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <InformationWithImg
        imgSource={BlackBags}
        imgAlt="black bags"
        // infoText="Be it writing instruments, leather, watches, accessories or our youngest
        // category of new technologies, our master craftsmen work diligently to
        // pour their hearts and souls into every step of the creation."
     infoText="Сегодня у нас уже три фирменных шоурума в
Центральной Азии: два из них расположены в
самом сердце Ташкента (Узбекистан), а ещё
один — в Душанбе, столице Таджикистана. В
ближайших планах — открытие нового
шоурума в Баку, столице Азербайджана."
     />
      <AccordionWithImg />
      <div className="pb-12 md:pb-24">
        <InformationWithImg
          imgSource={watch3}
          textStyles="font-normal text-gray-800"
          imgAlt="a watch"
        //   infoText=" The international mentality of our 3 pioneering founders of the maison
        // continues to be a strong legacy of the brand to this day. Our writing
        // instruments are completed in Hamburg, our leather goods in Florence and
        // our timepieces in Switzerland."
        infoText="Мы стремительно расширяем своё присутствие
и уверенно выходим на новые рынки. Мы не
останавливаемся на достигнутом — с каждым
днём бренд “President Business Gifts”становится
всё более узнаваемым. Совсем скоро о нас
узнает весь мир."
        
        />
      </div>
    </div>
  );
};

export default AboutUs;
