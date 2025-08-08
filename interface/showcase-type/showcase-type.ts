import { MediaFile } from "@/app/[lang]/collections/type";

export interface ShowcaseProps {
    showcase: React.ReactNode | undefined;
    dictionary: {
        showcase: {
            title: string;
            description: string;
            button: string;
        };
    },
    lang: "uz" | "ru" | "en" | "az" | "tj"
}


export interface ShowcaseDataFrom {
    'collections.newArrival': string
    'news.newArrival': string
    'showcase.title': string
    'news.title': string
    'product.videos.title': string
    'showcase.description': string
    'navbar.changeLocale': string
    'showcase.button': string
    'collections.title': string,
    'category.title': string,
    'navbar.changeLanguage': string
    'product.image1':unknown
    'product.image2': unknown
    'product.image3': unknown
}



export interface MediaMetaData {
    type: string;
    order: number;
    width: number | null;
    height: number | null;
  }
  
  export type PreviewImage = MediaFile
  
  export interface ShowcaseItem {
    contentType: string; // e.g. "MEDIA"
    countryCode: string; // e.g. "UZ"
    createdAt: string; // ISO format
    info: string; // description
    key: string; // e.g. "showcase.image"
    languageContents: Record<string, never>; // bo'sh object
    mediaFiles: MediaFile[];
    order: number;
    previewImage: PreviewImage;
    updatedAt: string;
  }
  