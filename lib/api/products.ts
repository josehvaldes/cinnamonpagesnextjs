import "server-only";
import { getRequest } from "./genericRequest";
import { LinkResponse } from "./generictypes";

interface ProductResponse {
    id: string;
    name: string;
    price: number;
    img: string;
    links : LinkResponse[];
}

interface ProductListResponse {
    items: ProductResponse[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export async function getProduct(id: string): Promise<ProductResponse> {
    return getRequest<ProductResponse>(`products/${id}`, {
        cache: "force-cache" // Use cache for product data to improve performance
    });
}

export async function getProducts(): Promise<ProductResponse[]> {
    const data = await getRequest<ProductListResponse>("products", {
        cache: "force-cache" // Use cache for product data to improve performance
    });

    const items = data.items || data; // Adjust based on your API response structure
    return items;
}