import Image, {StaticImageData} from "next/image";

export default function RightImage({ image}: {
    // backgroundImage: StaticImageData,
    image: StaticImageData
}) {
    return (
        <div className={"relative"}>
            <Image src={image.src} alt={"b2b background image "} width={500} height={500}
                   className={'relative'}/>
            <div className={"absolute bottom-[80px]  right-[120px] transform -translate-x-1/2 -translate-y-1/2"}>
                {/* <Image src={image.src} alt={"b2b image"} width={40} height={40}/> */}
            </div>
        </div>
    )
}