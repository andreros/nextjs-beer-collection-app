'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { BeerSearch } from '@/components/BeerSearch/BeerSearch';
import { CollectionListItem } from '@/components/CollectionListItem/CollectionListItem';
import { ICollectionItem } from '@/models/Collection';
import { getBeerCollectionApi } from '@/services/collectionService';

export type TBeerCollectionListProps = {
    searchParams: {
        [key: string]: string;
    };
};

const BeerCollectionList: React.FC<TBeerCollectionListProps> = ({ searchParams }) => {
    const { data: session } = useSession();
    const [collection, setCollection] = useState<ICollectionItem[]>([]);

    useEffect(() => {
        if (!session?.user?.email) return;

        getBeerCollectionApi({
            email: session.user.email,
            search: searchParams.search
        }).then((response) => {
            setCollection(response.data.collection as ICollectionItem[]);
        });
    }, [session?.user?.email]);

    return (
        <section className="bc-beer-collection-list">
            <h1>My Collection</h1>
            {collection.length > 0 && (
                <>
                    <BeerSearch />
                    <div className="bc-beer-collection-list__list-wrapper">
                        {collection.map((collectionItem) => {
                            return <CollectionListItem key={collectionItem.beer_id} collectionItem={collectionItem} />;
                        })}
                    </div>
                </>
            )}
            {collection.length === 0 && !searchParams?.search && (
                <div className="bc-beer-collection-list__no-beers bc-h3">Unfortunately, there are beers in your collection yet. Please, try adding one from the beers list.</div>
            )}
            {collection.length === 0 && searchParams?.search && searchParams.search.trim() !== '' && (
                <>
                    <BeerSearch />
                    <div className="bc-beer-collection-list__no-beers bc-h3">No beers were found for the given search term.</div>
                </>
            )}
        </section>
    );
};

export default BeerCollectionList;
