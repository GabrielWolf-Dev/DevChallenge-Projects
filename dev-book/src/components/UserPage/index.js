import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';
import { repoUser } from '../../api/github';

import Header from '../UI/Header';
import ThemeBtn from '../UI/ThemeBtn';
import './style.css';

export default function UserPage() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [repoData, setRepoData] = useState([]);
    const [theme] = useTheme();

    useEffect(() => {
        (async () => {
            try {
                setRepoData(await repoUser(user))
            } catch(error) { throw new Error(error); }
        })();
    }, [user]);
    return(
        <div style={{ backgroundColor: theme.bgMain, height: '100%',color: theme.textColor }}>
            <Header setUser={setUser} />
            <main className="user-page">
                <h2 className="title" style={{ marginBottom: '24px' }}>Name: {user}</h2>

                <h3 className="subtitle">
                    <FontAwesomeIcon icon={faCaretDown} style={{ marginRight: '8px' }} />
                    Github Stats
                </h3>
                <section className="user-page__useinf" style={{ backgroundColor: theme.bgPaper }}>
                    <img className="user-page__useinf__img" src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true`} alt={`Github Stats ${user}`} />

                    <img className="user-page__useinf__img" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&langs_count=7&theme=tokyonight`} alt={`Github Stats ${user}`} />
                </section>
                
                <h3 className="subtitle" style={{ marginTop: '16px' }}>
                    <FontAwesomeIcon icon={faCaretDown} style={{ marginRight: '8px' }} />
                    Repos
                </h3>
                <section className="user-page__userepos" style={{ backgroundColor: theme.bgPaper }}>
                    {repoData.map(data => 
                        <img
                            className="user-page__userepos__img"
                            key={data.id}
                            src={`https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${data.name} `} 
                            alt={`Repository by ${user}`} 
                        />
                    )}
                </section>
                <ThemeBtn />
            </main>
        </div>
    );
}