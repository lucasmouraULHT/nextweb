'use client';

import useSWR from 'swr';
import Card from '@/components/Card/Card';
import { Product } from '@/app/models/interfaces';

export default function ProductsPage() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<Product[]>('https://deisishop.pythonanywhere.com/products', fetcher);

    const addItemToCart = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return (
        <>
            {data.map((product) => (
                <Card key={product.id} product={product} addItemToCart={addItemToCart} />
            ))}
        </>
    );
}
