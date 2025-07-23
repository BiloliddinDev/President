import {FC} from "react";
import Image from "next/image";
import {CategoryInterface} from "@/interface/category-type/category-interface";


export const CategoryCard: FC<{ category: CategoryInterface, lang: 'uz' | "ru" | "en" }> = ({category,}) => {

    return (
        <>{
            <div className={`text-center cursor-pointer flex flex-col items-center bg-neutral-100 rounded-[4px] py-4`}>
                <Image className={"hover:object-center object-contain w-[300]  md:w-[340] h-[120] "}
                       alt={category.name} width={340} height={300}
                       src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${category.mediaFiles[0]?.filePath}`}/>
                <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.name}</p>
            </div>}</>
    )
}