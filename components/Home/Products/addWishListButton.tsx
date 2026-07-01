"use client";

import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { toggleItem } from "@/store/wishlistSlice";
import { Product } from "@/types/product";


interface ProductCardProps extends Product {}

const AddWishListButton = ({ id, imageUrl, name, price }: ProductCardProps) => {

    const dispatch = useDispatch();
    const wishlistItems = useSelector((state: any) => state.wishlist.items);
    const isInWishlist = wishlistItems.some((item: any) => item.id === id);  

    const onClickHandler = () => {
        dispatch(toggleItem({ id, imageUrl, name, price }));
    }

    return (
    <>
        <button
            onClick={onClickHandler}
            className="flex items-center gap-2"
        >
            <Heart className="size-5" color={isInWishlist ? "red" : "gray"}  />
        </button>
    </>
    );
}

export default AddWishListButton;

