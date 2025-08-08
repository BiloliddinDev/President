import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ServicesImage from "@/public/images/Контакты.webp";
import { getDictionary } from "@/lib/get-dictionary";
import FaqsForm from "../shops/components/faqs-form/faqs-form";

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
        height={350}
        className={"w-full h-[400px] object-cover mt-8 mb-20"}
        src={ServicesImage}
        alt={"ServicesImage"}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      />

      <div className="container ">
        <div
          data-aos="fade-right"
          className="w-[590px] flex flex-col justify-start items-start gap-7"
        >
          <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
            {dictionary.contacts.contactTitle}
          </h2>
          <p className=" justify-start text-primary text-sm font-medium leading-tight">
            {dictionary.contacts.contactDescription}
          </p>
        </div>
      </div>

      <div className="container mt-16">
        <div data-aos="fade-up" className="w-full flex flex-col gap-6 mt-10">
          <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
            {dictionary.contacts.helpTitle}
          </h2>
          <p className="text-primary text-sm leading-tight">
            {dictionary.contacts.helpDescription}
          </p>

          <div data-aos="fade-up" className="mt-4">
            <h3 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
              Call-center
            </h3>
            <p className="text-primary text-sm">+998 71 203 05 00</p>
            <p className="text-primary text-sm">
              {dictionary.contacts.callCenterInfo}
            </p>
            <p className="text-primary text-sm">
              {dictionary.contacts.callCenterTime}
            </p>
          </div>

          <div data-aos="fade-up" className="mt-6">
            <h3 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
              {dictionary.contacts.branches}
            </h3>
            <ul className="list-disc pl-5 text-primary text-sm leading-tight">
              {dictionary.contacts.branchList.map((branch) => (
                <li key={branch}>{branch}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={"bg-neutral-100 py-7 mt-12"}>
        <div data-aos="fade-up" className={"container"}>
          <div className="self-stretch justify-start ">
            <p className="text-gray-900 text-lg font-medium font-['Inter'] leading-7">
              {dictionary.contacts.formTitle}
            </p>
            <p className="text-primary text-sm font-medium leading-tight">
              {dictionary.contacts.formDescription}
            </p>
          </div>

          <FaqsForm dictionary={dictionary} />
        </div>
      </div>
    </div>
  );
}
