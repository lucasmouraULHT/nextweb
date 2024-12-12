'use client';

import React from 'react';
import { Product } from '@/app/models/interfaces';

export default function Produto({ id, title, price, description }: Product) {
    return <div>{id} {title},{price},{description} </div>;
}
