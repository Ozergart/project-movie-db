import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {IGenre} from "../interfaces";



interface IProps extends PropsWithChildren{

}
// const Context = createContext<{setAllGenres:React.Dispatch<React.SetStateAction<IGenre[]>>}>(null);
const Context = createContext<{setAllGenres:Function,allGenres:IGenre[]}>(null);
const ContextProvider:FC<IProps> = ({children}) => {
    const [allGenres, setAllGenres] = useState<IGenre[]>([])


    return (
        <Context.Provider value={{'setAllGenres':setAllGenres,allGenres}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider
}