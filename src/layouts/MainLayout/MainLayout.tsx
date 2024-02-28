import React from 'react';

import css from './MainLayout.module.css'
import {Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div className={css.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}