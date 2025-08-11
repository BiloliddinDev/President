"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Google from "@/public/svg/googole.svg";
import { LoginSchema } from "@/interface/auth-schema/login-schema";
import Image from "next/image";
import { signIn } from "next-auth/react";

type LoginFormValues = z.infer<typeof LoginSchema>;

interface AuthProps {
  dictionary: {
    auth: {
      signIn: {
        title: string;
        welcome: string;
        email: string;
        password: string;
        forgotPassword: string;
        continueWithGoogle: string;
        noAccount: string;
        signUp: string;
        loading: string;
        invalidCredentials: string;
        networkError: string;
      };
    };
  };
}

export default function LoginForm({ dictionary }: AuthProps) {
  const t = dictionary.auth.signIn;

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(t.invalidCredentials);
      } else if (result?.ok) {
        window.location.href = "/";
      }
    } catch {
      setError(t.networkError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 bg-white">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">{t.title}</h1>
          <p className="text-sm text-gray-500">{t.welcome}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.email}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t.email}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.password}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={t.password}
                        className="pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-2 top-2.5 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right text-sm">
              <Link
                href="/auth/forget-password"
                className="text-gray-600 hover:underline"
              >
                {t.forgotPassword}
              </Link>
            </div>
            <Button
              type="submit"
              variant={"default"}
              className={"w-full"}
              disabled={isLoading}
            >
              {isLoading ? t.loading : t.title}
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Image
                src={Google}
                alt="Google Logo"
                width={20}
                height={20}
                className="size-4"
              />
              {t.continueWithGoogle}
            </Button>
            <p className="text-center text-sm text-gray-500">
              {t.noAccount}{" "}
              <Link href="/auth/sign-up">{t.signUp}</Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
