import {FC} from "react";
import Image from "next/image";
import {CategoryCardType} from "@/interface/category-type/category-model";
import { CategoryDataType } from "@/app/[lang]/(home)/components/category";


export const CategoryCard: FC<{ category: CategoryCardType , lang : 'uz' | "ru" | "en" }> = ({category , lang}) => {
    return (
        <div className={`text-center cursor-pointer flex flex-col items-center bg-neutral-100 rounded-[4px] p-4`}>
            <Image className={"hover:object-center object-contain w-[300]  md:w-[340] h-[300]"} alt={category.text[lang]} width={340} height={300}
                   src={category.images.src}/>
            <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.text[lang]}</p>
        </div>
    )
}