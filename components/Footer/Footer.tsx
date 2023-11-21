import { getEnvironmentVariables } from '@/tools/tools';
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bc-footer">
            Powered by&nbsp;
            <a href="https://punkapi.com/" target="_blank">
                PunkAPI
            </a>
            !
        </footer>
    );
};
