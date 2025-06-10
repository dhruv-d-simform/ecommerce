import { Product, ProductResponse } from '@/types/product.types';

export async function fetchProducts(): Promise<ProductResponse> {
    const res = await fetch('https://dummyjson.com/products?skip=25&limit=100');

    if (!res.ok) {
        console.error('API error:', res.status, res.statusText);
        throw new Error('Error occured while fetching the Products.');
    }

    const data = await res.json();
    return data;
}

export async function fetchProductDetails(
    productId: string | number
): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}
