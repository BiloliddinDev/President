import {Showcase} from "@/app/[lang]/(home)/components/showcase";
import {News} from "@/app/[lang]/(home)/components/news";
import {About} from "./components/about";
import {Category} from "@/app/[lang]/(home)/components/category";
import {Collections} from "@/app/[lang]/(home)/components/collections";
import {ProductVideos} from "./components/productVideos";
import {SupportForm} from "@/app/[lang]/(home)/components/support-form";
import AnimatedSection from "@/components/animation-section/animation-section";
import BusinessGifts from "@/app/[lang]/(home)/components/businessgifts";
import Location from "@/app/[lang]/(home)/components/location";
import {getDictionary} from "@/lib/get-dictionary";


interface HomePageProps {
    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;

}

export default async function Home({params}: HomePageProps) {

    const HomePageParam: { lang: "uz" | "ru" | "en", category: string } = await params;
    const dictionary = await getDictionary(HomePageParam.lang);

    return (
        <>
            <section>
                <Showcase dictionary={dictionary} lang={HomePageParam.lang}/>
            </section>
            <section className="mt-10 md:mt-[100px]">
                <AnimatedSection animation={"fade-right"}>
                    <News dictionary={dictionary} lang={HomePageParam.lang}/>
                </AnimatedSection>
            </section>
            <section className="mt-[100px]">
                <AnimatedSection animation={"fade-left"}>
                    <About dictionary={dictionary}/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                <AnimatedSection animation={"fade-left"}>
                    <Category dictionary={dictionary} lang={HomePageParam.lang}/>
                </AnimatedSection>
            </section>
            <section className={"mt-[100px]"}>
                <Collections dictionary={dictionary} lang={HomePageParam.lang}/>
            </section>
            <section className="mt-[100px]">
                <ProductVideos dictionary={dictionary}/>
            </section>
            {/*<section className="mt-[100px]">*/}
            {/*    <News title={"President stories"}/>*/}
            {/*</section>*/}
            <section className="mt-[100px] bg-[#F6F6F6] py-8">
                <SupportForm dictionary={dictionary} lang={HomePageParam.lang}/>
            </section>
            <section className="mt-[100px]  ">
                <BusinessGifts dictionary={dictionary}/>
            </section>
            <section className="mt-[100px]  ">
                <Location dictionary={dictionary} lang={HomePageParam.lang}/>
            </section>

        </>
    );
}