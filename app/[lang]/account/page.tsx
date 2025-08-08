"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Validation schema
const AccountDetailSchema = z.object({
  name: z.string().min(2, "Ism kamida 2 ta belgidan iborat bo‘lishi kerak"),
  email: z.string().email("Yaroqli email kiriting"),
});

type AccountDetailFormValues = z.infer<typeof AccountDetailSchema>;

export default function AccountPage() {
  const { data: session } = useSession();

  const form = useForm<AccountDetailFormValues>({
    resolver: zodResolver(AccountDetailSchema),
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
  });

  // Session kelganda inputlarni to‘ldirish
  useEffect(() => {
    if (session?.user) {
      form.reset({
        name: session.user.name ?? "",
        email: session.user.email ?? "",
      });
    }
  }, [session, form]);

  const onSubmit = async (data: AccountDetailFormValues) => {
    try {
      // API'ga yuborish (namuna)
      const res = await fetch("/api/account/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Server xatosi");
      }

      toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
    } catch (error) {
      console.error(error);
      toast.error("Ma'lumotlarni saqlashda xatolik yuz berdi");
    }
  };

  return (
    <div className="w-full md:max-w-[500px]">
      <AccountTitle text={"Детали аккаунта"} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-7">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Полное имя</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Введите свое имя"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Электронная почта</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Введите адрес почты"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="default" className="mt-10">
            Сохранить
          </Button>
        </form>
      </Form>
    </div>
  );
}
