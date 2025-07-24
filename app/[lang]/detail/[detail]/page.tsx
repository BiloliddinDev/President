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
    }, [detail, loading]);

    // const addToBasket = useBasketStore(state => state.addToBasket);

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


    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic/>

            <div className="w-full flex items-start justify-center gap-24 mt-10">
                <LeftImagesSection mediaData={product?.media}/>

                <div className="w-1/2">
                    <div className={'flex items-center justify-between gap-4 mb-4'}>
                        <h1 className="text-2xl font-semibold">{product?.name}</h1>
                        <div className={"flex items-center gap-5"}>
                            <Heart className={"text-primary w-5 h-5 cursor-pointer"}/>
                            <Share2 onClick={handleShare} className={"text-primary w-5 h-5 cursor-pointer"}/>
                        </div>
                    </div>
                    <p className="text-xl font-medium">${product?.prices[0].price}</p>

                    <Button className="w-full mt-4">Add to cart</Button>


                    <p className="text-gray-700 text-sm mt-7">{`Complimentary Express Shipping on all orders above €400. Shop now Free delivery and returns on all orders over €25`}</p>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mt-12">Details</h2>
                        <p className="text-gray-700 text-sm mt-2">{product?.description}</p>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">Ident No. {product?.sku}</p>

                    <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="material">
                            <AccordionTrigger>Material</AccordionTrigger>
                            <AccordionContent>Lorem ipso dolor set </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="dimensions">
                            <AccordionTrigger>Dimensions</AccordionTrigger>
                            <AccordionContent>Lorem ipso dolor set </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
