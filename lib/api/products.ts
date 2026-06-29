import "server-only";

export const API_BASE_URL =
    process.env.API_BASE_URL ||
    "https://localhost:44350/api";
export const API_VERSION = process.env.API_VERSION || "v1";

export const API_KEY = process.env.API_KEY || "your-api-key-here"; // Replace with your actual API key or use environment variables 


export async function getProduct(id: string): Promise<any> {
    const url = `${API_BASE_URL}/${API_VERSION}/products/${id}`;
    console.log(`Fetching product with ID ${id} from: ${url}`);
    const response = await fetch(url, {
        headers: {
            "x-api-key": API_KEY
        },
        cache: "force-cache" // Use cache for product data to improve performance
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        console.error(`Failed to fetch product with ID ${id}. Status: ${response.status}`);
        throw new Error(`Failed to fetch product with ID ${id}. Status: ${response.status}`);
    }
}

export async function getProducts(): Promise<any[]> {
    const url = `${API_BASE_URL}/${API_VERSION}/products`;
    console.log(`Fetching products from: ${url}`);
    const response = await fetch(url, {
        headers: {
            "x-api-key": API_KEY
        },
        cache: "force-cache" // Use cache for product data to improve performance
    });
    if (response.ok) {
        const data = await response.json();
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
    } else {
        console.error(`Failed to fetch products. Status: ${response.status}`);
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
}