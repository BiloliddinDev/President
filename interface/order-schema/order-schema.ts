import {z} from "zod";

export const OrderSchema = z.object({
    customer: z.object({
        fullName: z.string().min(2, {
            message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak",
        }),
        phoneNumber: z.string().min(9, {
            message: "Telefon raqam noto'g'ri kiritildi",
        }),
        email: z.string().email({
            message: "Noto'g'ri email format",
        }).optional(),
    }),

    delivery: z.object({
        address: z.string().min(5, {
            message: "Manzil kamida 5 ta belgidan iborat bo'lishi kerak",
        }),
        city: z.string().min(2, {
            message: "Shahar nomi kiritilishi shart",
        }),
        zipCode: z.string().optional(),
        comment: z.string().optional(),
    }),

    items: z.array(z.object({
        productId: z.string(),
        quantity: z.number().min(1, {
            message: "Miqdor kamida 1 ta bo'lishi kerak",
        }),
        price: z.number().min(0, {
            message: "Narx 0 dan katta bo'lishi kerak",
        }),
    })).min(1, {
        message: "Kamida 1 ta mahsulot tanlash kerak",
    }),

    payment: z.object({
        method: z.enum(["cash", "card", "online"], {
            description: "To'lov turi: naqd, karta yoki online",
        }),
        status: z.enum(["pending", "paid", "failed"], {
            description: "To'lov holati",
        }).default("pending"),
    }),
    
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
});

export type OrderFormData = z.infer<typeof OrderSchema>;