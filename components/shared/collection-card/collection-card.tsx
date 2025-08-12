"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import Link from "next/link";
import { formatCurrency } from "@/hooks/formatPrice";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/lib/set-wishlist.storage";
import { getProductDetail } from "@/service/products-service/product-item.service";

export const CollectionCard: FC<{
  newsItem: ProductsInterface;
  lang?: "uz" | "ru" | "en";
}> = ({ newsItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [productCategory, setProductCategory] = useState<ProductsInterface>(
    {} as ProductsInterface
  );
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isLiked = isInWishlist(newsItem.id);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hovered) {
      setCurrentIndex(1);
      let next = 1;
      interval = setInterval(() => {
        setCurrentIndex(() => {
          const nextIndex = next % newsItem.media.length;
          next++;
          return nextIndex;
        });
      }, 1500);
    } else {
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
  }, [hovered, newsItem.media.length]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductDetail(newsItem.id);
        setProductCategory(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
      }
    };

    fetchProduct().then().catch().finally();
  }, [newsItem.id]);

  return (
    <div
      className="w-full group relative flex flex-col rounded-lg transition bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => toggleWishlist(newsItem.id)}
        className="absolute right-5 top-3 z-40 cursor-pointer  transition"
      >
        <Heart
          className={`w-5 h-5 ${isLiked ? "fill-primary text-primary" : ""}`}
        />
      </button>
      {productCategory.categories.length > 0 && (
        <Link
          href={`/shops/${productCategory.categories[0].name}id${productCategory.categories[0].id}/${newsItem.id}`}
        >
          <div className="relative w-[300px] h-[300px] overflow-hidden cursor-pointer">
            {newsItem.media &&
              newsItem.media.map((img, index) => (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${img.filePath}`}
                  alt={newsItem.name || "COLLECTION IMAGE"}
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    index === currentIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                />
              ))}
          </div>

          <p className="mt-4 text-primary text-sm font-normal text-center">
            {newsItem.name}
          </p>
          <p className="text-gray-600 mt-2 text-sm font-normal text-center">
            {formatCurrency(newsItem.locale_price)}
          </p>
        </Link>
      )}
    </div>
  );
};
