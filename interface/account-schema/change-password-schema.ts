import { z } from "zod"

export const ChangePasswordSchema = z.object({
    currentPassword: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must not exceed 100 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),

    newPassword: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must not exceed 100 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),

    confirmPassword: z.string()
        .min(8, "Password must be at least 8 characters")
})
.refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})
.refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
});

export type ChangePasswordFormValues = z.infer<typeof ChangePasswordSchema>;