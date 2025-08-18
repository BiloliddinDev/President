"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { useWishlistStore } from "@/lib/set-wishlist.storage";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatCurrency } from "@/hooks/formatPrice";
import { getProductDetail } from "@/service/products-service/product-item.service";

interface ProductsCardProps {
  productData: ProductsInterface;
  className?: string;
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found?: string;
      unavailable?: string;
      show_more?: string;
    };
    sortAndView?: {
      productsLabel: string;
      sortBy: string;
      options: {
        newest: string;
        priceAsc: string;
        priceDesc: string;
      };
    };
  };
}

export const ProductsCard = ({
  productData,
  className,
  dictionary,
}: ProductsCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isLiked = isInWishlist(productData.id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [productCategory, setProductCategory] = useState<ProductsInterface>(
    {} as ProductsInterface
  );
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const images =
    productData.media?.map(
      (media) => `${process.env.NEXT_PUBLIC_ADMIN_URL}${media.filePath}`
    ) || [];

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductDetail(productData.id);
        setProductCategory(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
      }
    };

    fetchProduct().then().catch().finally();
  }, [productData.id]);

  return (
    <div
      className={`${className} group relative flex flex-col rounded-lg transition hover:shadow-md bg-white pb-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => toggleWishlist(productData.id)}
        className="absolute right-3 top-3 z-40 text-gray-500 cursor-pointer hover:text-primary transition"
      >
        <Heart
          className={`w-5 h-5 ${isLiked ? "fill-primary text-primary" : ""}`}
        />
      </button>

      {productCategory?.categories?.length > 0 && (
        <Link
          href={`/shops/${productCategory.categories[0].name}id${productCategory.categories[0].id}/${productData.id}`}
        >
          <div className="relative w-full pt-[100%] mb-4 bg-neutral-100 rounded-[4px] overflow-hidden">
            {images.map((img, index) => (
              <Image
                key={index}
                alt={`product-${productData.id}`}
                src={img}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover absolute top-0 left-0 transition-opacity duration-700 rounded ${
                  index === currentImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </Link>
      )}

      {productCategory?.categories?.length > 0 && (
        <Link
          href={`/shops/${productCategory?.categories[0].name}id${productCategory?.categories[0].id}/${productData.id}`}
          className="flex flex-col justify-between h-full p-3"
        >
          {productData.meta._new_product && (
            <span className="mb-3 w-fit rounded border px-2 py-0.5 text-xs font-medium text-gray-700">
              {dictionary.category.new}
            </span>
          )}
          <h3 className="text-sm font-medium mb-2 text-gray-900">
            {productData.name}
          </h3>
          <div className="flex justify-between items-center ">
            <p className="text-sm text-gray-500">
              {formatCurrency(productData.locale_price)}
            </p>
            <button className="cursor-pointer">
              <ShoppingCart
                width={24}
                height={24}
                className="text-primary !hover:text-zinc-300 duration-200 mr-1"
              />
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};
