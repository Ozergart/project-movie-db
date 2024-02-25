import React from 'react';

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.links}>
                <p>button1</p>
                <p>button1</p>
                <p>button1</p>
                <p>button1</p>
                <p>button1</p>
            </div>
            <img src="" alt="" className={css.logo}/>
            <form action="">
                <input type="text"/>
            </form>
            <input type="checkbox"/>
        </div>
    );
};

export {Header}