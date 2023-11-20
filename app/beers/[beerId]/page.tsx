'use client';

import React from 'react';

import { useParams } from 'next/navigation';

const BeerDetailsPage: React.FC = () => {
    const params = useParams();

    // Route -> /shop/[tag]/[item]
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    console.log(params);

    return <div className="bc-beer-details-page">BEER DETAILS PAGE</div>;
};

export default BeerDetailsPage;
