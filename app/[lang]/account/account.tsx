"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// const AccountDetailSchema = z.object({
//   name: z.string().min(2, { message: "Ism kamida 2 ta belgidan iborat bo‘lishi kerak" }),
//   email: z.string().email({ message: "Yaroqli email kiriting" }),
// });

// type AccountDetailFormValues = z.infer<typeof AccountDetailSchema>;

export interface AccountProps {
  dictionary: {
    account: {
      detail: {
        title: string;
        form: {
          name: { label: string; placeholder: string; error: string };
          email: { label: string; placeholder: string; error: string };
          submit: string;
        };
        toast: { success: string; error: string };
      };
      order: {
        title: string;
        emptyMessage: string;
        orderId: string;
        status: string;
        createdAt: string;
        address: string;
        productCount: string;
        total: string;
        hide: string;
        viewMore: string;
        productsSuffix: string;
        viewItem: string;
      };
    };
    detail: { quantity: string };
  };
  lang?:"uz" | "ru" | "en" | "tj" | "az";
}

export default function AccountPage({ dictionary }: AccountProps) {
  const { data: session } = useSession();
  // Validation matnlarini dictionarydan olish
  const AccountDetailSchemaWithMessages = z.object({
    name: z
      .string()
      .min(2, { message: dictionary.account.detail.form.name.error }),
    email: z
      .string()
      .email({ message: dictionary.account.detail.form.email.error }),
  });

  type AccountDetailFormValues = z.infer<
    typeof AccountDetailSchemaWithMessages
  >;

  const form = useForm<AccountDetailFormValues>({
    resolver: zodResolver(AccountDetailSchemaWithMessages),
    defaultValues: { name: "", email: "" },
    mode: "onChange",
  });

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
      const res = await fetch("/api/account/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");

      toast.success(dictionary.account.detail.toast.success);
    } catch (error) {
      console.error(error);
      toast.error(dictionary.account.detail.toast.error);
    }
  };

  return (
    <div className="w-full md:max-w-[500px]">
      <AccountTitle text={dictionary.account.detail.title} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-7">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {dictionary.account.detail.form.name.label}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={
                      dictionary.account.detail.form.name.placeholder
                    }
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {dictionary.account.detail.form.email.label}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={
                      dictionary.account.detail.form.email.placeholder
                    }
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="default" className="mt-10">
            {dictionary.account.detail.form.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}
