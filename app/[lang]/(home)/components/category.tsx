import { CategoryCard } from "@/components/shared/category-card/category-card";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { categoryItem } from "@/constants/category-item";
import { CategoryService } from "@/service/home-service/category.service";
import { FC } from "react";

interface CategoryProps {
    dictionary: {
        category: {
            title: string;
        };
    };
    lang: "uz" | "ru" | "en";
}
interface Translation {
    name: string
    description: string
    code: string
  }

export interface CategoryDataType {
    id: number
    parentId: number | null
    children: CategoryDataType[] | null
    nameMap: {
      RU: string
      UZ: string
      EN: string
    }
    descriptionMap: {
      EN: string
      RU: string
      UZ: string
    }
    translation: Translation[]
    mediaFiles: string[]
  }

export async function Category({ dictionary, lang }:CategoryProps){
    
    const CategoryData:CategoryDataType[] = await CategoryService()  as CategoryDataType[]
    
    console.log("category",CategoryData)

    return (
        <div className="container">
            <SectionTitle text={dictionary.category.title} />
            <div className="grid mt-5 md:mt-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {categoryItem.map((category) => (
                    <CategoryCard 
                        key={category.id} 
                        category={category} 
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    );
};