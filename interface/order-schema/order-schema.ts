import {z} from "zod";

export const OrderSchema = z.object({
    address: z.object({
        text: z.string().min(1, "Адрес обязателен"),
        location: z.object({
            lat: z.number(),
            lng: z.number(),
        }),
    }),
    userInformation: z.object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name is too long"),

        secondname: z
            .string()
            .min(3, "Surname must be at least 3 characters")
            .max(50, "Surname is too long"),

        phone: z
            .string()
            .min(9, "Phone must be at least 9 digits")
            .max(15, "Phone must be at most 15 digits")
            .regex(/^\d+$/, "Phone must contain only digits"),

        secondPhone: z
            .string()
            .optional()
            .refine(
                (val) => !val || /^\d{9,15}$/.test(val),
                "Second phone must be 9–15 digits if provided"
            ),
    }),
});

export type OrderFormData = z.infer<typeof OrderSchema>;