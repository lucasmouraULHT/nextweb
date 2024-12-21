'use client';

import React from 'react';
import { Product } from '@/app/models/interfaces';

interface ProdutoProps {
  product: Product;
}

export default function Produto({ product }: ProdutoProps) {
  const { id, title, price, description, image } = product;
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
