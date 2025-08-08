"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaqsSchema } from "@/interface/service-schema/faqs-schema";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { sendTelegramMessage } from "@/lib/send-telegram-message";
// import { LangType } from "@/interface/lang/lang-type";
import { AutoCloseModal } from "@/components/shared/form-modal/auto-closeModal";
import { CheckCircle } from "lucide-react";
interface FaqsFormProps {
  dictionary: {
    support: {
      title: string;
      supportform: string;
      form: {
        name: {
          label: string;
          placeholder: string;
        };
        phone: {
          label: string;
          placeholder: string;
        };
        submit: string;
      };
      messages: {
        required: string;
        min: string;
        max: string;
        invalid: string;
        success: string;
        error: string;
        serverError: string;
        modalSuccessTitle: string;
        modalSuccessDescription: string;
      };
    };
    service: {
      appointment: {
        title1: string;
        supportform: string;
        title: string;
        description: string;
        form: {
          name: {
            label: string;
            placeholder: string;
          };
          phone: {
            label: string;
            placeholder: string;
          };
          email: {
            label: string;
            placeholder: string;
          };
          location: {
            label: string;
            placeholder: string;
          };
          contact: {
            label: string;
            placeholder: string;
          };
          date: {
            label: string;
          };
          time: {
            label: string;
          };
          comment: {
            label: string;
            placeholder: string;
          };
          submit: string;
          reposts: string;
          commentandques: {
            label: string;
            placeholder: string;
          };
        };
        messages: {
          required: string;
          min: string;
          max: string;
          invalid: string;
          success: string;
          error: string;
          serverError: string;
          modalSuccessTitle: string;
          modalSuccessDescription: string;
        };
        privacyNote: string;
        privacyLink: string;
      };
    };
  };
  lang?: "uz" | "ru" | "en" | "az" | "tj";
  showtime?: boolean;
}
type FormValues = z.infer<typeof FaqsSchema>;

export default function FaqsForm({ dictionary }: FaqsFormProps) {
  const [showModal, setShowModal] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(FaqsSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      comment: "",
      social: "",
      agree: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const success = await sendTelegramMessage({
      type: "Contact Us",
      fields: data,
    });

    if (success) {
      setShowModal(true);
      form.reset({
        fullName: "",
        phone: "",
        email: "",
        comment: "",
        social: "",
        agree: false,
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[80%] mt-7 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem data-aos="fade-left" data-aos-delay="0">
                <FormLabel>{dictionary.service.appointment.form.name.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dictionary.service.appointment.form.name.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem data-aos="fade-left" data-aos-delay="300">
                <FormLabel>{dictionary.service.appointment.form.phone.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dictionary.service.appointment.form.phone.placeholder}
                    {...field}
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
              <FormItem data-aos="fade-left" data-aos-delay="600">
                <FormLabel>
                  {dictionary.service.appointment.form.email.label}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dictionary.service.appointment.form.email.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="social"
            render={({ field }) => (
              <FormItem data-aos="fade-left" data-aos-delay="900">
                <FormLabel>
                  {dictionary.service.appointment.form.contact.label}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      dictionary.service.appointment.form.contact.placeholder
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem data-aos="fade-left" data-aos-delay="1200">
                  <FormLabel>
                    {dictionary.service.appointment.form.commentandques.label}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder={
                        dictionary.service.appointment.form.commentandques.placeholder
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={"mt-5 text-sm font-medium  leading-tight"}>
              {dictionary.service.appointment.privacyNote}
              <Link className={"underline"} href={"#"}>
                {dictionary.service.appointment.privacyLink}
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex items-start gap-2 mt-2">
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem
                  data-aos="fade-left"
                  data-aos-delay="1500"
                  className="flex items-start space-x-2"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="text-sm text-gray-600">
                    {dictionary.service.appointment.form.reposts}
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <Button type="submit" variant={"default"}>
              {dictionary.service.appointment.form.submit}
            </Button>
          </div>
        </form>
      </Form>
      <AutoCloseModal
        title={dictionary.support.messages.modalSuccessTitle}
        text={dictionary.support.messages.modalSuccessDescription}
        duration={8000}
        icon={<CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
