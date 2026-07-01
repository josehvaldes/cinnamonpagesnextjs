"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Heart } from "lucide-react";

const WishListButton = () => {


    const wishlistcount = useSelector((state: RootState) => state.wishlist.items.length);
    
    return (
        <>
            <Heart className="size-5" />({wishlistcount})
        </>
    );
}


export default WishListButton;