'use client';

import {useState} from "react";
import Image, {StaticImageData} from "next/image";
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import customImage from '@/public/images/category4.png'

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: StaticImageData;
}

const initialProducts: Product[] = [
    {
        id: 1,
        title: "Махсулот 1",
        description: "Кыскача та’риф",
        price: 25000000,
        quantity: 1,
        image: customImage
    },
    {
        id: 2,
        title: "Махсулот 2",
        description: "Бу махсулотнинг кыскача та’рифи",
        price: 38000000,
        quantity: 2,
        image: customImage
    },
];

export default function BasketLeftSection() {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    const increaseQuantity = (id: number) => {
        setProducts(prev =>
            prev.map(p => p.id === id ? {...p, quantity: p.quantity + 1} : p)
        );
    };

    const decreaseQuantity = (id: number) => {
        setProducts(prev =>
            prev.map(p =>
                p.id === id && p.quantity > 1 ? {...p, quantity: p.quantity - 1} : p
            )
        );
    };

    const removeProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div className="w-full lg:w-[70%] pr-4 space-y-4">
            {products.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 border rounded-[4px] p-4 ">
                    <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24 shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <p className="text-sm text-gray-600 mt-1">Цена: <span
                                className="font-semibold">{item.price.toLocaleString()} сум</span></p>
                            <p className="text-sm text-gray-600">Общая сумма: <span
                                className="font-semibold">{(item.price * item.quantity).toLocaleString()} сум</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" onClick={() => decreaseQuantity(item.id)}>
                                -
                            </Button>
                            <span className="px-2 font-medium">{item.quantity}</span>
                            <Button className={'bg-primary text-white'} variant="outline" size="icon"
                                    onClick={() => increaseQuantity(item.id)}>
                                +
                            </Button>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeProduct(item.id)}
                        >
                            <Trash2 className="w-5 h-5"/>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
