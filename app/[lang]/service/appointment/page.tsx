import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import images2 from "@/public/images/service-appoinment.webp";
import BoutiqueForm from "@/app/[lang]/shops/components/boutique-form/boutique-form";
import { getDictionary } from "@/lib/get-dictionary";
interface AppointmentPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az"; category: string }>;
}

export default async function AppointmentPage({
  params,
}: AppointmentPageProps) {
  const AppointmentPageParam: {
    lang: "uz" | "ru" | "en" | "tj" | "az";
    category: string;
  } = await params;
  const dictionary = await getDictionary(AppointmentPageParam.lang);
  return (
    <div>
      <div className={"container md:!mt-26 !mt-42"}>
        <BreadcrumbDynamic />
      </div>
      <Image
        width={1000}
        height={350}
        className={"w-full h-[400px] object-cover mt-10 mb-20"}
        src={images2}
        alt={"ServicesImage"}
      />

      <div className="container ">
        <div className="w-[590px] flex flex-col justify-start items-start gap-7">
          <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
            Записаться на визит
          </h2>
          <p className=" justify-start text-primary text-sm font-medium leading-tight">
            Оформите предварительную запись в шоурум “President Business Gifts”,
            и наш специалист свяжется с вами для организации персонального
            визита в удобное для вас время.
          </p>
        </div>
      </div>

      <div className={"bg-neutral-100 py-7 mt-12"}>
        <div className={"container"}>
          <BoutiqueForm dictionary={dictionary} />
        </div>
      </div>
    </div>
  );
}
