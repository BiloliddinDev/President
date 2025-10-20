import {ProductDetailService} from "@/service/products-service/product-detail.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import ProductDetailPage from "./product-detail";
import { getDictionary } from "@/lib/get-dictionary";

interface DetailPageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | 'az', detail: string }>;
}

export default async function Page({params}: DetailPageProps) {

    const DetailPageParam: { lang: "uz" | "ru" | "en" | 'tj' | "az", detail: string } = await params;
    const product: ProductsInterface = await ProductDetailService(Number(DetailPageParam.detail)) as ProductsInterface
    const dictionary = await getDictionary(DetailPageParam.lang);


    return <ProductDetailPage product={product} dictionary={dictionary}/>;
}
