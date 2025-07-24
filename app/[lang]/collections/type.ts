import { ProductDto } from "@/constants/summer-collections-items";
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
    id: string;
    name: string;
    description: string;
    products: ProductsInterface[] | ProductDto[]; // You can define a Product interface if needed
    isMainPage: boolean;
    country: Country;
    mediaFiles: MediaFile[];
    translations: Translation[];
  }
  