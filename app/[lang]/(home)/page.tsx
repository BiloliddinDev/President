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
import React, {Suspense} from "react";
import {Category} from "@/app/[lang]/(home)/components/category";
import { ShowcaseDataFrom, ShowcaseItem } from "@/interface/showcase-type/showcase-type";
import { showcaseService } from "@/service/home-service/showcase.service";
import { getshowCaseData } from "@/service/home-service/showcase-image.service";


interface HomePageProps {
    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;
}

export default async function Home({params}: HomePageProps) {

    const HomePageParam: { lang: "uz" | "ru" | "en", category: string } = await params;
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
                    <News />
                </AnimatedSection>
            </section>
            <section className="mt-[100px]">
                <AnimatedSection animation={"fade-left"}>
                    <About/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                <AnimatedSection animation={"fade-left"}>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Category dictionary={dictionary} lang={HomePageParam.lang}/>
                    </Suspense>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                {/* <Collections dictionary={dictionary} lang={HomePageParam.lang}/> */}
                <Collections />
            </section>
            <section className="mt-[100px]">
                <ProductVideos dictionary={dictionary}/>
            </section>
            <section className="mt-[100px]">
                {/* <News /> */}
            </section>
            <section className="mt-[100px] bg-[#F6F6F6] py-8">
                {/* done */} <SupportForm dictionary={dictionary}></SupportForm>
            </section>
            <section className="mt-[100px]  ">
                {/* done */} <BusinessGifts/>
            </section>
            <section className="mt-[100px]  ">
                {/* done */} <Location lang={HomePageParam.lang} dictionary={dictionary}/>
            </section>
        </>
    );
}
