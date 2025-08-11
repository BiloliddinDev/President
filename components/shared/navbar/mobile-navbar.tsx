"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomTabs from "../tabs/custom-tabs";
import { FooterLogo } from "@/components/ui/logo";
import IconComponent from "@/components/icon/icon-view";

import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import ShopModalContent from "../modalContents/shopModal";
import { getCategoryModal } from "@/service/home-service/category-mobile.service";
import { Category } from "@/interface/category-type/category-interface";
import { CurrencyType } from "@/interface/currency-type/currency-type";

const MobileNavbar = ({
  lang,
  languages,
  county,
  currency,
}: {
  lang: "uz" | "ru" | "en" ;
  languages: any[];
  county: any[];
  currency: CurrencyType[] | undefined;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data: Category[] = (await getCategoryModal()) as Category[];
      setCategory(data);
    };
    fetchCategory().catch(console.error);
  }, []);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

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
        <FooterLogo />
        <IconComponent onClick={handleOpen} name={open ? "close" : "burger"} />
      </div>

      {open && (
        <div className="mt-4 space-y-6">
          <CustomTabs
            identifier="min-w-[168px]"
            tabs={[
              {
                value: "shops",
                label: {
                  "uz": "Do‘konlar",
                  "en": "Shops",
                  "ru": "Магазины",
                  "tj": "Дӯконҳо",
                  "az": "Mağazalar"
                },
                content: (
                  <ShopModalContent
                    lang={lang}
                    category={category}
                    onItemClick={handleClose}
                  />
                ),
              },
              {
                value: "discover",
                label: {
                  "uz": "Kashf etish",
                  "en": "Discover",
                  "ru": "Узнать больше",
                  "tj": "Кашф кардан",
                  "az": "Kəşf et"
                },
                content: (
                  <DiscoverModalContent lang={lang} onItemClick={handleClose} />
                ),
              },
            ]}
            lang={lang}
          />
          <ChangeLangModal
            lang={lang}
            languages={languages}
            county={county}
            currency={currency}
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
