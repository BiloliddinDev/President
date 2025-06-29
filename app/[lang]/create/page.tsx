import {getDictionary} from "@/lib/get-dictionary";
import {CreateContentClient} from "./CreateContentClient";

interface CreatePageProps {
    params: { lang: "uz" | "ru" | "en", category: string };
}

export default async function CreateContentPage({params}: CreatePageProps) {

    const CreatePageParam: { lang: "uz" | "ru" | "en", category: string } = await params;
    const dictionary = await getDictionary(CreatePageParam.lang);
    return <CreateContentClient dictionary={dictionary}/>;
}
