import Image, {StaticImageData} from "next/image";
import {Button} from "@/components/ui/button";
import {Heart, Trash} from "lucide-react";

interface FavoriteCardProps {
    image: StaticImageData;
    text: string;
}

export default function FavoriteCard({image, text}: FavoriteCardProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="relative">
                <div className="rounded overflow-hidden">
                    <Image
                        src={image}
                        alt={text}
                        width={256}
                        height={320}
                        className="w-full h-80 object-cover"
                    />
                    <Heart className="absolute top-0 right-0 cursor-pointer"/>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg text-gray-900 font-inter">{text}</h3>
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant={"secondary"}>Add to cart</Button>
                <Button variant={"secondary"} className={" p-0 flex items-center justify-center"}>
                    <Trash/>
                </Button>
            </div>
        </div>
    );
}