'use client';

import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Check} from "lucide-react";
import {useRouter} from "next/navigation";
import LocaleSwitcher from "@/components/shared/locale-switcher/locale-switcher";
import IconComponent from "@/components/icon/icon-view";
import {CountryType, LanguageType} from "@/interface/language&country-type/language-type";


const ChangeLangModal = ({lang, languages, county}: {
    lang: 'uz' | 'ru' | 'en',
    languages: LanguageType[],
    county: CountryType[]
}) => {
    const [activeLocale, setActiveLocale] = useState<{ name: string; code: string } | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const {refresh} = useRouter()

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

    const handleLocaleChange = (name: string, code: string) => {
        const newLocale = {name, code};
        Cookies.set("country", JSON.stringify(newLocale));
        setActiveLocale(newLocale);
        refresh()
    };

    const [open, setOpen] = useState<boolean>(false);
    const [openLocation, setOpenLocation] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);
    const handleLocationOpen = () => setOpenLocation(!openLocation);

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
                <h2 onClick={handleOpen} className={`mb-5 ${isMobile && "flex items-center justify-between"}`}>
                    {translations.changeLanguage[lang]}
                    {isMobile && <IconComponent name={open ? "chevronUp" : "chevronDown"}/>}
                </h2>
                {(open || !isMobile) && <LocaleSwitcher languages={languages}/>}
            </div>

            <div>
                <h2 onClick={handleLocationOpen} className={`mb-5 ${isMobile && "flex items-center justify-between"}`}>
                    {translations.selectLocation[lang]}
                    {isMobile && <IconComponent name={openLocation ? "chevronUp" : "chevronDown"}/>}
                </h2>
                {(openLocation || !isMobile) && (
                    <ul className={"flex flex-col w-full gap-7"}>
                        {county.map((element) => (
                            <li key={element.id} onClick={() => handleLocaleChange(element.name, element.code)}
                                className="px-4 md:px-0 md:w-[220px] flex items-center justify-between cursor-pointer">
                                {element.name}
                                <span>{activeLocale?.code === element.code && <Check/>}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ChangeLangModal;