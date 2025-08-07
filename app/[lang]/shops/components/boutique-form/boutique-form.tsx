"use client"

import { useState } from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {BoutiqueSchema} from "@/interface/service-schema/boutique-schema"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {sendTelegramMessage} from "@/lib/send-telegram-message";
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
type FormValues = z.infer<typeof BoutiqueSchema>

export default function BoutiqueForm({dictionary}: FaqsFormProps) {

    const [showModal, setShowModal] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(BoutiqueSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            location: "",
            date: "",
            time: "",
            comment: "",
        },
    })

    const onSubmit = async (data: FormValues) => {
        const success = await sendTelegramMessage({
            type: "Booking",
            fields: data,
        });

        if (success) {
            setShowModal(true)
            form.reset({
                fullName: "",
                phone: "",
                email: "",
                location: "",
                date: "",
                time: "",
                comment: "",
            });
        }
    };
// Имя

// 

// 

// 

// 

// 

// 
    return (

        <>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({field}) => (
                        <FormItem 
                        data-aos="fade-left" 
                        data-aos-delay="0"
                        >
                            <FormLabel>Имя </FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" 
                        data-aos-delay="200">
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
                        <FormItem data-aos="fade-left" 
                        data-aos-delay="400">
                            <FormLabel>Email</FormLabel>
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" 
                        data-aos-delay="600">
                            <FormLabel>Город</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" 
                        data-aos-delay="800">
                            <FormLabel>Дата визита</FormLabel>
                            <FormControl><Input type="date" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="time"
                    render={({field}) => (
                        <FormItem data-aos="fade-left" 
                        data-aos-delay="1000">
                            <FormLabel>Время визита</FormLabel>
                            <FormControl><Input type="time" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="md:col-span-2">
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({field}) => (
                            <FormItem data-aos="fade-left" 
                            data-aos-delay="1200">
                                <FormLabel>Комментарий</FormLabel>
                                <FormControl><Textarea rows={4}
                                                       placeholder="Введите ваше сообщение здесь" {...field} /></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className={'mt-5 text-sm font-medium  leading-tight'}>
                    Мы можем информировать вас о новостях и специальных предложениях. Если вы не хотите получать такие уведомления, отметьте соответствующий пункт. Вся информация обрабатывается конфиденциально в соответствии с <Link className={'underline'} href={"#"}> Политикой конфиденциальности.</Link> 
                    </div>
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
