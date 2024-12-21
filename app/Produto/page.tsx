'use client';

import React from 'react';
import { Product } from '@/app/models/interfaces';

const exampleProduct: Product = {
  id: 1,
  title: 'Produto Exemplo',
  price: 100,
  description: 'Este é um produto de exemplo.',
  image: '/path/to/image.jpg',
};

export default function Produto() {
  const { id, title, price, description, image } = exampleProduct;

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: '150px', height: '150px' }} />
      <p>ID: {id}</p>
      <p>Preço: {price}</p>
      <p>Descrição: {description}</p>
    </div>
  );
}
