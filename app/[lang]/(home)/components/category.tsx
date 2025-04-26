import {CategoryCard} from "@/components/shared/category-card/category-card";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {categoryItem} from "@/constants/category-item";
import {FC} from "react";

export const Category: FC = () => {
    return (
        <div className={"container"}>
            <SectionTitle text={"Categories"}/>
            <div className={"grid mt-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                {categoryItem.map((category) => (
                    <CategoryCard key={category.id} category={category}/>
                ))}
            </div>
        </div>
    )
}