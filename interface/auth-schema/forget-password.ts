import {z} from "zod";

export const ForgetPasswordSchema = z.object({

    email: z.string().min(10, {
        message: "Email must be at least 10 characters.",
    }),
})