'use client';

import React, { createRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const BeerSearch: React.FC = () => {
    const router = useRouter();
    const inputSearchTerm = createRef<HTMLInputElement>();

    /**
     * Search button onClick event handler.
     * @returns
     */
    const handleSearch = () => {
        const url = new URL(window.location.href);

        // if there is no value in the search input, remove it from URL
        if (!inputSearchTerm.current || inputSearchTerm.current.value.trim() === '') {
            url.searchParams.delete('search');
            router.push(url.toString());
            return;
        }

        // if there is a search term in the input field, reload the page to filter results by it
        url.searchParams.set('search', inputSearchTerm.current!.value.trim());
        router.push(url.toString());
        window.location.reload();
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        // initialize the input field with the search term in the page URL
        if (url.searchParams.get('search') && inputSearchTerm.current) inputSearchTerm.current.value = url.searchParams.get('search') || '';
    }, []);

    return (
        <section className="bc-beer-search">
            <input className="bc-beer-search__search-term" type="text" ref={inputSearchTerm} />
            <button className="bc-beer-search__search-button" type="button" onClick={handleSearch}>
                Search
            </button>
        </section>
    );
};
