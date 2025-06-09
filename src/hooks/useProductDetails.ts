import { useQuery } from '@tanstack/react-query';
import type { Product } from '@/types/product.types';

export function useProductDetails(productId: number | string) {
    return useQuery<Product, Error>({
        queryKey: ['product', productId],
        queryFn: async () => {
            const res = await fetch(
                `https://dummyjson.com/products/${productId}`
            );
            if (!res.ok) {
                throw new Error('Failed to fetch product');
            }
            return res.json();
        },
        enabled: !!productId,
    });
}
