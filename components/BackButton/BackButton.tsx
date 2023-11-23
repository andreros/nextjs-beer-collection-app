'use client';

import clsx from 'clsx';
import React from 'react';

export type TBackButtonProps = {
    className?: string;
    onClick?: () => void;
};

export const BackButton: React.FC<TBackButtonProps> = ({ className, onClick }) => {
    const handleClick = () => {
        history.back();
        if (onClick) onClick();
    };

    const rootClasses = clsx('bc-back-button', 'bc-button', 'bc-button--link', className);

    return (
        <button data-testid="back-button" className={rootClasses} type="button" onClick={handleClick}>
            Go Back
        </button>
    );
};
