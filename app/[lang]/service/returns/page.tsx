import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import ServicesImage from "@/public/images/service-return.webp";
import Image from "next/image";

export default function ReturnPage() {
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
                <div className="w-[590px] flex flex-col justify-start items-start gap-5 mt-12">
                    <div className="text-primary text-lg font-medium leading-7">
                         Гарантия на продукцию
                    </div>
                    <div className="p-6 bg-neutral-100 rounded flex flex-col gap-4 text-sm font-medium text-black leading-tight">
                        <p>
                            Мы уверены в качестве своей продукции и предоставляем гарантию на изделия.
                        </p>
                        <p>
                            На каждый товар, имеющий гарантию, предоставляется гарантийный талон.
                        </p>
                        <p>
                            Для получения гарантийного обслуживания необходимо сохранить гарантийный талон и чек.
                        </p>
                        <p>
                            Срок гарантии составляет от 2 до 5 лет, в зависимости от вида товара и условий эксплуатации.
                        </p>
                    </div>
                </div>

               
            </div>
        </div>
  );
}
