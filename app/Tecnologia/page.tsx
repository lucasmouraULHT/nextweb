'use client';

import React from 'react';
import { TecnologiaC } from '@/app/models/interfacesT';

export default function Tecnologia({ title, image, description, rating }: TecnologiaC) {
    return (
        <div>
            {title},{image},{description} ,{rating} 
        </div>
    );
}
