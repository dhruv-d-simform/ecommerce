import { Navigate, useParams } from 'react-router';
import { useProductDetails } from '@/hooks/useProductDetails';
import { ProductDetails } from '@/components/ProductDetails';
import { Spinner } from '@/components/ui/spinner';

export function ProductDetailsPage() {
    const { productId } = useParams<{ productId: string }>();
    const { data, isLoading, isError } = useProductDetails(productId!);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80dvh] py-16">
                <div className="mb-8 relative">
                    <Spinner />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-t from-transparent to-[rgba(219,68,68,0.1)] blur-sm"></div>
                </div>
                <p className="text-xl text-gray-600 mt-4 font-medium">
                    Loading your Product . . .
                </p>
            </div>
        );
    }

    if (isError || !data) return <Navigate to={'/not-found'} />;

    return (
        <div className="p-6">
            <ProductDetails product={data} />
        </div>
    );
}
