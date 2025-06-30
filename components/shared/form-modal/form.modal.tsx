"use client"

import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {toast} from "sonner"
import {sendTelegramMessage} from "@/lib/send-telegram-message"

type Lang = 'uz' | 'ru' | 'en'

interface SupportFormModalProps {
    lang?: Lang
    btnText?: string
    autoOpen?: boolean
}

const texts = {
    uz: {
        title: "So‘rov yuborish",
        nameLabel: "Ism",
        namePlaceholder: "Ismingizni yozing",
        phoneLabel: "Telefon raqam",
        phonePlaceholder: "Telefon raqamingizni kiriting",
        submit: "So‘rovni yuborish",
        success: "So‘rov yuborildi ✅",
        error: "Xatolik yuz berdi ❌",
        serverError: "Server xatosi",
        required: "Maydon to‘ldirilishi kerak",
        min: "Minimal uzunlik noto‘g‘ri",
        description: "Mahsulotlarimiz haqida ko'proq bilmoqchimisiz?\nIsmingiz va telefon raqamingizni qoldiring, biz siz bilan bog'lanib, sizga xabar beramiz:"
    },
    ru: {
        title: "Отправить запрос",
        nameLabel: "Имя",
        namePlaceholder: "Введите ваше имя",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "Введите номер телефона",
        submit: "Отправить запрос",
        success: "Запрос отправлен ✅",
        error: "Произошла ошибка ❌",
        serverError: "Ошибка сервера",
        required: "Поле обязательно",
        min: "Минимальная длина недопустима",
        description: "Хотите узнать больше о наших товарах?\nОставьте имя и номер телефона — и мы свяжемся с вами, чтобы рассказать:"
    },
    en: {
        title: "Send Request",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        submit: "Send Request",
        success: "Request sent ✅",
        error: "Something went wrong ❌",
        serverError: "Server error",
        required: "This field is required",
        min: "Minimum length is invalid",
        description: 'Want to know more about our products?\nLeave your name and phone number and we will contact you to tell you:'
    },
}

export function SupportFormModal({
                                     lang = 'uz',
                                     btnText = "So‘rov yuborish",
                                     autoOpen = false
                                 }: SupportFormModalProps) {
    const [open, setOpen] = useState(false)
    const t = texts[lang]

    const schema = z.object({
        username: z.string().min(2, {message: t.min}).nonempty({message: t.required}),
        phone: z.string().min(10, {message: t.min}).nonempty({message: t.required}),
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            phone: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const success = await sendTelegramMessage({
                type: "Support",
                fields: data,
            })

            if (success) {
                toast.success(t.success)
                form.reset()
                setOpen(false)
            } else {
                toast.error(t.error)
            }
        } catch (error) {
            console.error("Telegram xatosi:", error)
            toast.error(t.serverError)
        }
    }


    useEffect(() => {
        if (!autoOpen) return

        const alreadyShown = sessionStorage.getItem("supportModalShown")
        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setOpen(true)
                sessionStorage.setItem("supportModalShown", "true")
            }, 15000)

            return () => clearTimeout(timer)
        }
    }, [autoOpen])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">{btnText}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t.title}</DialogTitle>
                    <p>{t.description}</p>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t.nameLabel}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t.namePlaceholder} {...field} />
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
                                    <FormLabel>{t.phoneLabel}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t.phonePlaceholder} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">{t.submit}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
