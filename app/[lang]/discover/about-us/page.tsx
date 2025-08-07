import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
import watch1 from "@/public/images/TJK.webp";
import watch2 from "@/public/images/about-page-uz.webp";
import watch3 from "@/public/images/TJK2.webp";
import DiscoverAboutHeader from "./components/discover-aboutus-header";
import InformationWithImg from "./components/informationWithImg";
import AccordionWithImg from "./components/accordion-with-img";
import afterimage from "@/public/images/Bags (1).webp";
import { getDictionary } from "@/lib/get-dictionary";

interface AboutProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function AboutUs({ params }: AboutProps) {
  const param: { lang: "uz" | "ru" | "en" | "tj" | "az" } = await params;
  const dictionary = await getDictionary(param.lang);

  const t = dictionary.about;

  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 md:!mt-26 !mt-42">
      <div className="py-4 md:py-5">
        <BreadcrumbDynamic />
      </div>

      <DiscoverAboutHeader lang={param.lang} dictionary={dictionary}/>

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
        className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 "
      >
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
        imgSource={watch3}
        imgAlt="black bags"
        infoText={dictionary.about.infoText1}
      />
      <AccordionWithImg lang={param.lang}/>
      <div data-aos-distance="20px" className="pb-12 md:pb-24">
        <InformationWithImg
          textStyles="font-normal text-gray-800"
          imgAlt="a watch"
          infoText={t.infoText2}
        />
      </div>
      <Image
        src={afterimage}
        alt={"footer image"}
        className="w-full h-auto object-contain"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      />
    </div>
  );
}
