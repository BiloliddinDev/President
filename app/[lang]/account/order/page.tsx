import OrderPage from "./order";
import { getDictionary } from "@/lib/get-dictionary";

interface OrderProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function Order({ params }: OrderProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return <OrderPage dictionary={dictionary}/>;
}
