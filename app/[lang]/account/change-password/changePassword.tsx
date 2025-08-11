"use client";

import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ChangePasswordFormValues, ChangePasswordSchema } from "@/interface/account-schema/change-password-schema";

interface ChangeProps {
  dictionary: {
    account: {
      changePassword: {
        title: string;
        currentPasswordLabel: string;
        currentPasswordPlaceholder: string;
        newPasswordLabel: string;
        newPasswordPlaceholder: string;
        confirmPasswordLabel: string;
        confirmPasswordPlaceholder: string;
        submit: string;
      };
    };
  };
}

export default function ChangePasswordPage({ dictionary }: ChangeProps) {
  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    console.log(data);
  };

  return (
    <div className={"w-full md:max-w-[500px]"}>
      <AccountTitle text={dictionary.account.changePassword.title} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-7">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.account.changePassword.currentPasswordLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={dictionary.account.changePassword.currentPasswordPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.account.changePassword.newPasswordLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={dictionary.account.changePassword.newPasswordPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.account.changePassword.confirmPasswordLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={dictionary.account.changePassword.confirmPasswordPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant={"default"} className={"mt-10"}>
            {dictionary.account.changePassword.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}
