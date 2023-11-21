import React, { CSSProperties } from 'react';

import { IBeer } from '@/models/Beer';
import { getBeerApi } from '@/services/beersService';
import { BackButton } from '@/components/BackButton/BackButton';

export type TBeerDetailsPageProps = {
    params: {
        [key: string]: string;
    };
};

const BeerDetailsPage: React.FC<TBeerDetailsPageProps> = async ({ params }) => {
    let beer: IBeer | null = null;

    const id = Number.parseInt(params.beerId) || 0;
    if (id === 0) return <>Beer not found</>;

    // Async call for getting the beers list from the API
    // passing the search term by which the results list will be filtered.
    await getBeerApi({ id })
        .then((result) => {
            console.log(result);
            beer = result.data[0] || null;
        })
        .catch((error) => {
            console.error('An error occurred while retrieving the beer details. Details: ', error);
        });

    //console.log('Beer details page params: ', params);
    //console.log('Beer details: ', beer);

    const rootStyles: CSSProperties = {
        backgroundImage: `url(${beer!.image_url})`
    };

    return (
        <section className="bc-beer-details-page">
            <div className="bc-beer-details-page__background_image" style={rootStyles} />
            <div className="bc-beer-details-page__header">
                <div className="bc-beer-details-page__thumbnail">
                    <img src={beer!.image_url} alt={beer!.name} />
                </div>
                <div className="bc-beer-details-page__title">
                    <h1>{beer!.name}</h1>
                    {/** Authenticated feature */}
                    <h3>[In my collection]</h3>
                    {/** Authenticated feature */}
                </div>
            </div>
            <BackButton />
            <h2 className="bc-beer-details-page__tagline">{beer!.tagline}</h2>
            <div className="bc-beer-details-page__description">{beer!.description}</div>
            <ul className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">Goes well with</div>
                {beer!.food_pairing.map((food: string) => {
                    return (
                        <li key={food} className="bc-beer-details-page__description">
                            - {food}
                        </li>
                    );
                })}
            </ul>
            <div className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">Brewer's Tip</div>
                {beer!.brewers_tips}
            </div>
            <div className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">First brewed in</div>
                {beer!.first_brewed}
            </div>
            <div className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">Sold in</div>
                {beer!.volume.value} {beer!.volume.unit}
            </div>

            {/** Custom components - Authenticated features */}
            <div className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">Notes</div>
                <textarea placeholder="Write your personal notes here..." />
            </div>
            <div className="bc-beer-details-page__description">
                <div className="bc-beer-details-page__description-title">Your rating</div>
                <input type="range" min="0" max="5" value="0" step="1" />
            </div>
            <button className="bc-beer-details-page__add-to-collection" type="button">
                Add to my collection
            </button>
            {/** Custom components - Authenticated features */}

            <BackButton />
        </section>
    );
};

export default BeerDetailsPage;
