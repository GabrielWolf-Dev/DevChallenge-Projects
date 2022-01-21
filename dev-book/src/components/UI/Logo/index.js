import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';

export default function Logo() {
    const [theme] = useTheme();

    return(
        <Link to="/" className="title-big">
            <span style={{ color: theme.secondary }}>dev</span>
            <span style={{ color: theme.primary }}>Book</span>
        </Link>
    );
}