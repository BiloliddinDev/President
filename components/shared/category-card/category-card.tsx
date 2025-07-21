import {FC} from "react";
import Image from "next/image";
// import {CategoryCardType} from "@/interface/category-type/category-model";
import { CategoryDataType } from "@/app/[lang]/(home)/components/category";


export const CategoryCard: FC<{ category: CategoryDataType , lang : 'uz' | "ru" | "en" }> = ({category , lang}) => {
    function getLangKey(lang: "uz" | "ru" | "en"): "UZ" | "RU" | "EN" {
        return lang.toUpperCase() as "UZ" | "RU" | "EN";
    }
    return (
        <>{category && category.mediaFiles && category.mediaFiles?.length>0 && <div className={`text-center cursor-pointer flex flex-col items-center bg-neutral-100 rounded-[4px] py-4`}>
        <Image className={"hover:object-center object-contain w-[300]  md:w-[340] h-[120] "} alt={category.nameMap?.EN} width={340} height={300}
                src={`http://admin.presidentgift.com${category?.mediaFiles[0]?.filePath}`}/>
         <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.nameMap[getLangKey(lang)]}</p>
     </div>}</>
    )    
}