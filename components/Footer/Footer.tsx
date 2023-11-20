import { getEnvironmentVariables } from '@/tools/tools';
import React from 'react';

export const Footer: React.FC = () => {
    return <footer className="bc-footer">{getEnvironmentVariables('applicationName')}</footer>;
};
