import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import CommonHeader from "../components/common-header";
import ImageWithText from "./image-with-text";
import CommonWatchSection from "../components/common-watch";
import {SupportForm} from "@/app/[lang]/(home)/components/support-form";
import {getDictionary} from "@/lib/get-dictionary";
import Corporative1 from '@/public/images/CorporateGifts1.jpg'
import Corporative2 from '@/public/images/CorporateGifts2.jpg'
import Corporative3 from '@/public/images/CorporateGifts3.jpg'
import Corporative4 from '@/public/images/CorporateGifts4.webp'

interface CorporateGiftsPageProps {
    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;
}

export default async function CorporateGifts({params}: CorporateGiftsPageProps) {


    const CorporateGiftsPageParam: { lang: "uz" | "ru" | "en", category: string } = await params;

    const dictionary = await getDictionary(CorporateGiftsPageParam.lang);
    return (
        <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42 ">
            <div className="mb-10">
                <BreadcrumbDynamic/>
            </div>
            <CommonHeader
                contentLink
                title="Искусство корпоративного подарка"
                maintextColor="#0E1422"
                maintext="Корпоративный подарок — это больше, чем формальность. Это возможность выразить уважение, подчеркнуть статус партнёра или отметить важное событие. В “President Business Gifts” мы создаём подарки, которые говорят за вас — сдержанно, изысканно и по делу."
            />
            <ImageWithText
                orderText="order-1"
                orderImg="order-2"
                imgSrc={Corporative1}
                alt="wallet"
                title="Персонализация: знак особого внимания"

                subtitle="Мы предлагаем тонкую и элегантную
персонализацию — от тиснения логотипа на
кожаных изделиях до именной гравировки на
металле. Каждый штрих усиливает ценность
подарка и делает его по-настоящему вашим."
            />
            <ImageWithText
                orderText="order-2"
                orderImg="order-1"
                imgSrc={Corporative2}
                alt="souviner"
                title="Как выбрать правильный подарок"
                subtitle="Мы помогаем подобрать изделие, которое
наилучшим образом отразит ваш стиль
общения и статус. Учитываем повод,
аудиторию, культурный контекст — и создаём
решение, которое будет не просто уместным, а
незабываемым."
            />
            <ImageWithText
                orderText="order-1"
                orderImg="order-2"
                imgSrc={Corporative3}
                alt="president watch"
                title="Подарки для особых случаев"
                subtitle="Есть моменты, которые требуют особого подхода
— юбилеи, награждения, знаковые встречи. Мы
создаём подарки, которые подчеркивают
значимость момента и оставляют впечатление
надолго. Это могут быть медали, часы,
коллекционные боксы или композиции с
национальной символикой."

            />
            <CommonWatchSection
                videoSrc={Corporative4}
                description="Подарок как выражение благодарности"
                textInfo="Иногда один подарок говорит больше, чем сотни
слов. Часы с уникальным оформлением,
вручную собранный набор или редкий материал
— мы предлагаем изделия, которые становятся
настоящими знаками признательности.

"
            />
            <SupportForm dictionary={dictionary}/>
        </div>
    );
};

