import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ServicesImage from "@/public/images/services5.png";
import FaqsForm from "@/app/[lang]/shops/components/faqs-form/faqs-form";

export default function FaqsPage() {
    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
              
                <BreadcrumbDynamic/>
            </div>
            <Image width={1000} height={330} className={"w-full h-[330px] object-cover mt-8 mb-20"} src={ServicesImage}
                   alt={'ServicesImage'}/>

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-7">
                    <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">Свяжитесь с нами</h2>
                    <p className=" justify-start text-primary text-sm font-medium leading-tight">Нужна помощь? Вы можете написать нам в любое время, заполнив форму ниже. Для оперативных ответов также рекомендуем ознакомиться с разделами FAQ, Гид по уходу за продукцией, а также отслеживать статус заказа или возврата по ссылке.</p>
                </div>
            </div>

            <div className={"bg-neutral-100 py-7 mt-12"}>
                <div className={'container'}>
                    <div
                        className="self-stretch justify-start ">
                            <p className="text-gray-900 text-lg font-medium font-['Inter'] leading-7">Форма обратной связи</p>
<p className="text-primary text-sm font-medium leading-tight">Мы готовы ответить вам в любое время. Обратите внимание, что обработка
запроса может занять до 3 рабочих дней.</p>
                    </div>
                    <FaqsForm/>
                </div>
            </div>
        </div>
    )
}
