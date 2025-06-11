"use client";

import Imagesss from "@/public/images/news1.png";
import {use} from 'react';
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {LeftImagesSection} from "@/app/[lang]/detail/components/left-image-section/left-image-section";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const products = [
    {
        id: "1",
        name: "Extreme 3.0 pouch",
        price: 100,
        description:
            "The Extreme 3.0 pouch is a practical companion for carrying personal items and essentials...",
        mediaData: [
            {type: "image", src: Imagesss},
            {
                type: "video",
                src: "https://cdn6.fireworktv.com/medias/2025/2/26/1740578855-cfpvrymo/watermarked/720/MTB_MB199404_T4009_V3030_B0002.mp4"
            },
            {type: "image", src: Imagesss},
            {type: "image", src: Imagesss},
            {type: "image", src: Imagesss},
        ],
        material: "Full-grain leather",
        dimensions: "20cm x 15cm x 5cm",
        ident: "MB129074",
    },
];

interface PageProps {
    params: Promise<{ detail: string }>;
}

export default function ProductDetailPage({params}: PageProps) {
    const {detail} = use(params);
    const product = products.find((p) => p.id === detail);

    if (!product) return <div className="p-10">Product not found</div>;

    return (
        <div className="container !mt-31">
            <BreadcrumbDynamic/>

            <div className={'w-full flex items-start justify-center gap-24  mt-10'}>
                <LeftImagesSection imagesData={product.mediaData}/>
                <div className="w-1/2">
                    <h1 className="text-2xl font-semibold">{product.name}</h1>
                    <p className="text-xl font-medium">${product.price.toFixed(2)}</p>

                    <Button className="w-full">Add to cart</Button>

                    <div>
                        <h2 className="text-lg font-semibold">Details</h2>
                        <p className="text-gray-700 text-sm mt-2">{product.description}</p>
                    </div>

                    <p className="text-sm text-gray-600">Ident No. {product.ident}</p>

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
    )
}