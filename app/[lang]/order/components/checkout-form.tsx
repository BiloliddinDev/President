"use client";

import { useEffect } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { useSession } from "next-auth/react";
import { OrderProps } from "./order";

export default function CheckoutForm({ dictionary }: OrderProps) {
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
      <h2 className="text-lg font-semibold mb-4">
        {dictionary.order.checkoutForm.title}
      </h2>

      <div className="space-y-5">
        <FormField
          control={control}
          name="userInformation.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.order.checkoutForm.name.title}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.order.checkoutForm.name.placeholder} {...field} />
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
              <FormLabel>{dictionary.order.checkoutForm.surname.title}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.order.checkoutForm.surname.placeholder} {...field} />
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
              <FormLabel>{dictionary.order.checkoutForm.phone.title}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.order.checkoutForm.phone.placeholder} {...field} />
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
              <FormLabel>{dictionary.order.checkoutForm.secondPhone.title}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.order.checkoutForm.secondPhone.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
