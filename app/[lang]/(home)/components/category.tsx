import {CategoryCard} from "@/components/shared/category-card/category-card";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {CategoryService} from "@/service/home-service/category.service";
import Link from "next/link";
import {CategoryInterface} from "@/interface/category-type/category-interface";


interface CategoryProps {
    dictionary: {
        category: {
            title: string;
        };
    };
    lang: "uz" | "ru" | "en" | 'tj' | 'az'
}

export async function Category({dictionary, lang}: CategoryProps) {
    const CategoryData: CategoryInterface[] = await CategoryService() as CategoryInterface[]


    return (
        <div className="container">
            <SectionTitle text={dictionary.category.title}/>
            <div className="grid mt-5 md:mt-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {CategoryData?.map((category, index) => (
                    <Link
                    className="aos-init"
                        data-aos="fade-left" 
                        data-aos-delay={`${index * 300}`}
                        key={category.id}
                        href={`/shops/${category.name}id${category.id}`}
                    > <CategoryCard
                        key={category.id}
                        category={category}
                        lang={lang}
                    /></Link>
                ))}
            </div>
        </div>
    );
};
