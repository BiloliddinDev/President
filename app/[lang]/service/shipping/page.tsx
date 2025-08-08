import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesImage from "@/public/images/service-shipping.webp";
import Image from "next/image";
    
interface ShippingProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
  }
  
  export default async function shippingPage({ params }: ShippingProps) {
    const News = await params.then((params) => params);
    const dictionary = await getDictionary(News.lang);
    const lang = News.lang;

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
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="0"
                data-aos-offset="0"
            />
            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-5">
                    <div data-aos="fade-right" className="text-primary text-lg font-medium leading-7">
                         {dictionary.service.shipping.title}
                    </div>
                    <div className="flex flex-col gap-3.5 mb-8">
                        <p className="text-zinc-700 text-base font-medium leading-normal">
                        {dictionary.service.shipping.description}
                        </p>
                        <div data-aos="fade-up" className="p-6 bg-neutral-100 rounded flex flex-col gap-6 text-sm font-medium text-black leading-tight">
                            <div>
                                <strong>  {dictionary.service.shipping.delivery_tashkent_title}</strong><br />
                                {dictionary.service.shipping.delivery_tashkent_text}
                            </div>
                            <div>
                                <strong>  {dictionary.service.shipping.delivery_regions_title}</strong><br />
                                {dictionary.service.shipping.delivery_regions_text}
                                </div>
                        </div>
                        <div className="text-sm text-gray-700">
                        {dictionary.service.shipping.contact_text}<br />
                             <a href="tel:+998712030500" className="text-primary hover:underline">+998 71 203 05 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
