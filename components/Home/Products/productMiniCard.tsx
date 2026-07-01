import { Product } from "../../../types/product";

import { getImageUrl } from "../../../utils/getImageUrl";
import AddWishListButton from "./addWishListButton";

const ProductMiniCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <li className="pb-3 sm:pb-4">
        <div className="flex flex-col gap-3 rounded-md border border-border/60 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <div className="min-w-0 flex-1 text-sm font-medium leading-5 sm:text-base">{product.name}</div>
          <div className="inline-flex items-center text-sm font-semibold text-heading sm:text-base">
            Price: ${product.price}
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <img
              width={50}
              className="h-12 w-12 rounded object-cover"
              src={getImageUrl(product.imageUrl) || "#"}
              alt={product.name}
            />
          </div>
          <div className="flex items-center justify-start underline sm:ml-auto sm:justify-end">
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
          <div>
            <AddWishListButton {...product} />
          </div>
        </div>
      </li>
    </div>
  );
}


export default ProductMiniCard;