import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

import './style.css';

export default function Banner({ isSearched }) {
    const [theme] = useTheme();

    return(
        <section 
            className="banner flex-evelyn-x p-16"
            style={{ backgroundColor: theme.bgPaper, display: isSearched ? 'none' : 'flex' }}
        >
            <h2
                style={{ color: theme.textColor }}
                className="title-big banner__title"
            >Stalk people on <br/> github!</h2>
            <img
                className="banner__img"
                src="https://github.com/GabrielWolf-Dev/dev-book/blob/main/assets/octocat.png?raw=true"
                alt="Octocat illustration in the GitHub mascot"
            />
        </section>
    );
}