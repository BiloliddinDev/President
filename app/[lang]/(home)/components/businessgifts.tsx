import Image1 from "@/public/images/home-page-corporative-box.jpg";

import { SectionTitle } from "@/components/ui/sectionTitle";
import AutoplayCarousel from "@/components/shared/corporative-gifts/AutoplayCarousel";
import { LangType } from "@/interface/lang/lang-type";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [Image1];

interface BusinessGiftsCarouselProps {
  dictionary: {
    corporategifts: {
      title: string;
      text: string;
      btn: string;
    };
  };
  lang?: LangType;
}

export default async function BusinessGiftsCarousel({
  dictionary,
}: BusinessGiftsCarouselProps) {
  return (
    <div className="w-full">
      <SectionTitle
        className={"container !mb-7"}
        text={dictionary.corporategifts.title}
      />

      <div className="flex md:flex-row flex-col md:gap-20 bg-neutral-100">
        {/* Carousel Component */}
        <div className="w-full md:w-[45%]">
          <AutoplayCarousel images={images} />
        </div>

        {/* Text and Modal */}
        <div className="w-full md:w-[50%] container">
          <div className="w-full">
            <h2 className="text-primary mb-5 text-lg md:text-5xl font-normal font-title mt-5 md:mt-[75px]">
              {dictionary.corporategifts.title}
            </h2>
            <p className="text-gray-600 text-base md:text-xl max-w-[500px] md:w-[800] font-normal font-description mb-5">
              {dictionary.corporategifts.text}
            </p>
            <div className="mb-10 md:mb-0 max-w-44">
              <Link href={`/discover/corporate-gifts`}>
                <Button
                  variant={"secondary"}
                  className={"mt-5 w-full md:max-w-52"}
                >
                 {dictionary.corporategifts.btn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
