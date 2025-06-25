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
import { Dot, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile-navbar";

export const Navbar = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navClasses = isHome
    ? scrolled
      ? "bg-white shadow"
      : "bg-white"
    : "bg-white shadow";

  const textColorClass =
    isHome && !scrolled ? "!text-primary" : "!text-primary";
  const hoverTextColorClass =
    isHome && !scrolled ? "!hover:text-zinc-300" : "!hover:text-zinc-600";

  return (
    <Headroom>
      <nav
        className={`fixed w-full md:p-5 z-50 transition-colors duration-300  ${navClasses} `}
      >
        <div className="container hidden md:flex justify-between items-center">
          <div className="flex items-center gap-14">
            {navbarLinks.map((link) => (
              <div
                key={link.id}
                className={`${textColorClass} ${hoverTextColorClass}  text-sm font-medium leading-normal cursor-pointer transition-colors duration-300 flex group `}
              >
                <Dot className="text-white  opacity-0 group-hover:opacity-100 transition-opacity" />

                {["Shop", "Discover"].includes(link.name) ? (
                  <NavbarModal
                    title={link.name}
                    side="left"
                    sheetTitle={link.name}
                    textColorClass={textColorClass}
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

          <div className="flex items-center gap-8">
            <SearchModal
              side="top"
              title={
                <SearchIcon
                  className={`${textColorClass} ${hoverTextColorClass} mt-3 transition-colors duration-200`}
                />
              }
            >
              <SearchModalData />
            </SearchModal>

            <NavbarModal
              side="right"
              title={
                <p
                  className={`${textColorClass} ${hoverTextColorClass} text-lg font-normal transition-colors duration-200`}
                >
                  {`${lang.toUpperCase()}($)`}
                </p>
              }
            >
              <ChangeLangModal />
            </NavbarModal>

            <Link href={"/like"}>
              <IconComponent
                name="like"
                width={24}
                height={24}
                classNames={`${textColorClass} ${hoverTextColorClass} duration-200`}
              />
            </Link>
            <Link href={"/basket"}>
              <IconComponent
                name="basket"
                width={24}
                height={24}
                classNames={`${textColorClass} ${hoverTextColorClass} duration-200`}
              />
            </Link>
            <Link href={"/auth/sign-in"}>
              <IconComponent
                name="profile"
                width={24}
                height={24}
                classNames={`${textColorClass} ${hoverTextColorClass} duration-200`}
              />
            </Link>
          </div>
        </div>
        <MobileNavbar />
      </nav>
    </Headroom>
  );
};
