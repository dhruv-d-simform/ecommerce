import { useQuery } from '@tanstack/react-query';
import { fetchProductDetails } from '@/utils/fetchData';
import type { Product } from '@/types/product.types';

export function useProductDetails(productId: number | string) {
    return useQuery<Product, Error>({
        queryKey: ['product', productId],
        queryFn: () => fetchProductDetails(productId),
        enabled: !!productId,
    });
}
