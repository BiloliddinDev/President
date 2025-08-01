"use client"

import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type ChangeEmailFormValues, ChangeEmailSchema} from "@/interface/account-schema/change-email-schema";

export default function ChangeEmailPage() {
    const form = useForm<ChangeEmailFormValues>({
        resolver: zodResolver(ChangeEmailSchema),
        defaultValues: {
            currentEmail: "",
            newEmail: "",
            confirmEmail: "",
        },
    });

    const onSubmit = async (data: ChangeEmailFormValues) => {
        try {
            console.log("Email change data:", data);
            // API call logic here
        } catch (error) {
            console.error("Error changing email:", error);
        }
    };

    return (
        <div className={"w-full md:max-w-[500px]"}>
            <AccountTitle text=" Изменить адрес почты"/>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-7">
                    <FormField
                        control={form.control}
                        name="currentEmail"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Текущий почты</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Введите свой текущий почты"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="newEmail"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Новый почты</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Введите новый почты"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmEmail"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Подтвердите новый почты</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Подтвердите ваш новый почты"
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