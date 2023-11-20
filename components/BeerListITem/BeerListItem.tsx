import React from 'react';

import { IBeer } from '@/models/Beer';

export type TBeerListItemProps = {
    beer: IBeer;
};

export const BeerListItem: React.FC<TBeerListItemProps> = ({ beer }) => {
    // console.log('Beer: ', beer);

    return (
        <section className="bc-beer-list-item">
            <div className="bc-beer-list-item__image">
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="bc-beer-list-item__content">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <div className="bc-line-clamp-2">{beer.description}</div>
            </div>
        </section>
    );
};
