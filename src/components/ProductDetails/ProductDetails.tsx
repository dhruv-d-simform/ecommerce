import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import type { Product } from '@/types/product.types';
import { ProductImages } from './ProductImages';
import { ProductInfo } from './ProductInfo';
import { ProductReviews } from './ProductReviews';

interface ProductDetailsProp {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProp) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() =>
                    location.state?.from === '/' ? navigate(-1) : navigate('/')
                }
                className="flex items-center gap-2 text-main hover:opacity-90 cursor-pointer mb-5"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <ProductImages images={product.images} title={product.title} />
                <ProductInfo
                    brand={product.brand}
                    category={product.category}
                    description={product.description}
                    discountPercentage={product.discountPercentage}
                    price={product.price}
                    rating={product.rating}
                    sku={product.sku}
                    stock={product.stock}
                    title={product.title}
                    weight={product.weight}
                />
            </div>

            <ProductReviews reviews={product.reviews} />
        </div>
    );
}
