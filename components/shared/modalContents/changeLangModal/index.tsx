import React, {useEffect, useState} from "react";
import {defaultCountryList} from "@/lib/get-userlocation";
import Cookies from "js-cookie";
import {Check} from "lucide-react";
import LocaleSwitcher from "@/components/shared/locale-switcher/locale-switcher";

const ChangeLangModal = () => {
    const [activeLocale, setActiveLocale] = useState<{ country: string, region: string } | null>(null);

    useEffect(() => {
        const defaultLocation = Cookies.get("country");
        if (defaultLocation) {
            setActiveLocale(JSON.parse(defaultLocation));
        }
    }, []);

    const handleLocaleChange = (country: string, region: string) => {
        const newLocale = {country, region};
        Cookies.set("country", JSON.stringify(newLocale));
        setActiveLocale(newLocale);
    };

    return (
        <div className="flex flex-col gap-14 h-full text-primary text-base font-medium leading-normal">
            <div>
                <h2 className={'text-primary text-base font-medium leading-normal mb-5'}>Change language</h2>
                <LocaleSwitcher/>
            </div>
            
            <div>
                <h2 className={'text-primary text-base font-medium leading-normal mb-5'}>Select another location</h2>
                <ul className={"flex flex-col w-full gap-7"}>
                    {defaultCountryList.map((country) => (
                        <li
                            key={country.id}
                            onClick={() => handleLocaleChange(country.country, country.region)}
                            className={`text-primary w-[220px] text-base font-normal leading-normal flex items-center justify-between cursor-pointer `}
                        >
                            {country.region} <span>{activeLocale?.country === country.country && <Check />}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChangeLangModal;