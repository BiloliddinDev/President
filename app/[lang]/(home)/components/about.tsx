import {SectionTitle} from "@/components/ui/sectionTitle";
import Image from "next/image";
import AboutImage from "@/public/images/About.png";
import {FC} from "react";

interface AboutType {
    title: string;
}

export const About: FC<AboutType> = ({title}) => {
    return (
        <div className={"bg-gradient-to-l from-neutral-100 to-white/0 py-10 "}>
            <div className={"container"}>
                <SectionTitle text={title}/>
                <div
                    className={
                        "mt-12 flex  flex-wrap items-center gap-12 justify-center md:justify-between"
                    }
                >
                    <Image
                        src={AboutImage.src}
                        alt={"President Business Gifts is not just a premium gift brand"}
                        className="!w-[265px] !h-[245px] md:w-[600px] md:h-[600px]"
                        width={600}
                        height={600}
                    />
                    <div className={"max-w-[480px]"}>
                        <h2
                            className={
                                "text-primary mb-2.5 md:mb-5 text-lg md:text-2xl font-medium md:font-semibold"
                            }
                        >
                            “President Business Gifts” — Sizning o‘rningizda so‘zlaydigan
                            sovg‘alar
                        </h2>
                        <p
                            className={" text-gray-600 mb-5 text-base md:text-xl font-normal"}
                        >
                            Biz deyarli 10 yildan beri maqom, hurmat va didni ifodalovchi
                            sovg‘alarni yaratib kelmoqdamiz.
                            Bizning assortimentda biznesmenlar, rahbarlar, hamkorlar va
                            hurmatli xodimlar uchun hamma narsa mavjud: eksklyuziv VIPto‘plamlardan tortib butun jamoa
                            uchun korporativ
                            yechimlargacha.
                            Bu shunchaki sovg‘alar emas — bu xotirada qoladigan e’tibor
                            belgilaridir.
                        </p>
                        {/*<Link href={"/discover/about-us"}>*/}
                        {/*  {" "}*/}
                        {/*  <Button variant={"secondary"} className="max-w-44">*/}
                        {/*    Read more*/}
                        {/*  </Button>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
