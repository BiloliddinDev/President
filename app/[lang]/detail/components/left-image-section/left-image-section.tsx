import Image, {StaticImageData} from "next/image";

type MediaType = {
    type: "image" | "video";
    src: StaticImageData | string;
};

interface ImagesProps {
    imagesData: MediaType[];
}

export const LeftImagesSection = ({imagesData}: ImagesProps) => {
    const total = imagesData.length;

    return (
        <div className="flex flex-wrap w-1/2 overflow-scroll h-screen">
            {imagesData.map((item, index) => {
                let widthClass: string = "w-full";

                if (index === 0) {
                    widthClass = "w-full";
                } else if (total % 2 === 0 && index === total - 1) {
                    widthClass = "w-full";
                } else {
                    widthClass = "w-1/2";
                }

                return (
                    <div key={index} className={`${widthClass} p-[1px]`}>
                        {item.type === "image" ? (
                            <Image
                                src={item.src as StaticImageData}
                                alt={`media-${index}`}
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        ) : (
                            <video
                                src={item.src as string}
                                controls
                                className="w-full h-auto object-cover"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
