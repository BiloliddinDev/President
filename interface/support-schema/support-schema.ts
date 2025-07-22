import {z} from "zod";

export const SupportSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Phone must be at least 10 characters.",
    }),
    email: z.string().optional(),
    productsType: z.string().optional(),
    comments: z.string().optional()
})