import React, {useEffect, useState} from "react";
import {defaultCountryList} from "@/lib/get-userlocation";
import Cookies from "js-cookie";

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
        <div className="p-4">
            <h2 className="text-xl mb-4">Select another location</h2>
            <div className="grid gap-2">
                {defaultCountryList.map((country) => (
                    <button
                        key={country.id}
                        onClick={() => handleLocaleChange(country.country, country.region)}
                        className={`p-2 rounded-md ${
                            activeLocale?.country === country.country
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100"
                        }`}
                    >
                        {country.region}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChangeLangModal;