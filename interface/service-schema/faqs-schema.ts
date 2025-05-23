import {z} from "zod";

export const FaqsSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    phone: z.string().min(5, "Phone is required"),
    email: z.string().email("Invalid email"),
    social: z.string().min(4, "Social users is required"),
    comment: z.string().optional(),
    agree: z.boolean().optional(),
});

