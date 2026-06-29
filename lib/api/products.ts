import "server-only";
import { getRequest } from "./genericRequest";


export async function getProduct(id: string): Promise<any> {
    return getRequest<any>(`products/${id}`, {
        cache: "force-cache" // Use cache for product data to improve performance
    });
}

export async function getProducts(): Promise<any[]> {
    const data = await getRequest<any>("products", {
        cache: "force-cache" // Use cache for product data to improve performance
    });

    /**
        items: [...]
        totalCount: 8,
        pageNumber: 1,
        pageSize: 20,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false
    */
    const items = data.items || data; // Adjust based on your API response structure
    return items;
}