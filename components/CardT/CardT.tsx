'use client';
  
import React from 'react';
import { TecnologiaC } from '@/app/models/interfacesT';
/* /components/MunicipalityCard/MunicipalityCard.tsx */



  
export default function CardT({ title, rating, description}: TecnologiaC) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md max-w-sm">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-blue-500 font-bold text-lg">{rating} ⭐</p>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
        </div>
    );
}

