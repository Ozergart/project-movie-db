import React, {FC, PropsWithChildren, useState} from 'react';

import css from './Search.module.css'
import {IEvent, stateType} from "../../types";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
    setSearchTrigger:stateType<boolean>
}

const Search: FC<IProps> = ({setSearchTrigger}) => {

    const {darkTheme} = useAppContext();

    const close = ()=>{
        setSearchTrigger(false)
    }
    const [inputValue, setInputValue] = useState<string>('')

    const saveInput = (e:IEvent)=>{
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const navigate = useNavigate();





    const search = () => {
            navigate(`/movies/?page=1&idsWith=&idsWithout=&queryParam=${inputValue}`);
            setSearchTrigger(false);
    };




    return (

        <div className={darkTheme?css.ContDark: css.Cont}>
            <div className={darkTheme?css.SearchDark: css.Search}>
                <input type="text" onChange={saveInput} className={darkTheme?css.inputDark: css.input} placeholder={"Введіть текст"} id={'input'}/>
                <button onClick={search} disabled={inputValue.length===0} className={darkTheme?css.startDark: css.start}><img width="50" height="50" src="https://img.icons8.com/stickers/100/search.png" alt="search"/></button>
                <div className={css.close} onClick={close}><img src="https://img.icons8.com/papercut/60/delete-sign.png" alt="close"/></div>
            </div>

        </div>
    );
};

export {Search}