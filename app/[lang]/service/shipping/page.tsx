// import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
// import ServicesImage from "@/public/images/Bag.jpg";
// // import ServicesImage from "@/public/images/services2.png";
// import Image from "next/image";

// export default function shippingPage() {
//     return (
//         <div>
//             <div className={"container md:!mt-26 !mt-42"}>
//                 <BreadcrumbDynamic/>
//             </div>
//             <Image width={1000} height={330} className={"w-full h-[330px] object-cover mt-10 mb-20"} src={ServicesImage}
//                    alt={'ServicesImage'}/>

//             <div className="container ">
//                 <div className="w-[590px] flex flex-col justify-start items-start gap-5">
//                     <div
//                         className="self-stretch justify-start text-primary text-lg font-medium font-['Inter'] leading-7">Shipping
//                         & Delivery
//                     </div>
//                     <div className="self-stretch flex flex-col justify-start items-start gap-3.5 mb-8">
//                         <div
//                             className="self-stretch justify-start text-zinc-700 text-base font-medium font-['Inter'] leading-normal">Shipping
//                             times and costs
//                         </div>
//                         <div
//                             className="self-stretch p-6 bg-neutral-100 rounded flex flex-col justify-start items-start gap-6">
//                             <div
//                                 className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">Express
//                                 shipping - $20
//                             </div>
//                             <div
//                                 className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">Delivery
//                                 in 2 weeks
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="self-stretch justify-start text-primary text-sm font-medium font-['Inter'] leading-tight">There
//                     may be local taxes and duties for your order depending on the destination country. If we are able to
//                     calculate these fees for you, they will be added to the total before you complete your order. For
//                     the countries where taxes and duties cannot be calculated, you will be required to pay them to the
//                     courier at delivery. Please contact your local customs office for more information.<br/>Please
//                     remember that the courier does not deliver on National Holidays. Check the days on which we do not
//                     ship.<br/>Delivery may be complimentary depending on active promotions – more information available
//                     within the product page. You may be required to pay additional import fees, taxes, brokerage fees,
//                     handling fees and/or other duties specific to the destination country in order to receive your
//                     order. EMS is our courier for all shipments, except for Turkmenistan where we ship with DHL. You
//                     will receive an email containing your Tracking Number once your package has been shipped from our
//                     Italian warehouse. All orders are processed automatically and we are unable to expedite or delay
//                     shipping times.
//                 </div>
//             </div>
//         </div>
//     )
// }
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import ServicesImage from "@/public/images/Bag.jpg";
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
                className={"w-full h-[330px] object-cover mt-10 mb-20"}
                src={ServicesImage}
                alt={'ServicesImage'}
            />

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-5">
                    <div
                        className="self-stretch justify-start text-primary text-lg font-medium font-['Inter'] leading-7">
                        Доставка и Отправка
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3.5 mb-8">
                        <div
                            className="self-stretch justify-start text-zinc-700 text-base font-medium font-['Inter'] leading-normal">
                            Сроки и стоимость доставки
                        </div>
                        <div
                            className="self-stretch p-6 bg-neutral-100 rounded flex flex-col justify-start items-start gap-6">
                            <div
                                className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">
                                Экспресс-доставка – $20
                            </div>
                            <div
                                className="self-stretch justify-start text-black text-sm font-medium font-['Inter'] leading-tight">
                                Доставка в течение 2 недель
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch justify-start text-primary text-sm font-medium font-['Inter'] leading-tight">
                    В зависимости от страны назначения для вашего заказа могут применяться местные налоги и сборы. 
                    Если мы сможем рассчитать эти сборы, они будут добавлены к общей сумме до завершения заказа. 
                    В странах, где невозможно рассчитать налоги и сборы заранее, вы должны будете оплатить их курьеру при доставке. 
                    Пожалуйста, свяжитесь с местной таможенной службой для получения дополнительной информации.<br />
                    Пожалуйста, учтите, что курьер не осуществляет доставку в официальные праздничные дни. 
                    Проверьте даты, в которые доставка не осуществляется.<br />
                    Бесплатная доставка может быть доступна в рамках текущих акций – подробности указаны на странице товара. 
                    В зависимости от страны назначения вы можете быть обязаны оплатить дополнительные таможенные сборы, налоги, 
                    услуги посредников, сборы за обработку и/или другие пошлины для получения вашего заказа. 
                    Мы используем EMS в качестве основного курьера, за исключением Туркменистана, где доставка осуществляется через DHL. 
                    После отправки посылки с нашего итальянского склада вы получите электронное письмо с номером отслеживания. 
                    Все заказы обрабатываются автоматически, и мы не можем ускорить или задержать сроки доставки.
                </div>
            </div>
        </div>
    )
}

