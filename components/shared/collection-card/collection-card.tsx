import {FC} from "react";
import {CollectionType} from "@/interface/collection-type/collection-type";
import Image from "next/image";


export const CollectionCard: FC<{ newsItem: CollectionType }> = ({newsItem}) => {
    return (
        <div className={"w-48"}>
            <Image src={newsItem.image} alt={newsItem.title} width={300} height={300}/>
            <p className={" mt-11 text-primary text-sm font-normal"}>{newsItem.title}</p>
            <p className={"text-gray-600 mt-9 text-sm font-normal"}>{newsItem.price}</p>
        </div>
    )
}