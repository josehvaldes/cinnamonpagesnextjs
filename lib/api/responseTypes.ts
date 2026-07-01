
interface HateoasLinkResponse{
    href: string;
    rel: string;
    method: string;
}


interface UserResponse{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface ProductResponse {
    id: string;
    name: string;
    price: number;
    img: string;
    links: HateoasLinkResponse[];
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

interface ProductHomepageResponse {
    newArrivals: ProductResponse[];
    trendings: ProductResponse[];
    onSales: ProductResponse[];
}

export type { HateoasLinkResponse, UserResponse, ProductResponse, ProductListResponse, ProductHomepageResponse };