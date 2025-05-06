"use client"


import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ForgetPasswordSchema} from "@/interface/auth-schema/forget-password";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {Button} from "@/components/ui/button";


type ForgetPasswordFormValues = z.infer<typeof ForgetPasswordSchema>


export default function ForgetPassword() {

    const form = useForm<ForgetPasswordFormValues>({
        resolver: zodResolver(ForgetPasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = (data: ForgetPasswordFormValues) => {
        console.log("Login data:", data)
    }


    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white">
            <div className={"w-full max-w-sm space-y-6"}>
                <h3 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">Forgot your
                    password?</h3>
                <p className="text-gray-500 text-base font-normal  leading-normal">To create a new password, please
                    enter the email address associated with your Montblanc account. A
                    reset
                    password link will be sent to you by email. The link will be available for 24h.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant={"default"} className={"w-full"}>
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
