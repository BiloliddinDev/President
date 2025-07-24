"use client"

import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {useWishlistStore} from "@/lib/set-wishlist.storage";
import {Button} from "@/components/ui/button";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";
import Link from "next/link";
import {Heart} from "lucide-react";

export default function FavoritePage() {
    const {items, removeFromWishlist} = useWishlistStore();

    return (
        <div>
            <AccountTitle text={"My favorite"}/>
            {items.length > 0 && (<p className="text-primary text-sm font-medium leading-tight mt-3">
                You have {items.length} {items.length === 1 ? 'item' : 'items'} in your Wishlist
            </p>)}

            {items.length === 0 ? (
                <div className="mt-10 text-center">
                    <div className="mb-4">
                        <Heart className="w-12 h-12 mx-auto text-gray-400"/>
                    </div>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Click the Favourites icon beside an item to add the item to your Favourites.
                        You can then review, shop and share your Favourites at any time.
                    </p>
                    <Link href="/shops/new">
                        <Button variant="default">
                            Continue shopping
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="mt-10 grid grid-cols-3 gap-4">
                    {items.map((item) => (
                        <FavoriteCard
                            key={item}
                            itemID={item}
                            onRemove={() => removeFromWishlist(item)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}