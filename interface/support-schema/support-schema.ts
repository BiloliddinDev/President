import {z} from "zod";

interface SupportMessages {
    required: string;
    min: string;
    max: string;
    invalid: string;
    success: string;
    error: string;
    serverError: string;
}

export const createSupportSchema = (messages: SupportMessages) => {
    return z.object({
        username: z.string({
            required_error: messages.required,
        })
            .min(2, {message: messages.min.replace('{min}', '2')})
            .max(50, {message: messages.max.replace('{max}', '50')}),

        phone: z.string({
            required_error: messages.required,
        })
            .min(9, {message: messages.min.replace('{min}', '9')})
            .max(13, {message: messages.max.replace('{max}', '13')})
    });
};

export type SupportFormValues = z.infer<ReturnType<typeof createSupportSchema>>;