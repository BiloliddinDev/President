import Image, {StaticImageData} from "next/image";

type MediaType = {
    type: "image" | "video";
    src: StaticImageData | string;
};

interface Props {
    mediaData: MediaType[];
}

export const LeftImagesSection = ({mediaData}: Props) => {
    const video = mediaData.find((item) => item.type === "video");
    const images = mediaData.filter((item) => item.type === "image");

    const allItems: MediaType[] = video ? [video, ...images] : images;
    const total = allItems.length;

    return (
        <div className="flex flex-wrap w-1/2 overflow-scroll h-[1000px]">
            {allItems.map((item, index) => {
                let widthClass = "w-1/2";

                if (total % 2 === 0) {
                    if (index === 0 || index === total - 1) widthClass = "w-full";
                } else {
                    if (index === 0) widthClass = "w-full";
                }

                return (
                    <div key={index} className={`${widthClass} p-[1px]`}>
                        {item.type === "image" ? (
                            <Image
                                src={item.src as StaticImageData}
                                alt={`image-${index}`}
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover bg-neutral-100 rounded-[4px]"
                            />
                        ) : (
                            <video
                                src={item.src as string}
                                controls
                                className="w-full h-auto object-cover bg-neutral-100 rounded-[4px]"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
