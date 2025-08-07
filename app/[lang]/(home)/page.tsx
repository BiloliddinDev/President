import {Showcase} from "@/app/[lang]/(home)/components/showcase";
import {News} from "@/app/[lang]/(home)/components/news";
import {About} from "./components/about";
import {Collections} from "@/app/[lang]/(home)/components/collections";
import {ProductVideos} from "./components/productVideos";
import {SupportForm} from "@/app/[lang]/(home)/components/support-form";
import AnimatedSection from "@/components/animation-section/animation-section";
import BusinessGifts from "@/app/[lang]/(home)/components/businessgifts";
import Location from "@/app/[lang]/(home)/components/location";
import {getDictionary} from "@/lib/get-dictionary";
import React from "react";
import {Category} from "@/app/[lang]/(home)/components/category";
import {ShowcaseDataFrom, ShowcaseItem} from "@/interface/showcase-type/showcase-type";
import {showcaseService} from "@/service/home-service/showcase.service";
import {getshowCaseData} from "@/service/home-service/showcase-image.service";
import {StorySection} from "@/app/[lang]/(home)/components/story";

interface HomePageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | 'az', category: string }>;
}

export default async function Home({params}: HomePageProps) {

    const HomePageParam: { lang: "uz" | "ru" | "en" | 'tj' | "az", category: string } = await params;
    const dictionary = await getDictionary(HomePageParam.lang);
    const DataLayer: ShowcaseDataFrom = await showcaseService() as ShowcaseDataFrom
    const ImagesData: ShowcaseItem[] = await getshowCaseData() as ShowcaseItem[]


    return (
        <>
            <section>
                <Showcase DataLayer={DataLayer} showcase={ImagesData}/>
            </section>
            <section className="mt-10 md:mt-[100px]">
                <AnimatedSection animation={"fade-right"}>
                    <News dictionary={dictionary}/>
                </AnimatedSection>
            </section>
            <section className="mt-[100px]">
                <AnimatedSection animation={"fade-left"}>
                    <About/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                {/* <AnimatedSection animation={"fade-left"}> */}
                    <Category dictionary={dictionary} lang={HomePageParam.lang}/>
                {/* </AnimatedSection> */}
            </section>
            <section className={"mt-[100px]"}>
                <Collections dictionary={dictionary}/>
            </section>
            <section className="mt-[100px]">
                <ProductVideos dictionary={dictionary}/>
            </section>
            <section className="mt-[100px] bg-[#F6F6F6] py-8">
                <SupportForm showtime={true} dictionary={dictionary}></SupportForm>
            </section>
            <section className="mt-[100px]  ">
                <BusinessGifts dictionary={dictionary}/>
            </section>
            <section className={'mt-[100px]'}>
                <StorySection dictionary={dictionary} lang={HomePageParam.lang}/>
            </section>
            <section className="mt-[100px] py-10 ">
                <Location lang={HomePageParam.lang} dictionary={dictionary}/>
            </section>
        </>
    );
}
