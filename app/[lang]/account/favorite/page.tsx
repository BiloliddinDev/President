import { getDictionary } from "@/lib/get-dictionary";
import FavoritePage from "./favorite";

interface FavoriteProps {
    params: Promise<{
      lang: "uz" | "ru" | "en" | "tj" | "az";
    }>;
  }
  
  export default async function Favorite({ params }: FavoriteProps) {
    const param = await params.then((params) => params);
    const dictionary = await getDictionary(param.lang);
  
    return (
       <FavoritePage dictionary={dictionary}/>
    );
}