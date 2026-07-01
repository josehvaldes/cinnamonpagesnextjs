import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type {Product} from "../types/product";

interface WishlistState {
    items: Product[];
}

const initialState: WishlistState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {

        add(state, action: PayloadAction<Product>) {
            state.items.push(action.payload);
        },

        remove(state, action: PayloadAction<string>) {
            state.items = state.items.filter(x => x.id !== action.payload);
        },

        toggleItem(state, action: PayloadAction<Product>) {

            const exists = state.items.some(x => x.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            }
            else {
                state.items = state.items.filter(x => x.id !== action.payload.id);
            }
        }
    }
});

export const { add, remove, toggleItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;