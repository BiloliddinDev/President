import { z } from "zod";

export const BoutiqueSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    phone: z.string().min(5, "Phone is required"),
    email: z.string().email("Invalid email"),
    location: z.string().min(1, "Location is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    comment: z.string().optional(),
});
