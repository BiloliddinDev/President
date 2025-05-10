import { Logo } from "@/components/ui/logo";
import { navbarLinks } from "@/constants/navbar";
import Image from "next/image";
import Search from "@/public/svg/search.svg";
import Heart from "@/public/svg/heart.svg";
import Profile from "@/public/svg/profile.svg";
import Basket from "@/public/svg/basket.svg";
import Globe from "@/public/svg/glob.svg";
import { Headroom } from "@/components/shared/headroom/Headroom";
import Link from "next/link";
import NavbarModal from "../navbar-modal";
import ShopModalContent from "@/components/shared/modalContents/shopModal";
import DiscoverModalContent from "../modalContents/discoverModal";
import ChangeLangModal from "../modalContents/changeLangModal";

export const Navbar = () => {
  return (
    <Headroom>
      <nav className="fixed w-full p-5 backdrop-blur-sm z-50">
        <div className="container flex justify-between ">
          <Logo />
          <div className="flex  items-center gap-8">
            {navbarLinks.map((link) => (
              <div
                className={
                  " text-white text-sm font-medium  leading-normal cursor-pointer"
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
          <div className="flex items-center gap-8">
            <Image src={Search} alt="Search icon" />
            <Image src={Heart} alt="Heart icon" />
            <Link href={"/auth/sign-in"}>
              <Image src={Profile} alt="Profile icon" />
            </Link>
            <Image src={Basket} alt="Basket icon" />

            <NavbarModal
              side="right"
              title={<Image src={Globe} alt="Globe icon" />}
            >
              <ChangeLangModal />
            </NavbarModal>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};
