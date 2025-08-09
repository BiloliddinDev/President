"use client";

import { useEffect } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { useSession } from "next-auth/react";

export default function CheckoutForm() {
  const { control, resetField } = useFormContext();
  const { data: session } = useSession();

  // Foydalanuvchi login bo‘lsa, userInformation.name va userInformation.secondment maydonlarini yangilash
  useEffect(() => {
    if (session?.user) {
      const fullName =
        session.user.authType === "custom"
          ? session.user.serverData?.full_name
          : session.user.name;
      if (fullName) {
        const [firstName = "", secondName = ""] = fullName.split(" ");
        resetField("userInformation.name", {
          defaultValue: firstName.trim() || "",
        });
        resetField("userInformation.secondment", {
          defaultValue: secondName.trim() || "",
        });
      }
    }
  }, [session, resetField]);

  return (
    <div className="p-6 rounded-[4px] border mt-4">
      <h2 className="text-lg font-semibold mb-4">Информация о получателе</h2>

      <div className="space-y-5">
        <FormField
          control={control}
          name="userInformation.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Введите имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="userInformation.secondment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия</FormLabel>
              <FormControl>
                <Input placeholder="Введите фамилию" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="userInformation.phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input placeholder="Enter your number.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="userInformation.secondPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дополнительный номер (необязательно)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your second number.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}