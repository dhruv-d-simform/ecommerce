import { useMemo } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useSearchContext } from '@/contexts/SearchContext';
import { ProductList } from '@/components/ProductList';

export function HomePage() {
    const searchQuery = useSearchContext();
    const isSearching = searchQuery.trim() !== '';

    const { data, isLoading } = useProducts();

    const allProducts = useMemo(() => {
        if (!data?.products) return [];
        return data.products;
    }, [data?.products]);

    const filteredProducts = useMemo(() => {
        if (isSearching && allProducts.length > 0) {
            return allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return allProducts;
    }, [allProducts, isSearching, searchQuery]);

    return <ProductList products={filteredProducts} isLoading={isLoading} />;
}
