import React from 'react';

import {Movies} from "../../components";
import {useAppContext} from "../../hooks";

const MoviesPage = () => {
    const {lang} = useAppContext();
    return (
        <div>
            {lang === "uk" ? <Movies/> : null}
        </div>
    );
};
export {MoviesPage}