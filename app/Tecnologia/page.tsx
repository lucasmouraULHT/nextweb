'use client';

import React from 'react';

export default function Tecnologia({ title, description, rating }: TecnologiaC) {
    return (
        <div>
            {title},{description} ,{rating} 
        </div>
    );
}
