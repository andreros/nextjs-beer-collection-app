import React from 'react';
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
                    <img src={beer.image_url} alt={beer.name} />
                </div>
            </Link>
            <div className="bc-beer-list-item__content">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <div className="bc-line-clamp-2">{beer.description}</div>
            </div>
        </section>
    );
};
