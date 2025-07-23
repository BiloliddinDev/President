"use client"

import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {SectionTitle} from "@/components/ui/sectionTitle"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {SupportSchema} from "@/interface/support-schema/support-schema";


type SupportFormValues = z.infer<typeof SupportSchema>

export const SupportForm = ({discription} : unknown) => {
    const form = useForm<SupportFormValues>({
        resolver: zodResolver(SupportSchema),
        defaultValues: {
            username: "",
            phone: "",
            email: "",
            productsType: "",
            comments: "",
        },
    })

    const onSubmit = (data: SupportFormValues) => {
        console.log("Submitted data:", data)
    }

    return (
        <div className="container py-12">
            <SectionTitle className={"mb-[50px]"} text="We support you!"/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-y-[30px] gap-x-[26px]">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Full name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full name" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="comments"
                        render={({field}) => (
                            <FormItem className="md:row-span-2">
                                <FormLabel>Comment</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your comment..." className="h-[136px]" {...field} />
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
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone number" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="productsType"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Product type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className={"w-full"}>
                                            <SelectValue placeholder="Select product type"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="blankets">Blankets</SelectItem>
                                        <SelectItem value="pillows">Pillows</SelectItem>
                                        <SelectItem value="others">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="md:col-span-3 flex justify-between items-center mt-6">
                        <div className="text-slate-900 text-md font-normal  leading-loose">«Остались вопросы? Оставьте заявку — мы скоро ответим.»
                        </div>
                        <Button type="submit" variant={"default"}>
                            Send
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
