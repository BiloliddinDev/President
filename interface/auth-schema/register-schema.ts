import { z } from "zod";

export const RegisterSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak" })
      .max(50, { message: "Ism 50 ta belgidan oshmasligi kerak" })
      ,

    email: z
      .string()
      .min(5, { message: "Email kamida 5 ta belgidan iborat bo'lishi kerak" })
      .email({ message: "Noto'g'ri email format" })
      .refine((email) => email.includes("@"), {
        message: "Email @ belgisini o'z ichiga olishi kerak",
      }),

    password: z
      .string()
      .min(4, { message: "Parol kamida 4 ta belgidan iborat bo'lishi kerak" })
      .max(100, { message: "Parol 100 ta belgidan oshmasligi kerak" })
      ,

    confirmPassword: z
      .string()
      .min(1, { message: "Parolni tasdiqlash majburiy" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar bir xil emas",
    path: ["confirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
