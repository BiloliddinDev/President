import {z} from "zod";

export const SupportSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Phone must be at least 10 characters.",
    }),
    email: z.string().min(10, {
        message: "Email must be at least 10 characters.",
    }),
    productsType: z.string().nonempty({
        message: "Products Type must be at least 10 characters.",
    }),
    comments: z.string().min(10, {
        message: "Comments must be at least 10 characters.",
    })
})