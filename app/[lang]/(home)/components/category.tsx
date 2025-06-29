import { CategoryCard } from "@/components/shared/category-card/category-card";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { categoryItem } from "@/constants/category-item";
import { FC } from "react";

interface CategoryProps {
    dictionary: {
        category: {
            title: string;
        };
    };
    lang: "uz" | "ru" | "en";
}

export const Category: FC<CategoryProps> = ({ dictionary, lang }) => {
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