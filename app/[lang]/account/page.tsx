"use client"

import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {AccountDetailSchema} from "@/interface/account-schema/account-detail-schema";

type ForgetPasswordFormValues = z.infer<typeof AccountDetailSchema>

export default function AccountPage() {

    const form = useForm<ForgetPasswordFormValues>({
        resolver: zodResolver(AccountDetailSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    const onSubmit = (data: ForgetPasswordFormValues) => {
        console.log("Login data:", data)
    }
    return (
        <div className={"w-full md:max-w-[500px]"}>
            <AccountTitle text={" Детали аккаунта"}/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4  mt-7"}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Полное имя</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Введите свое имя" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Электронная почта</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Введите адрес почты" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"default"} className={"mt-10"}>
                        Сохранить 
                    </Button>
                </form>
            </Form>
        </div>
    )
}
