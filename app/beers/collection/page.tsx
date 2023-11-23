import React from 'react';

import { Provider } from '@/components/Provider/Provider';

import BeerCollectionList from './list';

// All server side pages are invoked with a `params` and a `searchParams` props.
export type TBeerCollectionPageProps = {
    searchParams: {
        [key: string]: string;
    };
};

const BeerCollectionPage: React.FC<TBeerCollectionPageProps> = ({ searchParams }) => (
    <div className="bc-beer-collection-page">
        <Provider>
            <BeerCollectionList searchParams={searchParams} />
        </Provider>
    </div>
);

export default BeerCollectionPage;
