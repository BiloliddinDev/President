"use client";
import React, {useEffect, useRef, useState} from "react";
import CustomTabs from "../tabs/custom-tabs";
import {FooterLogo} from "@/components/ui/logo";
import IconComponent from "@/components/icon/icon-view";

import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import {CountryType, LanguageType} from "@/interface/language&country-type/language-type";
import ShopModalContent from "../modalContents/shopModal";
import {getCategoryModal} from "@/service/home-service/category-mobile.service";
import {Category} from "@/interface/category-type/category-interface";
import {CurrencyType} from "@/interface/currency-type/currency-type";

const MobileNavbar = ({lang, languages, county, currency}:
                      {
                          lang: "uz" | "ru" | "en",
                          languages: LanguageType[],
                          county: CountryType[]
                          currency: CurrencyType[] | undefined
                      }) => {
    const [open, setOpen] = useState<boolean>(false);
    // const [searchInputOpen, setSearchInputOpen] = useState<boolean>(false);
    const [category, setCategory] = useState<Category[]>([])

    useEffect(() => {

        const fetchCategory = async () => {
            const data: Category[] = await getCategoryModal() as Category[]
            setCategory(data);
        };
        fetchCategory().then().catch().finally();
    }, []);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const handleOpen = () => setOpen(!open);
    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div className="bg-white p-5 md:hidden w-screen" ref={mobileMenuRef}>
            <div className="flex justify-between items-center">
                <FooterLogo/>
                <IconComponent onClick={handleOpen} name={open ? "close" : "burger"}/>
            </div>

            {/*<div>*/}
            {/*  <div className="relative w-full mt-4">*/}
            {/*    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />*/}
            {/*    <Input*/}
            {/*      type="search"*/}
            {/*      placeholder="Search"*/}
            {/*      className="pl-10 w-full outline-0 rounded-none border-0 border-b border-gray-400"*/}
            {/*      onFocus={() => setSearchInputOpen(true)}*/}
            {/*      onBlur={() => setTimeout(() => setSearchInputOpen(false), 150)}*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div suppressHydrationWarning>*/}
            {/*    {searchInputOpen && <SearchModalData />}*/}
            {/*  </div>*/}
            {/*</div>*/}

            {open && (
                <div className="mt-4 space-y-6">
                    <CustomTabs
                        identifier="min-w-[168px]"
                        tabs={[
                            {
                                value: "shops",
                                label: "Shops",
                                content: <ShopModalContent lang={"ru"} category={category}/>,
                            },
                            {
                                value: "discover",
                                label: "Discover",
                                content: <DiscoverModalContent lang={'ru'}/>,
                            },
                        ]}
                    />
                    <ChangeLangModal lang={lang} languages={languages} county={county} currency={currency}/>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;