import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
// import Link from "next/link";
import {B2bCard} from "@/app/[lang]/discover/components/b2b-card/b2b-card";
import soat from "@/public/images/soat.jpg";
import sumka from "@/public/images/sumka.jpg";
import klatch from "@/public/images/klatch.jpg";

export default function B2BPage() {
    return (
        <div className={"container md:!mt-26 !mt-42"}>
            <BreadcrumbDynamic/>
            <div className={"flex justify-between items-center mt-10 "}>
                <h2 className={"text-lg whitespace-pre-wrap"}>B2B-сотрудничество с President Business Gifts</h2>
                <div className={"w-1/2"}>
                    <p className={"text-sm mb-5"}>Попробуйте, как ваш логотип будет выглядеть на различных продуктах. Загрузите изображение логотипа и посмотрите, как оно размещается на изделиях.</p>
                    {/* <Link className={"underline "} href={"#"}>Contact us for enquiries</Link> */}
                </div>
            </div>

            <div>
                <B2bCard className={"mt-[100px]"} title="Клатч" desc="Хотите увидеть, как ваш логотип будет выглядеть на клатче? Тогда загрузите изображение логотипа и попробуйте прямо сейчас!" image={klatch}/>
                <B2bCard className={"mt-[100px]"} title="Сумка" desc="Представьте, как будет выглядеть сумка с логотипом вашего бренда. Хотите увидеть результат? Попробуйте прямо сейчас!" image={sumka}/>
                <B2bCard className={"mt-[100px]"} title="Часы" desc="Мы наносим логотип вашего бренда даже на внутреннюю часть наручных часов — это тонкая и точная работа. Обязательно попробуйте!" image={soat}/>
            </div>
        </div>
    )
}