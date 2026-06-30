import "server-only";
import { getRequest } from "./genericRequest";
import { ProductListResponse, ProductResponse } from "./responseTypes";
import { PaginationRequest } from "./requestTypes";

export async function getProduct(id: string): Promise<ProductResponse> {
    return getRequest<ProductResponse>(`products/${id}`, {
        cache: "force-cache" // Use cache for product data to improve performance
    });
}

export async function getProducts(request: PaginationRequest): Promise<ProductResponse[]> {
    const queryParams = new URLSearchParams({
        pageNumber: request.pageNumber.toString(),
        pageSize: request.pageSize.toString()
    });
    const data = await getRequest<ProductListResponse>(`products?${queryParams.toString()}`, {
        cache: "force-cache" // Use cache for product data to improve performance
    });

    const items = data.items || data; // Adjust based on your API response structure
    return items;
}