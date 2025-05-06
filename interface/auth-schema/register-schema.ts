import {z} from "zod";

export const RegisterSchema = z.object({
    fullName: z
        .string()
        .min(3, {message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak"})
        .max(50, {message: "Ism 50 ta belgidan oshmasligi kerak"})
        .regex(/^[A-Za-z\s]+$/, {
            message: "Ism faqat harflar va bo'shliqdan iborat bo'lishi kerak"
        }),

    email: z
        .string()
        .min(5, {message: "Email kamida 5 ta belgidan iborat bo'lishi kerak"})
        .email({message: "Noto'g'ri email format"})
        .refine((email) => email.includes("@"), {
            message: "Email @ belgisini o'z ichiga olishi kerak",
        }),

    password: z
        .string()
        .min(8, {message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak"})
        .max(100, {message: "Parol 100 ta belgidan oshmasligi kerak"})
        .regex(/[A-Z]/, {message: "Parolda kamida 1 ta katta harf bo'lishi kerak"})
        .regex(/[a-z]/, {message: "Parolda kamida 1 ta kichik harf bo'lishi kerak"})
        .regex(/[0-9]/, {message: "Parolda kamida 1 ta raqam bo'lishi kerak"})
        .regex(/[^A-Za-z0-9]/, {message: "Parolda kamida 1 ta maxsus belgi bo'lishi kerak"}),

    confirmPassword: z
        .string()
        .min(1, {message: "Parolni tasdiqlash majburiy"}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Parollar bir xil emas",
    path: ["confirmPassword"],


});


export type TRegisterSchema = z.infer<typeof RegisterSchema>;