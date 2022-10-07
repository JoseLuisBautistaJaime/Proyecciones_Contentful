
import { Link } from 'react-router-dom';
import React from 'react';

export const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/promotions">Promotions</Link>
            </li>
            <li>
                <Link to="/helps">Helps</Link>
            </li>
        </ul>
    </nav>
);