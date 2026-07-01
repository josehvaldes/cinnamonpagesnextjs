import { ProductListResponse } from "@/lib/api/responseTypes";
import { Product } from "../types/product";
import { getHomepageProducts, getProduct, getProducts } from "@/lib/api/products";

export async function getProductById(id: string): Promise<Product | null> {
    const dto = await getProduct(id);
    if (!dto) {
        return null;
    }
    // Map the DTOs to the Product type for testing purposes
    return {
        id : dto.id,
        name : dto.name,
        price : dto.price,
        imageUrl : dto.img
    }

}
export async function getProductsAll(pageNumber: number, pageSize: number): Promise<[Product[], boolean, boolean]> {
    const response: ProductListResponse = await getProducts({ pageNumber, pageSize }); // Adjust pageNumber and pageSize as needed
    // Map the DTOs to the Product type for testing purposes
    const products = response.items.map(dto => ({
        id : dto.id,
        name : dto.name,
        price : dto.price,
        imageUrl : dto.img
    }));
    const hasPreviousPage = response.hasPreviousPage;
    const hasNextPage = response.hasNextPage;
    return [products, hasPreviousPage, hasNextPage];
}



export async function getHomepageContent(): Promise<{ newArrivals: Product[], trendings: Product[], onSales: Product[] }> {
    const homepageResponse = await getHomepageProducts();

    const response = {
        "newArrivals": homepageResponse.newArrivals.map(dto => ({
            id : dto.id,
            name : dto.name,
            price : dto.price,
            imageUrl : dto.img
        })),
        "trendings": homepageResponse.trendings.map(dto => ({
            id : dto.id,
            name : dto.name,
            price : dto.price,
            imageUrl : dto.img
        })),
        "onSales": homepageResponse.onSales.map(dto => ({
            id : dto.id,
            name : dto.name,
            price : dto.price,
            imageUrl : dto.img
        })),
    }
    return response;
}