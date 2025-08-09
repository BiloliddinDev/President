import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesImage from "@/public/images/service-return.webp";
import Image from "next/image";

interface ReturnProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function ReturnPage({ params }: ReturnProps) {
  const News = await params.then((params) => params);
  const dictionary = await getDictionary(News.lang);

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
        alt={"ServicesImage"}
      />
      <div className="container ">
        <div className="w-[590px] flex flex-col justify-start items-start gap-5 mt-12">
          <div
            data-aos="fade-right"
            className="text-primary text-lg font-medium leading-7"
          >
            {dictionary.service.return.title}
          </div>
          <div
            data-aos="fade-up"
            className="p-6 bg-neutral-100 rounded flex flex-col gap-4 text-sm font-medium text-black leading-tight"
          >
            <p>{dictionary.service.return.text1}</p>
            <p>{dictionary.service.return.text2}</p>
            <p>{dictionary.service.return.text3}</p>
            <p>{dictionary.service.return.text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
