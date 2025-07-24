export interface ProductsInterface {
    "id": number,
    "sku": string,
    "name": string,
    "description": string,
    "basePriceToUSD": number,
    "country": {
        "name": "Uzbekistan",
        "code": "UZ"
    },
    "prices": [
        {
            "currency": {
                "code": string
                "name": string
                "symbol": string,
                "price": number
                "defaultCurrency": boolean
            },
            "price": 3600000
        }
    ],

    "meta": {
        "id": number,
        "favorite": boolean,
        "ware_house_count": number,
        "_new_product": boolean,
        "_frontal_page": boolean
    },
    "media": MediaInterface[],
    "createdAt": null,
    "updatedAt": null
}


export interface MediaInterface {
    "id": string
    "fileName": string
    "originalFileName": string
    "filePath": "/uploads/db58fab8-6a7f-4e30-8c59-3729d693d79a-category5.png",
    "metaData": {
        "type": "image",
        "order": 1,
        "width": null,
        "height": null
    },
    "ownerType": "PRODUCT",
    "ownerId": 11,
    "accessLevel": "PUBLIC",
    "image": true,
    "video": false
    mediaType: string
}

export interface WishlistInterface {
    "id": number,
    "sku": string,
    "name": string,
    "description": string,
    "basePriceToUSD": number,
    "country": {
        "name": "Uzbekistan",
        "code": "UZ"
    },
} 