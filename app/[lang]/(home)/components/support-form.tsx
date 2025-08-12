"use client"

import {useEffect, useState} from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {AutoCloseModal} from "@/components/shared/form-modal/auto-closeModal";
import {CheckCircle} from "lucide-react";

import supportImage from "@/public/images/support-form.jpg";

import {createSupportSchema, type SupportFormValues} from "@/interface/support-schema/support-schema";
import {sendTelegramMessage} from "@/lib/send-telegram-message";
import {toast} from "sonner";

interface SupportFormProps {
    dictionary: {
        support: {
            title: string;
            supportform: string;
            form: {
                name: { label: string; placeholder: string };
                phone: { label: string; placeholder: string };
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
    lang?: "uz" | "ru" | "en";
    showtime?: boolean;
}

export const SupportForm = ({dictionary, showtime}: SupportFormProps) => {
    const supportSchema = createSupportSchema(dictionary.support.messages);
    const {data: session} = useSession();

    const [showModal, setShowModal] = useState(false);

    const form = useForm<SupportFormValues>({
        resolver: zodResolver(supportSchema),
        // Boshlang'ich qiymatlar: session hali kelmagan bo'lishi mumkin
        defaultValues: {
            username: "",
            phone: "",
        },
        mode: "onChange",
    });

    // Session kelganda (yoki o'zgarganda) username'ni to'ldiramiz
    useEffect(() => {
        if (!session) return;

        const derivedName =
            session?.user?.authType === "custom"
                ? session?.user?.serverData?.full_name ?? ""
                : session?.user?.name ?? "";

        // Phone maydonida foydalanuvchi kiritgan narsani saqlab qolamiz
        const currentPhone = form.getValues("phone") ?? "";

        form.reset({
            username: derivedName,
            phone: currentPhone,
        });
    }, [session, form]);

    const onSubmit = async (data: SupportFormValues) => {
        try {
            const success = await sendTelegramMessage({
                type: "Support",
                fields: data,
            });

            if (success) {
                setShowModal(true);
                toast.success(dictionary.support.messages.success);
                form.reset({
                    username: "", // foydalanuvchi keyin yana yozishi uchun tozalaymiz
                    phone: "",
                });
            } else {
                toast.error(dictionary.support.messages.error);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(dictionary.support.messages.serverError);
        }
    };

    return (
        <>
            <div className="container py-16" id="support">
                {showtime && <SectionTitle className="mb-12" text={dictionary.support.title}/>}

                <div className="grid md:grid-cols-2 gap-20 items-center bg-white rounded-[4px] p-8 md:p-12">
                    <div data-aos="fade-right" className="text-center md:text-left" suppressHydrationWarning>
                        <Image
                            src={supportImage}
                            alt="Support"
                            width={520}
                            height={400}
                            className="mx-auto md:mx-0 rounded-xl"
                        />
                        <p className="mt-6 text-slate-600 text-md">{dictionary.support.supportform}</p>
                    </div>

                    <div data-aos="fade-left">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Username */}
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                {dictionary.support.form.name.label}
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder={dictionary.support.form.name.placeholder}
                                                    className="w-full md:max-w-10/12"
                                                    {...field}
                                                    // controlled input: hech qachon null/undefined bo‘lmasin
                                                    value={field.value ?? ""}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                {/* Phone */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                {dictionary.support.form.phone.label}
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder={dictionary.support.form.phone.placeholder}
                                                    className="w-full md:max-w-10/12"
                                                    {...field}
                                                    value={field.value ?? ""}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full md:w-auto">
                                    {dictionary.support.form.submit}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>

            <AutoCloseModal
                title={dictionary.support.messages.modalSuccessTitle}
                text={dictionary.support.messages.modalSuccessDescription}
                duration={8000}
                icon={<CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4"/>}
                open={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};
