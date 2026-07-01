import { Card } from "@/components/ui/card";
import { Product } from "@/types/product";
import { getImageUrl } from "@/utils/getImageUrl";
import { Heart } from "lucide-react";


const ProductCard = ({ product }: { product: Product }) => {
     return (
        <div className="w-full max-w-[250px]">
            <Card className="h-full w-full overflow-hidden">
                <img src={getImageUrl(product.imageUrl) || "#"} alt={product.name} 
                className="h-56 w-full object-cover" />
                <div className="flex justify-between items-center px-4 py-3">
                    <div className="flex flex-col gap-1 px-1">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">Price: ${product.price}</p>            
                    </div>
                    <div className="relative">
                        <button type="button" className="peer">
                            <Heart className="size-5" />
                        </button>
                        <span role="tooltip"
                            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity peer-hover:opacity-100"
                        >
                            like
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProductCard;