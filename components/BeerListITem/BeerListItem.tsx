import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IBeer } from '@/models/Beer';

export type TBeerListItemProps = {
    beer: IBeer;
};

export const BeerListItem: React.FC<TBeerListItemProps> = ({ beer }) => {
    return (
        <section className="bc-beer-list-item" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
            <meta itemProp="identifier" content={`${beer.id}`} />
            <Link itemProp="url" href={`/beers/${beer.id}`}>
                <div className="bc-beer-list-item__image">
                    <Image itemProp="image" src={beer.image_url} alt={beer.name} width={150} height={150} />
                </div>
                <div className="bc-beer-list-item__content">
                    <h1 className="bc-h2" itemProp="name">
                        {beer.name}
                    </h1>
                    <h2 className="bc-beer-list-item__tagline bc-h4" itemProp="slogan">
                        {beer.tagline}
                    </h2>
                    <div className="bc-beer-list-item__description bc-line-clamp-3" itemProp="description">
                        {beer.description}
                    </div>
                </div>
            </Link>
        </section>
    );
};
