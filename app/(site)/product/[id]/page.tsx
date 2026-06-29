import Product from "@/components/Home/Product";
import { getProductById } from "@/services/productService";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProductById(id);

    return (
        <>
            {product ? (
                <Product product={product} />
            ) : (<p>Product not found</p>)}
        </>
    );
}