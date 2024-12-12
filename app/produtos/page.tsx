'use client';

import useSWR from 'swr';
// import Produto from '@/app/Produto/page';
import Card from '@/components/Card/Card';
import { Product } from '@/app/models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
    const { data, error, isLoading } = useSWR<Product[]>(
        '/api/products', 
        fetcher
    );
    

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div  className="grid grid-cols-1">
            {data.map((product) => (
                <Card key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} image={product.image} />
            ))}
            
        </div>
    );
}
