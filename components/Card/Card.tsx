'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/models/interfaces';

interface CardProps {
    product: Product;
    addItemToCart: (product: Product) => void;
}

export default function Card({ product, addItemToCart }: CardProps) {
    const { title, price, description, image } = product;

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md max-w-sm">
            {/* Imagem do Produto */}
            <div className="relative w-full h-40 mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            {/* Título */}
            <h2 className="text-lg font-bold mb-2">{title}</h2>

            {/* Preço */}
            <p className="text-blue-500 font-bold text-lg">${price.toFixed(2)}</p>

            {/* Descrição */}
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            {/* Botão para adicionar ao carrinho */}
            <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => addItemToCart(product)}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}
