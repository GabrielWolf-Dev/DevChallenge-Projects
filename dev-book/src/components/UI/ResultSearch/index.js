import React, { useEffect, useState } from 'react';
import { searchUser } from '../../../api/github';
import { useTheme } from '../../../hooks/useTheme';

import CardLoading from '../CardLoading';
import UserCard from '../UserCard';
import './style.css';

export default function ResultSearch({ userInputSearch }) {
    const [theme] = useTheme();
    const [dataSearch, setDataSearch] = useState([]);
    const cardsQuanty = generateArray(8);

    useEffect(() => {
        setDataSearch([]);
        
        setTimeout(async () => {
            try {
                const data = await searchUser(userInputSearch);
                setDataSearch(data.items);
            } catch(error) { throw new Error(error); }
        }, 500);
    }, [userInputSearch]);

    function generateArray(n){
        return Array.from({length: n}, (_, i) => i + 1);
    }
    return(
        <section className="res-search" style={{ color: theme.textColor }}>
            <h2 className="title">Results for {userInputSearch}</h2>

            <main className="res-search__box" style={{ backgroundColor: theme.bgPaper }}>
                {
                    dataSearch.length === 0
                    ?  cardsQuanty.map(card => <CardLoading key={card} />)
                    : dataSearch.map(user => {
                        return(
                            <UserCard
                                key={user.id}
                                name={user.login}
                                img={user.avatar_url}
                                gitHub={user.html_url}
                            />
                        );
                    })
                }
            </main>
        </section>
    );
}
