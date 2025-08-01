import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getBreadcrumbDictionary} from "@/lib/getBreadcrumbDictionary";

type BreadcrumbDictionary = {
    [key: string]: {
        [lang: string]: string;
    };
};

export const useBreadcrumbTranslation = () => {
    const [t, setT] = useState<{ [key: string]: string }>({});
    const params = useParams();
    const lang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang || "en";

    useEffect(() => {
        getBreadcrumbDictionary(lang).then((dict: BreadcrumbDictionary) => {
            const result: { [key: string]: string } = {};
            Object.keys(dict).forEach((key) => {
                result[key] = dict[key][lang] || key;
            });
            setT(result);
        });
    }, [lang]);

    return t;
};
