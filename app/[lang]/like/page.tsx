"use client"

import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {LikeNotFound} from "@/components/shared/like-not-found/like-not-found";
import {useWishlistStore} from "@/lib/set-wishlist.storage";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";

export default function LikePage() {
    const {items, removeFromWishlist} = useWishlistStore();


    return (
        <div>
            <div className="container md:!mt-26 !mt-42">
                <BreadcrumbDynamic/>
                <SectionTitle
                    className={`mt-12 mb-10 !text-4xl !font-['Inter']`}
                    text="My Favorite"
                />
            </div>
            <div className="bg-neutral-100 py-10">
                {items.length > 0 ? (
                    <div className="container grid grid-cols-4 gap-4">
                        {items.map((item) => (
                            <FavoriteCard
                                itemID={item}
                                key={item}
                                onRemove={() => removeFromWishlist(item)}
                            />
                        ))}
                    </div>
                ) : (
                    <LikeNotFound/>
                )}
            </div>
        </div>
    );
}