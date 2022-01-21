import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { topUsers } from '../../../api/github';

import UserCard from '../UserCard';
import './style.css';

export default function TopUsers({ isSearched }) {
    const [theme] = useTheme();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const datas = await topUsers();
                setUsers(datas);
            } catch(error) { throw new Error(error); }
        })();
    }, []);
    return(
        <>
            <section
                style={{ backgroundColor: theme.bgUsers, display: isSearched ? 'none' : 'block' }}
                className="topusers"
            >
                <h3 style={{ color: theme.textColor }} className="title">Top users</h3>

                <div className="topusers__box-users">
                    {
                        users.map((user) => 
                        <UserCard
                            key={user.id}
                            name={user.login}
                            img={user.avatar_url}
                            gitHub={user.html_url}
                        />)
                    }
                </div>
            </section>
            <div className="box-hide"></div>
        </>
    );
}
