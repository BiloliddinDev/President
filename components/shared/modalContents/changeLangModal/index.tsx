'use client';

import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Check} from "lucide-react";
import {useRouter} from "next/navigation";
import LocaleSwitcher from "@/components/shared/locale-switcher/locale-switcher";
import IconComponent from "@/components/icon/icon-view";
import {CountryType, LanguageType} from "@/interface/language&country-type/language-type";
import {CurrencyType} from "@/interface/currency-type/currency-type";

const ChangeLangModal = ({lang, languages, county, currency}: {
    lang: 'uz' | 'ru' | 'en',
    languages: LanguageType[],
    county: CountryType[],
    currency: CurrencyType[] | undefined
}) => {
    const [activeLocale, setActiveLocale] = useState<{ name: string; code: string } | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const {refresh} = useRouter();

    const [currencyCookie, setCurrencyCookie] = useState<{ code: string } | null>(null);

    useEffect(() => {
        const defaultLocation = Cookies.get("country");
        if (defaultLocation) {
            setActiveLocale(JSON.parse(defaultLocation));
        }

        const currencyFromCookie = Cookies.get("currency");
        if (currencyFromCookie) {
            try {
                const parsed = JSON.parse(currencyFromCookie);
                setCurrencyCookie(parsed);
            } catch (e) {
                console.error("Currency cookie parse error:", e);
            }
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
        refresh();
    };

    const handleCurrencyChange = (name: string, code: string, isDefault: boolean) => {
        const newCurrency = {name, code, default_currency: isDefault};
        Cookies.set("currency", JSON.stringify(newCurrency));
        setCurrencyCookie({code}); 
        refresh();
    };

    const [open, setOpen] = useState<boolean>(false);
    const [openLocation, setOpenLocation] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);
    const handleLocationOpen = () => setOpenLocation(!openLocation);

    const translations = {
        changeLanguage: {
            uz: "Tilni o'zgartirish",
            ru: "Изменить язык",
            en: "Change dictionaries"
        },
        selectLocation: {
            uz: "Boshqa joyni tanlang",
            ru: "Выберите другое местоположение",
            en: "Select another location"
        },
        changeCurrency: {
            uz: "Pul birlikni o'zgartirish",
            ru: "Изменить валюту",
            en: "Change currency"
        }
    };

    return (
        <div className="flex flex-col gap-4 mx-2 h-full text-primary text-sm font-medium leading-normal">
            {/* Language Section */}
            <div>
                <h2 onClick={handleOpen} className={`mb-5 ${isMobile && "flex items-center justify-between"}`}>
                    {translations.changeLanguage[lang]}
                    {isMobile && <IconComponent name={open ? "chevronUp" : "chevronDown"}/>}
                </h2>
                {(open || !isMobile) && <LocaleSwitcher languages={languages}/>}
            </div>

            {/* Location Section */}
            <div>
                <h2 onClick={handleLocationOpen} className={`mb-5 ${isMobile && "flex items-center justify-between"}`}>
                    {translations.selectLocation[lang]}
                    {isMobile && <IconComponent name={openLocation ? "chevronUp" : "chevronDown"}/>}
                </h2>
                {(openLocation || !isMobile) && (
                    <ul className="flex flex-col w-full gap-7">
                        {county.map((element) => (
                            <li
                                key={element.id}
                                onClick={() => handleLocaleChange(element.name, element.code)}
                                className="px-4 md:px-0 md:w-[220px] flex items-center justify-between cursor-pointer"
                            >
                                {element.name}
                                <span>{activeLocale?.code === element.code && <Check/>}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Currency Section */}
            <div>
                <h2 onClick={handleLocationOpen} className={`mb-5 ${isMobile && "flex items-center justify-between"}`}>
                    {translations.changeCurrency[lang]}
                    {isMobile && <IconComponent name={openLocation ? "chevronUp" : "chevronDown"}/>}
                </h2>
                {(openLocation || !isMobile) && (
                    <ul className="flex flex-col w-full gap-7">
                        {currency?.map((element) => (
                            <li
                                key={element.code}
                                onClick={() => handleCurrencyChange(element.name, element.code, element.default_currency)}
                                className={`px-4 md:px-0 md:w-[220px] flex items-center justify-between cursor-pointer ${
                                    currencyCookie?.code === element.code ? '' : ''
                                }`}
                            >
                                {element.name} ({element.code})
                                <span>{currencyCookie?.code === element.code && <Check/>}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ChangeLangModal;
