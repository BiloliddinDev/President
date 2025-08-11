"use client";

import { Heart, Share2 } from "lucide-react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { LeftImagesSection } from "@/app/[lang]/detail/components/left-image-section/left-image-section";
import { useBasketStore } from "@/lib/set-basket.storage";
import Link from "next/link";
import { useWishlistStore } from "@/lib/set-wishlist.storage";
import FormattedText from "@/components/shared/formatted-text/formatted-text";
import { formatCurrency } from "@/hooks/formatPrice";

interface DetailProps {
  product: ProductsInterface;
  dictionary: {
    detail: {
      addToCart: string;
      inBasket: string;
      quantity: string;
      basket: string;
      deliveryInfo: string;
      details: string;
      shareTitle: string;
      shareText: string;
      shareUnsupported: string;
    };
  };
}

export default function ProductDetailPage({
  product,
  dictionary,
}: DetailProps) {
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isLiked = isInWishlist(Number(product?.id));

  const { addToBasket, increaseQuantity, decreaseQuantity, items } =
    useBasketStore();
  const basketItem = items.find((item) => item.id === product?.id);
  const quantity = basketItem?.quantity || 0;

  const price = product?.locale_price ?? product?.prices?.[0]?.price ?? null;

  const handleShare = () => {
    const shareData = {
      title: dictionary.detail.shareTitle,
      text: dictionary.detail.shareText,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      alert(dictionary.detail.shareUnsupported);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToBasket({
        id: product.id,
        name: product.name,
        basePriceToUSD: product.basePriceToUSD,
        price: product.prices,
        sku: product.sku,
        imgUrl: product.media[0].filePath,
      });
    }
  };

  return (
    <div className="container md:!mt-26 !mt-42 relative">
      <BreadcrumbDynamic url={product?.name} />

      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-12 mt-10">
        <LeftImagesSection mediaData={product?.media} />

        <div className="w-full lg:w-1/2 sticky top-20 right-0">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl font-semibold">{product?.name}</h1>
            <div className="flex items-center gap-5">
              <Heart
                onClick={() => toggleWishlist(Number(product?.id))}
                className={`w-5 h-5 cursor-pointer ${
                  isLiked ? "fill-primary text-primary" : ""
                }`}
              />
              <Share2
                onClick={handleShare}
                className="text-primary w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <p className="text-xl font-medium">
            {price != null ? formatCurrency(price) : "—"}
          </p>

          {quantity === 0 ? (
            <Button className="w-full mt-4" onClick={handleAddToCart}>
              {dictionary.detail.addToCart}
            </Button>
          ) : (
            <div className="w-full mt-4 flex items-center gap-[2%] flex-wrap">
              <Button
                className="w-[32%]"
                variant="outline"
                onClick={() => decreaseQuantity(product!.id)}
              >
                -
              </Button>
              <div className="px-4 py-2 border w-[32%] flex items-center justify-center rounded text-sm">
                <span className="font-bold">{quantity}</span>{" "}
                {dictionary.detail.quantity}
              </div>
              <Button
                className="bg-primary w-[32%]"
                onClick={() => increaseQuantity(product!.id)}
              >
                +
              </Button>
              <Link href="/basket" className="!mt-3 w-[100%]">
                <Button className="w-full">{dictionary.detail.basket}</Button>
              </Link>
            </div>
          )}

          <p className="text-gray-700 text-sm mt-7">
            {dictionary.detail.deliveryInfo}
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mt-12">
              {dictionary.detail.details}
            </h2>
            <div className="text-gray-700 text-sm mt-2">
              {product?.description && (
                <FormattedText input={product?.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
