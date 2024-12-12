'use client';

import React from 'react';
import { TecnologiaC } from '@/app/models/interfacesT';

function Tecnologia({ title, description, rating }: TecnologiaC) {
    return (
        <div>
            {title},{description} ,{rating} 
        </div>
    );
}
