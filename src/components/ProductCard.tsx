import type { Product } from '@/types/product.types';
import { Rating } from './Rating';

interface ProductCardProp {
    product: Product;
}

export function ProductCard({ product }: ProductCardProp) {
    return (
        <div className="group cursor-pointer rounded-md">
            <div className="w-full aspect-square bg-image overflow-hidden rounded-md">
                <img
                    src={product.images[0]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-125 duration-300"
                />
            </div>
            <div className="py-2 flex flex-col gap-1">
                <p className="text-lg font-semibold line-clamp-1">
                    {product.title}
                </p>
                <p className="flex gap-3">
                    <span className="text-main">${product.price}</span>
                    <span className="opacity-50 line-through">
                        $
                        {(
                            (product.price /
                                (100 - product.discountPercentage)) *
                            100
                        ).toFixed(2)}
                    </span>
                </p>
                <Rating rating={product.rating} />
            </div>
        </div>
    );
}
