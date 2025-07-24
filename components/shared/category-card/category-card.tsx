// import {FC} from "react";
// import Image from "next/image";
// import {CategoryInterface} from "@/interface/category-type/category-interface";


// export const CategoryCard: FC<{
//     category: CategoryInterface,
//     lang: 'uz' | "ru" | "en" | "tj" | 'az'
// }> = ({category,}) => {

//     return (
//         <>{
//             <div className={`text-center cursor-pointer flex flex-col items-center bg-neutral-100 rounded-[4px] py-4`}>
//                 <Image className={"hover:object-center object-contain w-[300]  md:w-[340] h-[120] "} alt={category.name}
//                        width={340} height={300}
//                        src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${category?.mediaFiles[0]?.filePath}`}/>
//                 <p className={"text-center justify-start text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]"}>{category.name}</p>
//             </div>}</>
//     )
// }
import { FC } from "react";
import Image from "next/image";
import { CategoryInterface } from "@/interface/category-type/category-interface";

export const CategoryCard: FC<{
  category: CategoryInterface;
  lang: "uz" | "ru" | "en" | "tj" | "az";
}> = ({ category }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      {/* Image block with gray background */}
      <div className="bg-neutral-100 rounded-[4px] p-4 w-full flex items-center justify-center">
        <div className="relative w-[340px] h-[220px] overflow-hidden">
          <Image
            alt={category.name}
            src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${category?.mediaFiles[0]?.filePath}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105 rounded"
          />
        </div>
      </div>

      {/* Text below the image */}
      <p className="text-center text-primary text-sm font-normal capitalize leading-tight tracking-wide mt-[10px]">
        {category.name}
      </p>
    </div>
  );
};
