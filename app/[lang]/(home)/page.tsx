import {Showcase} from "@/app/[lang]/(home)/components/showcase";
import {News} from "@/app/[lang]/(home)/components/news";
import {About} from "./components/about";
import {Category} from "@/app/[lang]/(home)/components/category";
import {Collections} from "@/app/[lang]/(home)/components/collections";
import {ProductVideos} from "./components/productVideos";
import {SupportForm} from "@/app/[lang]/(home)/components/support-form";
import AnimatedSection from "@/components/animation-section/animation-section"
import BusinessGifts from "@/app/[lang]/(home)/components/businessgifts";
import Location from "@/app/[lang]/(home)/components/location";


export default function Home() {
    return (
        <>
            <section>
                <AnimatedSection >
                    <Showcase/>
                </AnimatedSection>
            </section>
            <section className="mt-[100px]">
                <AnimatedSection animation={"fade-right"}>
                    <News title={"News"}/>
                </AnimatedSection>
            </section>
            <section className="mt-[100px]">
                <AnimatedSection animation={"fade-left"}>
                    <About title={"About"}/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                <AnimatedSection animation={"fade-left"}>
                    <Category/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                <Collections/>
            </section>
            <section className="mt-[100px]">
                <ProductVideos title={"Product Videos"}/>
            </section>
            <section className="mt-[100px]">
                <News title={"President stories"}/>
            </section>
            <section className="mt-[100px] bg-[#F6F6F6] py-8">
                <SupportForm/>
            </section>
             <section className="mt-[100px]  ">
                <BusinessGifts/>
            </section>
            <section className="mt-[100px]  ">
                <Location/>
            </section>
            <section className="mt-[20px]  ">
            </section>
        </>
    );
}
