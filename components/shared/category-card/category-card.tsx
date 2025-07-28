import { CategoryInterface } from "@/interface/category-type/category-interface";
import Image from "next/image";
import { FC } from "react";

export const CategoryCard: FC<{
    category: CategoryInterface;
    lang: "uz" | "ru" | "en" | "tj" | "az";
}> = ({category}) => {
    return (
        <div className="cursor-pointer flex flex-col items-center">
            <div className="bg-neutral-100 rounded-[4px] p-4 w-full flex items-center justify-center">
                <div className="relative w-[340px] md:h-[220px] h-[160px]  overflow-hidden">
                    <Image
                        alt={category.name}
                        src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${category?.mediaFiles[0]?.filePath}`}
                        fill
                        className="md:object-cover object-contain transition-transform duration-300 hover:scale-105 rounded"
                    />
                </div>
            </div>

            <p className="text-center text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]">
                {category.name}
            </p>
        </div>
    );
};
