import Products from "@/components/Home/Products";
import { getProductsAll } from "@/services/productService";

interface ProductsPageProps {
  searchParams: Promise<{
    page?: string | string[];
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const pageValue = Array.isArray(params.page) ? params.page[0] : params.page;
  const parsedPage = Number.parseInt(pageValue ?? "1", 10);
  const activePage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const pageSize = 4; // hardcoded page size for demonstration purposes, you can adjust this as needed
  const [products, hasPreviousPage, hasNextPage] = await getProductsAll(activePage, pageSize);
  
  return (
    <Products
      products={products}
      currentPage={activePage}
      hasPreviousPage={hasPreviousPage}
      hasNextPage={hasNextPage}
    />
  );
}