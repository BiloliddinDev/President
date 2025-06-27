import {FC} from "react";
import {CollectionType} from "@/interface/collection-type/collection-type";
import Image from "next/image";


export const CollectionCard: FC<{ newsItem: CollectionType, lang: 'uz' | 'ru' | 'en' }> = ({newsItem, lang}) => {
    return (
        <div className={"w-48"}>
            <Image src={newsItem.image.src} alt={newsItem.title[lang]} width={300} height={300}
                   className={'w-[300] h-[300] object-contain'}/>
            <p className={" mt-11 text-primary text-sm font-normal"}>{newsItem.title[lang]}</p>
            <p className={"text-gray-600 mt-9 text-sm font-normal"}>{newsItem.price}</p>
        </div>
    )
}