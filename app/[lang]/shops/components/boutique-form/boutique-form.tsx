"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {BoutiqueSchema} from "@/interface/service-schema/boutique-schema"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {sendTelegramMessage} from "@/lib/sendTelegramMessage";

type FormValues = z.infer<typeof BoutiqueSchema>

export default function BoutiqueForm() {
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

    return (

        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
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
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl><Input type="date" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="time"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Time</FormLabel>
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
                            <FormItem>
                                <FormLabel>Comment</FormLabel>
                                <FormControl><Textarea rows={4}
                                                       placeholder="Type your message here" {...field} /></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className={'mt-5 text-sm font-medium  leading-tight'}>
                        We would like to keep you updated with our latest news and provide you with exclusive benefits.
                        If you wish to opt-out of receiving marketing <br/> information, please check the box
                        below. <br/> Your
                        information is safe with Montblanc. Consult our <Link className={'underline'} href={"#"}>Privacy
                        Policy</Link> for
                        further information
                    </div>
                </div>

                <div className="md:col-span-2 mt-4">
                    <Button type="submit" variant={"default"}>
                        Send
                    </Button>
                </div>
            </form>
        </Form>

    )
}
