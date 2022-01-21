import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

import Banner from '../UI/Banner';
import Header from '../UI/Header';
import ResultSearch from '../UI/ResultSearch';
import ThemeBtn from '../UI/ThemeBtn';
import TopUsers from '../UI/TopUsers';

export default function Home() {
    const [isSearched, setIsSearched] = useState(false);
    const [userInputSearch, setUserInputSearch] = useState('');
    const [theme] = useTheme();

    function handleUser(e) {
        e.preventDefault();

        setUserInputSearch(e.target[0].value);
        setIsSearched(true);
    }
    return(
        <main style={{ backgroundColor: theme.bgMain, height: '100%' }}>
            <Header handleUser={handleUser} setIsSearched={setIsSearched} />
            <Banner isSearched={isSearched} />
            <TopUsers isSearched={isSearched} />
            { isSearched ? <ResultSearch userInputSearch={userInputSearch} /> : null }
            <ThemeBtn />
        </main>
    );
}
