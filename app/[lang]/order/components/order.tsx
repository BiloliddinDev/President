"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import AddressForm from "@/app/[lang]/order/components/delivery-method";
import OrderSummary from "@/app/[lang]/order/components/order-summary";
import {
  OrderFormData,
  OrderSchema,
} from "@/interface/order-schema/order-schema";
import CheckoutForm from "@/app/[lang]/order/components/checkout-form";
import OrderedProducts from "@/app/[lang]/order/components/order-produc-list";
import { useBasketStore } from "@/lib/set-basket.storage";
import OrderSuccessModal from "@/components/shared/order-modal/Order-success-modal";
import { useState } from "react";
import { useSession } from "next-auth/react";

export interface OrderProps {
  dictionary: {
    order: {
      created: string;
      check: string;
      addressForm: {
        title: string;
        addressLabel: string;
        addressPlaceholder: string;
        addressHint: string;
        locationLabel: string;
        mapButton: string;
        mapModalTitle: string;
        mapModalDescription: string;
        saveLocationButton: string;
      };
      productList: {
        article: string;
        orderedProducts: string;
      };
      checkoutForm: {
        title: string;
        name: {
          title: string;
          placeholder: string;
        };
        surname: {
          title: string;
          placeholder: string;
        };
        phone: {
          title: string;
          placeholder: string;
        };
        secondPhone: {
          title: string;
          placeholder: string;
        };
      };
      summary: {
        title: string;
        totalProducts: string;
        unit: string;
        productPrices: string;
        total: string;
        checkoutButton: string;
      };
      successModal: {
        title: string;
        description: string;
        goHome: string;
        goAccount: string;
      };
    };
  };
}

export default function OrderPage({ dictionary }: OrderProps) {
  const { items } = useBasketStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  const methods = useForm<OrderFormData>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      address: {
        text: "",
        location: {
          lat: 41.3,
          lng: 69.2,
        },
      },
      userInformation: {
        name: "",
        secondment: "",
        phone: "",
        secondPhone: "",
      },
    },
  });


  const onSubmit = async (data: OrderFormData) => {
    try {
      const payload = {
        customerId: session?.user.serverData?.id,
        status: "CONFIRMED",
        client_first_phone: data.userInformation.phone,
        client_second_phone: data.userInformation.secondPhone,
        address: {
          countryCode: "UZ",
          location:` ${data.address.text}`,
          latitude: data.address.location.lat,
          longitude: data.address.location.lng,
        },
        totalAmount: items.reduce(
          (total, item) => total + item.basePriceToUSD * item.quantity,
          0
        ),
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          unitPrice: item.basePriceToUSD,
          totalPrice: item.basePriceToUSD * item.quantity,
        })),
      };
      console.log(payload)

      const authString = btoa(
        `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
      );

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authString}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Xatolik yuz berdi: " + res.status);
      }

      const result = await res.json();
      console.log("Buyurtma muvaffaqiyatli:", result);

      setIsModalOpen(true);
    } catch (error) {
      console.error("Buyurtma yuborishda xatolik:", error);
    }
  };
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      <div className={"container md:!mt-26 !mt-42"}>
        <BreadcrumbDynamic />
        <h2 className="text-primary text-4xl font-medium leading-10 my-5">
          {dictionary.order.check}
        </h2>
        <p className="text-gray-500 text-base font-medium leading-tight tracking-tight">
          {dictionary.order.created}: {year}:{month}:{day} / {hours}:{minutes}
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="container flex flex-col-reverse md:flex-row justify-between gap-10 !mt-5 relative">
            <div className={"w-full"}>
              <AddressForm dictionary={dictionary} />
              <OrderedProducts products={items} dictionary={dictionary} />
              <CheckoutForm dictionary={dictionary} />
            </div>
            <OrderSummary dictionary={dictionary} />
          </div>
        </form>
      </FormProvider>

      <OrderSuccessModal
        dictionary={dictionary}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
