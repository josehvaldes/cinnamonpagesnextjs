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
  const pageSize = 3;
  const products = await getProductsAll(activePage, pageSize);
  const hasPreviousPage = activePage > 1;
  const hasNextPage = products.length === pageSize;
  
  return (
    <Products
      products={products}
      currentPage={activePage}
      hasPreviousPage={hasPreviousPage}
      hasNextPage={hasNextPage}
    />
  );
}