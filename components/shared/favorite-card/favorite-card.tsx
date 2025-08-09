"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { getProductDetail } from "@/service/products-service/product-item.service";
import Image from "next/image";
import { useBasketStore } from "@/lib/set-basket.storage";
import { useRouter } from "next/navigation";
import { getCurrencyCode, getPriceFor } from "@/hooks/price-helpers";
import { formatCurrency } from "@/hooks/formatPrice";

interface FavoriteCardProps {
  onRemove?: () => void;
  itemID: number | string;
  dictionary: {
    like: {
      addToBasket: string;
    };
  };
}

export default function FavoriteCard({ onRemove, itemID, dictionary }: FavoriteCardProps) {
  const [product, setProduct] = useState<ProductsInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { addToBasket } = useBasketStore();
  const router = useRouter();

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

  // Rasm massivini tayyorlash
  const images = product?.media
    ?.filter((media) => media.filePath)
    .map((media) => `${process.env.NEXT_PUBLIC_ADMIN_URL}${media.filePath}`) || [];

  // Rasm almashish uchun interval
  useEffect(() => {
    if (!hovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  if (!loading && !product) return null;

  const code = getCurrencyCode();
  const row = product ? getPriceFor(product.prices as never, code) : undefined;

  const handleAddToCart = () => {
    if (!product) return;

    addToBasket({
      id: product.id,
      name: product.name,
      basePriceToUSD: product.basePriceToUSD,
      price: product.prices, // Birinchi branchdan: to‘liq prices massivi
    //   priceSingle: product.prices[0]?.price || 0, // Ikkinchi branchdan: birinchi narx
      sku: product.sku,
      imgUrl: product.media?.[0]?.filePath || "",
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
            images.length > 0 &&
            images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Like image ${index}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))
          )}

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
              <p className="text-sm text-gray-500 mt-1">
                {row ? formatCurrency({ currency: row.currency, price: row.price }) : "-"}
                {product?.prices?.filter((price) => price.currency.code === "USD")[0] && (
                  <span className="ml-2">
                    {product.prices
                      .filter((price) => price.currency.code === "USD")[0]
                      .price.toLocaleString()}{" "}
                    USD
                  </span>
                )}
              </p>
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