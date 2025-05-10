import Image from "next/image";
import Loading from "@/public/images/LoadingImage.png"

export const LoadingComponent = () => {
    return <div className={"w-full h-screen bg-white flex justify-center items-center"}>
        <Image width={100} height={100} src={Loading.src} alt={"Loading Image"}/>
        <p className="text-primary text-xl font-medium text-center leading-9">Loading...</p>
    </div>
}