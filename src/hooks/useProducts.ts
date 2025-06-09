import { useQuery } from '@tanstack/react-query';
import type { ProductResponse } from '@/types/product.types';

export function useProducts() {
    return useQuery<ProductResponse, Error>({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(
                'https://dummyjson.com/products?skip=25&limit=100'
            );

            if (!res.ok) {
                console.error('API error:', res.status, res.statusText);
                throw new Error('Error occured while fetching the Products.');
            }

            const data = await res.json();
            return data;
        },
    });
}
