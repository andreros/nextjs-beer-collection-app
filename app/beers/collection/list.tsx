'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { CollectionListItem } from '@/components/CollectionListItem/CollectionListItem';
import { ICollectionItem } from '@/models/Collection';
import { getBeerCollectionApi } from '@/services/collectionService';

const BeerCollectionList: React.FC = () => {
    const { data: session } = useSession();
    const [collection, setCollection] = useState<ICollectionItem[]>([]);

    useEffect(() => {
        if (!session?.user?.email) return;

        getBeerCollectionApi({ email: session.user.email }).then((response) => {
            setCollection(response.data.collection as ICollectionItem[]);
            console.log('response.data.collection: ', response.data.collection);
        });
    }, [session?.user?.email]);

    return (
        <div className="bc-beer-collection-list">
            {collection.map((collectionItem) => {
                return <CollectionListItem key={collectionItem.beer_id} collectionItem={collectionItem} />;
            })}
        </div>
    );
};

export default BeerCollectionList;
