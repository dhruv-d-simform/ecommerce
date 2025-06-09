import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Rating } from '@/components/Rating';
import type { Product } from '@/types/product.types';

interface ProductDetailsProp {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProp) {
    const [selectedImage, setSelectedImage] = useState(0);
    const navigate = useNavigate();

    const originalPrice = (
        (product.price / (100 - product.discountPercentage)) *
        100
    ).toFixed(2);

    const isLowStock = product.stock > 0 && product.stock <= 10;
    const isOutOfStock = product.stock <= 0;

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-main hover:opacity-90 cursor-pointer mb-5"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="bg-gray-50 rounded-lg mb-4 flex items-center justify-center h-[400px] overflow-hidden">
                        <img
                            src={
                                product.images[selectedImage] ||
                                product.thumbnail
                            }
                            alt={product.title}
                            className="object-contain h-full w-full"
                        />
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        {product.images.map((image, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleImageClick(idx)}
                                className={`cursor-pointer border-2 rounded overflow-hidden h-16 ${
                                    selectedImage === idx
                                        ? 'border-main'
                                        : 'border-transparent'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.title} - view ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="mb-2 flex items-center">
                        <span className="text-sm font-medium px-2 py-1 rounded bg-main bg-opacity-10 text-white">
                            {product.category}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="ml-2 text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-800">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

                    <div className="flex items-center mb-4">
                        <Rating rating={product.rating} />
                        <span className="ml-1 text-gray-500">
                            ({product.rating})
                        </span>
                    </div>

                    <div className="mb-6">
                        {product.discountPercentage > 0 ? (
                            <>
                                <span className="text-3xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                <span className="ml-2 text-lg text-gray-500 line-through">
                                    ${originalPrice}
                                </span>
                            </>
                        ) : (
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <h3 className="text-sm text-gray-500">Brand</h3>
                            <p className="font-medium">{product.brand}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">SKU</h3>
                            <p className="font-medium">{product.sku}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Weight</h3>
                            <p className="font-medium">{product.weight} kg</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Stock</h3>
                            {isOutOfStock ? (
                                <p className="font-medium text-red-500">
                                    Out of stock
                                </p>
                            ) : isLowStock ? (
                                <p className="font-medium text-orange-500">
                                    Low stock - only {product.stock} left
                                </p>
                            ) : (
                                <p className="font-medium text-green-500">
                                    In stock ({product.stock})
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <h2 className="text-xl font-semibold mb-4">
                    Customer Reviews ({product.reviews.length})
                </h2>

                {product.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="border p-4 rounded-md">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">
                                            {review.reviewerName}
                                        </p>
                                        <Rating rating={review.rating} />
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {new Date(
                                            review.date
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-700 mt-2 text-sm">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">
                        No reviews yet. Be the first to review!
                    </p>
                )}
            </div>
        </div>
    );
}
