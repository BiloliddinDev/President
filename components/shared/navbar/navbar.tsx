"use client";

import { FooterLogo } from "@/components/ui/logo";
import { navbarLinks } from "@/constants/navbar";
import { Headroom } from "@/components/shared/headroom/Headroom";
import Link from "next/link";
import NavbarModal from "@/components/shared/navbar-modal";
import ShopModalContent from "@/components/shared/modalContents/shopModal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import IconComponent from "@/components/icon/icon-view";
import SearchModal from "@/components/shared/search-modal";
import SearchModalData from "@/components/shared/modalContents/searchModal";
import { SearchIcon } from "lucide-react";

export const Navbar = ({ lang }: { lang: string }) => {
  return (
    <Headroom>
      <nav className="fixed w-full p-5  z-50 ">
        <div className="container hidden md:flex justify-between ">
          <div className="flex  items-center gap-14">
            {navbarLinks.map((link) => (
              <div
                className={
                  " text-white text-sm font-medium leading-normal cursor-pointer"
                }
                key={link.id}
              >
                {link.name === "Shop" || link.name === "Discover" ? (
                  <NavbarModal
                    title={link.name}
                    side="left"
                    sheetTitle={link.name}
                  >
                    {link.name === "Shop" ? (
                      <ShopModalContent />
                    ) : (
                      <DiscoverModalContent />
                    )}
                  </NavbarModal>
                ) : (
                  link.name
                )}
              </div>
            ))}
          </div>
          <FooterLogo />
          <div className="flex items-center gap-8 ">
            <SearchModal
              side="top"
              title={
                <SearchIcon
                  className={"text-zinc-500 hover:text-zinc-600 mt-3"}
                />
              }
            >
              <SearchModalData />
            </SearchModal>
            <NavbarModal
              side="right"
              title={
                <p
                  className={
                    "text-zinc-500 hover:text-zinc-600 text-lg font-normal"
                  }
                >{`${lang.toUpperCase()}($)`}</p>
              }
            >
              <ChangeLangModal />
            </NavbarModal>
            <IconComponent
              name="like"
              width={24}
              height={24}
              classNames="text-zinc-500 hover:text-zinc-600 duration-200"
            />
            <IconComponent
              name="basket"
              width={24}
              height={24}
              classNames="text-zinc-500 hover:text-zinc-600 duration-200"
            />
            <Link href={"/auth/sign-in"}>
              <IconComponent
                name="profile"
                width={24}
                height={24}
                classNames="text-zinc-500 hover:text-zinc-600 duration-200"
              />
            </Link>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};
