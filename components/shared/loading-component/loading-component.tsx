import Image from "next/image";
import Loading from "@/public/images/LoadingImage.png"

export const LoadingComponent = () => {
    return <div className={"w-full fixed top-0 left-0 right-0 z-100 h-screen bg-white flex justify-center items-center"}>
        <Image width={100} height={100} src={Loading.src} alt={"Loading Image"}/>
    </div>
}