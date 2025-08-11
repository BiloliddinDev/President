import { getDictionary } from "@/lib/get-dictionary";
import RegisterForm from "./sign-up"

interface AuthProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function Register({ params }: AuthProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

    return (
      <RegisterForm dictionary={dictionary}/>
    )
}
