import {CategoryCard} from "@/components/shared/category-card/category-card";
import {SectionTitle} from "@/components/ui/sectionTitle";
// import { categoryItem } from "@/constants/category-item";
import {CategoryService} from "@/service/home-service/category.service";
// import { Languages } from "lucide-react";
import Link from "next/link";
import {CategoryInterface} from "@/interface/category-type/category-interface";

// import { FC } from "react";

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
    code: "UZ" | "RU" | "EN"
}

type MediaUsageType = "IMAGE_CONTENT" | "VIDEO_CONTENT" | "DOCUMENT_CONTENT";
type MediaType = "IMAGE" | "VIDEO" | "DOCUMENT";
type AccessLevel = "PUBLIC" | "PRIVATE";

export interface MediaFile {
    id: string;
    accessLevel: AccessLevel;
    contentType: string;
    fileName: string;
    originalFileName: string;
    filePath: string;
    fileSize: number;
    image: boolean;
    video: boolean;
    mediaType: MediaType;
    mediaUsageType: MediaUsageType;
    metaData: {
        height: number | null;
        width: number | null;
        order: number;
        type: string;
    };
    ownerId: number;
    ownerType: "CATEGORY" | "PRODUCT" | string;
    uploadedAt: string;
    updatedAt: string;
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
    mediaFiles: MediaFile[]
}


export async function Category({dictionary, lang}: CategoryProps) {

    const CategoryData: CategoryInterface[] = await CategoryService() as CategoryInterface[]


    return (
        <div className="container">
            <SectionTitle text={dictionary.category.title}/>
            <div className="grid mt-5 md:mt-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {CategoryData.map((category) => (
                    <Link
                        key={category.id}
                        href={`/shops/${category.id}`}
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