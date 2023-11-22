import React, { CSSProperties } from 'react';

import { IBeer } from '@/models/Beer';
import { getBeerApi } from '@/services/beersService';
import { BackButton } from '@/components/BackButton/BackButton';
import { BeerInCollectionBadge } from '@/components/BeerInCollectionBadge/BeerInCollectionBadge';
import { Provider } from '@/components/Provider/Provider';
import { AddRemoveToCollectionButton } from '@/components/AddRemoveToCollectionButton/AddRemoveToCollectionButton';

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
            beer = (result.data[0] as IBeer) || null;
        })
        .catch((error) => {
            console.error('An error occurred while retrieving the beer details. Details: ', error);
        });

    if (!beer) return <section className="bc-beer-details-page">Beer not found :/</section>;

    const rootStyles: CSSProperties = {
        backgroundImage: `url(${beer.image_url})`
    };

    return (
        <section className="bc-beer-details-page">
            <Provider>
                <div className="bc-beer-details-page__background_image" style={rootStyles} />
                <div className="bc-beer-details-page__header">
                    <div className="bc-beer-details-page__thumbnail">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="bc-beer-details-page__title">
                        <h1>{beer.name}</h1>
                        <BeerInCollectionBadge />
                        <AddRemoveToCollectionButton beer={beer} />
                    </div>
                </div>
                <BackButton />
                <h2 className="bc-beer-details-page__tagline">{beer.tagline}</h2>
                <div className="bc-beer-details-page__description">{beer.description}</div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">Brewer's Tips</div>
                    {beer.brewers_tips}
                </div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">First brewed in</div>
                    {beer.first_brewed}
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
                {/** Custom components - Authenticated features */}

                <BackButton />
            </Provider>
        </section>
    );
};

export default BeerDetailsPage;
