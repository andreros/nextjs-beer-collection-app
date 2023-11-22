import React from 'react';
import Link from 'next/link';

import { ICollectionItem } from '@/models/Collection';

export type TCollectionListItemProps = {
    collectionItem: ICollectionItem;
};

export const CollectionListItem: React.FC<TCollectionListItemProps> = ({ collectionItem }) => {
    return (
        <section className="bc-collection-list-item">
            <Link href={`/beers/${collectionItem.beer_id}`}>
                <div className="bc-collection-list-item__image">
                    <img src={collectionItem.image_url} alt={collectionItem.name} />
                </div>
            </Link>
            <div className="bc-collection-list-item__content">
                <h1>{collectionItem.name}</h1>
                <h2>{collectionItem.tagline}</h2>
                <div className="bc-line-clamp-2">{collectionItem.description}</div>
            </div>
        </section>
    );
};
