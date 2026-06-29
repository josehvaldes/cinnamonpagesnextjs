import { type Product } from "../../../types/product";
import ProductCard from "./productCard";


const Product = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <ProductCard product={product} />
    </div>
  );
}

export default Product;