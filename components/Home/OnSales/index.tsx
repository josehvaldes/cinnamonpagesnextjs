import { Product } from "@/types/product";
import ProductCard from "./productCard";

type OnSalesProps = {
    onSales: Product[];
};

const OnSales = ({ onSales }: OnSalesProps) => {
    return (
        <>
        <div className="grid grid-cols-4 gap-3 w-full p-4">
            <div className="col-start-1 col-end-2 flex flex-col gap-2">
            <span className="font-light text-xs text-gray-500" >Check out our products on sale</span>
            <p className="text-lg font-semibold">On Sale</p>
            </div>
            <div className="col-start-4 col-end-5 flex items-center justify-end">

                <a href="#"
                className="inline-block rounded bg-gray-600 px-4 py-2 text-xs font-light text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:bg-gray-800">
                View All</a>
            </div>
        </div>

        {onSales.length === 0 && (
                <div className="flex items-center justify-center w-full">
                    <p className="text-sm text-gray-500">No products on sale available.</p>
                </div>
            )}
        <div className="flex flex-wrap justify-center gap-4 p-4 sm:justify-start sm:gap-6">
            {onSales && onSales.length > 0 && onSales.map((item, index) => (
                <ProductCard key={index} product={item} />
            ))}
        </div>
        </>
    );
}

export default OnSales;