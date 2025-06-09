import { Link } from 'react-router';
import { Rating } from '@/components/Rating';
import type { Product } from '@/types/product.types';

interface ProductCardProp {
    product: Product;
}

export function ProductCard({ product }: ProductCardProp) {
    const originalPrice = (
        (product.price / (100 - product.discountPercentage)) *
        100
    ).toFixed(2);

    return (
        <Link
            to={`/product/${product.id}`}
            className="group cursor-pointer rounded-md"
        >
            <div
                className="w-full aspect-square bg-image overflow-hidden rounded-md"
                role="button"
                tabIndex={0}
                aria-label={product.title}
            >
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-125 duration-300"
                />
            </div>
            <div className="py-2 flex flex-col gap-1">
                <p className="text-lg font-semibold line-clamp-1">
                    {product.title}
                </p>
                <p className="flex gap-3">
                    <span className="text-main">${product.price}</span>
                    <span
                        className="opacity-50 line-through"
                        aria-label={`Original Price ${originalPrice}`}
                    >
                        ${originalPrice}
                    </span>
                </p>
                <Rating rating={product.rating} />
            </div>
        </Link>
    );
}
