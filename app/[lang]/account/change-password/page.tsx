"use client"

import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type ChangePasswordFormValues, ChangePasswordSchema} from "@/interface/account-schema/change-password-schema";

export default function ChangePasswordPage() {
    const form = useForm<ChangePasswordFormValues>({
        resolver: zodResolver(ChangePasswordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: ChangePasswordFormValues) => {
        console.log(data)
    };

    return (
        <div className={"w-full md:max-w-[500px]"}>
            <AccountTitle text="Change Password"/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-7">
                    <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel> Текущий пароль </FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Введите текущий пароль"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel> Новый пароль </FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder=" Введите новый пароль "
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel> Подтвердите новый пароль</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Подтвердите ваш новый пароль"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant={"default"} className={"mt-10"}>
                        Сохранять
                    </Button>
                </form>
            </Form>
        </div>
    );
}