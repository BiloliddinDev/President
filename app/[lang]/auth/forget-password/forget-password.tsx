"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordSchema } from "@/interface/auth-schema/forget-password";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";

type ForgetPasswordFormValues = z.infer<typeof ForgetPasswordSchema>;

interface AuthProps {
  dictionary: {
    auth: {
      forgetPassword: {
        title: string;
        description: string;
        emailLabel: string;
        emailPlaceholder: string;
        submit: string;
      };
    };
  };
}

export default function ForgetPassword({ dictionary }: AuthProps) {
  const form = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(ForgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgetPasswordFormValues) => {
    console.log("Forget password data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-sm space-y-6">
        <h3 className="self-stretch justify-start text-primary text-lg font-medium leading-7">
          {dictionary.auth.forgetPassword.title}
        </h3>
        <p className="text-gray-500 text-base font-normal leading-normal">
          {dictionary.auth.forgetPassword.description}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.auth.forgetPassword.emailLabel}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={dictionary.auth.forgetPassword.emailPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full">
              {dictionary.auth.forgetPassword.submit}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
