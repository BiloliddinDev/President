import {z} from "zod";

export const OrderSchema = z.object({
    address: z.string().min(3, {
        message: "Адрес должен содержать не менее 3 символов",
    }),
    latitude: z.number().optional(),
    longitude: z.number().optional(),

});

export type OrderFormData = z.infer<typeof OrderSchema>;