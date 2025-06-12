const SORT_OPTIONS = [
    { value: 'featured', label: 'Featured' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
] as const;

type SortOptions = (typeof SORT_OPTIONS)[number]['value'];
interface PriceRange {
    min: number;
    max: number;
}

export interface FilterState {
    priceRange: PriceRange;
    sortBy: SortOptions;
}

interface SidebarProps {
    filters: FilterState;
    priceRangeLimit: PriceRange;
    onFilterChange: (
        key: keyof FilterState,
        value: FilterState[keyof FilterState]
    ) => void;
}

export function Sidebar({
    filters,
    priceRangeLimit,
    onFilterChange,
}: SidebarProps) {
    const handlePriceChange = (
        limit: keyof FilterState['priceRange'],
        value: number
    ) => {
        const newPriceRange = { ...filters.priceRange };
        newPriceRange[limit] = value;
        onFilterChange('priceRange', newPriceRange);
    };

    const handleSortChange = (sortBy: SortOptions) => {
        onFilterChange('sortBy', sortBy);
    };

    return (
        <div className="p-4 space-y-3">
            <div>
                <h3 className="text-lg font-medium mb-2">Filters</h3>
                <hr className="mb-2" />
            </div>

            {/* Price Range Filter */}
            <div className="space-y-1 border-b pb-3">
                <p className="flex justify-between items-center w-full font-medium">
                    Price Range
                </p>

                <div className="space-y-3 mt-2">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">
                            Min: ${filters.priceRange.min}
                        </p>
                        <input
                            type="range"
                            min={priceRangeLimit.min}
                            max={Math.min(
                                filters.priceRange.max,
                                priceRangeLimit.max
                            )}
                            value={filters.priceRange.min}
                            onChange={(e) =>
                                handlePriceChange(
                                    'min',
                                    parseInt(e.target.value)
                                )
                            }
                            className="w-full cursor-pointer"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">
                            Max: ${filters.priceRange.max}
                        </p>
                        <input
                            type="range"
                            min={Math.max(
                                filters.priceRange.min,
                                priceRangeLimit.min
                            )}
                            max={priceRangeLimit.max}
                            value={filters.priceRange.max}
                            onChange={(e) =>
                                handlePriceChange(
                                    'max',
                                    parseInt(e.target.value)
                                )
                            }
                            className="w-full cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Sort Options */}
            <div className="space-y-1">
                <p className="flex justify-between items-center w-full font-medium">
                    Sort By
                </p>
                <div className="space-y-0.5 mt-2">
                    {SORT_OPTIONS.map((option) => (
                        <label key={option.value} className="flex items-center">
                            <input
                                type="radio"
                                checked={filters.sortBy === option.value}
                                onChange={() => handleSortChange(option.value)}
                                className="mr-2 cursor-pointer"
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear Filters Button */}
            <div className="mt-4 mb-2">
                <button
                    onClick={() => {
                        onFilterChange('priceRange', {
                            min: priceRangeLimit.min,
                            max: priceRangeLimit.max,
                        });
                        onFilterChange('sortBy', 'featured');
                    }}
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-md cursor-pointer"
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    );
}
