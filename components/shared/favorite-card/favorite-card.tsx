import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {Heart, Trash} from "lucide-react";
import {useEffect, useState} from "react";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {getProductDetail} from "@/service/products-service/product-item.service";
import Image from "next/image";

interface FavoriteCardProps {
    onRemove?: () => void;
    itemID: number | string;
}

export default function FavoriteCard({onRemove, itemID}: FavoriteCardProps) {
    const [product, setProduct] = useState<ProductsInterface | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductDetail(itemID);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct().then().catch().finally();
    }, [itemID]);

    if (!loading && !product) return null;

    return (
        <div className="flex flex-col gap-5">
            <div className="relative">
                <div className="rounded overflow-hidden">
                    {loading ? (
                        <Skeleton className="w-full h-80"/>
                    ) : (
                        product?.media[0]?.filePath && (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${product.media[0].filePath}`}
                                alt={`Like image`}
                                width={256}
                                height={320}
                                className="w-full h-80 object-cover"
                            />
                        )
                    )}
                    {!loading && (
                        <Heart className="absolute top-3 right-3 w-5 h-5 fill-primary text-primary cursor-pointer"/>
                    )}
                </div>

                <div className="mt-4">
                    {loading ? (
                        <>
                            <Skeleton className="h-5 w-3/4 mb-2"/>
                            <Skeleton className="h-4 w-1/2"/>
                        </>
                    ) : (
                        <>
                            <h3 className="text-lg text-gray-900 font-inter">{product?.name}</h3>
                            {product?.prices[0]?.price && (
                                <p className="text-sm text-gray-500 mt-1">
                                    ${product.prices[0].price}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="flex gap-4">
                {loading ? (
                    <>
                        <Skeleton className="w-full h-10"/>
                        <Skeleton className="w-10 h-10"/>
                    </>
                ) : (
                    <>
                        <Button variant="secondary">Add to cart</Button>
                        <Button
                            onClick={onRemove}
                            variant="secondary"
                            className="p-0 w-10 h-10 flex items-center justify-center"
                        >
                            <Trash className="w-5 h-5"/>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
