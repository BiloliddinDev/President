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
                {link.name}
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
            <Image src={Globe} alt="Globe icon" />
          </div>
        </div>
      </nav>
    </Headroom>
  );
};
