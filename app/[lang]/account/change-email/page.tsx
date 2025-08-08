"use client";

import { useEffect } from "react";
import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ChangeEmailFormValues, ChangeEmailSchema } from "@/interface/account-schema/change-email-schema";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function ChangeEmailPage() {
  const { data: session } = useSession();

  const form = useForm<ChangeEmailFormValues>({
    resolver: zodResolver(ChangeEmailSchema),
    defaultValues: {
      currentEmail: "",
      newEmail: "",
      confirmEmail: "",
    },
  });

  // Sessiyadan email kelganda currentEmail maydonini to'ldiramiz
  useEffect(() => {
    if (!session?.user) return;

    const sessionEmail =
      // agar sizning auth tizimingizda serverData.email bo'lsa — ishlatamiz, aks holda session.user.email
      (session.user )?.serverData?.email ??
      (session.user )?.email ??
      "";

    // setValue yoki reset dan foydalanishingiz mumkin; reset bilan validatsiya ham yangilanadi
    form.setValue("currentEmail", sessionEmail);
  }, [session, form]);

  const onSubmit = async (data: ChangeEmailFormValues) => {
    try {
      // yuborilayotgan payload: currentEmail, newEmail, confirmEmail
      const res = await fetch("/api/account/change-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "same-origin",
      });

      if (!res.ok) {
        // server xatolikni jo'natsa, xabarni ko'rsatamiz
        const err = await res.json().catch(() => null);
        throw new Error(err?.message ?? "Emailni o'zgartirishda xatolik");
      }

      toast.success("Email muvaffaqiyatli o'zgartirildi");

      // currentEmail maydonini yangi email bilan yangilaymiz, boshqa maydonlarni tozalaymiz
      form.reset({
        currentEmail: data.newEmail,
        newEmail: "",
        confirmEmail: "",
      });
    } catch (error) {
      console.error("Change email error:", error);
      toast.error("Emailni o'zgartirishda xatolik yuz berdi");
    }
  };

  return (
    <div className="w-full md:max-w-[500px]">
      <AccountTitle text="Изменить адрес почты" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-7">
          <FormField
            control={form.control}
            name="currentEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Текущий почты</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Введите свой текущий почты"
                    {...field}
                    disabled // foydalanuvchi current emailni o'zgartirmasin, u sessiyadan olinadi
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Новый почты</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Введите новый почты"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Подтвердите новый почты</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Подтвердите ваш новый почты"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" className="mt-10">
            Сохранять
          </Button>
        </form>
      </Form>
    </div>
  );
}
