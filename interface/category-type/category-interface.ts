export interface CategoryInterface {
    "id": number,
    "parentId": number,
    "name": string
    "description": string,
    "children": CategoryInterface[]
    "translation": [
        {
            "name": string
            "description": string
            "code": string
        }
    ],
    "mediaFiles": mediaFiles []

}

interface mediaFiles {
    id: number;
    fileName: string;
    originalFileName: string;
    filePath: string;
    metaData: {
        type: string;
        order: number;
        width: number | null;
        height: number | null;
    }
}

interface CategoryTranslation {
    name: string;
    description: string;
    code: "RU" | "EN" | "UZ";
}


export interface Category {
    id: number;
    parentId: number | null;
    name: string;
    description: string;
    translation: CategoryTranslation[];
    children: Category[] | null;
    mediaFiles: mediaFiles[];
}