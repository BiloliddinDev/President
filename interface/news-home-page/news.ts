export interface CountryDto {
    id: number;
    name: string;
    code: string;
    defaultCountry: boolean;
  }
  
  export interface MediaMetaData {
    type: string;
    order: number;
    width: number | null;
    height: number | null;
  }
  
  export interface MediaFile {
    accessLevel: string;
    contentType: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    id: string;
    image: boolean;
    mediaType: string;
    mediaUsageType: string;
    metaData: MediaMetaData;
    originalFileName: string;
    ownerId: number;
    ownerType: string;
    pendingUpload: null;
    updatedAt: string;
    uploadedAt: string;
    video: boolean;
  }
  
  export interface Translation {
    id: number;
    title: string;
    description: string;
    language: string;
    image?: MediaFile;
  }
  
  export interface NewsItemInterface {
    id: number;
    countryDto: CountryDto;
    description: string;
    image: MediaFile;
    image_page: MediaFile | null;
    instagramLink: string;
    showCount: number;
    title: string;
    translations: Translation[];
  }
  