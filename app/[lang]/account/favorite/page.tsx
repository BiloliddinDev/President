import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import FavoriteCard from "@/components/shared/favorite-card/favorite-card";
import ImageCard from "@/public/images/product-image.png"

export default function FavoritePage() {
    return (
        <div>
            <AccountTitle text={"My favorite"}/>

            <p className="text-primary text-sm font-medium leading-tight mt-3">You have 1 item in your Wishlist</p>
            <div className={'mt-10 grid grid-cols-3 gap-4'}>
                <FavoriteCard text={"Favorite"} image={ImageCard}/>
                <FavoriteCard text={"Favorite"} image={ImageCard}/>
                <FavoriteCard text={"Favorite"} image={ImageCard}/>
            </div>
        </div>
    );
}