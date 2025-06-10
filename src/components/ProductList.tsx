import { ProductCard } from '@/components/ProductCard';
import { Spinner } from '@/components/ui/spinner';
import type { Product } from '@/types/product.types';

interface ProductListProp {
    products: Array<Product>;
    isLoading?: boolean;
}

export function ProductList({ products, isLoading = false }: ProductListProp) {
    const hasProducts = products.length > 0;

    return (
        <div className="flex min-h-[80dvh]">
            <div className="hidden sm:block w-56 border-r">
                <div className="sticky top-16">
                    <p>Sidebar</p>
                </div>
            </div>

            <div className="flex-1 p-8">
                <div className="p-2">
                    <p className="flex items-center gap-4">
                        <span className="block w-[20px] h-[40px] bg-main"></span>
                        <span className="text-main font-semibold">
                            Our Products
                        </span>
                    </p>
                    <p
                        className="pt-5 pb-14 text-4xl font-semibold"
                        role="heading"
                    >
                        Explore Our Products
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center min-h-[40vh] py-16">
                        <div className="mb-8 relative">
                            <Spinner />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-t from-transparent to-[rgba(219,68,68,0.1)] blur-sm"></div>
                        </div>
                        <p className="text-xl text-gray-600 mt-4 font-medium">
                            Loading amazing products for you...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Please wait while we fetch the latest items
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-auto-fit gap-8">
                        {hasProducts ? (
                            products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 pb-20 text-xl text-gray-500">
                                No products found. Try adjusting your search or
                                filters.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
