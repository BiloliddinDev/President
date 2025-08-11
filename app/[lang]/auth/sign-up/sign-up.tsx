"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RegisterSchema } from "@/interface/auth-schema/register-schema";
import Image from "next/image";
import Google from "@/public/svg/googole.svg";
import { signIn } from "next-auth/react";
import { createUserAndSignIn } from "@/lib/auth";
import { useRouter } from "next/navigation";

type RegisterFormValues = z.infer<typeof RegisterSchema>;

interface AuthProps {
  dictionary: {
    auth: {
      signUp: {
        title: string;
        subtitle: string;
        fullName: string;
        fullNamePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        password: string;
        confirmPassword: string;
        signUpBtn: string;
        creating: string;
        continueGoogle: string;
        alreadyAccount: string;
        login: string;
      };
    };
  };
}

export default function RegisterForm({ dictionary }: AuthProps) {
  const t = dictionary.auth.signUp;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);
    const res = await createUserAndSignIn({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    });
    setLoading(false);

    if (res?.success) {
      router.push("/");
    } else {
      console.error("Register error:", res?.error || "Unknown error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
          <p className="text-sm text-gray-500">{t.subtitle}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.fullName}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={t.fullNamePlaceholder} {...field} />
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
                  <FormLabel>{t.email}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t.emailPlaceholder} {...field} />
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
                        placeholder="••••••••"
                        className="pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.confirmPassword}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t.creating : t.signUpBtn}
            </Button>

            <Button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Image src={Google} alt="Google Logo" width={20} height={20} />
              {t.continueGoogle}
            </Button>

            <div className="text-center text-sm text-gray-500">
              {t.alreadyAccount}{" "}
              <Link href="/auth/sign-in" className="text-gray-800 hover:underline">
                {t.login}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
