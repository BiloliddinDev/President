"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

export interface SupportFormTranslation{
    "form.name.label": string,
    "form.messages.required": string,
    "form.messages.max": string,
    "form.messages.invalid": string,
    "form.submit": string,
    "form.phone.label": string,
    "support.form.intro": string,
    "form.messages.success":string,
    "support.title": string,
    "form.messages.error": string,
    "form.messages.min": string,
    "form.messages.serverError": string,
    "form.phone.placeholder": string,
    "form.name.placeholder": string
  }

interface CountryCookie {
    name: string;
    code: string;
}

export const getSupport = async () => {
    const countryString = Cookies.get("country");
    const langString = Cookies.get("lang");
    let countryCode = null;

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            countryCode = parsed.code;
        } catch (error) {
            console.warn("country cookie parsing error:", error);
        }
    }

    if (countryCode) {
        return fetcherClient(`/api/v1/translations/page/SUPPORT?language=${langString?.toUpperCase()}&country=${countryCode}`);
             }

}
	
 