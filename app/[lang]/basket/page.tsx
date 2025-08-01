import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {BasketLeftSection} from "@/app/[lang]/basket/components/basket-left-section";
import BasketRightSection from "@/app/[lang]/basket/components/basket-right-section";
import {getDictionary} from "@/lib/get-dictionary";


interface BasketPageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | 'az', category: string }>;
}

export default async function BasketPage({params}: BasketPageProps) {
    const HomePageParam: { lang: "uz" | "ru" | "en" | 'tj' | "az", category: string } = await params;
    const dictionary = await getDictionary(HomePageParam.lang);


    console.log(dictionary)

    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <h2 className="text-primary text-4xl font-medium leading-10 my-5">Корзина для покупок</h2>
            </div>
            <div className={"container md:!mt-20  !mt-10 flex md:flex-row flex-col-reverse justify-between  gap-10 "}>
                <BasketLeftSection/>
                <BasketRightSection/>
            </div>
        </div>
    );
}
