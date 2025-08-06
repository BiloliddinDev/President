import Image from "next/image";
import {useEffect, useState} from "react";
import {getProductDetail} from "@/service/products-service/product-item.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import Link from "next/link";


export const OrderCardItem = ({elementID}: { elementID: number }) => {
    const [productDetail, setProductDetail] = useState<ProductsInterface>()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductDetail(elementID);
                setProductDetail(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
            }
        };

        fetchProduct().then().catch().finally();
    }, [elementID]);


    console.log(productDetail, "this is product detail")

    return (
        <div className={"flex items-center justify-between w-full"}>
            <div className={'flex gap-8'}>
                {productDetail?.media?.[0]?.filePath ? (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${productDetail.media[0].filePath}`}
                        alt={'Order image'}
                        width={80}
                        height={80}
                    />
                ) : (
                    <div className="w-[80px] h-[80px] bg-gray-200 rounded" />
                )}

                <div className={"flex flex-col justify-start items-start gap-2"}>
                    <h4 className="text-center justify-start text-primary text-sm font-medium leading-tight">
                        {productDetail?.name}
                    </h4>
                    <p className="justify-start text-primary text-xs font-medium  leading-none">
                        {productDetail?.prices?.[0]?.price.toFixed() ?? "—"}
                    </p>
                </div>
            </div>
            {productDetail?.id && (
                <Link href={`/detail/${productDetail.id}`}>Посмотреть элемент</Link>
            )}
        </div>
    )
}
