import { getDictionary } from '@/lib/get-dictionary';
import ServerErrorPage from './notFound';

interface ServerErrorProps {
    params: Promise<{
      lang: "uz" | "ru" | "en" | "tj" | "az";
    }>;
  }
  
  export default async function ServerError({ params }: ServerErrorProps) {
    const param = await params.then((params) => params);
    const dictionary = await getDictionary(param.lang);

    return (
       <ServerErrorPage dictionary={dictionary}/>
    );
}
