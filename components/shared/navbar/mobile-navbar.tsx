"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomTabs from "../tabs/custom-tabs";
import { FooterLogo } from "@/components/ui/logo";
import IconComponent from "@/components/icon/icon-view";
import SearchModalData from "@/components/shared/modalContents/searchModal";
import { Input } from "@/components/ui/input";

import ShopModalContent from "@/components/shared/modalContents/shopModal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import { SearchIcon } from "lucide-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchInputOpen, setSearchInputOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const handleOpen = () => setOpen(!open);
  // Hide menu on outside click
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
    <div className="bg-white p-5 md:hidden w-screen " ref={mobileMenuRef}>
      <div className="flex justify-between items-center">
        <FooterLogo />
        <IconComponent onClick={handleOpen} name={open ? "close" : "burger"} />
      </div>

      <div>
        <div className="relative w-full mt-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 w-full outline-0 rounded-none border-0 border-b border-gray-400"
            onFocus={() => setSearchInputOpen(true)}
            onBlur={() => setTimeout(() => setSearchInputOpen(false), 150)}
          />
        </div>

        <div suppressHydrationWarning>
          {searchInputOpen && <SearchModalData />}
        </div>
      </div>

      {open && (
        <div className="mt-4 space-y-6">
          <CustomTabs
            tabtriggerClasses="min-w-[168px]"
            tabs={[
              {
                value: "shops",
                label: "Shops",
                content: <ShopModalContent />,
              },
              {
                value: "discover",
                label: "Discover",
                content: <DiscoverModalContent />,
              },
            ]}
          />
          <ChangeLangModal />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
