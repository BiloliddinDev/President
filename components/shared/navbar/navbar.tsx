import { Logo } from "@/components/ui/logo";
import { navbarLinks } from "@/constants/navbar";
import Image from "next/image";
import Search from "@/public/Svg/search.svg";
import Heart from "@/public/Svg/heart.svg";
import Profile from "@/public/Svg/profile.svg";
import Basket from "@/public/Svg/basket.svg";
import Globe from "@/public/Svg/glob.svg";
import {Headroom} from "@/components/shared/headroom/Headroom";

export const Navbar = () => {
    return (
        <Headroom>
            <nav className="fixed w-full p-5 backdrop-blur-sm z-50 " >
                <div className="container flex justify-between ">  <Logo/>
                    <div className="flex  items-center gap-8">
                        {navbarLinks.map(link => (
                            <div className={" text-white text-sm font-medium  leading-normal cursor-pointer"} key={link.id}>{link.name}</div>
                        ))}
                    </div>
                    <div className="flex items-center gap-8">
                        <Image src={Search} alt="Search icon" />
                        <Image src={Heart} alt="Heart icon" />
                        <Image src={Profile} alt="Profile icon" />
                        <Image src={Basket} alt="Basket icon" />
                        <Image src={Globe} alt="Globe icon" />
                    </div></div>
            </nav>
        </Headroom>
       
    )
}