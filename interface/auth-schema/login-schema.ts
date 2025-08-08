import {z} from "zod";

export const LoginSchema = z.object({

    email: z.string().min(10, {
        message: "Email must be at least 10 characters.",
    }),
    password: z.string()
        .min(4, {message: "Parol kamida 4 ta belgidan iborat bo'lishi kerak"})
        .max(20, {message: "Parol 20 ta belgidan oshmasligi kerak"}),
})