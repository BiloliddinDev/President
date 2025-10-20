import AccountPage from "./account";
import { getDictionary } from "@/lib/get-dictionary";

interface AccountProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function Account({ params }: AccountProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return <AccountPage dictionary={dictionary}/>;
}
