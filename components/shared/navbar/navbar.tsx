"use client";

import { FooterLogo } from "@/components/ui/logo";
import { navbarLinks } from "@/constants/navbar";

import Link from "next/link";
import NavbarModal from "@/components/shared/navbar-modal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import SearchModal from "@/components/shared/search-modal";
import SearchModalData from "@/components/shared/modalContents/searchModal";
import { Heart, Search, ShoppingCart, Globe } from "lucide-react";
import MobileNavbar from "./mobile-navbar";
import UserDropdown from "@/components/shared/user-dropdown/user-dropdown";
import { useEffect, useState } from "react";
import { getAllLanguage } from "@/service/navbar-service/lang.service";
import {
  CountryType,
  LanguageType,
} from "@/interface/language&country-type/language-type";
import { getAllCountry } from "@/service/navbar-service/country.service";
import Cookies from "js-cookie";
import ShopModalContent from "../modalContents/shopModal";
import { getCategoryModal } from "@/service/home-service/category-mobile.service";
import { getAllCurrency } from "@/service/navbar-service/currency.service";
import { Category } from "@/interface/category-type/category-interface";
import { CurrencyType } from "@/interface/currency-type/currency-type";

export interface NavbarProps {
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found: string;
      unavailable: string;
      show_more: string;
    };
    search: {
      placeholder: string;
      product_suggestion: string;
      no_products: string;
      product_types: string;
      close: string;
    };
    userDropdown: {
      guest: {
        title: string;
        signUp: string;
        logIn: string;
      };
      profile: {
        profileBtn: string;
        logoutBtn: string;
      };
    };
  };
  lang: "uz" | "ru" | "en";
}

export const Navbar = ({ lang, dictionary }: NavbarProps) => {
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [county, setCountry] = useState<CountryType[]>([]);
  const [currency, setCurrency] = useState<CurrencyType[] | undefined>();
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) return;

    const fetchData = async () => {
      try {
        const [langRes, currencyRes, countryRes, categoryRes] = await Promise.allSettled([
          getAllLanguage(),
          getAllCurrency(),
          getAllCountry(),
          getCategoryModal() as Promise<Category[]>,
        ]);
        if (langRes.status === "fulfilled" && langRes.value) setLanguages(langRes.value);
        if (currencyRes.status === "fulfilled" && currencyRes.value) setCurrency(currencyRes.value);
        if (countryRes.status === "fulfilled" && countryRes.value) setCountry(countryRes.value);
        if (categoryRes.status === "fulfilled" && categoryRes.value) setCategory(categoryRes.value);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, [isLoaded]);

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
                    <ShopModalContent lang={lang} category={category} />
                  ) : (
                    <DiscoverModalContent lang={lang} />
                  )}
                </NavbarModal>
              ) : (
                link.name.en
              )}
            </div>
          ))}
        </div>

        <FooterLogo />

        <div className="flex items-center gap-8">
          <SearchModal
            lang={lang}
            side="top"
            title={
              <Search
                width={24}
                height={24}
                className={`text-primary !hover:text-zinc-300 mt-2.5 transition-colors duration-200 cursor-pointer`}
              />
            }
          >
            <SearchModalData category={category} dictionary={dictionary} />
          </SearchModal>

          <NavbarModal
            lang={lang}
            side="right"
            title={
              <p
                className={`text-primary !hover:text-zinc-300 text-lg font-normal transition-colors duration-200`}
              >
                {/* {`${lang.toUpperCase()}`}  */}
                <Globe
                  width={24}
                  height={24}
                  className={`text-primary !hover:text-zinc-300 duration-200`}
                />
              </p>
            }
          >
            <ChangeLangModal
              currency={currency}
              lang={lang}
              languages={languages}
              county={county}
            />
          </NavbarModal>
          <Link href={"/like"}>
            <Heart
              width={24}
              height={24}
              className={`text-primary !hover:text-zinc-300 duration-200`}
            />
          </Link>
          <Link href={"/basket"}>
            <ShoppingCart
              width={24}
              height={24}
              className="text-primary !hover:text-zinc-300 duration-200"
            />
          </Link>
          <UserDropdown dictionary={dictionary} />
        </div>
      </div>
      <MobileNavbar
        lang={lang}
        languages={languages}
        county={county}
        currency={currency}
        // dictionary=
      />
    </nav>
  );
};
