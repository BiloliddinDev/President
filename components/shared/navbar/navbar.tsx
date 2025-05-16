"use client"

import {Logo} from "@/components/ui/logo";
import {navbarLinks} from "@/constants/navbar";
import {Headroom} from "@/components/shared/headroom/Headroom";
import Link from "next/link";
import NavbarModal from "@/components/shared/navbar-modal";
import ShopModalContent from "@/components/shared/modalContents/shopModal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";
import SearchModal from "../modalContents/searchModal";
import SearchIcon from "@/components/icon/search-icon";
import {Profile} from "@/components/shared/profile";
import IconComponent from "@/components/shared/icon-view";

export const Navbar = () => {
    return (
        <Headroom>
            <nav className="fixed w-full p-5  z-50">
                <div className="container flex justify-between ">
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
                                            <ShopModalContent/>
                                        ) : (
                                            <DiscoverModalContent/>
                                        )}
                                    </NavbarModal>
                                ) : (
                                    link.name
                                )}
                            </div>
                        ))}
                    </div>
                    <Logo/>
                    <div className="flex items-center gap-8">
                        <NavbarModal
                            side="top"
                            title={<SearchIcon/>}
                        >
                            <SearchModal/>
                        </NavbarModal>
                        <NavbarModal
                            side="right"
                            title={<p className={"text-white text-lg font-normal"}>UZ($)</p>}
                        >
                            <ChangeLangModal/>
                        </NavbarModal>
                        <IconComponent className={"hover:text-primary"} name="like"/>
                        <IconComponent className={"hover:text-primary"} name="basket"/>
                        <Link href={"/auth/sign-in"}>
                            <Profile/>
                        </Link>
                    </div>
                </div>
            </nav>
        </Headroom>
    );
};