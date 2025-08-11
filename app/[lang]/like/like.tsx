"use client";

import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { LikeNotFound } from "@/components/shared/like-not-found/like-not-found";
import { useWishlistStore } from "@/lib/set-wishlist.storage";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface LikeProps {
  lang: "uz" | "ru" | "en" | "tj" | "az";
  dictionary: {
    like: {
      addToBasket: string;
    };
    account: {
      favorite: {
        title: string;
        itemCount_one: string;
        itemCount_few: string;
        emptyMessage: string;
        emptyDescription: string;
        continueShopping: string;
      };
    };
  };
}

export default function LikePage({ dictionary, lang }: LikeProps) {
  const { items, removeFromWishlist } = useWishlistStore();
console.log(lang)
  return (
    <div>
      <div className="container md:!mt-26 !mt-42">
        <div className="flex justify-between mb-7">
          <BreadcrumbDynamic />
          <Link href={"/basket"}>
            <ShoppingCart
              width={24}
              height={24}
              className="text-primary !hover:text-zinc-300 duration-200"
            />
          </Link>
        </div>
       
      </div>
      <div className="bg-neutral-100 py-10">
        {items.length > 0 ? (
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {items.map((item) => (
              <FavoriteCard
                itemID={item}
                key={item}
                onRemove={() => removeFromWishlist(item)}
                dictionary={dictionary}
              />
            ))}
          </div>
        ) : (
          <LikeNotFound />
        )}
      </div>
    </div>
  );
}
