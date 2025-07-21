import IconComponent from "@/components/icon/icon-view";
import {Button} from "@/components/ui/button";
import {FooterLogo} from "@/components/ui/logo";
import {companyList, newProductsList, supportList,} from "@/constants/footer-lists";
import Link from "next/link";
import CustomAccordion from "../custom-accordion/custom-accordion";
import {FooterService} from "@/service/home-service/footer.service";
import {FooterType} from "@/interface/footer-type/footer-type";

interface FooterProps {
    lang: "uz" | "ru" | 'en'
}

export const Footer = async ({lang}: FooterProps) => {
    const FooterData: FooterType = await FooterService() as FooterType

    return (
        <footer className={"container"}>
            <div
                className={"flex flex-wrap md:flex-nowrap flex-col sm:flex-row justify-between mt-[100px] mb-4 items-start pb-11 border-b-[1px] border-gray-200"}>
                <div className={"flex flex-col items-start gap-6 mb-5"}>
                    <FooterLogo/>
                    <p className={"w-full md:max-w-[278px] text-gray-600 text-sm font-normal leading-normal"}>
                        {FooterData["footer.description"]}
                    </p>
                    <Button className="self-center md:self-start">
                        {FooterData["footer.signup"]}
                    </Button>
                </div>

                <div className={"hidden md:flex flex-col items-start"}>
                    <h2 className={"text-gray-500 text-sm font-medium leading-normal mb-[40px]"}>
                        {FooterData["footer.support"]}
                    </h2>
                    <ul>
                        {supportList.map((item) => (
                            <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                <Link href={item.link}>{item.name[lang]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <CustomAccordion
                    className="block md:hidden"
                    accordionTrigger={FooterData["footer.support"]}
                    accordionTriggerStyles="text-gray-500 text-sm font-medium leading-normal uppercase"
                    itemValue="item"
                    accordionContent={
                        <ul>
                            {supportList.map((item) => (
                                <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                    <Link href={item.link}>{item.name[lang]}</Link>
                                </li>
                            ))}
                        </ul>
                    }
                />

                <div className={"hidden md:flex flex-col items-start"}>
                    <h2 className={"text-gray-500 text-sm font-medium leading-normal mb-[40px]"}>
                        {FooterData["footer.company"]}
                    </h2>
                    <ul>
                        {companyList.map((item) => (
                            <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                <Link href={item.link}>{item.name[lang]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <CustomAccordion
                    className="block md:hidden"
                    accordionTrigger={FooterData["footer.company"]}
                    accordionTriggerStyles="text-gray-500 text-sm font-medium leading-normal uppercase"
                    itemValue="item"
                    accordionContent={
                        <ul>
                            {companyList.map((item) => (
                                <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                    <Link href={item.link}>{item.name[lang]}</Link>
                                </li>
                            ))}
                        </ul>
                    }
                />

                <div className={"hidden md:flex flex-col items-start"}>
                    <h2 className={"text-gray-500 text-sm font-medium leading-normal mb-[40px]"}>
                        {FooterData["footer.new.products"]}
                    </h2>
                    <ul>
                        {newProductsList.map((item) => (
                            <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                <Link href={item.link}>{item.name[lang]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <CustomAccordion
                    className="block md:hidden"
                    accordionTrigger={FooterData["footer.new.products"]}
                    accordionTriggerStyles="text-gray-500 text-sm font-medium leading-normal uppercase"
                    itemValue="item"
                    accordionContent={
                        <ul>
                            {newProductsList.map((item) => (
                                <li key={item.id} className={"text-gray-600 text-sm mb-4 font-medium leading-normal"}>
                                    <Link href={item.link}>{item.name[lang]}</Link>
                                </li>
                            ))}
                        </ul>
                    }
                />

                <div className={"flex flex-col items-start"}>
                    <h2 className={"text-gray-500 text-sm font-medium leading-normal my-5 md:mb-[40px]"}>
                        {FooterData["footer.payments"]}
                    </h2>
                    <div className={"flex flex-wrap md:flex-nowrap items-center gap-4"}>
                        <div><IconComponent name="mastercard"/></div>
                        <div><IconComponent name="amex"/></div>
                        <div><IconComponent name="visa"/></div>
                    </div>
                    <a href="tel:+998712030500" className="font-xl my-5 text-gray-500 hover:text-black">
                        +998 71 203 05 00
                    </a>
                    <h2 className={"text-gray-500 text-sm font-medium leading-normal mb-5 md:mb-[40px]"}>
                        {FooterData["footer.social"]}
                    </h2>
                    <ul className={"flex gap-6 flex-wrap md:flex-nowrap"}>
                        <li><IconComponent name="whatsapp"/></li>
                        <li><IconComponent name="instagram"/></li>
                        <li><IconComponent name="facebook"/></li>
                        <li><IconComponent name="telegram"/></li>
                        <li><IconComponent name="youtube"/></li>
                    </ul>
                </div>
            </div>
            <p className={"text-gray-600 text-sm font-normal leading-normal text-center pb-6"}>
                {FooterData["footer.copyright"]}
            </p>
        </footer>
    );
};