import { ProductCard } from './ProductCard';
import { PRODUCTS } from '@/MockData/products';

export function ProductList() {
    return (
        <div className="flex">
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
                    <p className="pt-5 pb-14 text-4xl font-semibold">
                        Explore Our Products
                    </p>
                </div>

                <div className="grid grid-cols-auto-fit gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
