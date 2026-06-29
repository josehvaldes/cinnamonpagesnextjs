import { Card } from "@/components/ui/card";
import { Product } from "../../../types/product";

import { getImageUrl } from "../../../utils/getImageUrl";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
        

        <Card className="flex flex-col items-center justify-center p-4">
          <h3>{product.name}</h3>
          <img src={getImageUrl(product.imageUrl) || "#"} alt={product.name} />
          <p>Price: ${product.price}</p>
        </Card>
    </div>
  );
}


export default ProductCard;