import { SectionTitle } from "@/components/ui/sectionTitle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AboutImage from "@/public/images/About.png";
import { FC } from "react";
import Link from "next/link";

interface AboutType {
  title: string;
}

export const About: FC<AboutType> = ({ title }) => {
  return (
    <div className={"bg-gradient-to-l from-neutral-100 to-white/0 py-10 "}>
      <div className={"container"}>
        <SectionTitle text={title} />
        <div
          className={
            "mt-12 flex  flex-wrap items-center gap-12 justify-center md:justify-between"
          }
        >
          <Image
            src={AboutImage.src}
            alt={"President Business Gifts is not just a premium gift brand"}
            className="!w-[265px] !h-[245px] md:w-[500px] md:h-[500px]"
            width={500}
            height={500}
          />
          <div className={"max-w-[480px]"}>
            <h2
              className={
                "text-primary mb-2.5 md:mb-5 text-lg md:text-3xl font-medium md:font-semibold"
              }
            >
              President Business Gifts
            </h2>
            <p
              className={" text-gray-600 mb-5 text-base md:text-xl font-normal"}
            >
              President Business Gifts is not just a premium gift brand — it is
              a unique fusion of national identity and contemporary aesthetics.
              Inspired by the historical heritage, cultural richness, and
              artisanal traditions of the Uzbek people, we blend them seamlessly
              with modern design and the highest standards of quality.
            </p>
            <Link href={"/discover/about-us"}>
              {" "}
              <Button variant={"secondary"} className="max-w-44">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
