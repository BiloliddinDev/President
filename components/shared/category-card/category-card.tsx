import {FC} from "react";
import Image from "next/image";
import {CategoryCardType} from "@/interface/category-type/category-model";


export const CategoryCard: FC<{ category: CategoryCardType }> = ({category}) => {
    return (
        <div className={`text-center cursor-pointer flex flex-col items-center`}>
            <Image className={"hover:object-cover object-fill"} width={300} height={300}  src={category.images.src}
                   alt={category.text}/>
            <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.text}</p>
        </div>
    )
}