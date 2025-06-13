"use client";

import Imagesss from "@/public/images/product-image.png";
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {LeftImagesSection} from "@/app/[lang]/detail/components/left-image-section/left-image-section";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {StaticImageData} from "next/image";
import {Heart, Share2} from "lucide-react";

type MediaType = {
    type: "image" | "video";
    src: StaticImageData | string;
};

const product = {
    id: "1",
    name: "Extreme 3.0 pouch",
    price: 100,
    description:
        "The Extreme 3.0 pouch is a practical companion for carrying personal items and essentials. The embossed full-grain bovine leather with the Extreme 3.0 motif lends an unmistakable style, as well as the black metal fittings. It can be carried by hand or, thanks to two rear D-ring and a shoulder strap sold separately, it can became a comfortable yet trendy cross-body bag.",
    mediaData: [
        {type: "image", src: Imagesss},
        {
            type: "video",
            src: "https://cdn6.fireworktv.com/medias/2025/2/26/1740578855-cfpvrymo/watermarked/720/MTB_MB199404_T4009_V3030_B0002.mp4"
        },
        {type: "image", src: Imagesss},
        {type: "image", src: Imagesss},
        {type: "image", src: Imagesss},
        {type: "image", src: Imagesss}
    ] as MediaType[],
    material: "Full-grain leather",
    dimensions: "20cm x 15cm x 5cm",
    text: "Complimentary Express Shipping on all orders above €400. Shop now\n" +
        "Free delivery and returns on all orders over €25",
    ident: "MB129074"
};

export default function ProductDetailPage() {
    // const { toggleWishlist } = useWishlistStore()

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
                <LeftImagesSection mediaData={product.mediaData}/>

                <div className="w-1/2">
                    <div className={'flex items-center justify-between gap-4 mb-4'}>
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <div className={"flex items-center gap-5"}>
                            {/*onClick={() => toggleWishlist()}*/}
                            <Heart className={"text-primary w-5 h-5 cursor-pointer"}/>
                            <Share2 onClick={handleShare} className={"text-primary w-5 h-5 cursor-pointer"}/>
                        </div>
                    </div>
                    <p className="text-xl font-medium">${product.price.toFixed(2)}</p>

                    <Button className="w-full mt-4">Add to cart</Button>

                    <p className="text-gray-700 text-sm mt-7">{product.text}</p>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mt-12">Details</h2>
                        <p className="text-gray-700 text-sm mt-2">{product.description}</p>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">Ident No. {product.ident}</p>

                    <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="material">
                            <AccordionTrigger>Material</AccordionTrigger>
                            <AccordionContent>{product.material}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="dimensions">
                            <AccordionTrigger>Dimensions</AccordionTrigger>
                            <AccordionContent>{product.dimensions}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
