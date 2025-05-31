import {z} from "zod"

export const ChangeEmailSchema = z.object({
    currentEmail: z.string()
        .email("Please enter a valid email")
        .min(5, "Email is required"),

    newEmail: z.string()
        .email("Please enter a valid email")
        .min(5, "Email is required"),

    confirmEmail: z.string()
        .email("Please enter a valid email")
        .min(5, "Email is required"),


});

export type ChangeEmailFormValues = z.infer<typeof ChangeEmailSchema>;