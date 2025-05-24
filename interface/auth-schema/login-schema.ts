import {z} from "zod";

export const LoginSchema = z.object({

    email: z.string().min(10, {
        message: "Email must be at least 10 characters.",
    }),
    password: z.string()
        .min(8, {message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak"})
        .max(20, {message: "Parol 20 ta belgidan oshmasligi kerak"})
        .regex(/[A-Z]/, {message: "Parolda kamida 1 ta katta harf bo'lishi kerak"})
        .regex(/[a-z]/, {message: "Parolda kamida 1 ta kichik harf bo'lishi kerak"})
        .regex(/[0-9]/, {message: "Parolda kamida 1 ta raqam bo'lishi kerak"})
        .regex(/[^A-Za-z0-9]/, {message: "Parolda kamida 1 ta maxsus belgi bo'lishi kerak"}),
})