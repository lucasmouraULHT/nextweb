'use client';

import useSWR from 'swr';
import Card from '@/components/Card/Card';
import { Product } from '@/app/models/interfaces';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<Product[], Error>('https://deisishop.pythonanywhere.com/products', fetcher);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);


    // Atualize filteredData apenas quando search ou data mudarem
    useEffect(() => {
        if (data) { // Certifique-se de que `data` está carregado antes de usar
            const newFilteredData = data.filter((product) => {
                return product.title.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredData(newFilteredData);
        }
    }, [search, data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return (
        <>
            <input
                type="text"
                value={search}
                placeholder="Pesquisar..."
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />

            {/* Use filteredData para renderizar os cards */}
            {filteredData.map((product) => (
                <div key={product.id} className="mb-4">
                    <Card
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                    <button
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}


            <br /><br />
            Carrinho:
        </>
    );
}
