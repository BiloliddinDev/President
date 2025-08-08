"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { getProductDetail } from "@/service/products-service/product-item.service";
import Image from "next/image";
import { useBasketStore } from "@/lib/set-basket.storage";
import { useRouter } from "next/navigation";

interface FavoriteCardProps {
  onRemove?: () => void;
  itemID: number | string;
  dictionary: {
    like: {
      addToBasket: string;
    };
  };
}

export default function FavoriteCard({ onRemove, itemID,dictionary }: FavoriteCardProps) {
  const [product, setProduct] = useState<ProductsInterface | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToBasket } = useBasketStore();
  const router = useRouter();

  // hover va rasm almashish uchun states
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const images =
    product?.media?.map(
      (media) => `${process.env.NEXT_PUBLIC_ADMIN_URL}${media.filePath}`
    ) || [];

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

    fetchProduct();
  }, [itemID]);

  // Hover bo‘lganda rasm almashish
  useEffect(() => {
    let next = 1;

    if (hovered && images.length > 1) {
      setCurrentImageIndex(1);
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex(() => {
          const nextIndex = next % images.length;
          next++;
          return nextIndex;
        });
      }, 1500);
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
        imageIntervalRef.current = null;
      }
    };
  }, [hovered, images.length]);

  if (!loading && !product) return null;

  const handleAddToCart = () => {
    if (!product) return;

    addToBasket({
      id: product.id,
      name: product.name,
      basePriceToUSD: product.basePriceToUSD,
      price: product.prices[0].price,
      sku: product.sku,
      imgUrl: product.media[0]?.filePath || "",
    });

    router.push("/basket");
  };
  return (
    <div
      className="flex flex-col gap-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <div className="rounded overflow-hidden relative w-full pt-[125%] bg-neutral-100 max-w-[300px] max-h-[300px]">
          {loading ? (
            <Skeleton className="absolute top-0 left-0 w-full h-full" />
          ) : (
            images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Like image ${index}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                  index === currentImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))
          )}

          {/* Heart bosilganda ham favoritdan o‘chirish */}
          {!loading && (
            <Heart
              onClick={onRemove}
              className="absolute top-3 right-3 w-5 h-5 fill-primary text-primary cursor-pointer hover:scale-110 transition-transform"
            />
          )}
        </div>

        <div className="mt-4">
          {loading ? (
            <>
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </>
          ) : (
            <>
              <h3 className="text-lg text-gray-900 font-inter">{product?.name}</h3>
              {product?.prices.filter((price) => price.currency.code === "UZS")[0] && (
                <p className="text-sm text-gray-500 mt-1">
                  {product?.prices
                    .filter((price) => price.currency.code === "USD")[0]
                    .price.toLocaleString()}{" "}
                  USD
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        {loading ? (
          <>
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-10 h-10" />
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={handleAddToCart} className="h-10">
           {dictionary.like.addToBasket}
            </Button>
            <Button
              onClick={onRemove}
              variant="secondary"
              className="p-0 w-10 h-10 flex items-center justify-center"
            >
              <Trash className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
