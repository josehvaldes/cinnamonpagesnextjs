import { Product } from "@/types/product";
import ProductCard from "./productCard";

type TrendingProductsProps = {
    trendings: Product[];
};

const TrendingProducts = ({ trendings }: TrendingProductsProps) => {
    return (
        <>
        
        <div className="grow w-full flex flex-col gap-2 items-center justify-center p-4 pt-8">
            <span className="font-light text-xs text-gray-500" >Check out popular products</span>
            <p className="text-lg font-semibold">Trending Products</p>
        </div>
        
        {trendings.length === 0 && (
                <div className="flex items-center justify-center w-full">
                    <p className="text-sm text-gray-500">No trending products available.</p>
                </div>
            )}
        <div className="flex flex-wrap justify-center gap-4 p-4 sm:justify-start sm:gap-6">
            {trendings && trendings.length > 0 && trendings.map((item, index) => (
                <ProductCard key={index} product={item} />
            ))}
        </div>
        </>
    )
}

export default TrendingProducts;