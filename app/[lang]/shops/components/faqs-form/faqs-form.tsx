"use client"

import { useState } from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {FaqsSchema} from "@/interface/service-schema/faqs-schema";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {sendTelegramMessage} from "@/lib/send-telegram-message";
// import { LangType } from "@/interface/lang/lang-type";
import { AutoCloseModal } from "@/components/shared/form-modal/auto-closeModal"
import {CheckCircle} from "lucide-react";
interface FaqsFormProps {
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
                modalSuccessTitle: string;
                modalSuccessDescription: string;
            };
        };
    };
    lang?: 'uz' | 'ru' | 'en';
    showtime?: boolean
}
type FormValues = z.infer<typeof FaqsSchema>

export default function FaqsForm({dictionary}: FaqsFormProps) {
    const [showModal, setShowModal] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(FaqsSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            comment: "",
            social: "",
            agree: false,
        },
    })


    const onSubmit = async (data: FormValues) => {
        const success = await sendTelegramMessage({
            type: "Contact Us",
            fields: data,
        });

        if (success) {
            setShowModal(true)
            form.reset({
                fullName: "",
                phone: "",
                email: "",
                comment: "",
                social: "",
                agree: false,
            });
        }
    };

    return (

        <>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" data-aos-delay="0">
                            <FormLabel>Имя</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" data-aos-delay="300">
                            <FormLabel>Телефон</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" data-aos-delay="600">
                            <FormLabel>Email</FormLabel>
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="social"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" data-aos-delay="900">
                            <FormLabel>Контакт в мессенджерах (например, WhatsApp, Telegram)</FormLabel>
                            {/* <FormLabel>Location</FormLabel> */}
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="md:col-span-2">
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({field}) => (
                            <FormItem data-aos="fade-left" data-aos-delay="1200">
                                <FormLabel>Комментарий / Вопрос</FormLabel>
                                <FormControl><Textarea rows={4}
                                                       placeholder="Введите ваше сообщение здесь" {...field} 
                                                       /></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className={'mt-5 text-sm font-medium  leading-tight'}>
                        {/* We would like to keep you updated with our latest news and provide you with exclusive benefits.
                        If you wish to opt-out of receiving marketing <br/> information, please check the box
                        below. <br/> Your
                        information is safe with Montblanc. Consult our <Link className={"underline"} href={"#"}>Privacy
                        Policy</Link> for further information */}
                        Мы хотели бы держать вас в курсе наших последних новостей и предоставлять вам эксклюзивные преимущества. Если вы хотите отказаться от получения маркетинговой
информации, пожалуйста, установите флажок ниже.
С Montblanc ваша информация в безопасности. Для получения дополнительной информации ознакомьтесь с нашей <Link className={"underline"} href={"#"}>Политикой конфиденциальности</Link>  
                    </div>
                </div>
                <div className="md:col-span-2 flex items-start gap-2 mt-2">
                    <FormField
                        control={form.control}
                        name="agree"
                        render={({field}) => (
                            <FormItem data-aos="fade-left" data-aos-delay="1500" className="flex items-start space-x-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="text-sm text-gray-600">
                                    {/* I do not wish to receive exclusive benefits or information about products. */}
                                    Я не хочу получать эксклюзивные предложения или информацию о
                                    продуктах.
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="md:col-span-2 mt-4">
                    <Button type="submit" variant={"default"}>
                    Отправить
                    </Button>
                </div>
            </form>
        </Form>
        <AutoCloseModal 
                title= {dictionary.support.messages.modalSuccessTitle}
                text= {dictionary.support.messages.modalSuccessDescription}
                duration={8000}
                icon={<CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4"/>}
                open={showModal}
                onClose={() => setShowModal(false)}
            />
        </>

    )
}