"use client";

import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Heart, Share2} from "lucide-react";
import {useEffect, useState} from "react";
import {getProductDetail} from "@/service/products-service/product-item.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {useParams} from 'next/navigation'
import {LeftImagesSection} from "@/app/[lang]/detail/components/left-image-section/left-image-section";

export default function ProductDetailPage() {
    const {detail} = useParams();
    const [product, setProduct] = useState<ProductsInterface | null>();
    const [loading, setLoading] = useState(true);

    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductDetail(Number(detail));
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        console.log(loading)
        fetchProduct().then().catch().finally();
    }, [detail]);

    const handleShare = () => {
        const shareData = {
            title: "Check out this product!",
            text: "Extreme 3.0 pouch is awesome!",
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData).catch(console.error);
        } else {
            alert("Sharing is not supported on this device.");
        }
    };

    const handleAddToCart = () => {
        setAddedToCart(true);
        setQuantity(1); 
    };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        setQuantity(prev => {
            const newQuantity = Math.max(0, prev - 1);
            if (newQuantity === 0) {
                setAddedToCart(false);
            }
            return newQuantity;
        });
    };

    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic/>

            <div className="w-full flex items-start justify-center gap-24 mt-10">
                <LeftImagesSection mediaData={product?.media}/>

                <div className="w-1/2">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <h1 className="text-2xl font-semibold">{product?.name}</h1>
                        <div className="flex items-center gap-5">
                            <Heart className="text-primary w-5 h-5 cursor-pointer"/>
                            <Share2 onClick={handleShare} className="text-primary w-5 h-5 cursor-pointer"/>
                        </div>
                    </div>

                    <p className="text-xl font-medium">${product?.prices[0].price}</p>

                    {!addedToCart ? (
                        <Button className="w-full mt-4" onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                    ) : (
                        <div className="mt-4 flex items-center gap-2">
                            <Button variant={"outline"} onClick={decreaseQuantity}>-</Button>
                            <div
                                className="px-4 py-2 border w-[100px] flex items-center justify-center rounded text-sm">
                                <span className={'font-bold '}>{quantity}</span> шт
                            </div>
                            <Button className={"bg-primary"} onClick={increaseQuantity}>+</Button>
                            <Button className="ml-2">
                                Корзина →
                            </Button>
                        </div>
                    )}

                    <p className="text-gray-700 text-sm mt-7">
                        Complimentary Express Shipping on all orders above €400. Free delivery and returns on all orders
                        over €25.
                    </p>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mt-12">Details</h2>
                        <p className="text-gray-700 text-sm mt-2">{product?.description}</p>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">Ident No. {product?.sku}</p>

                    <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="material">
                            <AccordionTrigger>Material</AccordionTrigger>
                            <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="dimensions">
                            <AccordionTrigger>Dimensions</AccordionTrigger>
                            <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
