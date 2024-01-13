import React from 'react';
import type { Metadata } from 'next';

import { getEnvironmentVariables } from '@/tools/tools';

export type TAddNewBeerPageProps = {
    params: {
        [key: string]: string;
    };
};

export const metadata: Metadata = {
    title: `${getEnvironmentVariables('applicationName')} - Add new beer to collection`,
    description: 'Page that allows you to add a new beer to your collection.'
};

const AddNewBeerPage: React.FC = () => {
    return <div className="bc-add-new-beer-page">ADD NEW BEER TO MY COLLECTION PAGE</div>;
};

export default AddNewBeerPage;
