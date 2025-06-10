import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/utils/fetchData';
import type { ProductResponse } from '@/types/product.types';

export function useProducts() {
    return useQuery<ProductResponse, Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
}
