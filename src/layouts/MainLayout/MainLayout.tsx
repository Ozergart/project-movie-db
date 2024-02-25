import React from 'react';

import css from './MainLayout.module.css'
import {Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}