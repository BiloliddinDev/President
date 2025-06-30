"use client";

import {FooterLogo} from "@/components/ui/logo";
import {navbarLinks} from "@/constants/navbar";

import Link from "next/link";
import NavbarModal from "@/components/shared/navbar-modal";
import ShopModalContent from "@/components/shared/modalContents/shopModal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import SearchModal from "@/components/shared/search-modal";
import SearchModalData from "@/components/shared/modalContents/searchModal";
import {Heart, Search, ShoppingCart, User} from "lucide-react";
import MobileNavbar from "./mobile-navbar";

export const Navbar = ({lang}: { lang: 'uz' | "ru" | "en" }) => {

    return (
        <nav
            className={`fixed top-0 l-0 w-full md:p-3 z-60 transition-colors duration-300 bg-neutral-100 shadow`}
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
                                    sheetTitle={link.name["en"]}
                                    lang={lang}
                                >
                                    {link.name.en === "Shop" ? (
                                        <ShopModalContent lang={lang}/>
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
                                {`${lang.toUpperCase()}($)`}
                            </p>
                        }
                    >
                        <ChangeLangModal/>
                    </NavbarModal>

                    <Link href={'/like'}>
                        <Heart width={24} height={24} className={`text-primary !hover:text-zinc-300 duration-200`}/>
                    </Link>
                    <Link href={"/basket"}>

                        <ShoppingCart width={24} height={24}
                                      className="text-primary !hover:text-zinc-300 duration-200"/>
                    </Link>
                    <Link href={"/auth/sign-in"}>
                        <User width={24} height={24} className="text-primary !hover:text-zinc-300 duration-200"/>

                    </Link>
                </div>
            </div>
            <MobileNavbar/>
        </nav>
    );
};