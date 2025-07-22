import img11 from "@/public/images/summer-coll-president-series1.png";
import img12 from "@/public/images/summer-coll-president-series2.png";
import img13 from "@/public/images/summer-coll-president-series3.png";
import img21 from "@/public/images/summer-coll-trend-ledger1.png";
import img22 from "@/public/images/summer-coll-trend-ledger2.png";
import img23 from "@/public/images/summer-coll-trend-ledger3.png";
import img24 from "@/public/images/summer-coll-trend-ledger4.png";
import img31 from "@/public/images/summer-coll-meeting-folder1.png";
import img32 from "@/public/images/summer-coll-meeting-folder2.png";
import img33 from "@/public/images/summer-coll-meeting-folder3.png";
import img34 from "@/public/images/summer-coll-meeting-folder4.png";
import img35 from "@/public/images/summer-coll-meeting-folder5.png";
import img41 from "@/public/images/summer-coll-classic1.png";
import img42 from "@/public/images/summer-coll-classic2.png";
import img43 from "@/public/images/summer-coll-classic3.png";
import img44 from "@/public/images/summer-coll-classic4.png";



type LanguageDto = {
    id: number;
    code: string;
    active: boolean;
    name: string;
    defaultLanguage: boolean;
    countryDto: CountryDto | null;
  };
  
  type CountryDto = {
    id: number;
    name: string;
    code: string;
    defaultCountry: boolean;
  };
  
  type CollectionTranslationDto = {
    id: number;
    name: string;
    description: string;
    languageDto: LanguageDto;
  };
  
  type ProductMetaDto = {
    id: number | null;
    favorite: boolean;
    ware_house_count: number | null;
    _new_product: boolean;
    _frontal_page: boolean;
  };
  
  type ProductTranslationDto = {
    id: number;
    productId: number | null;
    languageDto: LanguageDto;
    name: string;
    description: string;
  };
  
  export type ProductDto = {
    id: number;
    sku: string;
    basePriceToUSD: number;
    categoriesDto: any[]; // You can define this more precisely if you know the structure
    countryDto: CountryDto;
    createdAt: string | null;
    updatedAt: string | null;
    mediaFileDto: any[]; // Define the media structure if needed
    productMetaDto: ProductMetaDto;
    productPricesDto: any[]; // Define if available
    translationsDto: ProductTranslationDto[];
    translationsNameAsMap: Record<string, string>; // EN, RU, UZ
    translationsDescriptionAsMap: Record<string, string>; // EN, RU, UZ
  };
  
  export type CollectionDto = {
    id: number;
    isMainPage: boolean;
    countryDto: CountryDto;
    nameTranslationsAsMap: Record<string, string>; // EN, RU, UZ
    descriptionTranslationsAsMap: Record<string, string>; // EN, RU, UZ
    collectionTranslationDto: CollectionTranslationDto[];
    mediaFileDto: any; // define if needed
    products: ProductDto[];
  };
  




export const summerCollectionsItems:CollectionDto[] = [
    {
        id:1,
        isMainPage:true,
        countryDto:{
            id: 2,
            name: "Uzbekistan",
            code: "UZ",
            defaultCountry: false
        },
        nameTranslationsAsMap:{
            EN: "Summer collection",
            RU: "Летняя коллекция",
            UZ: "Yozgi kolleksiya"
          },
          descriptionTranslationsAsMap:{
            EN: "Summer collection",
            RU: "Летняя коллекция",
            UZ: "Yozgi kolleksiya"
          }, 
          collectionTranslationDto: [
            {
              id: 9,
              name: "Yozgi kolleksiya",
              description: "Yozgi kolleksiya",
              languageDto: {
                id: 3,
                name: "O'zbek tili",
                code: "UZ",
                active: true,
                defaultLanguage: true,
                countryDto: null
              }
            },
            {
              id: 7,
              name: "Летняя коллекция",
              description: "Летняя коллекция",
              languageDto: {
                id: 4,
                name: "Rus tili",
                code: "RU",
                active: true,
                defaultLanguage: false,
                countryDto: null
              }
            },
            {
              id: 8,
              name: "Summer collection",
              description: "Summer collection",
              languageDto: {
                id: 2,
                name: "Ingliz tili",
                code: "EN",
                active: true,
                defaultLanguage: false,
                countryDto: null
              }
            }
          ],
          mediaFileDto:[{pathUrl:""}] ,
          products:[
             // PresidentSeries
             {
              id: 8,
              sku: "PresidentSeries",
              basePriceToUSD: 385,
              categoriesDto: [],// You can define this more precisely if you know the structure
              countryDto:{
                  id: 2,
                  name: "Uzbekistan",
                  code: "UZ",
                  defaultCountry: false
              },
              createdAt:  null,
              updatedAt:  null,
              mediaFileDto: [ 
                {pathUrl:img13.src},
                  {pathUrl:img12.src},
                  {pathUrl:img11.src},
                ] ,// Define the media structure if needed
              productMetaDto: { id: 10000,
                  favorite: true,
                  ware_house_count: 100,
                  _new_product: true,
                  _frontal_page: true,
              },
              productPricesDto:[], // Define if available
              translationsDto:  [
                  {
                    id: 12,
                    name: '"President" Series',
                    description:
                      `"President" Series`,
                    productId: null,
                    languageDto: {
                      id: 2,
                      name: "Ingliz tili",
                      code: "EN",
                      active: true,
                      defaultLanguage: false,
                      countryDto: null
                    }
                  },
                  {
                    id: 11,
                    name: 'Серия "President"',
                    description:
                      `Серия "President"`,
                    productId: null,
                    languageDto: {
                      id: 3,
                      name: "Rus tili",
                      code: "RU",
                      active: true,
                      defaultLanguage: true,
                      countryDto: null
                    }
                  },
                  {
                    id: 13,
                    name: '"President" turkumi',
                    description:
                      `"President" turkumi`,
                    productId: null,
                    languageDto: {
                      id: 4,
                      name: "O'zbek tili",
                      code: "UZ",
                      active: true,
                      defaultLanguage: false,
                      countryDto: null
                    }
                  }
                ],                  
              translationsNameAsMap: {
                  EN: '"President" Series',
                  RU: 'Серия "President"',
                  UZ: '"President" turkumi',
                }, // EN, RU, UZ
              translationsDescriptionAsMap: {
                  EN: '"President" Series',
                  RU: 'Серия "President"',
                  UZ: '"President" turkumi',
                }
          },
            // meetingFolder
            {
                id: 5,
                sku: "meetingFolder",
                basePriceToUSD: 140,
                categoriesDto: [],// You can define this more precisely if you know the structure
                countryDto:{
                    id: 2,
                    name: "Uzbekistan",
                    code: "UZ",
                    defaultCountry: false
                },
                createdAt:  null,
                updatedAt:  null,
                mediaFileDto: [
                    {pathUrl:img31.src},
                    {pathUrl:img32.src},
                    {pathUrl:img33.src},
                    {pathUrl:img34.src},
                    {pathUrl:img35.src},
                ] ,// Define the media structure if needed
                productMetaDto: { id: 10,
                    favorite: true,
                    ware_house_count: 100,
                    _new_product: true,
                    _frontal_page: true,
                },
                productPricesDto:[], // Define if available
                translationsDto:  [
                    {
                      id: 12,
                      name: '"Meeting" Document Folder',
                      description:
                        "Summer Document Folder: Your Perfect Companion for a Summer Business Getaway\nDiscover the Summer document folder — the epitome of status and functionality, designed for those who appreciate excellence even far from the office. This folder, embodying the spirit of a summer business retreat abroad, is an essential accessory that highlights your refined taste and professionalism.",
                      productId: null,
                      languageDto: {
                        id: 2,
                        name: "Ingliz tili",
                        code: "EN",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    },
                    {
                      id: 11,
                      name: '"Meeting" hujjatlar papkasi',
                      description:
                        "Summer hujjatlar papkasi: Yozgi biznes-ta’tilingizdagi eng yaxshi hamrohingiz\nSummer hujjatlar papkasini kashf eting — bu ofisdan uzoqda ham mukammallikni qadrlaydiganlar uchun maqom va funksionallik timsolidir. U xorijdagi yozgi biznes-ta’tilining ruhini o‘zida mujassam etgan bo‘lib, nafis didingiz va professionalligingizni namoyon etuvchi ajralmas aksessuaringizga aylanadi.\n",
                      productId: null,
                      languageDto: {
                        id: 3,
                        name: "O'zbek tili",
                        code: "UZ",
                        active: true,
                        defaultLanguage: true,
                        countryDto: null
                      }
                    },
                    {
                      id: 13,
                      name: 'Папка для документов "Meeting"',
                      description:
                        "Папка для документов Summer: Ваш идеальный спутник для летнего бизнес-отдыха\nОткройте для себя папку для документов Summer — квинтэссенцию статуса и функциональности, созданную для тех, кто ценит безупречность даже вдали от офиса. Эта папка, воплощающая дух летнего бизнес-отдыха за границей, станет вашим незаменимым аксессуаром, подчеркивающим ваш утонченный вкус и профессионализм.",
                      productId: null,
                      languageDto: {
                        id: 4,
                        name: "Rus tili",
                        code: "RU",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    }
                  ],                  
                translationsNameAsMap: {
                    EN: '"Meeting" Document Folder',
                    RU: 'Папка для документов "Meeting"',
                    UZ: '"Meeting" hujjatlar papkasi',
                  }, // EN, RU, UZ
                translationsDescriptionAsMap: {
                    EN: '"Meeting" Document Folder',
                    RU: 'Папка для документов "Meeting"',
                    UZ: '"Meeting" hujjatlar papkasi',
                  }
            }, 
            // classicClatch
            {
                id: 6,
                sku: "classicClatch",
                basePriceToUSD: 140,
                categoriesDto: [],// You can define this more precisely if you know the structure
                countryDto:{
                    id: 2,
                    name: "Uzbekistan",
                    code: "UZ",
                    defaultCountry: false
                },
                createdAt:  null,
                updatedAt:  null,
                mediaFileDto: [
                    {pathUrl:img41.src},
                    {pathUrl:img42.src},
                    {pathUrl:img43.src},
                    {pathUrl:img44.src},] ,// Define the media structure if needed
                productMetaDto: { id: 100,
                    favorite: true,
                    ware_house_count: 100,
                    _new_product: true,
                    _frontal_page: true,
                },
                productPricesDto:[], // Define if available
                translationsDto:  [
                    {
                      id: 12,
                      name: 'Фирменный клатч "Classic edge"',
                      description:
                        `Фирменный клатч "Classic edge"`,
                      productId: null,
                      languageDto: {
                        id: 2,
                        name: "Rus tili",
                        code: "RU",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    },
                    {
                      id: 11,
                      name: '"Classic edge" brendli klatch',
                      description:
                        '"Classic edge" brendli klatch',
                      productId: null,
                      languageDto: {
                        id: 3,
                        name: "O'zbek tili",
                        code: "UZ",
                        active: true,
                        defaultLanguage: true,
                        countryDto: null
                      }
                    },
                    {
                      id: 13,
                      name: 'Branded clutch "Classic edge"',
                      description:
                       `Branded clutch "Classic edge"`,
                      productId: null,
                      languageDto: {
                        id: 4,
                        name: "Ingliz tili",
                        code: "EN",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    }
                  ],                  
                translationsNameAsMap: {
                    EN: 'Branded clutch "Classic edge"',
                    RU:  `Фирменный клатч "Classic edge"`,
                    UZ: '"Classic edge" brendli klatch',
                  }, // EN, RU, UZ
                translationsDescriptionAsMap: {
                    EN: 'Branded clutch "Classic edge"',
                    RU:  `Фирменный клатч "Classic edge"`,
                    UZ: '"Classic edge" brendli klatch',
                  }
            }, 
            // TRENDlEDGER
            {
                id: 7,
                sku: "TRENDlEDGER",
                basePriceToUSD: 40,
                categoriesDto: [],// You can define this more precisely if you know the structure
                countryDto:{
                    id: 2,
                    name: "Uzbekistan",
                    code: "UZ",
                    defaultCountry: false
                },
                createdAt:  null,
                updatedAt:  null,
                mediaFileDto:  [
                    {pathUrl:img21.src},
                    {pathUrl:img23.src},
                    {pathUrl:img22.src},
                    {pathUrl:img24.src},
                  ],// Define the media structure if needed
                productMetaDto: { id: 1000,
                    favorite: true,
                    ware_house_count: 100,
                    _new_product: true,
                    _frontal_page: true,
                },
                productPricesDto:[], // Define if available
                translationsDto:  [
                    {
                      id: 12,
                      name: '"Trend Ledger" wallet',
                      description:'"Trend Ledger" wallet',
                      productId: null,
                      languageDto: {
                        id: 2,
                        name: "Ingliz tili",
                        code: "EN",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    },
                    {
                      id: 11,
                      name: '"Trend Ledger" nomli hamyon',
                      description:'"Trend Ledger" nomli hamyon',
                      productId: null,
                      languageDto: {
                        id: 3,
                        name: "O'zbek tili",
                        code: "UZ",
                        active: true,
                        defaultLanguage: true,
                        countryDto: null
                      }
                    },
                    {
                      id: 13,
                      name: 'Бумажник "Trend Ledger"',
                      description:'Бумажник "Trend Ledger"',
                      productId: null,
                      languageDto: {
                        id: 4,
                        name: "Rus tili",
                        code: "RU",
                        active: true,
                        defaultLanguage: false,
                        countryDto: null
                      }
                    }
                  ],                  
                translationsNameAsMap: {
                    EN: '"Trend Ledger" wallet',
                    RU: 'Бумажник "Trend Ledger"',
                    UZ: '"Trend Ledger" nomli hamyon',
                  }, // EN, RU, UZ
                translationsDescriptionAsMap: {
                    EN: '"Trend Ledger" wallet',
                    RU: 'Бумажник "Trend Ledger"',
                    UZ: '"Trend Ledger" nomli hamyon',
                  }
            }, 
           
          ]
    }
]