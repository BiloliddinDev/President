import { ProductsInterface } from "@/interface/products-interface/products-interface";

export interface MediaFile {
    id: string;
    fileName: string;
    originalFileName: string;
    filePath: string;
    fileSize: number;
    pendingUpload: null;
    contentType: string;
    mediaType: string;
    mediaUsageType: string;
    uploadedAt: string;
    updatedAt: string;
    metaData: {
      type: string;
      order: number;
      width: number | null;
      height: number | null;
    };
    ownerType: string;
    ownerId: number;
    accessLevel: string;
    image: boolean;
    video: boolean;
  }
  
  export interface Translation {
    name: string;
    description: string;
    code: "UZ" | "RU" | "EN";
  }
  
  export interface Country {
    name: string;
    code: string;
  }

  export interface CollectionResponse {
    id: number;
    name: string;
    description: string;
    products:ProductsInterface[];
    is_main_page: boolean;
    country: Country;
    mediaFiles: MediaFile[];
    translations: Translation[];
  }
  

