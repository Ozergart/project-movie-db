import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {IGenre} from "../interfaces";
import {stateType} from "../types";
import {themeService} from "../services";

interface IProps extends PropsWithChildren {

}

// const Context = createContext<{setAllGenres:React.Dispatch<React.SetStateAction<IGenre[]>>}>(null);
const Context = createContext<{
    setAllGenres: stateType<IGenre[]>,
    allGenres: IGenre[],
    genresWith: string[],
    genresWithout: string[]
    setGenresWith: stateType<string[]>,
    setGenresWithout: stateType<string[]>
    setDarkTheme: stateType<boolean>
    darkTheme: boolean
    lang: string
    setLang: stateType<string>
}>(null);
const ContextProvider: FC<IProps> = ({children}) => {
    const [allGenres, setAllGenres] = useState<IGenre[]>([])
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const [genresWith, setGenresWith] = useState<string[]>([]);
    const [genresWithout, setGenresWithout] = useState<string[]>([]);
    const [lang, setLang] = useState<string>('uk')

    return (
        <Context.Provider value={{
            setAllGenres,
            allGenres,
            genresWith,
            genresWithout,
            setGenresWith,
            setGenresWithout,
            setDarkTheme,
            darkTheme,
            lang,
            setLang
        }}>
            {children}
        </Context.Provider>
    );
};
export {
    Context,
    ContextProvider
}