"use client"

import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {SectionTitle} from "@/components/ui/sectionTitle"
import {SupportSchema} from "@/interface/support-schema/support-schema"
import {sendTelegramMessage} from "@/lib/send-telegram-message"
import Image from "next/image"
import supportIMage from "@/public/images/news2.png"

type SupportFormValues = z.infer<typeof SupportSchema>

export const SupportForm = () => {
    const form = useForm<SupportFormValues>({
        resolver: zodResolver(SupportSchema),
        defaultValues: {
            username: "",
            phone: "",
        },
    })

    const onSubmit = async (data: SupportFormValues) => {
        const success = await sendTelegramMessage({
            type: "Support",
            fields: data,
        })

        if (success) {
            form.reset({username: "", phone: ""})
        }
    }

    return (
        <div className="container py-16" id={"support"}>
            <SectionTitle className="mb-12" text="So'rov qoldiring"/>
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white  rounded-[4px] p-8 md:p-12">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">Ism</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ismingizni yozing"
                                                   className="w-full   md:max-w-10/12" {...field} />
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
                                        <FormLabel className="text-lg">Telefon raqam</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Telefon raqamingizni kiriting"
                                                   className=" w-full md:max-w-10/12"  {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full md:w-auto">
                                So’rovni yuborish
                            </Button>
                        </form>
                    </Form>
                </div>

                {/* Right side image with text */}
                <div className="text-center md:text-left">
                    <Image
                        src={supportIMage}
                        alt="Support"
                        width={520}
                        height={400}
                        className="mx-auto md:mx-0 rounded-xl"
                    />
                    <p className="mt-6 text-slate-600 text-md">
                        Menejerimiz sizga qo‘ng‘iroq
                        qilib, mahsulotlarimiz haqida
                        batafsil tushuntirib beradi
                    </p>
                </div>
            </div>
        </div>
    )
}

