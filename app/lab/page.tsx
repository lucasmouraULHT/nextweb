'use client';

import useSWR from 'swr';
import Card from '@/components/Card/Card';
import { Product } from '@/app/models/interfaces';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [search, setSearch] = useState('');
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<Product[], Error>(
        'https://deisishop.pythonanywhere.com/products',
        fetcher
    );
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });

    const addItemToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    useEffect(() => {
        if (data) {
            const newFilteredData = data.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(newFilteredData);
        }
    }, [search, data]);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const buy = async () => {
        try {
            const response = await fetch('/api/deisishop/buy', {
                method: 'POST',
                body: JSON.stringify({
                    products: cart.map((product) => product.id),
                    name: '',
                    student: false,
                    coupon: '',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao realizar a compra');
            }

            const data = await response.json();
            console.log('Compra realizada com sucesso:', data);
            setCart([]); // Limpar o carrinho após a compra
            localStorage.removeItem('cart');
        } catch (error) {
            console.error(error);
        }
    };

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

            {filteredData.map((product) => (
                <div key={product.id} className="mb-4">
                    <Card product={product} addItemToCart={addItemToCart} />
                </div>
            ))}

            <br />
            <br />

            <h2 className="text-xl font-bold mb-2">Carrinho:</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={buy}
            >
                Comprar
            </button>
        </>
    );
}
