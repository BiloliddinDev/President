import Image from "next/image";
import {Heart} from "lucide-react";

interface ProductsCardProps {
    image: string;
    text: string;
    price: number;
    like: boolean;
    isNewArrival: boolean;
}

export const ProductsCard = ({image, text, price, like, isNewArrival}: ProductsCardProps) => {
    return (
        <div
            className="group relative flex flex-col rounded-lg border p-4 shadow-sm transition hover:shadow-md bg-white">
            <button className="absolute right-3 top-3 text-gray-500 hover:text-red-500 transition">
                <Heart
                    className={`w-5 h-5 ${like ? "fill-red-500 text-red-500" : ""}`}
                />
            </button>
            <div className="relative w-full pt-[100%] mb-4">
                <Image
                    src={image}
                    alt={text}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>

            {isNewArrival && (
                <span className="mb-2 w-fit rounded border px-2 py-0.5 text-xs font-medium text-gray-700">
          New Arrival
        </span>
            )}
            <h3 className="text-sm font-medium text-gray-900">{text}</h3>
            <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        </div>
    );
};
