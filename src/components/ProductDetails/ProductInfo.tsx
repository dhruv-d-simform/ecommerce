import type { Product } from '@/types/product.types';
import { Rating } from '@/components/Rating';

type ProductInfoProps = Pick<
    Product,
    | 'price'
    | 'discountPercentage'
    | 'stock'
    | 'category'
    | 'title'
    | 'rating'
    | 'description'
    | 'brand'
    | 'sku'
    | 'weight'
>;

export function ProductInfo({
    price,
    discountPercentage,
    stock,
    category,
    title,
    rating,
    description,
    brand,
    sku,
    weight,
}: ProductInfoProps) {
    const originalPrice = ((price / (100 - discountPercentage)) * 100).toFixed(
        2
    );

    const isLowStock = stock > 0 && stock <= 10;
    const isOutOfStock = stock <= 0;

    return (
        <div className="md:w-1/2">
            <div className="mb-2 flex items-center">
                <span className="text-sm font-medium px-2 py-1 rounded bg-main bg-opacity-10 text-white">
                    {category}
                </span>
                {discountPercentage > 0 && (
                    <span className="ml-2 text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-800">
                        {Math.round(discountPercentage)}% OFF
                    </span>
                )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{title}</h1>

            <div className="mb-4">
                <Rating rating={rating} />
            </div>

            <div className="mb-6">
                {discountPercentage > 0 ? (
                    <>
                        <span className="text-3xl font-bold text-gray-900">
                            ${price}
                        </span>
                        <span className="ml-2 text-lg text-gray-500 line-through">
                            ${originalPrice}
                        </span>
                    </>
                ) : (
                    <span className="text-3xl font-bold text-gray-900">
                        ${price.toFixed(2)}
                    </span>
                )}
            </div>

            <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <h3 className="text-sm text-gray-500">Brand</h3>
                    <p className="font-medium">{brand}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">SKU</h3>
                    <p className="font-medium">{sku}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Weight</h3>
                    <p className="font-medium">{weight} kg</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Stock</h3>
                    {isOutOfStock ? (
                        <p className="font-medium text-red-500">Out of stock</p>
                    ) : isLowStock ? (
                        <p className="font-medium text-orange-500">
                            Low stock - only {stock} left
                        </p>
                    ) : (
                        <p className="font-medium text-green-500">
                            In stock ({stock})
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
