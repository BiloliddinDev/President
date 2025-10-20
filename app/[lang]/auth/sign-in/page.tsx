import LoginForm from "./sign-in";
import { getDictionary } from "@/lib/get-dictionary";

interface AuthProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function Login({ params }: AuthProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return <LoginForm dictionary={dictionary}/>;
}
