'use client';

import React from 'react';
import { TecnologiaC } from '@/app/models/interfacesT';

const exampleTecnologia: TecnologiaC = {
  title: 'Exemplo de Tecnologia',
  description: 'Esta é uma descrição de tecnologia.',
  rating: 5,
};

export default function Tecnologia() {
  const { title, description, rating } = exampleTecnologia;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
