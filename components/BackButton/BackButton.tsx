'use client';

import clsx from 'clsx';
import React from 'react';

export type TBackButtonProps = {
    className?: string;
};

export const BackButton: React.FC<TBackButtonProps> = ({ className }) => {
    const handleClick = () => {
        history.back();
    };

    const rootClasses = clsx('bc-back-button', 'bc-button', 'bc-button--link', className);

    return (
        <button className={rootClasses} type="button" onClick={handleClick}>
            Go Back
        </button>
    );
};
