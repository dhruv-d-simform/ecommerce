import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Spinner } from '@/components/ui/spinner';
import { type FilterState, SortOptions, Sidebar } from '@/components/Sidebar';
import type { Product } from '@/types/product.types';

interface ProductListProp {
    products: Array<Product>;
    isLoading?: boolean;
    isSearching?: boolean;
}

export function ProductList({
    products,
    isLoading = false,
    isSearching = false,
}: ProductListProp) {
    const priceRangeLimit = useMemo(() => {
        if (!products || products.length === 0)
            return {
                min: 0,
                max: 1000,
            };

        const prices = products.map((p) => p.price);
        return {
            min: Math.floor(Math.min(...prices)),
            max: Math.ceil(Math.max(...prices)),
        };
    }, [products]);

    const [filters, setFilters] = useState<FilterState>({
        priceRange: priceRangeLimit,
        sortBy: SortOptions.Featured,
    });

    const handleFilterChange = (
        key: keyof FilterState,
        value: FilterState[keyof FilterState]
    ) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        handleFilterChange('priceRange', priceRangeLimit);
    }, [priceRangeLimit]);

    // Apply filters to products
    const filteredProducts = useMemo(() => {
        // Skip filtering if in search mode
        if (isSearching) {
            return products;
        }

        // Check if any active filters (except default values)
        const hasActiveFilters =
            filters.priceRange.min !== priceRangeLimit.max ||
            filters.priceRange.max !== priceRangeLimit.max;

        if (!hasActiveFilters && filters.sortBy === 'featured') {
            return products;
        }

        // filter products
        const filtered = [...products].filter((product) => {
            // Price filter
            const inPriceRange =
                product.price >= filters.priceRange.min &&
                product.price <= filters.priceRange.max;

            return inPriceRange;
        });

        // sort filtered products
        switch (filters.sortBy) {
            case SortOptions.NameAsc:
                return filtered.sort((a, b) => a.title.localeCompare(b.title));
            case SortOptions.NameDesc:
                return filtered.sort((a, b) => b.title.localeCompare(a.title));
            case SortOptions.PriceAsc:
                return filtered.sort((a, b) => a.price - b.price);
            case SortOptions.PriceDesc:
                return filtered.sort((a, b) => b.price - a.price);
            case SortOptions.Featured:
            default:
                return filtered;
        }
    }, [products, filters, isSearching, priceRangeLimit]);

    const hasProducts = filteredProducts.length > 0;

    return (
        <div className="flex min-h-[80dvh]">
            <div className="hidden sm:block w-56 border-r">
                <div className="sticky top-16">
                    <Sidebar
                        filters={filters}
                        priceRangeLimit={priceRangeLimit}
                        onFilterChange={handleFilterChange}
                    />
                </div>
            </div>

            <div className="flex-1 p-8">
                <div className="p-2">
                    <p className="flex items-center gap-4">
                        <span className="block w-[20px] h-[40px] bg-main"></span>
                        <span className="text-main font-semibold">
                            Our Products
                        </span>
                    </p>
                    <p
                        className="pt-5 pb-14 text-4xl font-semibold"
                        role="heading"
                    >
                        Explore Our Products
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center min-h-[40vh] py-16">
                        <div className="mb-8 relative">
                            <Spinner />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-t from-transparent to-[rgba(219,68,68,0.1)] blur-sm"></div>
                        </div>
                        <p className="text-xl text-gray-600 mt-4 font-medium">
                            Loading amazing products for you...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Please wait while we fetch the latest items
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-auto-fit gap-8">
                        {hasProducts ? (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 pb-20 text-xl text-gray-500">
                                No products found. Try adjusting your search or
                                filters.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
