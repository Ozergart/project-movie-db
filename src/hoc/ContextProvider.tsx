import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {IGenre} from "../interfaces";
import {stateType} from "../types";
import {SetURLSearchParams, useSearchParams} from "react-router-dom";



interface IProps extends PropsWithChildren{

}
// const Context = createContext<{setAllGenres:React.Dispatch<React.SetStateAction<IGenre[]>>}>(null);
const Context = createContext<{
    setAllGenres:stateType<IGenre[]>,
    allGenres:IGenre[],
    genresWith:string[],
    genresWithout:string[]
    setGenresWith:stateType<string[]>,
    setGenresWithout:stateType<string[]>


}>(null);
const ContextProvider:FC<IProps> = ({children}) => {
    const [allGenres, setAllGenres] = useState<IGenre[]>([])

    const [genresWith, setGenresWith] = useState<string[]>([]);
    const [genresWithout, setGenresWithout] = useState<string[]>([]);



    return (
        <Context.Provider value={{setAllGenres,allGenres,genresWith,genresWithout,setGenresWith,setGenresWithout}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider
}