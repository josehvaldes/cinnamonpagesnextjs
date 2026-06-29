
import { type Product } from "../../../types/product";
import ProductMiniCard from "./productMiniCard";

const Products = ({products}: {products: Product[]}) => {
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
    </div>
  );
}


export default Products;