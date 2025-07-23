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
    "mediaFiles": [
        {
            "id": string
            "fileName": string
            "originalFileName": string,
            "filePath": string | undefined,
            "fileSize": number
            "ownerType": "PRODUCT",
            "ownerId": 0,
            "accessLevel": "PUBLIC",
            "image": true,
            "video": true
        }
    ]
}