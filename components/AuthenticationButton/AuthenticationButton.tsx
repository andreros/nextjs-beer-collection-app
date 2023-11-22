'use client';

import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

export const AuthenticationButton: React.FC = () => {
    const { data: session } = useSession();
    const isAuthenticated = !!session?.user?.email;

    const handleClick = () => {
        if (isAuthenticated) signOut();
        else signIn();
    };

    return (
        <button className="bc-authentication-button" type="button" onClick={handleClick}>
            {isAuthenticated ? (
                <>
                    Sign Out <br />
                    {session?.user?.name}
                </>
            ) : (
                <>Sign In</>
            )}
        </button>
    );
};
