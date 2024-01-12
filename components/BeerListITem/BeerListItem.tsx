import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IBeer } from '@/models/Beer';

export type TBeerListItemProps = {
    beer: IBeer;
};

export const BeerListItem: React.FC<TBeerListItemProps> = ({ beer }) => {
    return (
        <section className="bc-beer-list-item">
            <Link href={`/beers/${beer.id}`}>
                <div className="bc-beer-list-item__image">
                    <Image src={beer.image_url} alt={beer.name} layout="fill" objectFit="contain" />
                </div>
                <div className="bc-beer-list-item__content">
                    <h1 className="bc-h2">{beer.name}</h1>
                    <h2 className="bc-beer-list-item__tagline bc-h4">{beer.tagline}</h2>
                    <div className="bc-beer-list-item__description bc-line-clamp-3">{beer.description}</div>
                </div>
            </Link>
        </section>
    );
};
