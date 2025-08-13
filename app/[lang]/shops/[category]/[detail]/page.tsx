import {ProductDetailService} from "@/service/products-service/product-detail.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import ProductDetailPage from "./product-detail";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

interface DetailPageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | 'az', detail: string }>;
}




export async function generateMetadata(
    { params }: DetailPageProps
  ): Promise<Metadata> {
    
    const DetailPageParam: { lang: "uz" | "ru" | "en" | 'tj' | "az", detail: string } = await params;
    const product: ProductsInterface = await ProductDetailService(Number(DetailPageParam.detail)) as ProductsInterface


    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        url: `https://presidentgift.com/shops/${product.categories[0].name}id${product.categories[0].id}/${product.id}`,
        siteName: "President Business Gifts",
        locale: DetailPageParam.lang,
        type: "website",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_ADMIN_URL}${product?.media[0].filePath}`,
            width: 1200,
            height: 630,
            alt: product.name || "President Business Gifts",
          },
        ],
      },
    };
  }


export default async function Page({params}: DetailPageProps) {

    const DetailPageParam: { lang: "uz" | "ru" | "en" | 'tj' | "az", detail: string } = await params;
    const product: ProductsInterface = await ProductDetailService(Number(DetailPageParam.detail)) as ProductsInterface
    const dictionary = await getDictionary(DetailPageParam.lang);
console.log(product)

    return <ProductDetailPage product={product} dictionary={dictionary}/>;
}
