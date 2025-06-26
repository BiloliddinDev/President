import {FC} from "react";
import Image from "next/image";
import {CategoryCardType} from "@/interface/category-type/category-model";


export const CategoryCard: FC<{ category: CategoryCardType }> = ({category}) => {
    return (
        <div className={`text-center cursor-pointer flex flex-col items-center bg-neutral-100 rounded-[4px] p-4`}>
            <Image className={"hover:object-center object-contain w-[300] h-[300]"} alt={category.text} width={300} height={300}
                   src={category.images.src}/>
            <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.text}</p>
        </div>
    )
}