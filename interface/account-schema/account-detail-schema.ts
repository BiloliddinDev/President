import {z} from "zod";

export const AccountDetailSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    email: z.string().min(10, {
        message: "Email must be at least 10 characters.",
    }),
})