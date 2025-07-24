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
    products:ProductsInterface[]; // You can define a Product interface if needed
    isMainPage: boolean;
    country: Country;
    mediaFiles: MediaFile[];
    translations: Translation[];
  }
  


  export interface ProductTranslation {
    name: string;
    description: string;
    code: "UZ" | "RU" | "EN";
  }
  
  export interface Currency {
    code: string;
    name: string;
    symbol: string;
    price: number;
    defaultCurrency: boolean;
  }
  
  export interface Price {
    currency: Currency;
    price: number;
  }
  
  export interface ProductCountry {
    name: string;
    code: string;
  }
  
  export interface ProductMeta {
    id: number;
    favorite: boolean;
    ware_house_count: number;
    _new_product: boolean;
    _frontal_page: boolean;
  }
  
  export interface ProductMediaMetaData {
    type: string;
    order: number;
    width: number | null;
    height: number | null;
  }
  
  export interface ProductMedia {
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
    metaData: ProductMediaMetaData;
    ownerType: string;
    ownerId: number;
    accessLevel: string;
    image: boolean;
    video: boolean;
  }
  
  // export interface ProductsInterface {
  //   id: number;
  //   sku: string;
  //   name: string;
  //   description: string;
  //   basePriceToUSD: number;
  //   country: ProductCountry;
  //   categories: any; // agar kerak bo‘lsa categories interfeysini ham alohida yozamiz
  //   prices: Price[];
  //   translations: ProductTranslation[];
  //   meta: ProductMeta;
  //   media: ProductMedia[];
  //   createdAt: string | null;
  //   updatedAt: string | null;
  // }
  