import { Product } from "../types/product";
import { getProduct, getProducts } from "@/lib/api/products";

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
export async function getProductsAll(pageNumber: number, pageSize: number): Promise<Product[]> {
    const dtos = await getProducts({ pageNumber, pageSize }); // Adjust pageNumber and pageSize as needed
    // Map the DTOs to the Product type for testing purposes
    return dtos.map(dto => ({
        id : dto.id,
        name : dto.name,
        price : dto.price,
        imageUrl : dto.img
    }));
}