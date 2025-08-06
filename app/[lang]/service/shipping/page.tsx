
// import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
// import ServicesImage from "@/public/images/Bag.jpg";
// import Image from "next/image";

// export default function shippingPage() {
//     return (
//         <div>
//             <div className={"container md:!mt-26 !mt-42"}>
//                 <BreadcrumbDynamic />
//             </div>
//             <Image
//                 width={1000}
//                 height={330}
//                 className={"w-full h-[330px] object-cover mt-10 mb-20"}
//                 src={ServicesImage}
//                 alt={'ServicesImage'}
//             />

//             <div className="container ">
//                 <div className="w-[590px] flex flex-col justify-start items-start gap-5">
//                     <div
//                         className="self-stretch justify-start text-primary text-lg font-medium font-['Inter'] leading-7">
//                         Доставка и Отправка
//                     </div>
//                     <div className="self-stretch flex flex-col justify-start items-start gap-3.5 mb-8">
//                         <div
//                             className="self-stretch justify-start text-zinc-700 text-base font-medium font-['Inter'] leading-normal">
//                             Сроки и стоимость доставки
//                         </div>
//                         <div
//                             className="self-stretch p-6 bg-neutral-100 rounded flex flex-col justify-start items-start gap-6">
//                             <div
//                                 className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">
//                                 Экспресс-доставка – $20
//                             </div>
//                             <div
//                                 className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">
//                                 Доставка в течение 2 недель
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="self-stretch justify-start text-primary text-sm font-medium font-['Inter'] leading-tight">
//                     В зависимости от страны назначения для вашего заказа могут применяться местные налоги и сборы. 
//                     Если мы сможем рассчитать эти сборы, они будут добавлены к общей сумме до завершения заказа. 
//                     В странах, где невозможно рассчитать налоги и сборы заранее, вы должны будете оплатить их курьеру при доставке. 
//                     Пожалуйста, свяжитесь с местной таможенной службой для получения дополнительной информации.<br />
//                     Пожалуйста, учтите, что курьер не осуществляет доставку в официальные праздничные дни. 
//                     Проверьте даты, в которые доставка не осуществляется.<br />
//                     Бесплатная доставка может быть доступна в рамках текущих акций – подробности указаны на странице товара. 
//                     В зависимости от страны назначения вы можете быть обязаны оплатить дополнительные таможенные сборы, налоги, 
//                     услуги посредников, сборы за обработку и/или другие пошлины для получения вашего заказа. 
//                     Мы используем EMS в качестве основного курьера, за исключением Туркменистана, где доставка осуществляется через DHL. 
//                     После отправки посылки с нашего итальянского склада вы получите электронное письмо с номером отслеживания. 
//                     Все заказы обрабатываются автоматически, и мы не можем ускорить или задержать сроки доставки.
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import ServicesImage from "@/public/images/service-shipping.webp";
import Image from "next/image";

export default function shippingPage() {
    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic />
            </div>

            <Image
                width={1000}
                height={330}
                className={"w-full h-[400px] object-cover mt-10 mb-20"}
                src={ServicesImage}
                alt={'ServicesImage'}
            />
            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-5">
                    <div className="text-primary text-lg font-medium leading-7">
                         Доставка и Отправка
                    </div>
                    <div className="flex flex-col gap-3.5 mb-8">
                        <p className="text-zinc-700 text-base font-medium leading-normal">
                            Мы стремимся доставить Ваш заказ максимально быстро и удобно.
                        </p>
                        <div className="p-6 bg-neutral-100 rounded flex flex-col gap-6 text-sm font-medium text-black leading-tight">
                            <div>
                                <strong>По Ташкенту:</strong><br />
                                Доставка осуществляется через Яндекс Доставку в день оформления заказа. 
                                Вы получаете свой подарок в течение нескольких часов с момента подтверждения.
                            </div>
                            <div>
                                <strong>По регионам Узбекистана:</strong><br />
                                Заказы отправляются через службу доставки BTS. 
                                Срок доставки — от 2 до 7 рабочих дней в зависимости от города и удаленности пункта выдачи.
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            По всем вопросам, связанным с доставкой, вы можете обратиться в наш единый колл-центр:<br />
                             <a href="tel:+998712030500" className="text-primary hover:underline">+998 71 203 05 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
