import React from 'react';
import type { Metadata } from 'next';

import { Provider } from '@/components/Provider/Provider';
import { getEnvironmentVariables } from '@/tools/tools';

import BeerCollectionList from './list';

// All server side pages are invoked with a `params` and a `searchParams` props.
export type TBeerCollectionPageProps = {
    searchParams: {
        [key: string]: string;
    };
};

const PAGE_TITLE = `${getEnvironmentVariables('applicationName')} - My beer collection`;
const DESCRIPTION = 'Page where you can manage your beer collection.';

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: DESCRIPTION,
    openGraph: {
        title: PAGE_TITLE,
        description: DESCRIPTION
    }
};

const BeerCollectionPage: React.FC<TBeerCollectionPageProps> = ({ searchParams }) => {
    return (
        <div className="bc-beer-collection-page">
            <Provider>
                <BeerCollectionList searchParams={searchParams} />
            </Provider>
        </div>
    );
};

export default BeerCollectionPage;
