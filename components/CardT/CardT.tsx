'use client';
  
  import React from 'react';
  import Image from 'next/image';
  import { title } from 'process';
import { TecnologiaC } from '@/app/models/interfacesT';
  
  interface CardT extends TecnologiaC {}
  
  export default function CardT({ title, image, rating, description}: TecnologiaC) {
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
              
              {/* Nome do Produto */}
              <h2 className="text-lg font-bold mb-2">{title}</h2>
  
              {/* Preço */}
              <p className="text-blue-500 font-bold text-lg">${rating}</p>
              
              {/* Descrição */}
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              
          </div>
      );
  }
  
  