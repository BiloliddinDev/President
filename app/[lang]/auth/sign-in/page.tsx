"use client"

import {z} from "zod"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Eye, EyeOff} from "lucide-react"
import Link from "next/link"
import Google from "@/public/svg/googole.svg"
import {LoginSchema} from "@/interface/auth-schema/login-schema";
import Image from "next/image";

type LoginFormValues = z.infer<typeof LoginSchema>

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log("Login data:", data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-2 bg-white">
            <div className="w-full max-w-sm space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-semibold">Login</h1>
                    <p className="text-sm text-gray-500">Welcome back! Please login to your account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                className="pr-10"
                                                {...field}
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute right-2 top-2.5 text-gray-500"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                        </button>
                                    </div>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className="text-right text-sm">
                            <Link href="/auth/forget-password" className="text-gray-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <Button type="submit" variant={"default"} className={"w-full"}>
                            Login
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Image src={Google} alt={"Google Logo"} width={20} height={20} className="size-4"/>
                            Continue with Google
                        </Button>
                        <p className="text-center text-sm text-gray-500">
                            Don&#39;t have an account ?
                            <Link href="/auth/sign-up"> Sign up</Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    )
}
