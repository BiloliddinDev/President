
import Image1 from "@/public/images/home-page-corporative-box.jpg";

import { SectionTitle } from "@/components/ui/sectionTitle";
// import { SupportFormModal } from "@/components/shared/form-modal/form.modal";
import AutoplayCarousel from "@/components/shared/corporative-gifts/AutoplayCarousel";
// import { LangType } from "@/interface/lang/lang-type";
import { CorporateService } from "@/service/home-service/corporate-gifts.service";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [Image1];

// interface BusinessGiftsCarouselProps {
//   dictionary: {
//     corporategifts: {
//       title: string;
//       text: string;
//       btn: string;
//     };
//   };
//   lang?: LangType
// }

export interface CorporativeGifts {
    "corporate.gifts.btn":string,
    "corporate.gifts.text":string
    }

export default async function BusinessGiftsCarousel() {

    const CorporativeGiftsData:CorporativeGifts = await CorporateService() as CorporativeGifts
    console.log("corporative gifts",CorporativeGiftsData)

  return (
    <div className="w-full">
      <SectionTitle className={"container !mb-7"} text="Подарки для вашего бренда" />
      {/* <SectionTitle className={"container !mb-7"} text={dictionary.corporategifts.title} /> */}

      <div className="flex md:flex-row flex-col md:gap-20 bg-neutral-100">
        {/* Carousel Component */}
        <div className="w-full md:w-[45%]">
          <AutoplayCarousel images={images} />
        </div>

        {/* Text and Modal */}
        <div className="w-full md:w-[50%] container">
          <div className="w-full">
            <h2 className="text-primary mb-5 text-lg md:text-5xl font-normal font-title mt-5 md:mt-[75px]">
              {/* {dictionary.corporategifts.title} */}President Business Gifts
            </h2> 
            <p className="text-gray-600 text-base md:text-xl max-w-[500px] md:w-[800] font-normal font-description mb-5">
            {/* <p className="text-gray-600 text-base md:text-xl max-w-[353px] md:w-[500] font-normal font-description mb-5"> */}
              {/* {dictionary.corporategifts.text} */}
              {/* { CorporativeGiftsData["corporate.gifts.text"]} */}
              “President Business Gifts” создаёт индивидуальные подарки, которые подчёркивают стиль и ценности вашей компании. Мы разрабатываем премиальные решения по вашему продукту или логотипу — от дизайна до упаковки Каждое изделие — это часть вашего имиджа, воплощённая в безупречном исполнении.
            </p>
            <div className="mb-10 md:mb-0 max-w-44">
            <Link href={`/discover/about-us`}>
                    <Button variant={"secondary"} className={"mt-5 w-full md:max-w-52"}>Подробнее</Button>
            </Link>
              {/* <SupportFormModal btnText= { CorporativeGiftsData["corporate.gifts.btn"]} /> */}
              {/* <SupportFormModal btnText={dictionary.corporategifts.btn} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
