import ForgetPassword from "./forget-password";
import { getDictionary } from "@/lib/get-dictionary";

interface AuthProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function Forget({ params }: AuthProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return <ForgetPassword dictionary={dictionary}/>;
}
