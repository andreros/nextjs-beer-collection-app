'use client';

import React, { ReactElement } from 'react';
import { SessionProvider } from 'next-auth/react';

export type TProviderProps = {
    children: ReactElement | ReactElement[];
};

export const Provider: React.FC<TProviderProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};
