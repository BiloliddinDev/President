import React, {useEffect, useState} from "react";
import {defaultCountryList} from "@/lib/get-userlocation";
import Cookies from "js-cookie";
import {Check} from "lucide-react";
import LocaleSwitcher from "@/components/shared/locale-switcher/locale-switcher";
import IconComponent from "@/components/icon/icon-view";

const ChangeLangModal = ({lang}: { lang: 'uz' | "ru" | "en" }) => {
    const [activeLocale, setActiveLocale] = useState<{
        country: string;
        region: string;
    } | null>(null);

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const defaultLocation = Cookies.get("country");
        if (defaultLocation) {
            setActiveLocale(JSON.parse(defaultLocation));
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLocaleChange = (country: string, region: string) => {
        const newLocale = {country, region};
        Cookies.set("country", JSON.stringify(newLocale));
        setActiveLocale(newLocale);
    };

    const [open, setOpen] = useState<boolean>(false);
    const [openLocation, setOpenLocation] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);
    const handleLocationOpen = () => setOpenLocation(!openLocation);

    // Translations for the UI text
    const translations = {
        changeLanguage: {
            uz: "Tilni o'zgartirish",
            ru: "Изменить язык",
            en: "Change language"
        },
        selectLocation: {
            uz: "Boshqa joyni tanlang",
            ru: "Выберите другое местоположение",
            en: "Select another location"
        }
    };

    return (
        <div className="flex flex-col gap-14 h-full text-primary text-base font-medium leading-normal">
            <div>
                <h2
                    onClick={handleOpen}
                    className={`text-primary text-base font-medium leading-normal mb-5 ${
                        isMobile && "flex items-center justify-between"
                    }`}
                >
                    {translations.changeLanguage[lang]}
                    {isMobile && (
                        <IconComponent name={open ? "chevronUp" : "chevronDown"}/>
                    )}
                </h2>
                {(open || !isMobile) && <LocaleSwitcher/>}
            </div>

            <div>
                <h2
                    onClick={handleLocationOpen}
                    className={`text-primary text-base font-medium leading-normal mb-5 ${
                        isMobile && "flex items-center justify-between"
                    }`}
                >
                    {translations.selectLocation[lang]}
                    {isMobile && (
                        <IconComponent name={openLocation ? "chevronUp" : "chevronDown"}/>
                    )}
                </h2>
                {(openLocation || !isMobile) && (
                    <ul className={"flex flex-col w-full gap-7"}>
                        {defaultCountryList.map((country) => (
                            <li
                                key={country.id}
                                onClick={() =>
                                    handleLocaleChange(country.country, country.region)
                                }
                                className={`text-primary px-4 md:px-0  md:w-[220px] text-base font-normal leading-normal flex items-center justify-between cursor-pointer `}
                            >
                                {country.region}{" "}
                                <span>
                                    {activeLocale?.country === country.country && <Check/>}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ChangeLangModal;