import React, { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { IBeer } from '@/models/Beer';
import { AddRemoveToCollectionButton } from '@/components/AddRemoveToCollectionButton/AddRemoveToCollectionButton';
import { BackButton } from '@/components/BackButton/BackButton';
import { BeerNotesInput } from '@/components/BeerNotesInput/BeerNotesInput';
import { BeerRatingRange } from '@/components/BeerRatingRange/BeerRatingRange';
import { Provider } from '@/components/Provider/Provider';
import { getBeerApi } from '@/services/beersService';
import { getEnvironmentVariables } from '@/tools/tools';

// All server side pages are invoked with a `params` and a `searchParams` props.
export type TBeerDetailsPageProps = {
    params: {
        [key: string]: string;
    };
};

export const generateMetadata = async ({ params }: TBeerDetailsPageProps): Promise<Metadata> => {
    let beer: IBeer | null = null;
    let title = '';
    let description = '';

    const id = Number.parseInt(params.beerId) || 0;
    const beerNotFound: Metadata = {
        title: `${getEnvironmentVariables('applicationName')} - Beer not found`,
        openGraph: {
            title: `${getEnvironmentVariables('applicationName')} - Beer not found`
        }
    };

    if (id === 0) return beerNotFound;

    await getBeerApi({ id })
        .then((result) => {
            beer = (result.data[0] as IBeer) || null;
            title = `${getEnvironmentVariables('applicationName')} - ${beer.name}: ${beer.tagline}`;
            description = beer.description;
        })
        .catch((_error) => {
            return beerNotFound;
        });

    return { title, description, openGraph: { title, description } };
};

const BeerDetailsPage: React.FC<TBeerDetailsPageProps> = async ({ params }) => {
    let beer: IBeer;

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
        <section className="bc-beer-details-page" itemScope itemType="https://schema.org/Product">
            <meta itemProp="identifier" content={`${id}`} />
            <meta itemProp="url" content={`/beers/${id}`} />
            <Provider>
                <div className="bc-beer-details-page__background_image" style={rootStyles} />
                <div className="bc-beer-details-page__header">
                    <div className="bc-beer-details-page__thumbnail">
                        <Image itemProp="image" src={beer.image_url} alt={beer.name} width={100} height={100} />
                    </div>
                    <div className="bc-beer-details-page__title">
                        <h1 itemProp="name">{beer.name}</h1>
                        <AddRemoveToCollectionButton beer={beer} />
                    </div>
                </div>
                <BackButton />
                <h2 className="bc-beer-details-page__tagline" itemProp="slogan">
                    {beer.tagline}
                </h2>
                <div className="bc-beer-details-page__description" itemProp="description">
                    {beer.description}
                </div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">Brewer's Tips</div>
                    {beer.brewers_tips}
                </div>
                <div className="bc-beer-details-page__description">
                    <div className="bc-beer-details-page__description-title">First brewed in</div>
                    {beer.first_brewed}
                </div>

                <BeerNotesInput placeholder="Write your personal notes here..." />
                <BeerRatingRange />

                <BackButton />
            </Provider>
        </section>
    );
};

export default BeerDetailsPage;
