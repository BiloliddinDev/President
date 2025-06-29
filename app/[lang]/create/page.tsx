import { getDictionary } from "@/lib/get-dictionary";
import { CreateContentClient } from "./CreateContentClient";

interface CreatePageProps {
        params: Promise<{ lang: "uz" | "ru" | "en" }>;
}

export default async function CreateContentPage({ params }: CreatePageProps) {
    
   const CreatePageParam : {lang: "uz" | "ru" | "en"} = await params;
   const dictionary = await getDictionary(CreatePageParam.lang);

    return <CreateContentClient dictionary={dictionary} />;
}
