"use client";

import {FooterLogo} from "@/components/ui/logo";
import {navbarLinks} from "@/constants/navbar";

import Link from "next/link";
import NavbarModal from "@/components/shared/navbar-modal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import SearchModal from "@/components/shared/search-modal";
import SearchModalData from "@/components/shared/modalContents/searchModal";
import {Heart, Search, ShoppingCart} from "lucide-react";
import MobileNavbar from "./mobile-navbar";
import UserDropdown from "@/components/shared/user-dropdown/user-dropdown";
import {useEffect, useState} from "react";
import {getAllLanguage} from "@/service/navbar-service/lang.service";
import {CountryType, LanguageType} from "@/interface/language&country-type/language-type";
import {getAllCountry} from "@/service/navbar-service/country.service";
import Cookies from "js-cookie";
import ShopModalContent from "../modalContents/shopModal";
import {getCategoryModal} from "@/service/home-service/category-mobile.service";
import {getAllCurrency} from "@/service/navbar-service/currency.service";
import {Category} from "@/interface/category-type/category-interface";
import {CurrencyType} from "@/interface/currency-type/currency-type";


export const Navbar = ({lang}: { lang: 'uz' | "ru" | "en" }) => {
    const [languages, setLanguages] = useState<LanguageType[]>([]);
    const [county, setCountry] = useState<CountryType[]>([]);
    const cookiesCountry = Cookies.get('country')
    const [currency, setCurrency] = useState<CurrencyType[] | undefined>();
    const [category, setCategory] = useState<Category[]>([])

    useEffect(() => {
        const fetchLang = async () => {
            const data = await getAllLanguage();
            setLanguages(data);
        };
        fetchLang().then().catch().finally();

        const fetchCurrency = async () => {
            const data = await getAllCurrency();
            setCurrency(data);
        };
        fetchCurrency().then().catch().finally();

        const fetchCounty = async () => {
            const data = await getAllCountry();
            setCountry(data);
        };
        fetchCounty().then().catch().finally();
    }, [cookiesCountry]);
    useEffect(() => {
        const fetchCategory = async () => {
            const data: Category[] = await getCategoryModal() as Category[]
            setCategory(data);
        };
        fetchCategory().then().catch().finally();
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full md:p-3 z-60 transition-colors duration-300 bg-neutral-100 shadow`}
        >
            <div className="container hidden md:flex justify-between items-center">
                <div className="flex items-center gap-14">
                    {navbarLinks.map((link) => (
                        <div
                            key={link.id}
                            className={`text-primary !hover:text-zinc-300  text-2xl  font-bold leading-normal cursor-pointer transition-colors duration-200`}
                        >
                            {["Shop", "Discover"].includes(link.name.en) ? (
                                <NavbarModal
                                    title={link.name[lang]}
                                    side="left"
                                    sheetTitle={link.name[lang]}
                                    lang={lang}
                                    showing={link.showing}
                                >
                                    {link.name.en === "Shop" ? (
                                        <ShopModalContent lang={lang} category={category}/>
                                    ) : (
                                        <DiscoverModalContent lang={lang}/>
                                    )}
                                </NavbarModal>
                            ) : (
                                link.name.en
                            )}
                        </div>
                    ))}
                </div>

                <FooterLogo/>

                <div className="flex items-center gap-8">
                    <SearchModal
                        lang={lang}
                        side="top"
                        title={
                            <Search width={24} height={24}
                                    className={`text-primary !hover:text-zinc-300 mt-2.5 transition-colors duration-200`}/>
                        }
                    >
                        <SearchModalData/>
                    </SearchModal>

                    <NavbarModal
                        lang={lang}
                        side="right"
                        title={
                            <p
                                className={`text-primary !hover:text-zinc-300 text-lg font-normal transition-colors duration-200`}
                            >
                                {`${lang.toUpperCase()}`}
                            </p>
                        }
                    >
                        <ChangeLangModal currency={currency} lang={lang} languages={languages} county={county}/>
                    </NavbarModal>
                    <Link href={'/like'}>
                        <Heart width={24} height={24} className={`text-primary !hover:text-zinc-300 duration-200`}/>
                    </Link>
                    <Link href={"/basket"}>
                        <ShoppingCart width={24} height={24}
                                      className="text-primary !hover:text-zinc-300 duration-200"/>
                    </Link>
                    <UserDropdown/>
                </div>
            </div>
            <MobileNavbar lang={lang} languages={languages} county={county} currency={currency}/>
        </nav>
    );
};