import React from 'react';

import { IBeer } from '@/models/Beer';
import { getBeersApi } from '@/services/beersService';
import { BeerListItem } from '@/components/BeerListITem/BeerListItem';
import { BeerSearch } from '@/components/BeerSearch/BeerSearch';

// All server side pages are invoked with a `params` and a `searchParams` props.
export type TRootPageProps = {
    searchParams: {
        [key: string]: string;
    };
};

const RootPage: React.FC<TRootPageProps> = async ({ searchParams }) => {
    let beers: IBeer[] = [];

    // Async call for getting the beers list from the API
    // passing the search term by which the results list will be filtered.
    await getBeersApi({
        beer_name: searchParams.search
    })
        .then((result) => {
            beers = result.data || [];
        })
        .catch((error) => {
            console.error('An error occurred while retrieving the beers list. Details: ', error);
        });

    return (
        <div className="bc-beers-list-page">
            {beers.length > 0 && (
                <>
                    <BeerSearch />
                    <div className="bc-beers-list-page__list-wrapper">
                        {beers.map((beer: IBeer) => (
                            <BeerListItem key={beer.id} beer={beer} />
                        ))}
                    </div>
                </>
            )}
            {beers.length === 0 && !searchParams?.search && (
                <div className="bc-beers-list-page__no-beers bc-h3">For some awkward reason, there are no beers to be shown :( Maybe someone drank them all...</div>
            )}
            {beers.length === 0 && searchParams?.search && searchParams.search.trim() !== '' && (
                <>
                    <BeerSearch />
                    <div className="bc-beers-list-page__no-beers bc-h3">No beers were found for the given search term.</div>
                </>
            )}
        </div>
    );
};

export default RootPage;
