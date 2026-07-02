import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AddWishListButton from "@/components/Home/Products/addWishListButton";
import { describe, expect, it } from "vitest";
import { mockProducts } from "@/mocks/mockData";
import { Product } from "@/types/product";
import wishlistReducer from "@/store/wishlistSlice";

function createTestStore() {
    return configureStore({
        reducer: {
            wishlist: wishlistReducer,
        },
    });
}

function renderWithStore(ui: React.ReactElement, store = createTestStore()) {
    const view = render(
        <Provider store={store}>
            {ui}
        </Provider>
    );

    return { ...view, store };
}

describe("AddWishListButton", () => {
    it("should render correctly", () => {
        const product:Product = {
            id : mockProducts[0].id,
            name : mockProducts[0].name,
            price : Number.parseFloat(mockProducts[0].price),
            imageUrl : mockProducts[0].img
        };
        renderWithStore(<AddWishListButton {...product} />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should add product to wishlist when button is clicked", () => {
        const product: Product = {
            id: mockProducts[0].id,
            name: mockProducts[0].name,
            price: Number.parseFloat(mockProducts[0].price),
            imageUrl: mockProducts[0].img,
        };

        const { store } = renderWithStore(<AddWishListButton {...product} />);
        fireEvent.click(screen.getByRole("button"));

        expect(store.getState().wishlist.items).toHaveLength(1);
        expect(store.getState().wishlist.items[0]).toEqual(product);
    });

    it("should remove product from wishlist when button is clicked twice", () => {
        const product: Product = {
            id: mockProducts[0].id,
            name: mockProducts[0].name,
            price: Number.parseFloat(mockProducts[0].price),
            imageUrl: mockProducts[0].img,
        };

        const { store } = renderWithStore(<AddWishListButton {...product} />);
        const button = screen.getByRole("button");

        fireEvent.click(button);
        fireEvent.click(button);

        expect(store.getState().wishlist.items).toHaveLength(0);
    });
});