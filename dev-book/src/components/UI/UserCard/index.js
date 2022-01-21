import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';

import './style.css';

export default function UserCard({
    name,
    img,
    gitHub,
}) {
    const [theme] = useTheme();

    function handleUrl() {
        localStorage.setItem("user", JSON.stringify(name));
    }
    return(
        <aside className="user-card" style={{ backgroundColor: theme.bgCard }}>
            <img className="user-card__img" src={img} alt={name} />

            <main className="user-card__box">
                <h4 className="user-card__name subtitle">{name}</h4>
                <a
                    target="blank"
                    className="user-card__link"
                    href={gitHub}
                >Github Link</a>
                <Link
                    to="/user-page"
                    onClick={handleUrl}
                    style={{ backgroundColor: theme.primary }}
                    className="user-card__user-select"
                >Access</Link>
            </main>
        </aside>
    );
}