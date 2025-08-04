import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ServicesImage from "@/public/images/services5.png";
import FaqsForm from "@/app/[lang]/shops/components/faqs-form/faqs-form";
import { getDictionary } from "@/lib/get-dictionary";
interface ContactPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az"; category: string }>;
}
export default async function FaqsPage({ params }: ContactPageProps) {
  const ContactPageParam: {
    lang: "uz" | "ru" | "en" | "tj" | "az";
    category: string;
  } = await params;
  const dictionary = await getDictionary(ContactPageParam.lang);
  return (
    <div>
      <div className={"container md:!mt-26 !mt-42"}>
        <BreadcrumbDynamic />
      </div>
      <Image
        width={1000}
        height={330}
        className={"w-full h-[330px] object-cover mt-8 mb-20"}
        src={ServicesImage}
        alt={"ServicesImage"}
      />

      <div className="container ">
        <div className="w-[590px] flex flex-col justify-start items-start gap-7">
          <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
            Свяжитесь с нами
          </h2>
          <p className=" justify-start text-primary text-sm font-medium leading-tight">
            Нужна помощь? Вы можете написать нам в любое время, заполнив форму
            ниже. Для оперативных ответов также рекомендуем ознакомиться с
            разделами FAQ, Гид по уходу за продукцией, а также отслеживать
            статус заказа или возврата по ссылке.
          </p>
        </div>
      </div>

      <div className="container mt-16">
        <div className="w-full flex flex-col gap-6 mt-10">
          <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
            Нужна помощь? Мы всегда на связи.
          </h2>
          <p className="text-primary text-sm leading-tight">
            Вы можете обратиться к нам в любой момент — мы с удовольствием
            подскажем, поможем с выбором подарка или статусного изделия, оформим
            заказ и проконсультируем по доставке.
          </p>

          <div className="mt-4">
            <h3 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
              Call-center
            </h3>
            <p className="text-primary text-sm">+998 71 203 05 00</p>
            <p className="text-primary text-sm">Единый call-центр работает:</p>
            <p className="text-primary text-sm">Пн-Суб с 9:00 до 18:00</p>
          </div>

          <div className="mt-6">
            <h3 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
              Наши филиалы
            </h3>
            <ul className="list-disc pl-5 text-primary text-sm leading-tight">
              <li>Ташкент, Малая кольцевая дорога, 2/A</li>
              <li>Ташкент, ЦУМ, улица Ислама Каримова, 17</li>
              <li>Душанбе, Рудаки, 55/1</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"bg-neutral-100 py-7 mt-12"}>
        <div className={"container"}>
          <div className="self-stretch justify-start ">
            <p className="text-gray-900 text-lg font-medium font-['Inter'] leading-7">
              Форма обратной связи
            </p>
            <p className="text-primary text-sm font-medium leading-tight">
              Мы готовы ответить вам в любое время. Обратите внимание, что
              обработка запроса может занять до 3 рабочих дней.
            </p>
          </div>

          <FaqsForm dictionary={dictionary} />
        </div>
      </div>
    </div>
  );
}
