"use client";

import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import { useWishlistStore } from "@/lib/set-wishlist.storage";
import { Button } from "@/components/ui/button";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";
import Link from "next/link";
import { Heart } from "lucide-react";

interface FavoriteProps {
  dictionary: {
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
    like: {
      addToBasket: string;
    };
  };
}

export default function FavoritePage({ dictionary }: FavoriteProps) {
  const { items, removeFromWishlist } = useWishlistStore();

  return (
    <div>
      <AccountTitle text={dictionary.account.favorite.title} />

      {items.length > 0 && (
        <p className="text-primary text-sm font-medium leading-tight mt-3">
          {items.length}{" "}
          {items.length === 1
            ? dictionary.account.favorite.itemCount_one
            : dictionary.account.favorite.itemCount_few}
        </p>
      )}

      {items.length === 0 ? (
        <div className="mt-10 text-center">
          <div className="mb-4">
            <Heart className="w-12 h-12 mx-auto text-gray-400" />
          </div>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {dictionary.account.favorite.emptyDescription}
          </p>
          <Link href="/shops/new">
            <Button variant="default">
              {dictionary.account.favorite.continueShopping}
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <FavoriteCard
              key={item}
              itemID={item}
              onRemove={() => removeFromWishlist(item)}
              dictionary={dictionary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
