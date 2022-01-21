import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

import './style.css';

export default function CardLoading() {
    const [theme] = useTheme();
    
    return(
        <aside className="card-loading" style={{ backgroundColor: theme.bgCard }}>
            <div className="card-loading__bg-img"></div>

            <main className="card-loading__content">
                <div className="flex-between-x">
                    <div className="card-loading__bar-desc w-50 h-13px"></div>
                    <div className="card-loading__bar-desc w-35 h-13px"></div>
                </div>

                <div className="card-loading__bar-desc w-90 h-6px"></div>
                <div className="card-loading__bar-desc w-70 h-6px"></div>
            </main>
        </aside>
    );
}