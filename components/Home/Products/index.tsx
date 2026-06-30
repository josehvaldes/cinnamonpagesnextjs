
import { type Product } from "../../../types/product";
import ProductMiniCard from "./productMiniCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductsProps {
  products: Product[];
  currentPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const Products = ({ products, currentPage, hasPreviousPage, hasNextPage }: ProductsProps) => {
  const getPageHref = (page: number) => `?page=${page}`;

  return (
    <div className="products-container">
        <h1>List of all Products</h1>

        { products.length === 0 && <p>No products available.</p> }
        <ul className="max-w-md divide-y divide-default">
        {
         products.map(product => (
            <ProductMiniCard key={product.id} product={product} />
        ))}
        </ul>

        {(hasPreviousPage || hasNextPage) && (
          <Pagination className="mt-6">
            <PaginationContent>
              {hasPreviousPage && (
                <PaginationItem>
                  <PaginationPrevious href={getPageHref(currentPage - 1)} />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationLink href={getPageHref(currentPage)} isActive>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>

              {hasNextPage && (
                <PaginationItem>
                  <PaginationNext href={getPageHref(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
    </div>
  );
}


export default Products;