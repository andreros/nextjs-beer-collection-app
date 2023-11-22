import React from 'react';

import { Provider } from '@/components/Provider/Provider';

import BeerCollectionList from './list';

const BeerCollectionPage: React.FC = () => {
    return (
        <div className="bc-beer-collection-page">
            <Provider>
                <BeerCollectionList />
            </Provider>
        </div>
    );
};

export default BeerCollectionPage;
