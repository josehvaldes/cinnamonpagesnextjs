import { Product } from "../../../types/product";

import { getImageUrl } from "../../../utils/getImageUrl";

const ProductMiniCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-1 min-w-0">{product.name}</div>
          <div className="inline-flex items-center text-base font-semibold text-heading">
            Price: ${product.price}
          </div>
          <div className="shrink-0">
            <img width={50} src={getImageUrl(product.imageUrl) || "#"} alt={product.name} />
          </div>
          <div className="flex items-center justify-end space-x-4 underline">
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        </div>
      </li>
    </div>
  );
}


export default ProductMiniCard;