
import Link from "next/link";
import  Icon from  "@/assets/icons/favicon.svg"
import Image from "next/image";

export  const  Logo = () => {
    return(
        <Link href={"/"} className="flex items-center gap-[12px] text-primary text-xl font-extrabold  capitalize">
            <Image src={Icon} alt={"President Business Gifts"}/>
            President Business Gifts
        </Link>
    )
}