import {SectionTitle} from "@/components/ui/sectionTitle";
import Image from "next/image";
import watch1 from "@/public/images/home-page-aboutUs.jpg";
import {AboutService} from "@/service/home-service/about.service";
import {AboutType} from "@/interface/about-type/about-type";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export async function About() {

    const AboutData: AboutType = await AboutService() as AboutType

    return (
        <div className="bg-gradient-to-l from-neutral-100 to-white/0 py-10">
            <div className="container">
                <SectionTitle text={AboutData["about.title"]}/>
                <div className="mt-12 flex flex-wrap items-center gap-12 justify-center md:justify-between">
                    <Image
                        src={watch1.src}
                        alt={AboutData["about.imageAlt"]}
                        className="w-full h-[245px] md:w-[600px] md:h-[600px] object-cover"
                        width={600}
                        height={600}
                    />
                    <div className="max-w-[480px]">
                        <h2 className="text-primary mb-2.5 md:mb-5 text-lg md:text-2xl font-medium md:font-semibold">
                            {AboutData["about.subtitle"]}
                        </h2>
                        <p className="text-gray-600 mb-5 text-base md:text-xl font-normal">
                            {AboutData["about.description"]}
                        </p>
                        <Link href={`/discover/about-us`}>
                            <Button variant={"secondary"} className={"mt-5 w-full md:max-w-52"}>{AboutData["about.btn"]}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};