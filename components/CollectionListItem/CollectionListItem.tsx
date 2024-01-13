import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ICollectionItem } from '@/models/Collection';

export type TCollectionListItemProps = {
    collectionItem: ICollectionItem;
};

export const CollectionListItem: React.FC<TCollectionListItemProps> = ({ collectionItem }) => {
    return (
        <section className="bc-collection-list-item" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
            <meta itemProp="identifier" content={`${collectionItem.beer_id}`} />
            <Link itemProp="url" href={`/beers/${collectionItem.beer_id}`}>
                <div className="bc-collection-list-item__image">
                    <Image itemProp="image" src={collectionItem.image_url ?? ''} alt={collectionItem.name ?? ''} width={150} height={150} />
                </div>
                <div className="bc-collection-list-item__content">
                    <h1 className="bc-h2" itemProp="name">
                        {collectionItem.name}
                    </h1>
                    <h2 className="bc-collection-list-item__tagline bc-h4" itemProp="slogan">
                        {collectionItem.tagline}
                    </h2>
                    <div className="bc-collection-list-item__description bc-line-clamp-3" itemProp="description">
                        {collectionItem.description}
                    </div>
                </div>
            </Link>
        </section>
    );
};
