"use client"

import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { LikeNotFound } from "@/components/shared/like-not-found/like-not-found";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";
import { useWishlistStore } from "@/lib/set-wishlist.storage";

export default function LikePage() {
    const { items, removeFromWishlist } = useWishlistStore();

    return (
        <div>
            <div className="container !mt-32">
                <BreadcrumbDynamic />
                <SectionTitle 
                    className={`mt-12 mb-20 !text-4xl !font-['Inter']`} 
                    text="My Favorite"
                />
            </div>
            <div className="bg-neutral-100 py-10">
                {items.length > 0 ? (
                    <div className="container grid grid-cols-4 gap-4">
                        {items.map((item) => (
                            <FavoriteCard
                                key={item.id}
                                text={item.title}
                                image={item.imgUrl}
                                onRemove={() => removeFromWishlist(item.id)}
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