import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../hooks/useTheme';

import Logo from '../Logo';
import './style.css';

export default function Header({ setUser, handleUser, setIsSearched }) {
    const [theme] = useTheme();
    const pathName = document.location.pathname;
    
    function handleNameUser(e){
        e.preventDefault();
        const valueInput =  e.target[0].value;

        setUser(valueInput);
        localStorage.clear();
    }
    return(
        <header style={{ backgroundColor: theme.bgMain }} className="header flex-evelyn-x p-16">
                <Logo />

                <form onSubmit={pathName === '/' ? handleUser : handleNameUser} className="header__box-search">
                    <input
                        onChange={e => e.target.value === '' ? setIsSearched(false) : null}
                        className="header__search-user"
                        style={{
                            backgroundColor: theme.secondary,
                            border: `1px solid ${theme.primary}`
                        }}
                        type="text"
                        required
                        placeholder="Pesquisar..."
                        title="Este campo não deve conter caracteres especiais e espaço, exceto(- e _)"
                        pattern="^([\w\-_])+$"
                    />

                    <button type="submit" className="header__btn-search" style={{ backgroundColor: theme.primary }}>
                        <FontAwesomeIcon
                            icon={faSearch}
                        />
                    </button>
                </form>
        </header>
    );
}