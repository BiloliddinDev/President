"use client";

import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import {SectionTitle} from "@/components/ui/sectionTitle";
import IconComponent from "@/components/icon/icon-view";
// import {getAllLanguage} from "@/service/navbar-service/lang.service";
// import {getAllCountry} from "@/service/navbar-service/country.service";
import {getLocation} from "@/service/home-service/location.service";

const MapComponent = dynamic(
    () => import("@/components/shared/map-component/map-component"),
    {
        ssr: false,
    }
);

interface Branch {
    lat: number;
    lng: number;
    name: {
        uz: string;
        ru: string;
        en: string;
        tj: string;
        az: string;
    };
}

interface LocationProps {
    dictionary: {
        location: {
            title: string;
            text: string
        };
    }
    lang: "uz" | "ru" | "en" | 'tj' | 'az'
}

interface LocationType {
    "location.text": string
    "location.title": string
}

export const branches: Branch[] = [
    {
        lat: 41.2667445,
        lng: 69.2483314,
        name: {
            uz: "O‘zbekiston, Toshkent, Kichik halqa yo'li, 2/A",
            ru: "Узбекистан, Ташкент, Малая кольцевая дорога, 2/A",
            en: "Uzbekistan, Tashkent, Small Ring Road, 2/A",
            az: "Özbəkistan, Daşkənd, Kiçik dairəvi yol, 2/A",
            tj: "Ӯзбекистон, Тошкент, ҳалқаи хурди роҳ, 2/A"
        }
    },
    {
        lat: 41.308340,
        lng: 69.269253,
        name: {
            uz: "O‘zbekiston, Toshkent, TSUM, Islam Karimov ko'chasi, 17",
            ru: "Узбекистан, Ташкент, ЦУМ, улица Ислама Каримова, 17",
            en: "Uzbekistan, Tashkent, TSUM, Islam Karimov Street, 17",
            az: "Özbəkistan, Daşkənd, TSUM, İslam Kərimov küçəsi, 17",
            tj: "Ӯзбекистон, Тошкент, ЦУМ, кӯчаи Ислом Каримов, 17"
        }
    },
    {
        lat: 39.664527,
        lng: 66.960616,
        name: {
            uz: "O‘zbekiston, Samarqand",
            ru: "Узбекистан, Самарканд",
            en: "Uzbekistan, Samarkand",
            az: "Özbəkistan, Səmərqənd",
            tj: "Ӯзбекистон, Самарқанд"
        }
    },
    {
        lat: 38.57212240653411,
        lng: 68.78859694232835,
        name: {
            uz: "Tojikiston, Dushanbe, Rudakiy ko‘chasi, 55/1",
            ru: "Таджикистан, Душанбе, Рудаки, 55/1",
            en: "Tajikistan, Dushanbe, Rudaki Street, 55/1",
            az: "Tacikistan, Düşənbə, Rudaki küçəsi, 55/1",
            tj: "Тоҷикистон, Душанбе, кӯчаи Рӯдакӣ, 55/1"
        }
    },
    
    {
        lat: 40.372974,
        lng: 49.853148,
        name: {
            uz: "Ozarbayjon, Boku",
            ru: "Азербайджан, Баку",
            en: "Azerbaijan, Baku",
            az: "Azərbaycan, Bakı",
            tj: "Озарбойҷон, Боку"
        }
    }
];



export default function LocationPage({dictionary, lang}: LocationProps) {
    const [selectedPosition, setSelectedPosition] = useState<
        [number, number] | null
    >(null);
    const [location, setLocation] = useState<{ text: string; title: string }>({text: "", title: ""});

    const handleGoTo = (lat: number, lng: number) => {
        setSelectedPosition([lat, lng]);
    };

    useEffect(() => {
        const fetchLocation = async () => {
            const data: LocationType = await getLocation();
            setLocation({text: data["location.text"], title: data["location.title"]});
        };
        fetchLocation().then().catch().finally();


    }, []);
    // console.log(location)
    return (
        <div className="w-full h-auto flex flex-col gap-4 overflow-x-hidden container">
            <div className="w-full max-w-[1200px] m-auto ">
                <SectionTitle text={dictionary.location.title || location.title}/>
            </div>

            <div className="w-full max-w-[1200px] h-[400px] m-auto rounded-md overflow-hidden">
                <MapComponent lang={lang} selectedPosition={selectedPosition}/>
            </div>

            <div className="w-full max-w-[1200px] m-auto mt-3 flex flex-col gap-[20px]">
                <h3 className="text-primary text-xl font-medium  capitalize">
                    {dictionary.location.text || location.text}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#5C5F6A] w-full max-w-[1000px]">
                    {branches.map((branch, index) => (
                        <button
                            key={index}
                            onClick={() => handleGoTo(branch.lat, branch.lng)}
                            className="flex items-center font-inter text-[12px] px-2 transition cursor-pointer"
                        >
                            <IconComponent name="mapLocation"/>
                            {branch.name[lang]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}