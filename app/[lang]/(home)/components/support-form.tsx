"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {SectionTitle} from "@/components/ui/sectionTitle"
import {createSupportSchema, type SupportFormValues} from "@/interface/support-schema/support-schema"
import {sendTelegramMessage} from "@/lib/send-telegram-message"
import {toast} from "sonner"
import Image from "next/image"
import supportImage from "@/public/images/news2.png"

interface SupportFormProps {
    dictionary: {
        support: {
            title: string;
            supportform: string;
            form: {
                name: {
                    label: string;
                    placeholder: string;
                };
                phone: {
                    label: string;
                    placeholder: string;
                };
                submit: string;
            };
            messages: {
                required: string;
                min: string;
                max: string;
                invalid: string;
                success: string;
                error: string;
                serverError: string;
            };
        };
    };
    lang?: 'uz' | 'ru' | 'en';
}

export const SupportForm = ({dictionary}: SupportFormProps) => {
    const supportSchema = createSupportSchema(dictionary.support.messages);

    const form = useForm<SupportFormValues>({
        resolver: zodResolver(supportSchema),
        defaultValues: {
            username: "",
            phone: "",
        },
    })
    
    
        

    const onSubmit = async (data: SupportFormValues) => {
        try {
            const success = await sendTelegramMessage({
                type: "Support",
                fields: data,
            })

            if (success) {
                toast.success(dictionary.support.messages.success)
                form.reset()
            } else {
                toast.error(dictionary.support.messages.error)
            }
        } catch (error) {
            console.error("Form submission error:", error)
            toast.error(dictionary.support.messages.serverError)
        }
    }

    return (
        <div className="container py-16" id={"support"}>
            <SectionTitle className="mb-12" text={dictionary.support.title}/>
            <div className="grid md:grid-cols-2 gap-20 items-center bg-white rounded-[4px] p-8 md:p-12">
                <div className="text-center md:text-left">
                    <Image
                        src={supportImage}
                        alt="Support"
                        width={520}
                        height={400}
                        className="mx-auto md:mx-0 rounded-xl"
                    />
                    <p className="mt-6 text-slate-600 text-md">
                        {dictionary.support.supportform}
                    </p>
                </div>

                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            {dictionary.support.form.name.label}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={dictionary.support.form.name.placeholder}
                                                className="w-full md:max-w-10/12"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            {dictionary.support.form.phone.label}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={dictionary.support.form.phone.placeholder}
                                                className="w-full md:max-w-10/12"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full md:w-auto">
                                {dictionary.support.form.submit}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}