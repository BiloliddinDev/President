import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
import watch1 from "@/public/images/TJK.webp";
import watch2 from "@/public/images/about-page-uz.webp";
import watch3 from "@/public/images/TJK2.webp";
import DiscoverAboutHeader from "./components/discover-aboutus-header";
import InformationWithImg from "./components/informationWithImg";
import AccordionWithImg from "./components/accordion-with-img";
import afterimage from '@/public/images/Bags (1).webp'

const AboutUs = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
            <div className="py-4 md:py-5">
                <BreadcrumbDynamic/>
            </div>
            <DiscoverAboutHeader/>
        
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="0"
                data-aos-offset="0" 
                className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 ">
                <div className="w-full md:w-1/2" 
                >
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
                
                infoText="Сегодня President Business Gift — это не просто магазин, а лидер в сфере премиальных подарков для бизнесменов и руководителей. Мы предлагаем богатый ассортимент: от эксклюзивных наручных часов и кожаных изделий ручной работы до подарочных наборов с фирменной гравировкой, VIP-аксессуаров, деловых блокнотов, перьевых ручек и сувениров с национальным акцентом."
            />
            <AccordionWithImg/>
            <div  data-aos-distance="20px" className="pb-12 md:pb-24">
                <InformationWithImg
                    textStyles="font-normal text-gray-800"
                    imgAlt="a watch"
                    infoText="Мы стремительно расширяем своё присутствие
                    и уверенно выходим на новые рынки. Мы не
                    останавливаемся на достигнутом — с каждым
                    днём бренд “President Business Gifts”становится
                    всё более узнаваемым. Совсем скоро о нас
                    узнает весь мир."

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
};

export default AboutUs;
