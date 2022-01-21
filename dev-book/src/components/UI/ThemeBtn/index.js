import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../hooks/useTheme';

import './style.css';

export default function ThemeBtn() {
    const [theme, handleTheme] = useTheme();

    return(
        <button
            onClick={handleTheme}
            style={{ backgroundColor: theme.primary }}
            className="btn-theme"
        >
            <FontAwesomeIcon className="btn-theme__icon" icon={faAdjust} />
        </button>
    );
}