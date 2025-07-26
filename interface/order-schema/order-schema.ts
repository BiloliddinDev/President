import {z} from "zod";

const phoneRegex = /^\+?\d{12}$/;
const optionalPhoneRegex = /^\+?\d{12,14}$/;

export const OrderSchema = z.object({
    address: z.object({
        text: z.string().min(1, "Адрес обязателен"),
        location: z.object({
            lat: z.number().refine(val => val !== 41.3, {
                message: "Please, you can choose location from map"
            }),
            lng: z.number().refine(val => val !== 69.2, {
                message: "Please, you can choose location from map"
            }),
        }),
    }),

    userInformation: z.object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name is too long"),

        secondment: z
            .string()
            .min(3, "Surname must be at least 3 characters")
            .max(50, "Surname is too long"),

        phone: z
            .string()
            .regex(phoneRegex, "Phone must be 13 characters (e.g., +998991234567 or 998991234567)"),

        secondPhone: z
            .string()
            .optional()
            .refine(
                (val) => !val || optionalPhoneRegex.test(val),
                {
                    message: "Second phone must be 13–15 characters and may start with +",
                }
            ),
    }),
});

export type OrderFormData = z.infer<typeof OrderSchema>;
