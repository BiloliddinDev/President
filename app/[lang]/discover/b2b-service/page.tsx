import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";

import image3 from "@/public/images/soat.jpg";
import image2 from "@/public/images/sumka.jpg";
import image1 from "@/public/images/klatch.jpg";

import {B2bCard} from "@/app/[lang]/discover/components/b2b-card/b2b-card";


export default function B2BPage() {
    return (
        <div className={"container md:!mt-26 !mt-42"}>
            <BreadcrumbDynamic/>
            <div className={"md:flex  justify-between flex-col  mt-10 "}>
                <h2 className={"text-lg whitespace-pre-wrap mb-5"}>Попробуйте свой логотип на наших товарах</h2>
                <div className={"md:w-1/2 w-full"}>
                    <p className={"text-sm mb-5"}>Загрузите логотип вашей компании и сразу увидьте, как он будет
                        смотреться на премиальных подарках — клатчах, сумках, визитницах и других изделиях.</p>
                </div>
            </div>

            <div>
                <B2bCard
                    top={{base: 140, md: 210, lg: 180}}
                    right={{base: 150, md: 240, lg: 190}}
                    size={45}
                    image={image1}
                    className="mt-[100px] flex-col lg:flex-row gap-10"
                    title="Клатч"
                    desc="Хотите увидеть, как ваш логотип будет выглядеть на клатче? Тогда загрузите изображение логотипа и попробуйте прямо сейчас!"
                />
                <B2bCard
                    top={{base: 150, md: 200, lg: 180}}
                    right={{base: 90, md: 180, lg: 185}}
                    size={70}
                    image={image2}
                    className="mt-[100px] flex-col lg:flex-row-reverse gap-10"
                     title="Сумка"
                    desc="Представьте, как будет выглядеть сумка с логотипом вашего бренда. Хотите увидеть результат? Попробуйте прямо сейчас!"
                />
                <B2bCard
                    top={{base: 86, md: 135, lg: 130}}
                    right={{base: 142, md: 235, lg: 235}}
                    size={30}
                    image={image3}
                    className="mt-[100px] flex-col lg:flex-row gap-10"
                     title="Часы"
                    desc="Мы наносим логотип вашего бренда даже на внутреннюю часть наручных часов — это тонкая и точная работа. Обязательно попробуйте!"
                />
            </div>
        </div>
    )
}