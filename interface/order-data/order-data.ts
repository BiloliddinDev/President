export interface OrderDataInterface {
    "id": string
    "customerId": string,
    "status": string,
    "firstPhoneNumber": string,
    "secondPhoneNumber": string,
    "address": {
        "id": string
        "location": "string",
        "latitude": number,
        "longitude": number
    },
    "totalAmount": number,
    "items": [
        {
            "id": string,
            "productId": number,
            "quantity": number,
            "unitPrice": number,
            "totalPrice": number
        }
    ],
    "createdAt": string
    "updatedAt": string
}