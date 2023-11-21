import React, { CSSProperties } from 'react';

import { IBeer } from '@/models/Beer';
import { getBeerApi } from '@/services/beersService';
import { BackButton } from '@/components/BackButton/BackButton';
import { BeerInCollectionBadge } from '@/components/BeerInCollectionBadge/BeerInCollectionBadge';
import { Provider } from '@/components/Provider/Provider';
import { getIsBeerInCollection } from '@/prisma/collection';

export type TBeerDetailsPageProps = {
    params: {
        [key: string]: string;
    };
};

const BeerDetailsPage: React.FC<TBeerDetailsPageProps> = async ({ params }) => {
    let beer: IBeer | null = null;

    const id = Number.parseInt(params.beerId) || 0;
    if (id === 0) return <>Beer not found</>;

    // Async call for getting the beer details from the API
    await getBeerApi({ id })
        .then((result) => {
            beer = result.data[0] || null;
        })
        .catch((error) => {
            console.error('An error occurred while retrieving the beer details. Details: ', error);
        });

    //const isBeerInCollection = await getIsBeerInCollection(sessionStorage.getItem('user-email') ?? '', id);

    // console.log('Beer details page params: ', params);
    // console.log('Beer details: ', beer);

    // await insertCollectionItem();
    // const count = await getBeerCollectionCount('andreros@gmail.com');
    // console.log('getBeerCollectionCount: ', count);

    const rootStyles: CSSProperties = {
        backgroundImage: `url(${beer!.image_url})`
    };

    return (
        <section className="bc-beer-details-page">
            <Provider>
                <div className="bc-beer-details-page__background_image" style={rootStyles} />
                <div className="bc-beer-details-page__header">
                    <div className="bc-beer-details-page__thumbnail">
                        <img src={beer!.image_url} alt={beer!.name} />
                    </div>
                    <div className="bc-beer-details-page__title">
                        <h1>{beer!.name}</h1>
                        <BeerInCollectionBadge />
                    </div>
                </div>
                <BackButton />
                <h2 className="bc-beer-details-page__tagline">{beer!.tagline}</h2>
                <div className="bc-beer-details-page__description">{beer!.description}</div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">Brewer's Tip</div>
                    {beer!.brewers_tips}
                </div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">First brewed in</div>
                    {beer!.first_brewed}
                </div>

                {/** Custom components - Authenticated features */}
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">Notes</div>
                    <textarea placeholder="Write your personal notes here..." />
                </div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">Your rating</div>
                    <input type="range" min="0" max="5" step="1" />
                </div>
                <button className="bc-beer-details-page__add-to-collection" type="button">
                    Add to my collection
                </button>
                {/** Custom components - Authenticated features */}

                <BackButton />
            </Provider>
        </section>
    );
};

export default BeerDetailsPage;
