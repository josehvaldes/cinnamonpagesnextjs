import Products from "@/components/Home/Products";
import { getProductsAll } from "@/services/productService";


export default async function ProductsPage() {
  const products = await getProductsAll();
  return (
    <Products products={products} />
  );
}