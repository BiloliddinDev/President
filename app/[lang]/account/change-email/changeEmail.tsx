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

interface ChangeProps {
  dictionary: {
    account: {
      changeEmail: {
        title: string;
        currentEmailLabel: string;
        currentEmailPlaceholder: string;
        newEmailLabel: string;
        newEmailPlaceholder: string;
        confirmEmailLabel: string;
        confirmEmailPlaceholder: string;
        submit: string;
        successMessage: string;
        errorMessage: string;
      };
    };
  };
}

export default function ChangeEmailPage({ dictionary }: ChangeProps) {
  const { data: session } = useSession();

  const form = useForm<ChangeEmailFormValues>({
    resolver: zodResolver(ChangeEmailSchema),
    defaultValues: {
      currentEmail: "",
      newEmail: "",
      confirmEmail: "",
    },
  });

  useEffect(() => {
    if (!session?.user) return;

    const sessionEmail =
      (session.user)?.serverData?.email ??
      (session.user)?.email ??
      "";

    form.setValue("currentEmail", sessionEmail);
  }, [session, form]);

  const onSubmit = async (data: ChangeEmailFormValues) => {
    try {
      const res = await fetch("/api/account/change-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "same-origin",
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message ?? dictionary.account.changeEmail.errorMessage);
      }

      toast.success(dictionary.account.changeEmail.successMessage);

      form.reset({
        currentEmail: data.newEmail,
        newEmail: "",
        confirmEmail: "",
      });
    } catch (error) {
      console.error("Change email error:", error);
      toast.error(dictionary.account.changeEmail.errorMessage);
    }
  };

  return (
    <div className="w-full md:max-w-[500px]">
      <AccountTitle text={dictionary.account.changeEmail.title} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-7">
          <FormField
            control={form.control}
            name="currentEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.account.changeEmail.currentEmailLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dictionary.account.changeEmail.currentEmailPlaceholder}
                    {...field}
                    disabled
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
                <FormLabel>{dictionary.account.changeEmail.newEmailLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dictionary.account.changeEmail.newEmailPlaceholder}
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
                <FormLabel>{dictionary.account.changeEmail.confirmEmailLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dictionary.account.changeEmail.confirmEmailPlaceholder}
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" className="mt-10">
            {dictionary.account.changeEmail.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}
