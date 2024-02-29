import React from 'react';

import css from './MainLayout.module.css'
import {Header} from "../../components";
import {Outlet} from "react-router-dom";
import {useAppContext} from "../../hooks";

const MainLayout = () => {
    const {darkTheme} = useAppContext();

    return (
        <div className={darkTheme?css.MainLayoutDark:css.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}