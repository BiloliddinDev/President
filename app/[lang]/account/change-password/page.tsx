import ChangePasswordPage from "./changePassword";
import { getDictionary } from "@/lib/get-dictionary";

interface ChangeProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
  }>;
}

export default async function ChangePassword({ params }: ChangeProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return <ChangePasswordPage dictionary={dictionary} />;
}
