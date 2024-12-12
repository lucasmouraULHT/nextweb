'use client';

import CardT from '@/components/CardT/CardT';
import tecnologias from '@/app/data/tecnologias.json'; // Importa o JSON diretamente
import { TecnologiaC } from '../models/interfacesT';

export default function TecnologiasPage() {
    // Usa diretamente o JSON para simular o comportamento do fetcher
    const data: TecnologiaC[] = tecnologias;

    if (!data || data.length === 0) return <div>No data available</div>;

    return (
        <>
            {data.map((tecnologia, index) => (
                <CardT
                    key={index}
                    title={tecnologia.title}
                    // image={tecnologia.image}
                    description={tecnologia.description}
                    rating={tecnologia.rating}                />
            ))}
        </>
    );
}
