'use client';

import useSWR from 'swr';
import Card from '@/components/Card/Card';
import { Product } from '@/app/models/interfaces';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<Product[], Error>(
        'https://deisishop.pythonanywhere.com/products',
        fetcher
    );
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>(() => {
        // Inicialize o carrinho com os dados do localStorage
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });

    // Função para adicionar um produto ao carrinho
    const addItemToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Atualizar os produtos filtrados quando a busca ou os dados mudarem
    useEffect(() => {
        if (data) {
            const newFilteredData = data.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(newFilteredData);
        }
    }, [search, data]);

    // Salvar o carrinho no localStorage sempre que ele for atualizado
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return (
        <>
            {/* Campo de busca */}
            <input
                type="text"
                value={search}
                placeholder="Pesquisar..."
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />

            {/* Lista de produtos */}
            {filteredData.map((product) => (
                <div key={product.id} className="mb-4">
                    <Card
                        product={product}
                        addItemToCart={addItemToCart}
                    />
                </div>
            ))}

            <br />
            <br />

            {/* Carrinho */}
            <h2 className="text-xl font-bold mb-2">Carrinho:</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </>
    );
}
