import React, { useState } from "react";
import './Theme.css';

const Themecomponent = () => {
    const [theme, setTheme] = useState('black-theme');

    const toggleTheme = () => {
        const newTheme = theme === 'black-theme' ? 'white-theme' : 'black-theme';
        setTheme(newTheme);
        document.body.className = newTheme;
    };
    return (
        <>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                <i className={`fas ${theme === 'black-theme' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          
        </>
    );
}

export default Themecomponent;
